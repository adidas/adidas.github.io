<template>
  <div class="error-page">
    <div class="error">
      <h2 class="title">{{ error.message }}</h2>
      <nuxt-link class="error-link" :to="localePath('index')">
        {{ $t('error.backToHome') }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'content',
  props: [ 'error' ]
};
</script>

<style lang="scss">
  @import '../styles/mixins';

  .error-page {
    height: 100%;
    position: relative;
    flex: 1;

    .error {
      @include center-vertically();
      left: 0;
      right: 0;
      text-align: center;
      background: rgba($primary-black, .9);
      padding: 10px 0 20px;

      .title {
        color: $primary-white;
        background: none;
      }
    }
  }
</style>
