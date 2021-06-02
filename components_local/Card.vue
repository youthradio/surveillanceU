<template>
  <div class="purple assistant ba br3 card f5-ns f7 ma2">
    <header>
      <div class="flex justify-between bb items-end pv2">
        <h3 class="purple normal f5-ns f7 ma0 lh-c">
          {{ cardData.University }}
        </h3>
        <h5 class="purple normal ma0 lh-1-15">
          {{ cardData.city_name }}, {{ cardData.state_code }}
        </h5>
      </div>
    </header>
    <div class="ttc bb pv2">
      <h5 class="purple normal di">USES</h5>
      <h3 class="purple normal f5-ns f7 di pl2">
        {{ cardData.Software.join(', ') }}
      </h3>
    </div>
    <blockquote class="ma0 lh-1-2">
      <p class="b">“{{ cardData.Quotes }}”</p>
    </blockquote>
    <h5 class="purple normal pb1 ma0">MAIN CONCERNS</h5>
    <div class="bb bt pv2">
      <h3
        v-for="(t, i) in cardData.tags"
        :key="t"
        class="purple normal f5-ns f7 di ttc"
      >
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
.card {
  max-width: 18em;
  padding: 0.5rem 1.2rem 0.5rem 1.2rem;
}
.lh-c {
  line-height: 1.15;
}
</style>
