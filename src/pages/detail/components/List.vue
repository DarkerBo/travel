<template>
    <div>
        <div class="item" v-for="(item,index) of list" :key="index">
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span>
                {{item.title}}
            </div>
            <div v-if="item.children" class="item-children">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailList',
    props: {
        list: Array
    }
}
</script>

<style lang="stylus" scoped>

    .item-title
        line-height: 35px;
        font-size: 16px;
        padding: 0 20px;
        .item-title-icon
            position: relative;
            top: .08rem;
            left: .06rem;
            display: inline-block;
            width: .36rem;
            height: .36rem;
            background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
            margin-right: .1rem;
            background-size: .4rem 3rem;
    .item-children
        padding: 0 15px;

</style>