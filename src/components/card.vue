<template>
  <div class="card tile"
      :class="{
        'tile--large': large
      }">
    <div class="tile__main"
        v-lazy:background-image="image"
        :style="{ backgroundColor }">
      <div class="tile__main--type">{{ $t(type) }}</div>
    </div>
    <div class="tile__footer" v-if="large">
      <div class="tile__footer__group">{{ title }}</div>
      <slot name="large"></slot>
    </div>
    <div class="tile__footer" v-if="!large && footer">
      <div class="tile__footer__group">{{ title }}</div>
      <div class="tile__footer__subheader">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    backgroundColor: {},
    title: {},
    image: {},
    type: {},
    large: {},
    footer: { default: true, type: Boolean }
  }
};
</script>

<style lang="scss">
  @import '../styles/vars';

  .card {
    &.tile {
      border: none !important;
      padding-bottom: 0 !important;
      margin: 0 !important;
      height: 100%;

      &.tile--large {
        height: 100%;
      }
    }
  }
</style>
