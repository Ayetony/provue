import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Search from '@/components/tabbar/Search'
import Member from '@/components/tabbar/Member'
import ShopCart from '@/components/tabbar/ShopCart'
import Home from '@/components/tabbar/Home'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/search', component: Search },
    { path: '/member', component: Member },
    { path: '/shopcart', component: ShopCart }
  ],
  linkActiveClass: 'mui-active'
})
