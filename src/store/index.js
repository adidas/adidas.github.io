import { SET_LANG, TOGGLE_SIDEBAR } from './mutation-types';

export const state = () => ({
  locales: [ 'en', 'es', 'de' ],
  locale: 'en',
  sidebar: false
});

export const getters = {
  getSidebar(state) {
    return state.sidebar;
  }
};

export const actions = {
  toggleSidebar({ commit }) {
    commit(TOGGLE_SIDEBAR);
  }
};

export const mutations = {
  [SET_LANG](state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale;
    }
  },

  [TOGGLE_SIDEBAR](state) {
    state.sidebar = !state.sidebar;
  }
};
