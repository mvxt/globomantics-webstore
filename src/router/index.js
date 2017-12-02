import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Cart from '@/pages/Cart'
import Details from '@/pages/Details'

import Index from '@/pages/admin/Index'
import New from '@/pages/admin/New'
import Products from '@/pages/admin/Products'
import Edit from '@/pages/admin/Edit'

Vue.use(Router)

const router = new Router({
  created () {
    console.log(this.$route.params.id)
  },
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, savedPosition) => ({
    if (savedPosition) {
      return savedPosition
    }
  }),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      component: Index,

      children: [
        {
          path: 'edit/:id',
          name: 'Edit',
          props: true,
          component: Edit
        },
        {
          path: 'new',
          name: 'New',
          component: New
        },
        {
          path: '',
          name: 'Products',
          component: Products
        }
      ]
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/details/:id',
      name: 'Details',
      props: true,
      component: Details
    }
  ]
})

export default router
