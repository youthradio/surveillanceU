<template>
  <div class="menu-margin-top">
    <header>
      <MenuHeader />
      <feature-header-center :header-data="headerData" />
    </header>
    <main class="mw7 ph3 center">
      <article class="lh-copy">
        <template v-for="section in articleData.intro">
          <div :key="section.title">
            <div class="measure-wide center">
              <AnchoredHeading
                v-if="section.level != 0"
                class="purple mb0"
                :level="section.level"
                >{{ section.title }}</AnchoredHeading
              >
              <div v-html="section.text" />
            </div>
            <component :is="section.block" v-if="section.block !== ''" />
          </div>
        </template>
        <template v-for="(story, i) in articleData.stories">
          <div :key="story.title">
            <div class="flex items-center chapter-space">
              <div class="bb b--purple flex-grow-2" />
              <eye-icon class="ph2" />
              <div class="bb b--purple flex-grow-2" />
            </div>
            <div
              class="
                flex flex-row-ns flex-column-reverse
                items-end-ns
                justify-center
                pb5
              "
            >
              <div class="relative">
                <div class="img-container aspect-1">
                  <img
                    class="db w-100 lazyload"
                    loading="lazy"
                    :data-src="story.image"
                  />
                </div>
                <div class="f7 black absolute lh-solid pt1">
                  <p class="ma0" v-html="story.imageCaption"></p>
                </div>
              </div>
              <h2 class="purple f3 f2-ns ma0-ns mt0 ttu mw6-ns ph3-ns lh-solid">
                {{ romansMap[i] }}
                <br class="dn di-ns" />
                {{ story.title }}
              </h2>
            </div>
            <div class="measure-wide center" v-html="story.text" />
          </div>
        </template>
        <div class="flex items-center chapter-space">
          <div class="bb b--purple flex-grow-2" />
          <eye-icon class="ph2" />
          <div class="bb b--purple flex-grow-2" />
        </div>
        <div class="measure-wide center purple">
          <AnchoredHeading class="purple mb0" level="3"
            >Credits</AnchoredHeading
          >

          <dl
            v-for="credit in articleData.credits.list"
            :key="credit.name"
            class="f6 lh-title mv1"
          >
            <dt class="dib b">{{ credit.title }}:</dt>
            <dd class="dib ml0">{{ credit.names }}</dd>
          </dl>
        </div>
      </article>
      <ShareContainer
        :vertical-mode="false"
        :title="postData.title"
        :description="postData.description"
        :tweet-message="postData.tweetMessage"
        class="mv3"
      />
    </main>
    <FooterContainer />
  </div>
</template>

<script>
import POSTCONFIG from '../post.config'
import CommonUtils from '../mixins/CommonUtils'
import ArticleData from '../data/data.json'
import ShareContainer from '~/components/Custom/ShareContainer'
import FooterContainer from '~/components/Footer/FooterContainer'
import MenuHeader from '~/components/Header/MenuHeader'
import FeatureHeaderCenter from '~/components_local/FeatureHeaderCenter'
import AnchoredHeading from '~/components_local/AnchoredHeading'
import PetitionsViewer from '~/components_local/PetitionsViewer.vue'
import InfographicProctoring from '~/components_local/InfographicProctoring.vue'
import EyeIcon from '~/components_local/EyeIcon'

export default {
  components: {
    ShareContainer,
    FooterContainer,
    MenuHeader,
    FeatureHeaderCenter,
    AnchoredHeading,
    PetitionsViewer,
    InfographicProctoring,
    EyeIcon,
  },
  mixins: [CommonUtils],
  asyncData(ctx) {
    return {
      articleData: ArticleData.content[0],
      postData: POSTCONFIG,
      headerData: {
        featureImage: POSTCONFIG.featureImagePath,
        title: POSTCONFIG.title,
        subheadline: POSTCONFIG.subheadline,
        author: POSTCONFIG.author,
        imageCaption: POSTCONFIG.featureImageCaption,
        publishDate: POSTCONFIG.publishDate,
        location: POSTCONFIG.location,
      },
    }
  },
  data() {
    return {
      romansMap: {
        0: 'I.',
        1: 'II.',
        2: 'III.',
        3: 'IV.',
        4: 'V.',
      },
    }
  },
  computed: {},
  watch: {},
  mounted() {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('paint-layer')
          } else {
            entry.target.classList.remove('paint-layer')
          }
        }
      },
      { threshold: 1.0 }
    )

    this.$el
      .querySelectorAll('.img-container')
      .forEach((e) => observer.observe(e))
  },
  methods: {},
}
</script>

<style lang="scss" scoped></style>
