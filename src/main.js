import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from '@/store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import vuetify from './plugins/vuetify';
import axios from "axios";

Vue.config.productionTip = false

Vue.use(Vuetify);

axios.defaults.baseURL = "http://localhost:8000/api";
axios.defaults.headers.get["Accept"] = "application/json";

Vue.prototype.$http = axios;
const token = localStorage.getItem("token");

if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
