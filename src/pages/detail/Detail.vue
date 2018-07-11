<template>
    <div>
        <detail-banner
        :sightName="sightName"
        :bannerImg="bannerImg"
        :gallaryImgs="gallaryImgs"
        ></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :categoryList="categoryList"></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'

export default {
    name: 'Detail',
    data () {
        return {
            sightName: '',
            bannerImg: '',
            gallaryImgs: [],
            categoryList: []
        }
    },
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },

    methods: {
        getDetailInfo () {
            axios.get('/api/detail.json?',{
                params: {
                    id:this.$route.params.id
                }
            }).then(this.handleGetDetailSucc)
        },

        handleGetDetailSucc (res) {
            res = res.data
            if(res.ret && res.data){
                this.sightName = res.data.sightName
                this.bannerImg = res.data.bannerImg
                this.gallaryImgs = res.data.gallaryImgs
                this.categoryList = res.data.categoryList
            }
        }
    },

    mounted () {
        this.getDetailInfo()
    }
}
</script>

<style lang="stylus" scoped>
    .content
        height: 800px;
</style>