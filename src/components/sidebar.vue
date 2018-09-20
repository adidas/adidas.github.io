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
import Vue from 'vue';
import sidebarList from './sidebar-list.vue';

export default {
  name: 'sidebar',
  components: {
    sidebarList
  },
  props: [ 'tree' ]
};
</script>

<style lang="scss">
  .sidebar {
    &__main {
      position: fixed;
    }
  }
</style>
