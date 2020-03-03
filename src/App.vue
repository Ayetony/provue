<template>
  <div class="app-container">
    <!-- header -->
    <mt-header fixed title="京海商城"></mt-header>
        <!-- router 路由 -->
    <transition>
      <router-view></router-view>
    </transition>
    <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item mui-active" to="/home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item" to="/member">
          <span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
          <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link class="mui-tab-item" to="/shopcart">
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">2</span></span>
          <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-item" to="/search">
          <span class="mui-icon mui-icon-search"></span>
          <span class="mui-tab-label">搜索</span>
        </router-link>
    </nav>
    <!-- 内容 -->
  </div>
</template>
<style scoped>
     .app-container {
       padding-top:40px;
       overflow-x: hidden;
     }
     .v-enter,
     .v-leave-to{
       opacity: 0;
       transform: translate(100%);
       position: absolute;
     }
     .v-enter-active,
     .v-leave-active{
       transition: all 0.5s ease;
     }
</style>
