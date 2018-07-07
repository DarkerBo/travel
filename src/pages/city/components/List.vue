<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button">北京</div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button">北京</div>
                    <div class="button">北京</div>
                    <div class="button">北京</div>
                    <div class="button">北京</div>
                    <div class="button">北京</div>
                    <div class="button">北京</div>
                    <div class="button">北京</div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">A</div>
                <ul class="item-list">
                    <li class="item border-bottom">阿拉姆</li>
                    <li class="item border-bottom">阿拉姆</li>
                    <li class="item border-bottom">阿拉姆</li>
                    <li class="item border-bottom">阿拉姆</li>
                    <li class="item border-bottom">阿拉姆</li>
                    <li class="item border-bottom">阿拉姆</li>
                    <li class="item border-bottom">阿拉姆</li>
                    <li class="item border-bottom">阿拉姆</li>
                    <li class="item border-bottom">阿拉姆</li>
                </ul>
            </div>
            <div class="area">
                <div class="title border-topbottom">A</div>
                <ul class="item-list">
                    <li class="item border-bottom">阿拉姆</li>
                    <li class="item border-bottom">阿拉姆</li>
                    <li class="item border-bottom">阿拉姆</li>
                    <li class="item border-bottom">阿拉姆</li>
                    <li class="item border-bottom">阿拉姆</li>
                    <li class="item border-bottom">阿拉姆</li>
                    <li class="item border-bottom">阿拉姆</li>
                    <li class="item border-bottom">阿拉姆</li>
                    <li class="item border-bottom">阿拉姆</li>
                </ul>
            </div>
            <div class="area">
                <div class="title border-topbottom">A</div>
                <ul class="item-list">
                    <li class="item border-bottom">阿拉姆</li>
                    <li class="item border-bottom">阿拉姆</li>
                    <li class="item border-bottom">阿拉姆</li>
                    <li class="item border-bottom">阿拉姆</li>
                    <li class="item border-bottom">阿拉姆</li>
                    <li class="item border-bottom">阿拉姆</li>
                    <li class="item border-bottom">阿拉姆</li>
                    <li class="item border-bottom">阿拉姆</li>
                    <li class="item border-bottom">阿拉姆</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "CityList",
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.border-topbottom 
    &:before 
        background-color: #ccc;
    

    &:after 
        background-color: #ccc;
    


.border-bottom 
    &:before 
        background-color: #ccc;
    


.list 
    overflow: hidden;
    position: fixed;
    top: 78px;
    left: 0;
    right: 0;
    bottom: 0;

    .title 
        line-height: 26px;
        background-color: #eee;
        text-indent: 1em;
        color: #666;
    

    .button-list 
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 4px 7px 2px 2xp;

        .button 
            width: 26%;
            text-align: center;
            padding: 4px 0;
            margin: 7px;
            border: #ccc solid 1px;
            border-radius: 3px;
        
    

    .item-list 
        .item 
            line-height: 38px;
            text-indent: 1em;
        
</style>