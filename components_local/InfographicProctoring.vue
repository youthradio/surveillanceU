<template>
  <div class="no-selection">
    <div class="db flex-ns justify-center tc">
      <div
        role="tablist"
        aria-label="Proctoring Tools Infographic"
        class="
          flex flex-column flex-row-ns
          purple
          pv0
          ma0
          f7
          f6-ns
          br--top
          bt
          bl
          br
          br2
          b--purple
          pointer
        "
      >
        <div
          v-for="(tab, i) in tabsData"
          :id="`tab-${i}`"
          ref="tab"
          :key="tab.name"
          :class="[
            'ph2',
            i % 2 == 0 ? '' : 'bt bb bt-0-ns bb-0-ns bl-ns br-ns',
            currentTab === i ? 'white bg-purple' : '',
          ]"
          :aria-selected="currentTab === i"
          :aria-controls="`panel-${i}`"
          tabindex="0"
          @click="currentTab = i"
          @keydown.enter="currentTab = i"
          @keydown.space="currentTab = i"
        >
          {{ tab.name }}
        </div>
      </div>
    </div>
    <div
      class="ba br--bottom br2-ns br2 b--purple pa3"
      role="tabpanel"
      tabindex="0"
      :aria-labelledby="`tab-${currentTab}`"
    >
      <img
        loading="lazy"
        class="lazyload center dn-ns db w-100"
        :src="activeTab().images.mobile"
      />
      <img
        loading="lazy"
        class="mw-none db-ns dn w-100"
        :src="activeTab().images.desktop"
      />
    </div>
  </div>
</template>

<script>
const tabsData = [
  {
    name: 'Automated Proctoring',
    images: {
      mobile: 'images/infographic/automated-mobile.svg',
      desktop: 'images/infographic/automated.svg',
    },
  },
  {
    name: 'Live Proctoring',
    images: {
      mobile: 'images/infographic/live-mobile.svg',
      desktop: 'images/infographic/live.svg',
    },
  },
  {
    name: 'Lockdown Browsers',
    images: {
      mobile: 'images/infographic/lockdown-mobile.svg',
      desktop: 'images/infographic/lockdown.svg',
    },
  },
]
export default {
  components: {},
  data() {
    return {
      currentTab: 0,
      options: ['foo', 'bar', 'baz'],
    }
  },
  computed: {
    tabsData() {
      return tabsData
    },
  },
  watch: {
    currentTab() {
      // this.$refs.tab.map((t) => (t.tabIndex = -1))
    },
  },
  methods: {
    activeTab() {
      return this.tabsData[this.currentTab]
    },
    resetTabIndex() {
      this.$refs.state.map((s) => (s.tabIndex = 0))
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~@/assets/css/variables';
</style>
