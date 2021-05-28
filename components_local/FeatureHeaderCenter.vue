<template>
  <div ref="headerImage" class="relative white">
    <img class="w-100 db" :src="headerData.featureImage" />
    <div
      class="
        absolute
        text-shadow
        flex
        justify-center
        items-center
        tc
        z-1
        w-100
        h-100
        top-0
      "
    >
      <div class="mw7 ph3 center">
        <h1 class="lh-title-1-1 daysans f1-ns f3 mb0 pa0 ttu">
          {{ headerData.title }}
        </h1>
        <h2 class="lh-title-1-1 normal assistant f3-ns f4 ma0 pa0">
          {{ headerData.subheadline }}
        </h2>
        <div class="bb b--white pv1" />
        <h3 class="lh-title-1-1 normal f3-ns f4 solano-gothic">
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
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
@import '~@/css/vars';

.base-overlay::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 45%;
  background-color: rgba(lighten($feature-header-color, 20%), 0.8);
  z-index: 0;
}

.image-caption {
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: -1rem;
  z-index: 1;
  span {
    font-weight: 400;
    font-size: 0.5rem;
    line-height: 1rem;
    font-family: 'Roboto Mono', sans-serif;
    text-align: center;
    color: $blue-button;
  }
}
.text-shadow {
  text-shadow: -1px 1px 2px black;
}
</style>
