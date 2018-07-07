<template>
    <div>
        <ul  class="list">
            <li class="item">A</li>
            <li class="item">A</li>
            <li class="item">A</li>
            <li class="item">A</li>
            <li class="item">A</li>
            <li class="item">A</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CityAlphabet'
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
            line-height: 16px;
            color: $bgColor;

</style>