<template>
    <div class="newsinfo">
        <h3>评论</h3>
        <hr>
        <textarea placeholder="请输入您的评论" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="comment">发表评论</mt-button>
        <div class="cmt-list">
          <div class="cmt-item" v-for="(item, index) in comments" :key="index">
            <div class="cmt-title">
              第{{ index+1 }}楼&nbsp;&nbsp;用户:{{ item.username }}&nbsp;&nbsp;发表时间: {{ item.add_time | dataFormat }}
            </div>
            <div class="cmt-body">
              {{ item.comment }}
            </div>
          </div>

        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      pageIndex: 1,
      comments: [],
      msg: ''
    }
  },
  created () {
    this.getComments()
  },
  methods: {
    getComments () {
      axios.get('http://localhost:7300/mock/5e4aa708648f3123f8e6be7e/test/getNewsInfo/:' + this.id + '&pageIndex=' + this.pageIndex)
        .then(res => {
          this.comments.push(res.data.data)
          console.log(res.data)
        })
        .catch(err => {
          console.error(err)
        })
    },
    getMore () {
      this.pageIndex++
      axios.get('http://localhost:7300/mock/5e4aa708648f3123f8e6be7e/test/getNewsInfo/id?id=' + 2)
        .then(res => {
          this.comments.push(res.data.data)
        })
        .catch(err => {
          console.error(err)
        })
    },
    comment () {
      if (this.msg.trim().length === 0) {
        Toast('评论不能为空')
        return
      }
      var obj = {}
      obj.username = 'unknown'
      obj.add_time = new Date()
      obj.comment = this.msg.trim()
      this.comments.unshift(obj)
    }

  },
  props: ['id']
}
</script>

<style scoped>
  .newsinfo{
    margin-bottom: 60px;
    font-size: 13px;
    padding: 3px 3px;
  }
  .cmt-title{
    background-color: azure;
  }
  .cmt-item{
    font-size: 12px;
    line-height: 20px;
  }
  .cmt-body{
    line-height: 35px;
    text-indent: 3em
   }

</style>
