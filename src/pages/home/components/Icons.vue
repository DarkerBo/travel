<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) of pages" v-bind:key="index">
                <div class="icon" v-for="item of page" v-bind:key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-context" :src="item.imgUrl" >
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>

    </div>
</template>

<script>
export default {
  name: "HomeIcons",
  data() {
    return {
        swiperOption:{
            pagination: '.swiper-pagination'
        }
    }
  },
  props: {
      list: Array
  },
  computed: {
      pages () {
        const pages = []
        this.list.forEach((value,index) => {
            const page = Math.floor(index / 8)
             if(!pages[page]){
                pages[page] = []
            }
                pages[page].push(value)
            })

            return pages
      }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

    .icons >>> .swiper-container
        height: 0;
        width: 100%;
        padding-bottom: 60%;
    .icons >>> .swiper-slide
        display: flex;
        flex-wrap: wrap;
    .icons >>> .swiper-pagination-bullet-active
        background-color: skyblue;
    .icons
        margin-top: 0.1rem;
        .icon 
            position: relative;
            height: 0;
            width: 25%;
            padding-bottom: 25%;
            text-align: center;
            // float: left;
            // overflow: hidden;
            .icon-img 
                position: absolute;
                top: 0;
                right: 0;
                left: 0;
                bottom: 0.44rem;
                box-sizing: border-box;
                padding: 0.1rem;
                .icon-img-context 
                    height: 100%;
            .icon-desc 
                position: absolute;
                right: 0;
                left: 0;
                bottom: 0;
                height: 0.44rem;
                line-height: 0.44rem;
                color: $darkTextColor;
                ellipsis()

</style>