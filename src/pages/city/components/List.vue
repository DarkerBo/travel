<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button">广州</div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button" v-for="item of hotCities" v-bind:key="item.id">{{item.name}}</div>
                </div>
            </div>
            <div class="area" v-for="(item,key) of cities" v-bind:key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <ul class="item-list" v-for="innerItem of item" v-bind:key="innerItem.id">
                    <li class="item border-bottom">{{innerItem.name}}</li>
                </ul>
            </div>         
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "CityList",

  props: {
      cities: Object,
      hotCities: Array,
      letter: String
  },

  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },

  watch: {
      letter () {
          if(this.letter){
              const element = this.$refs[this.letter][0]
              this.scroll.scrollToElement(element)
          }
      }
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