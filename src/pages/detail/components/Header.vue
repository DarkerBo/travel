<template>
    <div>
        <div class="header-icon" @click="handleIconClickBack" v-show="showIcon">
            <span class="iconfont header-icon-back">&#xe624;</span>
        </div>
        <div class="header-fixed" v-show="!showIcon" :style="opacityStyle">
            景点详情
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailHeader',
    data () {
        return {
            showIcon: true,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    methods: {
        handleIconClickBack () {
            this.$router.push('/')
        },

        handleScroll () {
            const top = document.documentElement.scrollTop
            if(top > 60){
                let opacity = top / 140
                opacity = opacity > 1 ? 1:opacity
                this.opacityStyle = { opacity }
                this.showIcon = false
            }else{
                this.showIcon = true
            }
        }
    },

    mounted () {
        window.addEventListener('scroll',this.handleScroll)
    },

    unmounted () {
        window.removeEventListener('scroll',this.handleScroll)
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

    .header-icon
        position: absolute;
        top: 15px;
        left: 15px;
        height: 30px;
        line-height: 30px;
        width: 30px;
        border-radius: 50px;
        background-color: rgba(0,0,0,0.8)
        text-align: center;
        .header-icon-back
            color: #fff;
    .header-fixed
        z-index: 2;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 43px;
        line-height: 43px;
        color: #fff;
        text-align: center;
        background-color: $bgColor;
        font-size: 16px;
        .header-fixed-back
            position: absolute;
            left: 0;
            top: 0;
            width: 32px;
            text-align: center;
            color: #fff;
</style>