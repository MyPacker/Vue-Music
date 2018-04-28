<template>
    <div class="findmusic">
        <div class="find-menu">
            <router-link to="/findmusic/perrecomm">
                个性推荐
            </router-link> 
            <router-link to="/findmusic/songssheet">
                歌单
            </router-link>
            <router-link to="/findmusic/anchorsradio">
                主播电台
            </router-link> 
            <router-link to="/findmusic/rankinglist">
                排行榜
            </router-link>
        </div>
        


        <div class="findmusicbox">
		    <router-view></router-view>
        </div>


    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        }
    }
</script>
<style scoped>


    .findmusic {
        position: fixed;
        background: #fff;
        overflow: auto;
        top: 50px;
        bottom: 46px;
        left: 0;
        right: 0;
        z-index: 11;
        background: #f3f3f3;
        -webkit-overflow-scrolling: touch;
    }
    .findmusic .find-menu {
        position: fixed;
        height: 36px;
        width: 100%;
        line-height: 36px;
        background: #fff;
        overflow: hidden;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }
    .findmusic .find-menu .menu-list.router-link-active {
        color: #c62f2f;
    }
    .findmusic .find-menu a {
        display: block;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        width: 25%;
        overflow: hidden;
        text-align: center;
        cursor: pointer;
        font-size: 14px;
        position: relative;
        font-weight: 500;
    }
    .find-menu .router-link-exact-active.router-link-active:after {
        content: "";
        position: absolute;
        background: #c62f2f;
        bottom: 0;
        height: 2px;
        left: 0;
        right: 0;
    }
    .findmusicbox {
        position: fixed;
        overflow: auto;
        top: 86px;
        bottom: 46px;
        left: 0;
        right: 0;
        z-index: 11;
        background: #fff;
        -webkit-overflow-scrolling: touch;
    }
   
</style>