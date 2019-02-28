<template>
  <div class="toolbar">
    <button class="btn btn-primary btn-square toolbar__sidebar-toggle"
        @click="toggleSidebar()">
      <span class="yarn-icon dark--active"
          :class="{
            'yarn-icon--menu': !sidebarOpen,
            'yarn-icon--close': sidebarOpen
          }">
      </span>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'toolbar',
  computed: mapGetters({
    sidebarOpen: 'getSidebar'
  }),
  methods: mapActions([ 'toggleSidebar' ])
};
</script>

<style lang="scss">
  @import '../styles/vars';

  .toolbar {
    @media (min-width: $screen-sm) {
      .toolbar__sidebar-toggle {
        display: none;
      }
    }
  }
</style>
