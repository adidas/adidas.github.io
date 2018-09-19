<template>
  <contribution-page :page="$route.params.document"/>
</template>

<script>
import contributionPage from '@/components/contribution-page.vue';

export default {
  layout: 'sidebar',
  mounted() {
    this.$store.dispatch('hideSidebar');
  },
  components: {
    contributionPage
  }
};
</script>
