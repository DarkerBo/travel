<template>
    <div>
        <div class="search">
            <input type="text" class="search-input" placeholder="请输入城市名或拼音" v-model="keyword">      
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom" v-for="(item,index) of list" 
                v-bind:key="index" >{{item.name}}</li>
                <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
    name: 'CitySearch',
    data () {
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },

    computed: {
        hasNoData () {
            return !this.list.length
        }
    },

    props: {
        cities: Object
    },

    watch: {
        keyword () {
            if(this.timer){
                clearTimeout(this.timer)
            }

            if(!this.keyword){
                this.list = []
                return
            }

            this.timer = setTimeout(() => {
                const result = []
                for (let i in this.cities){
                    this.cities[i].forEach((value) => {
                        if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){
                            result.push(value)
                        }
                    });
                }
                this.list = result
            },100)
        }
    },

    mounted () {
        this.scroll = new Bscroll(this.$refs.search)
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

    .border-bottom 
    &:before 
        background-color: #ccc;

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
    .search-content
        position: absolute;
        top: 78px;
        right: 0;
        left: 0;
        bottom: 0;
        overflow: hidden;
        z-index: 1;
        background-color: #eee;
        .search-item
            line-height: 31px;
            padding-left: 1px;
            background-color: #fff;
            color: #666;
</style>