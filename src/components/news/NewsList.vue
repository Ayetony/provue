<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="news in newsList" :key="news.id">
        <router-link :to="'/home/newsinfo/' + news.id">
          <img class="mui-media-object mui-pull-left" :src="news.img_url" />
          <div class="mui-media-body">
          <h5>{{ news.topic }}</h5>
            <p class="mui-ellipsis">
              <span>{{ news.publish_at | dataFormat('YYYY-MM-DD HH-mm-ss') }} </span><span>点击:{{ news.times }}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>

import axios from 'axios'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      newsList: []
    }
  },
  created () {
    this.getNewsList()
  },
  methods: {
    getNewsList () {
      axios.get('http://localhost:7300/mock/5e4aa708648f3123f8e6be7e/test/getNewsList')
        .then(res => {
          if (res.status === 200) {
            Toast('成功')
            this.newsList = res.data.data.newsList
          }
        })
        .catch(err => {
          Toast(err)
        })
    }
  }
}
</script>

<style scoped>
   .mui-ellipsis{
     display: flex;
     font-size: 12px;
     color: #226aff;
     justify-content: space-between
    }
</style>
