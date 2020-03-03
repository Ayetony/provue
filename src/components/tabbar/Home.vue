<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(img, index) in imgs" :key="index"><img :src="img"/></mt-swipe-item>
        </mt-swipe>
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link  to="/home/newslist">
                <span class="mui-icon mui-icon-extra mui-icon-extra-topic"></span>
                <div class="mui-media-body">News</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="">
                <span class="mui-icon mui-icon-extra mui-icon-extra-share"><span class="mui-badge">5</span></span>
                <div class="mui-media-body">share</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="">
                <span class="mui-icon mui-icon-chatbubble"></span>
                <div class="mui-media-body">Chat</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="">
                <span class="mui-icon mui-icon-paperplane"></span>
                <div class="mui-media-body">paperplane</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="">
                <span class="mui-icon mui-icon-videocam"></span>
                <div class="mui-media-body">video</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="">
                <span class="mui-icon mui-icon-phone"></span>
                <div class="mui-media-body">Phone</div>
          </router-link>
        </li>
      </ul>
    </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
  data () {
    return {
      imgs: []
    }
  },
  created () {
    this.getImg()
  },
  methods: {
    getImg () {
      axios.get('http://localhost:7300/mock/5e4aa708648f3123f8e6be7e/test/test/dataImg?id=1')
        .then(res => {
          console.log(res.data.requestDetail.url)
          this.imgs = res.data.requestDetail.url
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
}
</script>

<style scoped>

.mint-swipe{
       height: 200px;
     }
     .mint-swipe-item>img{
       width: 100%;
       height: 100%;
     }
     .mui-grid-view.mui-grid-9{
       background-color: #ffffff;
       border: none;
     }
     .mui-grid-view.mui-grid-9 .mui-table-view-cell{
       border: none;
     }
</style>
