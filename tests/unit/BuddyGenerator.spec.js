import { mount, shallowMount } from '@vue/test-utils'
import axios from 'axios';
import _ from 'lodash';
import { teamYml, teamJson } from './constants';
import BuddyGeneratorApp from '@/components/BuddyGenerator.vue';

jest.mock('axios')

function triggerLoad(component) {
  var img = component.find('.buddy-image');
  img.trigger('load');
}

describe('Buddy Generator App', () => {
  let component;

  beforeEach(() => {
    // need to replace mounted due to document.querySelector
    const $options = Object.assign({}, BuddyGeneratorApp, {
      mounted: jest.fn()
    })
    component = mount($options)

    document.querySelector = jest.fn(() => ({
      value: 'Engineering Function',
      addEventListener: jest.fn()
    }))
  })

  test('converts teamYml into json', done => {
    axios.get.mockResolvedValue({
      data: teamYml,
    });

    component.vm.getTeamData()
      .then((teamData) => {
        expect(teamData[0].name).toEqual(teamJson[0].name);
        expect(teamData[1].name).toEqual(teamJson[1].name);
        expect(teamData[2].name).toEqual(teamJson[2].name);
        expect(teamData[3].name).toEqual(teamJson[3].name);
        done();
      })
  });

  test('selects a random person', () => {
    component.vm.teamData = teamJson;

    const randomPerson = component.vm.selectRandomPerson();
    expect(randomPerson).toBeLessThan(teamJson.length);
    expect(randomPerson >= 0).toBeTruthy();
  });

  test('generates teamData and selected person', done => {
    component.vm.getTeamData = jest.fn(() => Promise.resolve(teamJson))

    component.vm.generate()
      .then(() => {
        expect(component.vm.teamData[0].name).toEqual(teamJson[0].name);
        expect(component.vm.teamData[1].name).toEqual(teamJson[1].name);
        expect(component.vm.teamData[2].name).toEqual(teamJson[2].name);
        expect(component.vm.teamData[3].name).toEqual(teamJson[3].name);
        expect(component.vm.selected >= 0).toBeTruthy();
        expect(component.vm.selected).toBeLessThan(teamJson.length);

        component.vm.$nextTick(() => {
          expect(component.vm.$el.querySelector('.selected-buddy .bold').innerHTML).toEqual('Your buddy is');
          done();
        });
      });
  });

  test('calls generate when button clicked', () => {
    component.setMethods({
      generate: jest.fn(),
    });

    component.find('button').trigger('click');

    expect(component.vm.generate).toHaveBeenCalled();
  });

  test('set loading when generating data and when buddy image loads', done => {
    const component = mount(BuddyGeneratorApp);
    component.vm.getTeamData = jest.fn(() => Promise.resolve(teamJson))

    component.vm.generate()
      .then(() => {
        triggerLoad(component);
        expect(component.vm.loading).toBe(false);
        done();
      });
      expect(component.vm.loading).toBe(true);
  });

  test('set loading when buddy image does not change', async () => {
    const component = mount(BuddyGeneratorApp);
    const teamData = _.cloneDeep(teamJson.slice(0,1));
    const prefix = 'https://gitlab.com/gitlab-com/www-gitlab-com/raw/master/source/images/team/';
    const src = prefix + teamData[0].picture;

    expect(teamData.length).toBe(1);
    expect(teamData[0].departments[0]).toBe("Engineering Function");

    component.vm.getTeamData = jest.fn(() => Promise.resolve(teamData));
    component.vm.selectRandomPerson = jest.fn(() => 0);

    await component.vm.generate();
    triggerLoad(component);
    
    expect(component.vm.teamData.length).toBe(1);
    expect(component.vm.teamData[0]).toEqual(teamJson[0]);
    expect(component.vm.loading).toBe(false);
    expect(component.vm.src).toEqual(src);

    await component.vm.generate();
    expect(component.vm.teamData.length).toBe(1);
    expect(component.vm.teamData[0]).toEqual(teamJson[0]);
    expect(component.vm.loading).toBe(false);
    expect(component.vm.src).toEqual(src);
    
  }); 

  describe('computed properties', () => {
    let component;
    beforeEach(() => {
      component = shallowMount(BuddyGeneratorApp);
    });

    test('buddy', () => {
      component.setData({ teamData: teamJson, selected: 0 });
      expect(component.vm.buddy).toEqual(teamJson[0])
    });

    test('src', () => {
      const prefix = 'https://gitlab.com/gitlab-com/www-gitlab-com/raw/master/source/images/team/';
      component.setData({ teamData: teamJson, selected: 1 });
      const { teamData, selected } = component.vm;
      expect(component.vm.src).toBe(prefix + teamData[selected].picture);
    });    
  })
  
});