<template>
  <div class="container">
    <div :class="['flex justify-center', verticalMode ? 'flex-column-ns' : '']">
      <a
        :class="['db-ns ph2', verticalMode ? 'ph0-ns' : '']"
        target="_blank"
        aria-label="Share on Facebook"
        rel="nofollow"
        :href="`https://www.facebook.com/sharer/sharer.php?u=${url}&t=${encodeURIComponent(
          title
        )}`"
      >
        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          viewBox="0 0 32 32"
        >
          <path
            d="M29.55 30.55H2c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h27.55c.55 0 1 .45 1 1v27.55c0 .56-.44 1-1 1z"
            stroke="#5257E6"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
          <path
            d="M13.25 12.41h-2.52v3.36h2.52v10.09h4.2V15.78h3.06l.3-3.36h-3.36v-1.4c0-.8.16-1.12.94-1.12h2.43V5.7h-3.2c-3.02 0-4.37 1.33-4.37 3.88v2.83z"
            stroke="#5257E6"
            stroke-miterlimit="10"
          />
        </svg>
      </a>
      <a
        :class="['db-ns ph2', verticalMode ? 'ph0-ns' : '']"
        target="_blank"
        rel="nofollow"
        aria-label="Share on Twitter"
        :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `${title}: ${url} ${tweetMessage}`
        )}`"
      >
        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          viewBox="0 0 33 32"
        >
          <path
            d="M30.3 30.55H2.75c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1H30.3c.55 0 1 .45 1 1v27.55c0 .56-.44 1-1 1z"
            stroke="#5257E6"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
          <path
            d="M27.17 9.18c-.78.35-1.62.58-2.51.69.9-.54 1.59-1.4 1.92-2.42-.84.5-1.78.86-2.77 1.06-.8-.85-1.93-1.38-3.19-1.38-2.41 0-4.37 1.95-4.37 4.37 0 .34.04.67.11.99-3.63-.18-6.85-1.92-9-4.56-.38.65-.59 1.4-.59 2.2 0 1.51.77 2.85 1.94 3.63-.72-.02-1.39-.22-1.98-.55v.06c0 2.12 1.5 3.88 3.5 4.28a4.37 4.37 0 01-1.97.07c.56 1.73 2.17 3 4.08 3.03a8.763 8.763 0 01-5.42 1.87c-.35 0-.7-.02-1.04-.06 1.93 1.24 4.23 1.96 6.69 1.96C20.61 24.42 25 17.77 25 12c0-.19 0-.38-.01-.57.85-.61 1.59-1.38 2.18-2.25z"
            stroke="#5257E6"
            stroke-miterlimit="30"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
      <a
        target="_blank"
        rel="nofollow"
        aria-label="Share via Email"
        :class="['db-ns ph2', verticalMode ? 'ph0-ns' : '']"
        :href="`mailto:info@example.com?&subject=${encodeURIComponent(
          title
        )}&body=${encodeURIComponent(`${description}\n${url}`)}`"
      >
        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          viewBox="0 0 32 32"
        >
          <path
            d="M29.55 30.55H2c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h27.55c.55 0 1 .45 1 1v27.55c0 .56-.44 1-1 1z"
            stroke="#5257E6"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
          <path
            d="M5.71 9.88v11.79c0 .83.67 1.5 1.5 1.5h17.12c.83 0 1.5-.67 1.5-1.5V9.88c0-.83-.67-1.5-1.5-1.5H7.22a1.5 1.5 0 00-1.51 1.5zm10.18 7.31L7.7 9.51h16.18l-7.99 7.68zm-3.92-2.13l-5.13 6.02V10.24l5.13 4.82zm.83.77l3.11 2.91 2.93-2.82 5.22 6.13H7.5l5.3-6.22zm6.85-.69l5.06-4.87v10.81l-5.06-5.94z"
            fill="#5257E6"
          />
        </svg>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tweetMessage: {
      type: String,
      required: true,
    },
    verticalMode: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {
      isMounted: false,
    }
  },
  computed: {
    url() {
      if (process.client && this.isMounted) {
        return window.location.href
      }
      return null
    },
  },
  mounted() {
    this.isMounted = true
  },
}
</script>

<style lang="scss">
.w-content {
  width: fit-content;
}
</style>
