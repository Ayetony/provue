/* eslint-disable */
<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item',item.id == 0 ? 'mui-active':'']"
            href="#item1mobile"
            v-for="item in categories"
            :key="item.id"
          >{{ item.title }}</a>
        </div>
      </div>
    </div>
    <ul class="photoList">
      <li v-for="(item,index) in list" :key="index">
        <img v-lazy="item.img_url"/>
        <div class="info">
          <p>{{ item.title }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'
import axios from 'axios'
export default {
  data () {
    return {
      categories: [],
      list: []
    }
  },
  mounted () {
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005
    })
  },
  created () {
    this.getTitles()
    this.getImgsList()
  },
  methods: {
    getTitles () {
      axios
        .get(
          'http://localhost:7300/mock/5e4aa708648f3123f8e6be7e/test/getTitles'
        )
        .then(res => {
          this.categories = res.data.data.message
          // eslint-disable-next-line standard/object-curly-even-spacing
          this.categories.unshift({ title: '全部', id: 0 })
          console.log(this.categories)
        })
        .catch(err => {
          console.error(err)
        })
    },
    getImgsList () {
      axios
        .get(
          'http://localhost:7300/mock/5e4aa708648f3123f8e6be7e/test/getImgsList'
        )
        .then(res => {
          this.list = res.data.data.imgsList
          console.log(res)
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
}
</script>

<style scoped>
* {
  touch-action: pan-y;
}

.photoList>li>img[lazy="loading"]{
   width: 40px;
  height: 300px;
  margin: auto;
}
.photoList>li{
  text-align: center;
  list-style-type: none;
  margin-bottom: 10px;
}
.photoList{
  margin: 0;
  padding: 0;
}
.info{
  background-color:whitesmoke;
  margin-top: -4px;
}

</style>
