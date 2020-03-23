<template>
    <div>
       <mt-swipe :auto="4000">
            <mt-swipe-item  v-for="(img, index) in imgs" :key="index"><img :src="img" :class="{'full': isfull}"/></mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
  props: ['imgs', 'isfull']
}
</script>

<style>
.mint-swipe {
  height: 200px;
}
.mint-swipe-item{
    text-align: center;
}
.mint-swipe-item > img {
  height: 100%;
}
.full{
    width:100%
}

</style>
