<template>
    <div class="goodslist">
        <div class="goodsitem">
           <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/53641901fbc28cbcdb495b17fdf69e46.jpg?thumb=1&w=200&h=200&f=webp&q=90" alt=""/>
           <h1 class="title"> 小米手机 </h1>
           <div class="info">
              <p class="price">
                  <span class="now">￥999</span>
                  <span class="old">￥1980</span>
              </p>
              <p class="sell">
                  <span>热卖中</span>
                  <span>剩下60件</span>
              </p>
           </div>
        </div>
        <div class="goodsitem">
           <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/53641901fbc28cbcdb495b17fdf69e46.jpg?thumb=1&w=200&h=200&f=webp&q=90" alt=""/>
           <h1 class="title"> 小米手机 </h1>
           <div class="info">
              <p class="price">
                  <span class="now">￥999</span>
                  <span class="old">￥1980</span>
              </p>
              <p class="sell">
                  <span>热卖中</span>
                  <span>剩下60件</span>
              </p>
           </div>
        </div>
        <div class="goodsitem">
           <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/53641901fbc28cbcdb495b17fdf69e46.jpg?thumb=1&w=200&h=200&f=webp&q=90" alt=""/>
           <h1 class="title"> 小米手机 </h1>
           <div class="info">
              <p class="price">
                  <span class="now">￥999</span>
                  <span class="old">￥1980</span>
              </p>
              <p class="sell">
                  <span>热卖中</span>
                  <span>剩下60件</span>
              </p>
           </div>
        </div>
        <mt-button type="danger" size="large">加载更多</mt-button>
    </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    getGoodsList () {
    //   API getGoodsList
    }
  }
}
</script>

<style scoped>
   .goodslist{
       display:flex;
       flex-wrap: wrap;
       padding: 3px;
       justify-content: space-between;
       margin-bottom: 100px;
   }
   .goodsitem{
       width: 49%;
       border: 1px solid #ccc;
       margin: 3px 0;
       box-shadow: 0 0 8px #cccccc;
       padding: 2px;
       display: flex;
       flex-direction: column;
       justify-content: space-between;
       min-height: 280px;
   }
   .goodsitem>img{
       width: 100%;
   }
   .goodsitem>.title{
       font-size: 14px;
   }
   .goodsitem>.info{
       background-color: #dddddd;
   }
   .goodsitem>.info{
      padding:1px;
   }
   .price>.old{
      text-decoration: line-through;
      font-size: 12px;
      margin-left: 10px;
   }
   .price>.now{
       color: red;
       font-weight: bold;
       font-size: 15px;
   }
   .sell{
       display: flex;
       justify-content: space-between;
       font-size: 12px;
   }
</style>
