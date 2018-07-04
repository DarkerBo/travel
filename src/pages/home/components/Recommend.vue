<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommondList" v-bind:key="item.id">
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
    data () {
        return {
            recommondList: [{
                id: '001',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_200x200_c118d7da.jpg',
                title: '广州长隆旅游度假区',
                desc: '过山车盛宴 尖叫狂欢'
            },{
                id: '002',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/201307/23/5fb6f106b676770ac8d65eac.jpg_200x200_3ae983f6.jpg',
                title: '广州塔摩天轮',
                desc: '迷人夜景 旋转水晶'
            },{
                id: '003',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/3c/3c514c20a740128b90.water.jpg_200x200_c7102a23.jpg',
                title: '南沙百万葵园',
                desc: '向日葵超大型主题园林的公园'
            },{
                id: '004',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/31/74eabd4dc95afd494d92a5006c9ad4f5.water.jpg_200x200_b27fe752.jpg',
                title: '美林湖温泉',
                desc: '舒适泡温泉 感受大自然的温度'
            },{
                id: '005',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1605/56/568488164697e2f590.img.jpg_200x200_967bd139.jpg',
                title: '越美冰雪大世界',
                desc: '打雪仗滑冰 置身冰雪世界'
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