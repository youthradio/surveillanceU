<template>
  <div v-observe-visibility="visibilityChanged" class="no-selection center">
    <div class="flex">
      <div class="white center bg-purple ph3 pv0 ma0 br--top br2 b--purple">
        Select A State
      </div>
    </div>
    <div class="ba br2 custom-p b--purple">
      <div
        ref="states"
        v-dragscroll.x="{ active: innerWidth > 736 }"
        tabindex="0"
        class="hide-scroll-bar overflow-x-scroll overflow-y-hidden"
        :style="{ cursor: isdragging ? 'move' : 'pointer' }"
        @dragscrollstart="isdragging = true"
        @dragscrollend="isdragging = false"
        @focus="resetTabIndex"
      >
        <div class="flex flex-wrap-ns items-start justify-center-ns">
          <div
            v-for="[stateName] in sorted(dataByState)"
            :key="stateName"
            ref="state"
            class="pa1 flex-shrink-0"
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
    </div>
    <div class="tr f7 black lh-solid pa0 pt1 pb2 tr">
      Source:
      <a
        target="_blank"
        rel="nofollow"
        class="link purple underline underline-hover hover-dark-purple"
        href="https://www.change.org/search?q=proctoring"
        >Change.org
      </a>
    </div>
    <div
      v-if="petitionsSelection.length > 2 || (isMounted && innerWidth < 736)"
      class="flex items-center justify-center mt0"
    >
      <svg
        class="db ph2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="10"
        viewBox="0 0 8 10"
      >
        <path d="M0 5L7.5.67v8.66L0 5z" fill="#5257E6" />
      </svg>
      <span class="purple b f7">DRAG FOR MORE</span>
      <svg
        class="db ph2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="10"
        viewBox="0 0 8 10"
      >
        <path d="M8 5L.5 9.33V.67L8 5z" fill="#5257E6" />
      </svg>
    </div>
    <div
      ref="cards"
      v-dragscroll.x="{ active: innerWidth > 736 }"
      tabindex="-1"
      class="hide-scroll-bar overflow-x-scroll overflow-y-hidden nl2"
      :style="{ cursor: isdragging ? 'move' : 'pointer' }"
      @dragscrollstart="isdragging = true"
      @dragscrollend="isdragging = false"
    >
      <div class="flex items-start justify-start center max-content">
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
      isdragging: true,
      isMounted: false,
      innerWidth: null,
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
  mounted() {
    this.isMounted = true
    this.innerWidth = window.innerWidth
    window.addEventListener(
      'resize',
      () => (this.innerWidth = window.innerWidth)
    )
  },
  methods: {
    visibilityChanged() {
      this.$refs.states.scrollLeft = 0
    },
    resetTabIndex() {
      this.$refs.state.map((s) => (s.tabIndex = 0))
    },
    focusEvent(e) {
      this.$nextTick(() => {
        if (this.isdragging) return
        this.$refs.cards.scrollLeft = e.target.offsetLeft - e.target.scrollWidth
      })
    },
    sorted(obj) {
      return [...obj.entries()].sort((a, b) => (a > b ? 1 : -1))
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~@/assets/css/variables';
.custom-p {
  padding: 1rem 1.2rem 0.6rem 1.2rem;
}
</style>
