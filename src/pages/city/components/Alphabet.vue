<template>
    <div>
        <ul  class="list">
            <li class="item"  v-for="item of letters" 
             v-bind:key="item"
             v-bind:ref="item"
             v-on:click="handleLetterClick"
             v-on:touchstart="handleTouchStart"
             v-on:touchmove="handleTouchMove"
             v-on:touchend="handleTouchEnd">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CityAlphabet',

    data () {
        return {
            touchStatus: false,
            startY: 0,
            timer: null
        }
    },

    computed: {
        letters () {
            const letters = []
            for(let i in this.cities){
                letters.push(i)
            }

            return letters
        }
    },

    props: {
        cities: Object
    },

    updated () {
        this.startY = this.$refs['A'][0].offsetTop
    },

    methods: {
        handleLetterClick (event) {
            this.$emit("change",event.target.innerText)
        },

        handleTouchStart () {
            this.touchStatus = true
        },

        handleTouchMove (event) {
            if(this.touchStatus) {
                if(this.timer){
                    clearTimeout(this.timer)
                }

                this.timer = setTimeout(() => {
                    // const startY = this.$refs['A'][0].offsetTop
                    const touchY = event.touches[0].pageY -73 //Header的高度——73px
                    const index = Math.floor((touchY - this.startY) / 20 )
                    if(index >=0 && index < this.letters.length){
                        this.$emit('change',this.letters[index])
                    }
                },16)
            }
        },

        handleTouchEnd () {
            this.touchStatus = false
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

    .list
        position: fixed;
        top: 80px;
        bottom: 0;
        right: 0;
        width: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .item
            text-align: center;
            line-height: 20px;
            color: $bgColor;

</style>