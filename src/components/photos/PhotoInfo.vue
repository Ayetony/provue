<template>
    <div class="photoinfo-container">
        <h3>{{ info.title }}</h3>
        <p class="subtitle">
          <span>发表时间:{{ info.add_time | dataFormat() }}</span>
          <span>点击: {{ info.times }} 次</span>
        </p>
        <hr>
        <div class="content">
            <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
            {{ info.content }}
        </div>
        <!-- 评论组件 -->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>
<script>
import axios from 'axios'
import comment from '../news/comment'

export default {
  data () {
    return {
      id: this.$route.params.id,
      info: {},
      slide1: [
        {
          src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
          msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
          alt: 'picture1',
          title: 'Image Caption 1',
          w: 300,
          h: 200
        },
        {
          src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
          msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
          alt: 'picture2',
          title: 'Image Caption 2',
          w: 1200,
          h: 900
        }
      ]
    }
  },
  created () {
    this.getPhotoInfo()
  },
  components: {
    'comment-box': comment
  },
  methods: {
    getPhotoInfo () {
      axios.get('http://localhost:7300/mock/5e4aa708648f3123f8e6be7e/test/getInfo/:id?id=' + this.id)
        .then(res => {
          this.info = res.data.data
          console.log(res)
        })
        .catch(err => {
          console.error(err)
        })
    },
    handleClose () {
      console.log('close event')
    }
  }
}
</script>
<style scoped>
  .subtitle{
      display: flex;
      justify-content: space-between
  }
  .photoinfo-container{
      padding: 3px;
  }
  .photoinfo-container>h3{
      color: #26A2FF;
      font-size: 15px;
      text-align: center;
  }
  .content{
      font-size: 13px;
      line-height: 20px;
  }

</style>
