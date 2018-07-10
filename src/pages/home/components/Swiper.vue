<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="item of list" v-bind:key="item.id">
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
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true,
        autoplay: 2000
      }
    };
  },
  computed: {
      showSwiper () {
          return this.list.length
      }
  },
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
    background-color: #fff;
}

.wrapper 
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 30.6%;
    background-color: #eee;

    .swiper-img 
        width: 100%;
    

</style>