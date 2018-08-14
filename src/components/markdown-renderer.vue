<template>
  <div class="markdown-document" v-html="document"></div>
</template>

<script>
import { Converter } from 'showdown';

const HEADER_LEVEL_START = 3;
const converter = new Converter();

converter.setFlavor('github');
converter.setOption('headerLevelStart', HEADER_LEVEL_START);
converter.setOption('openLinksInNewWindow', true);

export default {
  name: 'markdown-renderer',
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

  .markdown-document {
    h3,
    h4,
    h5,
    h6 {
      border-bottom: 1px solid $primary-silver;
      padding: .2em 0;
    }

    hr {
      border-top: 1px solid $primary-silver;
    }

    table {
      margin: 1em auto;
      width: 100%;

      thead {
        background-color: $primary-lightgray;
      }

      th, td {
        border: 1px solid $primary-silver;
        padding: .2em .5em;
      }
    }

    pre {
      font-size: .8em;
      padding: .75em;
    }
  }
</style>
