<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item of swiperList" v-bind:key="item.id">
            <img v-bind:src="item.imgUrl" class="swiper-img"/>
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data () {
      return {
          swiperOption: {
            pagination: '.swiper-pagination',
            loop: true
          },
          
          swiperList: [{
              id: '0001',
              imgUrl: '//img1.qunarzz.com/vc/19/70/66/8c54d8f3830e0f09cd3f060809.jpg'
          },{
              id: '0002',
              imgUrl: '//img1.qunarzz.com/vc/32/0e/3b/e245f95d37fe21d8b870ad87af.jpg'
          },{
              id: '0003',
              imgUrl: '//img1.qunarzz.com/vc/34/71/86/e7cbde10e4094dc88bcf351bf0.jpg'
          }]
      }
  }
};
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background-color: #fff;
    .wrapper
        // 处理图片加载完成前后下面元素的移动
        overflow: hidden;
        width: 100%;
        height: 0;
        padding-bottom: 31.25%;    
        background-color: #eee;
        .swiper-img
            width: 100%;
</style>