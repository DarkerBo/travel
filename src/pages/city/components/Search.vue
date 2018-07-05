<template>
    <div class="search">
        <input type="text" class="search-input" placeholder="请输入城市名或拼音">      
    </div>
</template>

<script>
export default {
    name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

    .search
        height: 31px;
        padding: 2px;
        background-color: $bgColor;
        .search-input
            width: 100%;
            height: 30px;
            line-height: 30px;
            text-align: center;
            padding: 0 1px;
            box-sizing: border-box;
            border-radius: 5px;
            color: #666;
        
</style>