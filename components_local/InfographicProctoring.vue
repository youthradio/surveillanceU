<template>
  <div class="no-selection">
    <div
      class="
        flex
        purple
        center
        pv0
        ma0
        br--top
        bt
        bl
        br
        br2
        b--purple
        max-content
      "
    >
      <buttton class="ph2 link">Live Proctoring</buttton>
      <buttton class="ph2 bl br link">Lockdown Browsers </buttton>
      <buttton class="ph2 link">Automated Proctoring</buttton>
    </div>
    <div class="ba br2 b--purple pa2">
      <div role="tabpanel">
        <div
          ref="states"
          v-dragscroll.x="true"
          class="hide-scroll-bar overflow-x-scroll overflow-y-hidden"
        >
          <img
            loading="lazy"
            class="lazyload mw-none"
            data-src="images/automatedProctoring.svg"
          />
        </div>
      </div>
      <div role="tabpanel"></div>
      <div role="tabpanel"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
}
</script>
<style lang="scss" scoped>
@import '~@/assets/css/variables';
</style>
