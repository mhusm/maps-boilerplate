import Vue from 'vue'
import App from './App.vue'
import * as contentful from 'contentful'
import VueRouter from 'vue-router'
import GoogleMaps from './components/google-maps.vue'
import InfoWindow from './components/info-window.vue'
import DetailsPage from './components/details-page.vue'
import AboutPage from './components/about-page.vue'

window.contentfulClient = contentful.createClient({
  accessToken: '64d6a750c7ae5a7c93603911e56166b198ce5ab94be05261848e8a280ba8972c',
  space: '7la5sjify8om'
})

// Register components
Vue.component('google-maps', GoogleMaps);
Vue.component('info-window', InfoWindow);
Vue.component('details-page', DetailsPage);
Vue.component('about-page', AboutPage);

Vue.use(VueRouter);

// 1. Define route components.
// These can be imported from other files

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/map', component: Vue.component("google-maps"),  props: { name: "bikemap" }},
  { path: '/details/:id', component: Vue.component("details-page"),  props: true},
  { path: '/about', component: Vue.component("about-page")},
  // catch all redirect
  { path: '*', redirect: '/map' }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
window.router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  el: '#app',
  render: h => h(App),
  router
})