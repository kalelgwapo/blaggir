// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Home from './components/Home.vue'
import PostEntries from './components/PostEntries.vue'
import PostEntry from './components/PostEntry.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

const routes = [
  { path: '/',
    component: Home },
  {
    path: '/post-entries',
    component: PostEntries,
    children: [{
      path: '/entry',
      component: PostEntry
    }]
  }
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// router.redirect({
//   '*': '/Test'
// })

// router.start(App, '#app')
