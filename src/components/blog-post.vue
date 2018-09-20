<template>
  <div class="publication" :id="id">
    <div class="publication__title" @click="$emit('click')">
      <h4 class="anchor">{{ title }}</h4>
    </div>
    <div class="publication__subtitle" v-if="subtitle">
      <h5>{{ subtitle }}</h5>
    </div>
    <div class="publication__separator"></div>
    <div class="publication__body" v-html="summary"></div>
    <div class="publication__footer" v-if="url.trim()">
      <a class="publication__likes"
          v-if="likes"
          :href="url"
          target="_blank"
          rel="nofollow noreferrer noopener">
        <i class="fa fa-heart-o color--red-80"></i>
        {{ likes }}
      </a>
      <a class="publication__read-more"
          :href="url"
          target="_blank"
          rel="nofollow noreferrer noopener">
        {{ urlLabel }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'id', 'title', 'subtitle', 'summary', 'url', 'urlLabel', 'likes' ]
};
</script>

<style lang="scss">
  @import '../styles/vars';

  .publication {
    background-color: $primary-white;
    color: $primary-black;
    padding: 2em;
    margin-bottom: 2em;

    &:last-child {
      margin-bottom: 0;
    }

    .publication__title {
      position: relative;
    }

    .publication__separator {
      border-bottom: 1px solid $primary-lightgray;
      margin: 0 25%;
      margin-bottom: 1em;
    }

    .publication__footer {
      padding-top: 1em;
      position: relative;

      .publication__likes {
        color: $primary-black;
        position: absolute;
      }

      .publication__read-more {
        text-align: right;
        width: 100%;
        display: inline-block;
      }
    }
  }
</style>
