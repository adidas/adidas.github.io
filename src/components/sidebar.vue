<template>
  <aside class="sidebar">
    <div class="sidebar__main">
      <div class="list-group list-group--vertical">
        <sidebar-list v-for="(item, index) in tree" :key="index" :model="item"/>
      </div>
    </div>
  </aside>
</template>

<script>
import sidebarList from './sidebar-list.vue';

export default {
  name: 'sidebar',
  props: [ 'tree' ],
  components: {
    sidebarList
  }
};
</script>

<style lang="scss">
  @import '../styles/vars';

  .sidebar {
    &__main {
      width: calc(#{$sidebar-width} - #{$sidebar-padding-horizontal * 2});
      position: fixed;

      @media screen and (max-width: $screen-xs-max) {
        width: calc(100% - #{$sidebar-padding-horizontal * 2});
      }

      .list-group .list-group-item {
        width: 100%;
      }
    }
  }
</style>
