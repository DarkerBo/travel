<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of list" v-bind:key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" v-bind:src="item.imgUrl">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    props: {
        list: Array
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

    .title
        line-height: 0.8rem;
        text-indent: 0.2rem;
        background-color: #eee;
    .item-img-wrapper
        background: red
        height: 150px;
        .item-img
            display: block;
            height: 150px;
            width: 375.2px
    .item-info
        flex: 1;
        padding: 0.1rem;
        min-width: 0;
        .item-title
            line-height: 0.38rem;
            font-size: 0.36rem;
            ellipsis()
        .item-desc
            line-height: 0.5rem;
            color: #aaa;
            margin: 0.08rem;
            ellipsis()

</style>