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
            loop: true,
            autoplay: 2000
          },
          
          swiperList: [{
              id: '001',
              imgUrl: '//img1.qunarzz.com/vc/19/70/66/8c54d8f3830e0f09cd3f060809.jpg'
          },{
              id: '002',
              imgUrl: '//img1.qunarzz.com/vc/32/0e/3b/e245f95d37fe21d8b870ad87af.jpg'
          },{
              id: '003',
              imgUrl: '//img1.qunarzz.com/vc/34/71/86/e7cbde10e4094dc88bcf351bf0.jpg'
          },{
              id: '004',
              imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg'
          },{
              id: '005',
              imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/de/df09fa61aed2d502.jpg_750x200_67472739.jpg'
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
        padding-bottom: 30.6%;    
        background-color: #eee;
        .swiper-img
            width: 100%;
</style>