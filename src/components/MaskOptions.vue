<template>
    <div class="menulist">
        <p class="title">歌单:我喜欢的音乐</p>
        <div class="typelist" style="background: rgb(255, 255, 255);" item="[object Object]" index="0">
            <i class="info icon-share"></i>
            <div class="typelist-detail">
                <span class="name">分享</span>
                <p class="border-1px"></p>
            </div>
        </div>
        <div class="typelist" style="background: rgb(255, 255, 255);" item="[object Object]" index="0">
            <i class="info icon-share"></i>
            <div class="typelist-detail">
                <span class="name">分享</span>
                <p class="border-1px"></p>
            </div>
        </div>
        <div class="typelist" style="background: rgb(255, 255, 255);" item="[object Object]" index="0">
            <i class="info icon-share"></i>
            <div class="typelist-detail">
                <span class="name">分享</span>
                <p class="border-1px"></p>
            </div>
        </div>
        <div class="typelist" style="background: rgb(255, 255, 255);" item="[object Object]" index="0">
            <i class="info icon-share"></i>
            <div class="typelist-detail">
                <span class="name">分享</span>
                <p class="border-1px"></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .menulist{
        background: #fff;
        position: fixed;
        z-index: 999;
        height: auto;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 25px 0 46px;
    }
.menulist .title {
    margin: 0;
    height: 20px;
    line-height: 20px;
    padding: 0 15px;
}
.typelist {
    height: 50px;
    background: #f7f7f7;
    position: relative;
}
.typelist .info {
    font-size: 20px;
    position: absolute;
    top: 50%;
    color: #c62f2f;
    left: 15px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}
.typelist .typelist-detail {
    height: 100%;
    line-height: 50px;
    margin-left: 50px;
    box-sizing: border-box;
    font-size: 0;
}
.typelist .typelist-detail .name {
    color: #333;
    font-size: 14px;
    margin-right: 6px;
    vertical-align: middle;
}
.typelist .typelist-detail .border-1px {
    position: relative;
}
.typelist .typelist-detail .border-1px:after {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-top: 1px solid rgba(7,17,27,.1);
    content: " ";
}
</style>
