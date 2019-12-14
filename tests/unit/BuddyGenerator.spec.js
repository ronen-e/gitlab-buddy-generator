import { mount, shallowMount } from '@vue/test-utils'
import axios from 'axios';
import { teamYml, teamJson } from './constants';
import BuddyGeneratorApp from '@/components/BuddyGenerator.vue';

jest.mock('axios')

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
          expect(component.vm.$el.querySelector('.selected-buddy b').innerHTML).toEqual('Your buddy is');
          done();
        });
      });
  });

  // skip until button is inside the component
  test.skip('calls generate when button clicked', () => {
    component.setMethods({
      generate: jest.fn(),
    });

    component.find('button').trigger('click');

    expect(component.vm.generate).toHaveBeenCalled();
  });
});