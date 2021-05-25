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
        tabindex="0"
        class="hide-scroll-bar overflow-x-scroll overflow-y-hidden"
        @focus="resetTabIndex"
      >
        <div class="max-content justify-around">
          <div
            v-for="[stateName] in sorted(dataByState)"
            :key="stateName"
            ref="state"
            class="di"
            tabindex="0"
            @click="selectedState = stateName"
            @keydown.enter="selectedState = stateName"
            @keydown.space="selectedState = stateName"
          >
            <state-generator
              :state-code="statesCodes[stateName]"
              :state-name="stateName"
              :is-selected="selectedState === stateName"
            />
          </div>
        </div>
      </div>
      <div
        ref="cards"
        v-dragscroll.x="true"
        tabindex="-1"
        class="
          hide-scroll-bar
          overflow-x-scroll overflow-y-hidden
          flex
          items-start
          justify-start
        "
      >
        <card
          v-for="petition in petitionsSelection"
          :key="petition.Quotes"
          tabindex="0"
          class="flex-shrink-0"
          :card-data="petition"
          @focus.native="focusEvent"
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
  watch: {
    selectedState() {
      if (this.$refs.cards) {
        this.$refs.cards.scrollLeft = 0
        this.$refs.state.map((s) => (s.tabIndex = -1))
        this.$refs.cards.click()
      }
    },
  },
  methods: {
    resetTabIndex() {
      console.log('dsds')
      this.$refs.state.map((s) => (s.tabIndex = 0))
    },
    focusEvent(e) {
      this.$refs.cards.scrollLeft = e.target.offsetLeft - e.target.scrollWidth
    },
    sorted(obj) {
      return [...obj.entries()].sort((a, b) => (a > b ? 1 : -1))
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~@/assets/css/variables';
</style>
