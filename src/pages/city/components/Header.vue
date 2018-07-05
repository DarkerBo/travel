<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont header-back">&#xe624;</div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

    .header
        position: relative;
        height: 43px;
        line-height: 43px;
        color: #fff;
        text-align: center;
        background-color: $bgColor;
        font-size: 16px;
        .header-back
            position: absolute;
            left: 0;
            top: 0;
            width: 32px;
            text-align: center;
            color: #fff;

        
</style>