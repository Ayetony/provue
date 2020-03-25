<template>
  <div class="goodsinfo">
    <transition
      @beforeEnter="beforeEnter"
      @enter="enter"
      @afterEnter="afterEnter"
    >
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
    <!-- //:class="{'ball': ballFlag}" -->
    <div class="mui-card">
      <!--内容区-->
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :imgs="imgs" :isfull="false"></swiper>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">商品名称</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价:
            <del>￥ 2399</del> &nbsp;&nbsp;销售价:
            <span class="now">￥2199</span>
          </p>
          <p>购买数量 <numberbox @getcount="getSelectedCount" :max="max"></numberbox></p>
          <p class="action">
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="ballShow">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <p>商品货号</p>
            <p>库存情况</p>
            <p>上架时间</p>
        </div>
      </div>
      <div class="mui-card-footer">
            <mt-button type="primary" size="large" plain>图文介绍</mt-button>
            <mt-button type="danger" size="large" plain @click="comentOnProduct()">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import swiper from '../subcomponents/swipe'
import numberbox from '../subcomponents/numberbox'
import mui from '../../lib/mui/js/mui.min.js'
export default {
  data () {
    return {
      id: this.$route.params.id,
      imgs: [],
      max: 100,
      goodsinfo: { 'sell_price': 2199, 'name': 'xiaomi' },
      img_src: 'https://img10.360buyimg.com/n5/jfs/t1/96745/12/12241/90115/5e440170Ed390346c/fdd0c25e7cfcbf31.jpg',
      ballFlag: false,
      selectedCount: 1
    }
  },
  created () {
    console.log('product_id', this.$route.params.id)
    this.getImg()
  },
  components: {
    swiper, numberbox
  },
  methods: {
    getImg () {
      axios
        .get(
          'http://localhost:7300/mock/5e4aa708648f3123f8e6be7e/test/test/dataImg?id=' + 1
        )
        .then(res => {
          console.log(res.data.requestDetail.url)
          this.imgs = res.data.requestDetail.url
        })
        .catch(err => {
          console.error(err)
        })
    },
    getGoodsInfo () {
      this.goodsinfo = { 23: 1 }
    },
    comentOnProduct () {
      this.$router.push('/home/goodscomment')
    },
    ballShow () {
      this.ballFlag = !this.ballFlag
      var addgoods = {
        id: this.id,
        count: this.selectedCount,
        sell_price: this.goodsinfo.sell_price,
        img_src: this.img_src,
        selected: true
      }
      // 调用 mutations 中的方法保存购物车的商品信息
      this.$store.commit('addToShopCart', addgoods)
      addgoods.id = 22
      this.$store.commit('addToShopCart', addgoods)
    },
    beforeEnter (el) {
      el.style.transform = 'translate(0, 0)'
    },
    enter (el, done) {
      // eslint-disable-next-line no-unused-expressions
      el.offsetWidth
      const ballPosition = this.$refs.ball.getBoundingClientRect()
      const badgePostion = document.getElementById('badge').getBoundingClientRect()
      let xoffset = badgePostion.left - ballPosition.left
      let yoffset = badgePostion.top - ballPosition.top
      el.style.transform = 'translate(' + xoffset + 'px,' + yoffset + 'px)'
      el.style.transition = 'all 1s cubic-bezier(.64, .30, .94, .76)'
      done()
    },
    afterEnter (el) {
      this.ballFlag = !this.ballFlag
    },
    getSelectedCount (count) {
      this.selectedCount = count
      console.log('父组件', count)
    }
  },
  watch: {
    max: function (newVal, oldVal) {
      mui('.nui-numbox').numbox().setOption('step', newVal)
    },
    immediate: true
  }
}
</script>

<style scoped>
.goodsinfo {
  background-color: #eee;
  overflow: hidden;
  margin-bottom: 100px;
}
.now {
  font-size: 16px;
  font-weight: bold;
  color: red;
}
.action {
    padding-top: 5px;
}
.mui-card-footer{
    display: block;
}
.mui-card-footer>button{
    margin:15px 15px 5px 0;
}
.ball{
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  z-index: 99;
  top: 411px;
  left: 77px;
}
</style>
