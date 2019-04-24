import Vue from 'vue';
import Vuex from 'vuex';

// TODO: 每个页面的 store
import home from '@/pages/Home/store';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
  },
  modules: {
    home,
  },
  mutations: {
  },
  actions: {
  },
});

export default store;
