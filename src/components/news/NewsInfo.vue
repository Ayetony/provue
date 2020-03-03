<template>
    <div>
      <h3 class="title">{{ news.topic }}</h3>
      <br>
      <p class="subtitle">
          <span>表时间:{{ news.publish_at | dataFormat('YYYY-MM-DD HH-mm-ss') }}</span>
          <span>点击次数:{{ news.times }}</span>
      </p>
      <hr>
      <div class="content" v-html="news.content"></div>
      <comment-box></comment-box>
    </div>
</template>
<script>
import axios from 'axios'
import comment from './comment'
export default {
  data () {
    return {
      id: this.$route.params.id,
      news: ''
    }
  },
  created () {
    this.getNewsInfo(this.id)
  },
  components: {
    'comment-box': comment
  },
  methods: {
    getNewsInfo (id) {
      axios.get('http://localhost:7300/mock/5e4aa708648f3123f8e6be7e/test/getNewsInfo/:', id)
        .then(res => {
          this.news = res.data.data
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
}
</script>
<style scoped>
  .title{
      font-size: 13;
      color: red;
      padding: 3px;
  }
  .subtitle{
      color: #26A2FF;
      font-size: 12;
      margin:10px;
      display: flex;
      justify-content: space-between
  }
  .content{
      color: gray;
      font-size: 13px;
      padding: 5px 5px;
  }
</style>
