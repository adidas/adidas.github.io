<template>
  <markdown-page :page="$route.params.document"/>
</template>

<script>
import markdownPage from '@/components/markdown-page.vue';

export default {
  layout: 'sidebar',
  components: {
    markdownPage
  }
};
</script>
