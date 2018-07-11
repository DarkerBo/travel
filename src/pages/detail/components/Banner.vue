<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img :src="bannerImg" class="banner-img">
            <div class="banner-info">
                <div class="banner-info-title">
                    {{this.sightName}}
                </div>
                <div class="banner-info-number">
                    <span class="iconfont banner-info-icon">&#xe678;</span>
                    {{this.gallaryImgs.length}}
                </div>
            </div>
        </div>
        <common-gallary 
        :gallaryImgs="gallaryImgs" 
        v-show="showGallary"
        @close="handleGallaryClose">
        </common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'

export default {
    name: 'DetailBanner',
    data () {
        return {          
            showGallary: false
        }   
    },
    methods: {
        handleBannerClick () {
            this.showGallary = true
        },

        handleGallaryClose () {
            this.showGallary = false
        }
    },
    components: {
        CommonGallary
    },

    props: {
        sightName: String,
        bannerImg: String,
        gallaryImgs: Array
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        overflow: hidden;
        height: 0;
        padding-bottom: 55%;
        position: relative;
        .banner-img
            width: 100%;
        .banner-info
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            line-height: 30px;
            color: #fff;
            display: flex;
            background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
            .banner-info-title
                flex: 1;
                padding: 0 20px;
                font-size: 16px;
            .banner-info-number
                height: 16px;
                line-height: 16px;
                border-radius: 10px;
                padding: 0 10px;
                background-color: rgba(0,0,0,0.8)
                font-size: 14px;
                .banner-info-icon
                    font-size: 14px;

</style>