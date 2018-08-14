<template>
  <aside class="sidebar">
    <div class="sidebar__block">
      <header class="sidebar__header">
        <span class="sidebar__title label">
          {{ $t('views.contributing.sections') }}
        </span>
      </header>
      <div class="sidebar__main">
        <div class="list-group list-group--vertical">
          <sidebar-list v-for="(item, index) in tree" :key="index" :model="item"/>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import Vue from 'vue';
import SidebarList from './sidebar-list.vue';

Vue.component('sidebar-list', SidebarList);

export default {
  name: 'sidebar',
  props: [ 'tree' ]
};
</script>

<style lang="scss">
  @import '../styles/vars';

  .sidebar {
    &__main {
      .list-group {
        font-size: $font-size-normal;
        padding-top: 0 !important;
      }

      .list-group-item {
        padding-bottom: 0 !important;
      }

      > .list-group {
        font-size: $font-size-small;

        > .list-group-item > a,
        > .list-group-item > span{
          font-weight: bold;
        }
      }
    }
  }
</style>
