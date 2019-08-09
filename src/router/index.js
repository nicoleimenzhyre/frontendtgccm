import Vue from 'vue'
import Router from 'vue-router'

import paths from './paths'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: paths
});

// Route guard checks to see if you are logged in, if not reroutes to login
// to is where you are going, matched.some is to find which routes have requiresAuth
export default router;