<template>
  <contribution-page page="contributing"/>
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
