import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)

import Dashboard from './components/Dashboard.vue';
import MoviesList from './components/MoviesList.vue';
import Auth from '@okta/okta-vue'

Vue.use(Auth, {
  issuer: 'https://dev-46148812.okta.com/oauth2/default',
  client_id: '0oa4ascafY26r3YC65d6',
  redirect_uri: 'http://localhost:8080/implicit/callback',
  scope: 'openid profile email'
})

const routes = [
  { path: '/implicit/callback', component: Auth.handleCallback() },
  { path: '/', component: MoviesList },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(Dashboard)
}).$mount('#app')