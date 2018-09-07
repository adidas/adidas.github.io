<template>
  <div class="adidoescode">
    <img class="adidoescode__logo" src="/img/adidoescode.png" alt="adidoescode logo"/>
    <div class="adidoescode__line"></div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../styles/vars';
  @import '../styles/mixins';

  $logo-height-normal: 12em;
  $logo-height-large: 10vw;

  @mixin compute-line-position($logo-height) {
    height: calc(#{ $logo-height } / 3);
    width: calc(#{ $logo-height } * .75);
    top: calc(#{ $logo-height } / 2 + #{ $logo-height } * .05);
    left: calc(-#{ $logo-height } / 2 + #{ $logo-height } * .05);
  }

  .adidoescode {
    right: 10%;
    top: 60%;

    @include center-vertically();

    @media (max-width: $screen-md) {
      margin: 1em 0;
      position: relative;
      float: right;
      transform: none;
      z-index: 2;
    }

    .adidoescode__logo {
      height: $logo-height-normal;

      @media (min-width: $max-width) {
        height: $logo-height-large;
      }
    }

    .adidoescode__line {
      background: $blue-100;
      position: absolute;
      z-index: -1;

      @include compute-line-position($logo-height-normal);

      @media (min-width: $max-width) {
        @include compute-line-position($logo-height-large);
      }
    }
  }
</style>
