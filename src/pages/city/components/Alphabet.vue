<template>
    <div>
        <ul  class="list">
            <li class="item"  v-for="(item,key) of cities" v-bind:key="key">{{key}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CityAlphabet',

    props: {
        cities: Object
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