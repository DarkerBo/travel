<template>
    <div>
        <div class="header">
            <div class="header-left">
                <span class="iconfont">&#xe624;</span>
            </div>
            <div class="header-input">
                <span class="iconfont">&#xe632;</span>
                输入城市/景点/游玩主题
            </div>
            <router-link to="/city">
                <div class="header-right">
                    {{this.stateCity}}
                    <span class="iconfont arrow-icon">&#xe64a;</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'HomeHeader',
    computed: {
        ...mapGetters(['stateCity']),

    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

    .header
        height: .86rem; 
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: $bgColor;
        color: #fff;
        .header-left
            width: .64rem;  
            line-height: .64rem;
            margin-right: .2rem;
            text-align: center;
        .header-input
            line-height: .64rem;
            background-color: #fff;
            border-radius: .1rem;
            flex: 1;
            color: #ccc;
            padding-left: .2rem;
        .header-right
            min-width: 1.78rem;
            line-height: .64rem;
            text-align: center;
            color: #fff;
            .arrow-icon
                margin-right: -.04rem;
                font-size: .24rem;
    
</style>