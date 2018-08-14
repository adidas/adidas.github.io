<template>
  <div class="page-container">
    <headerbar/>
    <main @scroll="$Lazyload.lazyLoadHandler()" class="main">
      <nuxt/>
      <footer-links/>
    </main>
  </div>
</template>
