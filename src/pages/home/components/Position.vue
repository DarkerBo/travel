<template>
    <div class="position">
        <div class="location">
            <span class="iconfont">&#xe790;</span>
            定位失败
        </div>
        <div class="location">
            <span class="iconfont">&#xe781;</span>
            玩水季
        </div>
    </div>
</template>

<script>
export default {
  name: "HomePosition"
};
</script>

<style lang="stylus" scoped>
.position 
    width: 100%;
    display: flex;
    .location 
        line-height 40px
        width: 50%;
        border: 0.03rem solid #eee;
        text-align: center;
</style>