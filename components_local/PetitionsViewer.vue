<template>
  <div class="no-selection">
    <div class="flex">
      <div class="white center bg-purple ph3 pv1 ma0 br--top br2 b--purple">
        Select A State
      </div>
    </div>
    <div class="ba br2 pa3 b--purple">
      <div
        v-dragscroll.x="true"
        class="hide-scroll-bar overflow-x-scroll overflow-y-hidden"
      >
        <div class="max-content justify-around">
          <div
            v-for="[stateName] in sorted(dataByState)"
            :key="stateName"
            class="di"
            @click="selectedState = stateName"
          >
            <state-generator
              :state-code="statesCodes[stateName]"
              :state-name="stateName"
              :is-selected="selectedState === stateName"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-wrap items-start justify-center">
        <card
          v-for="petition in petitionsSelection"
          :key="petition.Quotes"
          :card-data="petition"
        />
      </div>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3-array'
import Card from './Card.vue'
import petitionsData from './petitions-data.json'
import StateGenerator from './StateGenerator.vue'

const statesCodes = {
  Alabama: 'AL',
  Alaska: 'AK',
  'American Samoa': 'AS',
  Arizona: 'AZ',
  Arkansas: 'AR',
  California: 'CA',
  Colorado: 'CO',
  Connecticut: 'CT',
  Delaware: 'DE',
  'District of Columbia': 'DC',
  'Federated States Of Micronesia': 'FM',
  Florida: 'FL',
  Georgia: 'GA',
  Guam: 'GU',
  Hawaii: 'HI',
  Idaho: 'ID',
  Illinois: 'IL',
  Indiana: 'IN',
  Iowa: 'IA',
  Kansas: 'KS',
  Kentucky: 'KY',
  Louisiana: 'LA',
  Maine: 'ME',
  'Marshall Islands': 'MH',
  Maryland: 'MD',
  Massachusetts: 'MA',
  Michigan: 'MI',
  Minnesota: 'MN',
  Mississippi: 'MS',
  Missouri: 'MO',
  Montana: 'MT',
  Nebraska: 'NE',
  Nevada: 'NV',
  'New Hampshire': 'NH',
  'New Jersey': 'NJ',
  'New Mexico': 'NM',
  'New York': 'NY',
  'North Carolina': 'NC',
  'North Dakota': 'ND',
  'Northern Mariana Islands': 'MP',
  Ohio: 'OH',
  Oklahoma: 'OK',
  Oregon: 'OR',
  Palau: 'PW',
  Pennsylvania: 'PA',
  'Puerto Rico': 'PR',
  'Rhode Island': 'RI',
  'South Carolina': 'SC',
  'South Dakota': 'SD',
  Tennessee: 'TN',
  Texas: 'TX',
  Utah: 'UT',
  Vermont: 'VT',
  'Virgin Islands': 'VI',
  Virginia: 'VA',
  Washington: 'WA',
  'West Virginia': 'WV',
  Wisconsin: 'WI',
  Wyoming: 'WY',
}
export default {
  components: {
    StateGenerator,
    Card,
  },
  data() {
    return {
      dataByState: d3.group(petitionsData, (d) => d.state_name),
      selectedState: null,
    }
  },
  computed: {
    petitionsSelection() {
      if (this.selectedState) return this.dataByState.get(this.selectedState)
      return []
    },
    statesCodes() {
      return statesCodes
    },
  },
  methods: {
    sorted(obj) {
      return [...obj.entries()].sort((a, b) => (a > b ? 1 : -1))
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~@/assets/css/variables';
</style>
