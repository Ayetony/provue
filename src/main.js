// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import moment from 'moment'
import router from './router'
import Vuex from 'vuex'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VuePreview from 'vue-preview'

Vue.config.productionTip = false
Vue.use(VuePreview)
Vue.use(MintUI)
Vue.use(Vuex)
Vue.filter('dataFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})

let shopcart = JSON.parse(localStorage.getItem('shopcart') || '[]')
const store = new Vuex.Store({
  state: {
    shopcart: []
  },
  mutations: {
    addToShopCart (state, goodsinfo) {
      let flag = false
      state.shopcart.some(item => {
        if (item.id === goodsinfo.id) {
          item.count += parseInt(goodsinfo.count)
          flag = true
          return flag
        }
      })
      if (!flag) {
        state.shopcart.push(goodsinfo)
      }
      localStorage.setItem('shopcart', JSON.stringify(state.shopcart))
    },
    delProduct (state, id) {
      let index = 1
      state.shopcart.some(goods => {
        if (goods.id === id) {
          state.shopcart.splice(state.shopcart.length - index, 1)
          return true
        } else {
          index++
        }
      })
    }
  },
  getters: {
    getCount (state) {
      let counter = 0
      state.shopcart.forEach(item => {
        if (item.selected) { counter += item.count }
        console.log(item.selected)
      })
      localStorage.setItem('shopcart', JSON.stringify(state.shopcart))
      return counter
    },
    getTotalPrice (state) {
      let total = 0
      state.shopcart.forEach(item => {
        if (item.selected) { total += item.sell_price * item.count }
      })
      localStorage.setItem('shopcart', JSON.stringify(state.shopcart))
      return total
    }
    // getCounters (state) {
    //   state.shopcart.forEach(item => {
    //     let counter = 0
    //     state.shopcart.some(ele => {
    //       if (ele.id === item.id) {
    //         counter += item.count
    //         return true
    //       }
    //     })
    //   })
    // }
  }
})

if (store.state.shopcart.length === 0) {
  store.state.shopcart = shopcart
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
})
