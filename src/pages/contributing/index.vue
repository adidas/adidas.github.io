<template>
  <markdown-page page="contributing"/>
</template>

<script>
import markdownPage from '@/components/markdown-page.vue';

export default {
  layout: 'sidebar',
  mounted() {
    this.$store.dispatch('hideSidebar');
  },
  components: {
    markdownPage
  }
};
</script>
