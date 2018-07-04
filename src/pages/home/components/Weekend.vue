<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommondList" v-bind:key="item.id">
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
    data () {
        return {
            recommondList: [{
                id: '001',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
                title: '广州必游TOP10',
                desc: '感受现代与传统相融合的广州'
            },{
                id: '002',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1506/fd/08f524fa9455b4.jpg_r_640x214_b37dbb39.jpg',
                title: '签到广州长隆',
                desc: '来广州来长隆，就对了，就够了~'
            },{
                id: '003',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1505/50/07fa9343791682.jpg_r_640x214_c8c3d798.jpg',
                title: '自然户外好去处',
                desc: '快快来到户外，感受花城的魅力'
            },{
                id: '004',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1505/96/c5401993cd3b48.jpg_r_640x214_18948dd3.jpg',
                title: '开启激情逐浪之旅',
                desc: '畅爽一夏从这里开始！'
            }]
        }
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