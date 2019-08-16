import Vue from "vue";
import Vuex from "vuex";
import dashboard from './modules/dashboard';
import users from './modules/users';

//load Vuex
Vue.use(Vuex);

// Create a new store
const store = new Vuex.Store({
  modules: {
    dashboard,
    users
  }
});

export default store;
