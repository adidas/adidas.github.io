<template>
  <div class="markdown" v-html="document"></div>
</template>

<script>
import { Converter } from 'showdown';

const HEADER_LEVEL_START = 3;
const converter = new Converter({ extensions: [ 'code-highlight' ] });

converter.setFlavor('github');
converter.setOption('headerLevelStart', HEADER_LEVEL_START);
converter.setOption('openLinksInNewWindow', true);

export default {
  name: 'markdown',
  props: [ 'type', 'src' ],
  data() {
    return {
      document: null
    };
  },
  methods: {
    getContentFromUrl(src) {
      return fetch(src)
        .then((data) => data.text());
    },
    getContentFromText(slots) {
      return slots.default.map(({ text }) => text).join('').trim();
    },
    renderMarkdown(type) {
      let promise;

      switch (type) {
      case 'url':
        promise = this.getContentFromUrl(this.src);
        break;
      case 'text':
      default:
        promise = Promise.resolve(this.getContentFromText(this.$slots));
      }

      promise
      .then((document) => {
        this.document = converter.makeHtml(document);
      })
      .catch(() => {
        this.document = `<h3>Error! Unable to fetch ${ this.src }</h3>`;
      });
    }
  },
  mounted() {
    this.src && this.renderMarkdown(this.type);
  }
};
</script>

<style lang="scss">
  @import '../styles/vars';

  .markdown {
    h1:target:before,
    h2:target:before,
    h3:target:before,
    h4:target:before,
    h5:target:before,
    h6:target:before {
      @media (max-width: $screen-sm) {
        content: '';
        display: inline-block;
        margin-top: 8rem;
      }
    }
  }
</style>
