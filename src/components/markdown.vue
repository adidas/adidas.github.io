<template>
  <vue-showdown class="markdown" :markdown="document" flavor="github"/>
</template>

<script>
export default {
  name: 'markdown',
  props: [ 'type', 'src' ],
  data() {
    return {
      document: ''
    };
  },
  mounted() {
    let promise;

    switch (this.type) {
    case 'url':
      promise = fetch(this.src).then((data) => data.text());
      break;
    case 'local':
    default:
      promise = Promise.resolve(require(`static/data/${ this.src }.md`));
    }

    promise
    .then((document) => {
      this.document = document;
    })
    .catch(() => {
      this.document = `<h3>Error! Unable to fetch ${ this.src }</h3>`;
    });
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
