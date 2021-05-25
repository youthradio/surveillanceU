<template>
  <div class="menu-margin-top">
    <header>
      <MenuHeader />
      <feature-header-center :header-data="headerData" />
    </header>
    <main class="mw8 ph3 center">
      <div class="measure-wide center pv3">
        <petitions-viewer />
      </div>
      <article class="lh-copy">
        <template v-for="section in articleData.intro">
          <div :key="section.title" class="measure-wide center">
            <AnchoredHeading
              v-if="section.level != 0"
              class="purple"
              :level="section.level"
              >{{ section.title }}
            </AnchoredHeading>
            <div v-html="section.text" />
          </div>
        </template>
        <template v-for="(story, i) in articleData.stories">
          <div :key="story.title">
            <div class="center flex-ns items-end justify-center">
              <img
                width="550"
                height="300"
                class="db w-100 lazyload"
                loading="lazy"
                :data-src="story.image"
              />
              <h2 class="purple f3 f2-ns ma0 ttu mw6-ns ph3-ns">
                {{ romansMap[i] }}
                <br class="dn di-ns" />
                {{ story.title }}
              </h2>
            </div>
            <div class="measure-wide center" v-html="story.text" />
          </div>
        </template>
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

export default {
  components: {
    ShareContainer,
    FooterContainer,
    MenuHeader,
    FeatureHeaderCenter,
    AnchoredHeading,
    PetitionsViewer,
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
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped></style>
