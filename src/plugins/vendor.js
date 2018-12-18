import Vue from 'vue';
import VueShowdown from 'vue-showdown';
import showdownHighlight from 'showdown-highlight';

const HEADER_LEVEL_START = 3;

Vue.use(VueShowdown, {
  headerLevelStart: HEADER_LEVEL_START,
  openLinksInNewWindow: true,
  tables: true,
  extensions: [ showdownHighlight ]
});
