<template>
    <div>
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-position></home-position>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomePosition from './components/Position'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import { mapGetters } from 'vuex'



export default {
    name: 'Home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomePosition,
        HomeRecommend,
        HomeWeekend
    },
    data () {
        return {
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: [],
            lastCity: ''
        }
    },
    computed: {
        ...mapGetters(['stateCity'])
    },
    methods: {
        getHomeInfo () {
            axios.get('/api/index.json?city=' + this.stateCity).then(this.getHomeInfoSucc)
        },

        getHomeInfoSucc (res) {
            res = res.data
            if(res.ret && res.data){
                this.swiperList = res.data.swiperList
                this.iconList = res.data.iconList
                this.recommendList = res.data.recommendList
                this.weekendList = res.data.weekendList
            }
        }
    },

    mounted () {
        this.lastCity = this.stateCity
        this.getHomeInfo()
    },

    activated () {
        if(this.lastCity !== this.stateCity){
            this.getHomeInfo()
        }
    }
}
</script>

<style scoped>

</style>