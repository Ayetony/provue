<template>
  <div class="shopcart">
            <div class="notice" v-if="shopcart.length == 0">
                <h3>还没有选中商品，请到商城看看！</h3>
            </div>
      <div class="mui-card" v-for="(item,index) in shopcart" :key="index">
        <!--商品列表-->
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
             <mt-switch v-model="item.selected"></mt-switch>
             <img :src="item.img_src">
             <div class="info">
                  <h1>小米 note 16G 小米 note 16G</h1>
                  <P>
                    <span class="price">￥{{ item.sell_price }}</span>
                    <numberbox :selectedCount="item.count"></numberbox>
                    <a href="#" @click.prevent="delProductById(item.id)">删除</a>
                  </p>
             </div>
          </div>
        </div>
      </div>
      <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner settlement">
          <div>
            <p>总计(不包含运费)</p>
            <p class="products_settle">已勾选商品 <span>{{ this.$store.getters.getCount }}
              </span> 件， 总价 ￥<span>{{ this.$store.getters.getTotalPrice }}</span></p>
          </div>
           <mt-button type="danger">结算</mt-button>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
import numberbox from '../subcomponents/shop_numbox'

export default {
  data () {
    return {
      shopcart: this.$store.state.shopcart
    }
  },
  components: {
    numberbox
  },
  methods: {
    getGoodsList () {
      let idArr = []
      this.$store.state.shopcart.forEach(element => {
        idArr.push(element.id)
      })
    },
    delProductById (id) {
      this.$store.commit('delProduct', id)
    }
  }

}
</script>

<style scoped>
  .shopcart{
    background-color: #eee;
    overflow: hidden;
    margin: 1px;
  }
  .info>h1,p{
    font-size: 13px;
  }
  .price{
    color: red;
    font-weight: bold;
  }
  .shopcart>img{
      width: 60px;
      height: 60px;
  }
  .mui-card-content-inner{
      display: flex;
      align-items: center;
  }
  .info{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  }
  .notice>h3{
    font-size: 14px;
    padding: 5px;
    text-align: center;
  }
  .settlement{
    display: flex;
    justify-content: space-between;
  }
  .products_settle>span{
     color: red;
     font-size: 14px;
     font-weight: bold;
     align-items: center;
  }
</style>
