import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        packages: [],
        searchVal: '',
        selectedItem: {},
    },
    mutations: {
        SET_PACKAGES_TO_STATE: (state, packages) => {
            state.packages = packages
        },
        SET_SEARCH_VAL: (state, value) => {
            state.searchVal = value
        },
        SET_SELECTED_ITEM: (state, value) => {
            state.selectedItem = value
        }
    },
    actions: {
        GET_PACKAGES_FROM_API({commit}) {
            return fetch('https://data.jsdelivr.com/v1/stats/packages')
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    commit('SET_PACKAGES_TO_STATE', data)
                })
                .catch(error => {
                    console.log(error);
                    return error
                })
        },
        GET_SEARCH_VAL({commit}, value) {
            commit('SET_SEARCH_VAL', value)
        },
        GET_SELECTED_ITEM({commit}, value) {
            commit('SET_SELECTED_ITEM', value)
        }
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
    }
});

export default store;
