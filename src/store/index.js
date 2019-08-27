import Vue from "vue";
import Vuex from "vuex";
import dashboard from './modules/dashboard';
import users from './modules/users';
import roles from './modules/roles';
import members from './modules/members';

//load Vuex
Vue.use(Vuex);

// Create a new store
const store = new Vuex.Store({
  modules: {
    dashboard,
    users,
    roles,
    members
  }
});

export default store;
