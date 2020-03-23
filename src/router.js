import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/tabbar/Search'
import Member from '@/components/tabbar/Member'
import ShopCart from '@/components/tabbar/ShopCart'
import Home from '@/components/tabbar/Home'
import NewsList from '@/components/news/NewsList'
import NewsInfo from '@/components/news/NewsInfo'
import PhotoList from '@/components/photos/PhotoList'
import PhotoInfo from '@/components/photos/PhotoInfo'
import GoodsList from '@/components/goods/GoodsList'
import GoodsInfo from '@/components/goods/GoodsInfo'
import GoodsComment from '@/components/goods/GoodsComment'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home/photo', component: PhotoList },
    { path: '/home', component: Home },
    { path: '/search', component: Search },
    { path: '/member', component: Member },
    { path: '/shopcart', component: ShopCart },
    { path: '/home/newslist', component: NewsList },
    { path: '/home/newsinfo/:id', component: NewsInfo },
    { path: '/home/photoinfo/:id', component: PhotoInfo },
    { path: '/home/goodslist', component: GoodsList },
    { path: '/home/goodsinfo/:id', component: GoodsInfo },
    { path: '/home/goodscomment', component: GoodsComment }
  ],
  linkActiveClass: 'mui-active' // router——link 颜色提示
})
