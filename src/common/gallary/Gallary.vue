<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <!-- slides -->
                <swiper-slide v-for="(item,index) of imglist" :key="index">
                    <img :src="item" class="gallary-img"/>
                </swiper-slide>

                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonGallary',
    data () {
        return {
            swiperOptions: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                observer: true,
                observeParents: true
            }
        }
    },

    methods: {
        handleGallaryClick () {
            this.$emit('close')
        }
    },

    props: {
        imglist: {
            type: Array,
            default () {
                return []
            }
        }
    }
}
</script>

<style lang="stylus" scoped>

    .container >>> .swiper-container
        overflow: inherit;
    .container
        display: flex;
        // flex-direction: row;
        // align-items: center;
        flex-direction: column;
        justify-content center
        z-index: 99;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: #000;
        .wrapper
            .gallary-img
                width: 100%;
            .swiper-pagination
                color: #fff;
                bottom: -50px;
            
</style>