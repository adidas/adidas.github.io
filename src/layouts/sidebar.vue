<template>
  <div class="page-container">
    <headerbar/>
    <toolbar/>
    <div class="main page-content">
      <nuxt/>
      <footer-links/>
    </div>
  </div>
</template>

<style lang="scss">
@import '../styles/vars';

.page-content {
  overflow-y: auto;
}

@media (min-width: $screen-md) {
  .toolbar {
    display: none;
  }
}
</style>
