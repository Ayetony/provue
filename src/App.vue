<template>
  <div class="app-container">
    <!-- header -->
    <mt-header fixed title="京海商城">
      <span v-show="flag" @click="backTo()" slot="left">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>
    <!-- router 路由 -->
    <transition>
      <router-view></router-view>
    </transition>
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-lib mui-active" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-lib" to="/member">
        <span class="mui-icon mui-icon-contact">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-lib" to="/shopcart">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">{{ this.$store.getters.getCount }}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-lib" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
    <!-- 内容 -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      flag: true
    }
  },
  created () {
    if (this.$route.path === '/home') {
      this.flag = false
    } else {
      this.flag = true
    }
  },
  methods: {
    backTo () {
      this.$router.go(-1)
    }
  },
  watch: {
    '$route.path': function (newVal) {
      if (newVal === '/home') {
        this.flag = false
      } else { this.flag = true }
    }
  }
}
</script>
<style scoped>
.app-container {
  padding-top: 40px;
  /* overflow-x: hidden; */
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translate(100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.mui-bar-tab .mui-tab-item-lib.mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-item-lib {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}

.mui-bar-tab .mui-tab-item-lib .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-lib .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
