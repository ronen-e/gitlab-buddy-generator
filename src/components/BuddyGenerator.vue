<script>
import axios from 'axios';
import jsyaml from 'js-yaml';

export default {
  data: function () {
    return {
      teamData: [],
      selected: null,
    }
  },
  mounted() {
    document.querySelector('.generate-btn').addEventListener('click', this.generate);
  },
  methods: {
    async getTeamData() {
      const { data } = await axios.get(
      `${'https://cors-anywhere.herokuapp.com/'}https://gitlab-frontend.surge.sh/team.yml`, {
        crossdomain: true,
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
        },
      });
      return jsyaml.load(data);
    },
    selectRandomPerson() {
      return Math.floor(Math.random() * this.teamData.length)
    },
    async generate() {
      this.teamData = await this.getTeamData();
      this.selected = this.selectRandomPerson();

      while(this.teamData[this.selected].departments[0] === document.querySelector('select').value) {
        this.selected = this.selectRandomPerson();
      }
    },
  }
}
</script>

<template>
  <span v-if="selected" class="selected-buddy">
    <b>Your buddy is</b>
    <div class="image-container">
      <img :src="`https://gitlab.com/gitlab-com/www-gitlab-com/raw/master/source/images/team/${this.teamData[this.selected].picture}`" />
    </div>
    <a :href="`https://gitlab.com/${this.teamData[this.selected].gitlab}`" target="_blank">{{ teamData[selected].name }}</a>
  </span>
</template>