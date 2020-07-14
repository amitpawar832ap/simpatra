import Vue from 'vue'
import Router from 'vue-router'
import Cart from '../components/shopping/Cart'
import Home from '../components/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
