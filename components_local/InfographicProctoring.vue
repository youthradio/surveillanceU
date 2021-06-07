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
          :aria-label="tab.name"
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
        :alt="activeTab().altText"
        :src="activeTab().images.mobile"
      />
      <img
        loading="lazy"
        class="mw-none db-ns dn w-100"
        :alt="activeTab().altText"
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
    altText:
      'Install proctoring web extension on Google Chrome or Mozilla Firefox. Log in to your school’s learning management system like Canvas to access your exam. You will be prompted to take an image of yourself and of a school or government ID. A.I. software will verify your identity through the two images you provided. You will also be asked a series of challenge questions to further confirm your identity. Test audio and video quality prior to starting the exam. As you take your exam, all audio and video will be recorded. Both your exam answers and audio/video files will be uploaded to a secure server. An A.I. tool will go through the audio/video file and flag timestamps for  any potential irregularities. All flagged activity will be sent to an exam admin like a professor for review.',
  },
  {
    name: 'Live Proctoring',
    images: {
      mobile: 'images/infographic/live-mobile.svg',
      desktop: 'images/infographic/live.svg',
    },
    altText:
      'Install proctoring web extension on Google Chrome or Mozilla Firefox. Following the provided instructions, verify your identity. Test audio and video quality and accept screen-sharing capabilities. Download and open a separate applet that connects you with your live proctor. Proctor will confirm your identity and go over the exam rules as listed by your institution. Proctor will ask to see your workspace and any permitted test materials. Begin your exam and contact your proctor if you have any technical issues. Alert your proctor before submitting your exam. You will run through a completion process together. Close all windows in order to stop the proctoring software.',
  },
  {
    name: 'Lockdown Browsers',
    images: {
      mobile: 'images/infographic/lockdown-mobile.svg',
      desktop: 'images/infographic/lockdown.svg',
    },
    altText:
      'Install proctoring web extension on Google Chrome or Mozilla Firefox. Close out of all applications manually or let the software do it for you automatically. Log in to your school’s learning management system like Canvas to access your exam. *If required to use a webcam during the exam, you will be guided through a systems check. Your computer will “lock” once you begin your exam. You will not be able to do anything else until you finish. Submit your exam and exit the browser.',
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
