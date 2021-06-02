<template>
  <div ref="headerImage" class="relative white">
    <img
      loading="lzay"
      class="w-100 db lazyload img-fluid"
      :data-srcset="`${headerData.featureImage}@0.5x.jpg 110w,
        ${headerData.featureImage}@0.25x.jpg 552w,
        ${headerData.featureImage}@0.75x.jpg 1651w,
        ${headerData.featureImage}.jpg 2200w
        `"
      :data-src="`${headerData.featureImage}@0.75x.jpg`"
    />
    <div
      :class="[
        'absolute flex justify-center items-center tc z-1 w-100 h-100 top-0',
        isvisible ? '' : 'dn',
      ]"
    >
      <div class="mw7 ph3 ph4-ns center purple bg-white br2">
        <h1 class="lh-title-1-1 daysans f1-ns f3 mb0 pa0 ttu">
          {{ headerData.title }}
        </h1>
        <h2 class="lh-title-1-1 normal assistant f3-ns f5 ma0 pa0">
          {{ headerData.subheadline }}
        </h2>
        <h3 class="lh-title-1-1 normal f3-ns f5 solano-gothic">
          By {{ headerData.author }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headerData: {
      type: Object,
      require: true,
      default: null,
    },
    mode: {
      type: String,
      required: false,
      default: 'base',
    },
  },
  data() {
    return {
      isvisible: false,
    }
  },
  mounted() {
    setTimeout(() => (this.isvisible = true), 500)
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
@import '~@/assets/css/variables';

.img-fluid {
  max-width: 100%;
  object-fit: cover;
  min-height: calc(80vh - 70px);
  object-position: 30% center;
  @media #{$breakpoint-not-small} {
    object-position: center center;
  }
}
</style>
