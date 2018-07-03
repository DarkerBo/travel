<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page,index) of pages" v-bind:key="index">
                <div class="icon" v-for="item of page" v-bind:key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-context" :src="item.imgUrl" >
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>

    </div>
</template>

<script>
export default {
  name: "HomeIcons",
  data() {
    return {
        iconList: [{
            id: '001',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            desc: '景点门票'
        },{
            id: '002',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
            desc: '必游榜单'
        },{
            id: '003',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
            desc: '动植物园'
        },{
            id: '004',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png',
            desc: '公园'
        },{
            id: '005',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png',
            desc: '游船游艇'
        },{
            id: '006',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
            desc: '夏日玩水'
        },{
            id: '007',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
            desc: '名胜古迹'
        },{
            id: '008',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
            desc: '一日游'
        },{
            id: '009',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
            desc: '玩转长隆'
        },{
            id: '010',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
            desc: '全部玩乐'
        }]
    }
  },
  computed: {
      pages () {
        const pages = []
        this.iconList.forEach((value,index) => {
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
        padding-bottom: 50%;
    .icons >>> .swiper-slide
        display: flex;
        flex-wrap: wrap;
    .icon 
        position: relative;
        height: 0;
        width: 25%;
        padding-bottom: 25%;
        text-align: center;
        // float: left;
        overflow: hidden;
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