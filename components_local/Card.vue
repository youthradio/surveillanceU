<template>
  <div class="purple assistant ba br3 measure-narrow pa2 ma2">
    <header>
      <div class="flex justify-between bb items-end pv2">
        <h3 class="purple normal ma0">{{ cardData.University }}</h3>
        <h5 class="purple normal ma0">
          {{ cardData.city_name }}, {{ cardData.state_code }}
        </h5>
      </div>
    </header>
    <div class="ttc bb pv2">
      <h5 class="purple normal di">USES</h5>
      <h3 class="purple normal di pl2">{{ cardData.Software.join(', ') }}</h3>
    </div>
    <blockquote class="ma0">
      <p class="b">“{{ cardData.Quotes }}”</p>
    </blockquote>
    <h5 class="purple normal pb2 ma0">MAIN CONCERNS</h5>
    <div class="bb bt pv2">
      <h3 v-for="(t, i) in cardData.tags" :key="t" class="purple normal di ttc">
        {{ t }} <span aria-hidden> {{ bar(i) }}</span>
      </h3>
    </div>
    <a
      :href="`https://${cardData.link}`"
      class="db purple pv2 link hover-blue"
      target="_blank"
      rel="noopener noreferrer"
      >{{ cardData.link }}</a
    >
  </div>
</template>

<script>
export default {
  props: {
    cardData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    bar(i) {
      return i < this.cardData.tags.length - 1 ? '|' : ''
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/css/variables';
</style>
