<script>
import axios from 'axios';
import jsyaml from 'js-yaml';
import _ from 'lodash';

export default {
  data() {
    return {
      cache: null,
      teamData: [],
			selected: null,
			loading: false,
			value: "Engineering Function",
			options: [
				"Engineering Function",
				"Executive",
				"Sales",
				"Product Management",
				"Finance",
				"Marketing",
				"Board",
				"Advisors",
				"Board Observers",
				"Technical Writing",
				"Customer Success",
				"Vacancy",
				"Alliances",
				"People Ops",
				"Legal",
				"Business Operations",
				"Core Team",
				"Recruiting",
				"Solutions Architects",
				"Sales, Field Ops",
				"Payroll",
				"Sales NQR",
				"finance",
				"Meltano",
				"Infrastructure Department",
				"Development Department",
				"Corporate Marketing",
				"Security Department",
				"Digital Marketing"
			]			
    }
  },

  computed: {
    buddy() {
      return _.get(this, `teamData[${this.selected}]`, {})
		},
		src() {
			return `https://gitlab.com/gitlab-com/www-gitlab-com/raw/master/source/images/team/${_.get(this.buddy, 'picture', '')}`;
		}
  },

	methods: {
    async getTeamData() {
      const { data } = await axios.get(
      `${'https://cors-anywhere.herokuapp.com/'}https://gitlab-frontend.surge.sh/team.yml`, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
        },
      });
      return jsyaml.load(data);
		},

    selectRandomPerson(data = this.teamData) {
      return _.random(0, data.length-1);
		},

    async generate() {
			if (!this.value) return;

			this.loading = true;

      if (!this.cache) {
				try {
					this.teamData = await this.getTeamData();
				} catch (e) {
					this.loading = false;
					return console.error(e);
				}
			}

      const filteredData = this.teamData.filter(buddy => buddy.departments.includes(this.value))
			const buddy = filteredData[this.selectRandomPerson(filteredData)];
			const prevSrc = this.src;

			if (buddy) this.selected = this.teamData.indexOf(buddy);

			if (prevSrc === this.src) this.loading = false;
    },
	},

  watch: {
    teamData() {
      this.cache = true;
    }
  }
}
</script>

<template>
	<main class="container">
		<h1 class="title">Buddy Generator</h1>

		<article aria-roledescription="buddy generator">
			<div>
				<h2 class="sub-title">Department</h2>
				<select v-model="value">
					<option 
						v-for="(option, i) in options" 
						:key="i" 
						:value="option">
						{{option}}
					</option>
				</select>
			</div>
			<p>Please select buddy</p>
			<button
				aria-labelledby="Generate buddy"
				:disabled="loading"
				@click="generate"
				:class="{'loading': loading}"
				class="generate-btn">
				Generate
			</button>
		</article>

		<article aria-roledescription="buddy" v-if="selected !== null" class="selected-buddy">
			<span class="bold">Your buddy is</span>
			<div class="image-container">
				<img v-show="loading" src="@/assets/ajax-loader.gif" alt="loading" aria-busy="true">
				<img class="buddy-image"
					v-show="!loading"
					aria-busy="false"
					@load="loading = false"
					:alt="buddy.name"
					:src="src" />
			</div>
			<a title="buddy link" :href="`https://gitlab.com/${buddy.gitlab}`" target="_blank" rel="noopener">{{ buddy.name }}</a>
		</article>

	</main>
</template>

<style lang="scss" scoped>
.container {
	padding: 0 80px;
	max-width: 500px;
	transition: all 0.25s
}

.title {
	padding: $p16 0;
	margin: 0;
}

.sub-title {
  padding-bottom: $p16;
}

article {
  border: 1px solid #E5E5E5;
  border-radius: 2px;
  padding: $p16;
}

select {
  height: $p32;
  width: 320px;
  max-width: 90%;
  font-size: $p16;
  margin-bottom: $p16;
}

.generate-btn {
	background: #1AAA55;
  margin-top: $p16;
  color: white;
  height: $p32;
  font-size: $p16;
  border: 1px solid #168F48;
	border-radius: 5px;
	cursor: pointer;
}

.selected-buddy {
  margin-top: $p16;

  .image-container {
    display: inline-block;
    width: $p32;
    vertical-align: middle;
    margin: 0 5px;
	}

	img {
		width: 100%;
		border-radius: 50%;
	}
}

.loading {
	background: red;
	cursor: not-allowed;
}

@media only screen and (max-width: 600px) {
  .container {
    padding: 0 20px;
  }
}

</style>