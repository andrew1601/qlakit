import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import SuiVue from 'semantic-ui-vue'

import { routes } from './routes.js';

Vue.use(VueRouter);
Vue.use(SuiVue);

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
