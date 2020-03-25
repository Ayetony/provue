<template>
    <div class="mui-numbox" data-numbox-min="1" data-numbox-max="10">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" class="mui-input-numbox" readonly type="number" :value="selectedCount" @change="countChanged" ref="numberbox"/>
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
  mounted () {
    mui('.mui-numbox').numbox()
  },
  methods: {
    countChanged () {
      this.$emit('selectedCount', this.$refs.numberbox.value)
    }
  },
  props: ['selectedCount']
}
</script>
<style scoped>
  .mui-numbox{
    height: 25px;
    width: 120px;
  }
</style>
