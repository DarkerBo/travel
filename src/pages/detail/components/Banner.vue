<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img src="//img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_600x330_5d562f69.jpg" class="banner-img">
            <div class="banner-info">
                <div class="banner-info-title">
                    金海湖风景区(AAAA景区)
                </div>
                <div class="banner-info-number">
                    <span class="iconfont banner-info-icon">&#xe678;</span>
                    49
                </div>
            </div>
        </div>
        <common-gallary 
        :imglist="imglist" 
        v-show="showGallary"
        @close="handleGallaryClose"></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'

export default {
    name: 'DetailBanner',
    data () {
        return {
            imglist: ['http://img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_r_800x800_ea3a0585.jpg',
                'http://img1.qunarzz.com/sight/p0/1605/33/337228a10035958490.img.jpg_r_800x800_cf338d45.jpg'],
            
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