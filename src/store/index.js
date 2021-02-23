import Vue from 'vue';
import Vuex from 'vuex';
import algoliasearch from 'algoliasearch/lite';

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    packages: [],
    searchVal: '',
    selectedItem: null,
    nbPages: 0,
    hitsPerPage: 10,
  },
  mutations: {
    SET_PACKAGES: (state, packages) => {
      state.packages = packages
    },
    SET_SEARCH_VAL: (state, value) => {
      state.searchVal = value
    },
    SET_SELECTED_ITEM: (state, value) => {
      state.selectedItem = value
    },
    SET_NBPAGES: (state, value) => {
      state.nbPages = value
    }
  },
  actions: {
    FETCH_PACKAGES_FROM_API({ commit, state }, currentPage = 1) {
      const algolia = algoliasearch('OFCNCOG2CU', 'f54e21fa3a2a0160595bb058179bfb1e', {
        protocol: 'https:'
      });
      const index = algolia.initIndex('npm-search');
      index.search(state.searchVal, {
        hitsPerPage: state.hitsPerPage,
        page: currentPage,
      }).then(({ hits, nbPages }) => {
        commit('SET_PACKAGES', hits)
        commit('SET_NBPAGES', nbPages)
      });
    },
  },
  getters: {
    PACKAGES(state) {
      return state.packages
    },
    SEARCH_VAL(state) {
      return state.searchVal
    },
    SELECTED_ITEM(state) {
      return state.selectedItem
    },
    NBPAGES(state) {
      return state.nbPages
    },
  }
});

export default store;
