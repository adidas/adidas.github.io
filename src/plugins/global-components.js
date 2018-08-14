import Vue from 'vue';
import headerbar from '../components/headerbar.vue';
import sidebar from '../components/sidebar.vue';
import toolbar from '../components/toolbar.vue';
import footerLinks from '../components/footer-links.vue';
import markdownRenderer from '../components/markdown-renderer.vue';
import card from '../components/card.vue';

function register(cmp, name) {
  Vue.component(name || cmp.name, cmp);

  return register;
}

register(headerbar)(sidebar)(toolbar)(markdownRenderer)(card)(footerLinks);
