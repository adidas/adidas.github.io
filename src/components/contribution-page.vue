<template>
  <div @scroll="$Lazyload.lazyLoadHandler()" class="content-wrapper">
    <sidebar :tree="sidebarTree"
        :class="{
          'sidebar--mobile-open': sidebarOpen
        }"/>
    <div class="container">
      <div class="document">
        <markdown type="url" :src="src"/>
      </div>
    </div>
  </div>
</template>

<script>
import { config } from '@/services/config';
import { mapGetters } from 'vuex';

export default {
  name: 'contribution-page',
  props: {
    page: {
      default: 'contributing'
    }
  },
  data() {
    const { baseUrl, pages, sidebarTree } = config.contributing;

    return {
      baseUrl,
      sidebarTree,
      src: pages[this.page] ? `${ baseUrl }/${ pages[this.page].file }` : null
    };
  },
  computed: mapGetters({
    sidebarOpen: 'getSidebar'
  })
};
</script>

<style lang="scss">
  @import '../styles/vars';
  @import '../styles/mixins';

  .content-wrapper {
    background: $primary-white;
    display: flex;
    min-height: calc(100% - #{ $footer-height });

    @media (min-width: $max-width) {
      display: block;
    }

    .sidebar {
      height: auto;
      z-index: $sidebar-z-index;

      @media (min-width: $max-width) {
        position: absolute;
        background: transparent;
        border: none;
        margin-left: calc((100% - #{ $max-width }) / 2 - 5em);
      }

      @media (max-width: $screen-md) {
        width: 100%;
        height: 100%;
        position: fixed;
        display: none;

        &.sidebar--mobile-open {
          display: block;
        }
      }
    }

    .container {
      background-color: $primary-white;

      @media (min-width: $max-width) {
        border-left: none;
      }

      @media (max-width: $screen-md) {
        padding-top: 0;
      }
    }
  }
</style>
