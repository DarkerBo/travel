<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of list" v-bind:key="item.id">
                <img class="item-img" v-bind:src="item.imgUrl">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    props: {
        list: Array
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

    .title
        margin-top: 0.001rem;
        line-height: 0.8rem;
        text-indent: 0.2rem;
        background-color: #eee;
    .item
        height: 2.0rem;
        display: flex;
        .item-img
            width: 1.9rem;
            height: 1.9rem;
            padding: 0.1rem;
        .item-info
            flex: 1;
            padding: 0.1rem;
            min-width: 0;
            .item-title
                line-height: 0.58rem;
                font-size: 0.36rem;
                ellipsis()
            .item-desc
                line-height: 0.5rem;
                color: #ccc;
                margin: 0.08rem;
                ellipsis()
            .item-button
                line-height: 0.2rem;
                background-color: #ff9300
                border-radius: 0.06rem;
                padding: 0.2rem;
                color: #fff;

</style>