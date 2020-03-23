<template>
  <div>
    <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="max">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numberbox"/>
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    countChanged () {
      console.log(this.$refs.numberbox.value)
      this.$emit('getcount', parseInt(this.$refs.numberbox.value))
      // 子组件传递给父组件，通过ref引用获取数值，然后通过emit事件发射给父组件与子组件绑定的事件名称
    }
  },
  props: ['max']
}
</script>
