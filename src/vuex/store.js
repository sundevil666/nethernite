import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        packages: [],
        searchVal: '',
    },
    mutations: {
        SET_PACKAGES_TO_STATE: (state, packages) => {
            state.packages = packages
        },
        SET_SEARCH_VAL: (state, value) => {
            state.searchVal = value
        },
    },
    actions: {
        GET_PACKAGES_FROM_API({commit}) {
            return fetch('https://data.jsdelivr.com/v1/stats/packages')
                .then(response => {
                    console.log('1', response);
                    return response.json()
                })
                .then(data => {
                    console.log('2', data);
                    commit('SET_PACKAGES_TO_STATE', data)
                })
                .catch(error => {
                    console.log(error);
                    return error
                })
        },
        GET_SEARCH_VAL({commit}, value) {
            commit('SET_SEARCH_VAL', value)
        }
    },
    getters: {
        PACKAGES(state) {
            return state.packages
        },
        SEARCH_VAL(state) {
            return state.searchVal
        }
    }
});

export default store;
