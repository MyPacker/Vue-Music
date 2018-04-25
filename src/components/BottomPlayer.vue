<template>
    <div class="bottom-bar" @click="handleOpenMusicPanel">
        <div class="music-info">
            <img src="http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg" alt="" class="music-pic">
            <div class="music-detail">
                <p class="music-name">小酒窝</p>
                <p class="music-singer">林俊杰,蔡卓妍</p>
            </div>
        </div> 
        <div class="playpause">
            <i class="icon-play"></i>
        </div> 
        <i class="music-list icon-list-music"></i>
    </div>
</template>
<script>
    export default {
        methods: {
            handleOpenMusicPanel(){
                this.$emit("handleChangePanel")
            }
        }
    }
</script>
<style>
/*footer*/
.bottom-bar {
    position: fixed;
    z-index: 9;
    background: #fff;
    bottom: 0;
    height: 46px;
    padding: 5px;
    box-sizing: border-box;
    left: 0;
    right: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.bottom-bar .music-info, .bottom-bar .music-info .music-detail {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.bottom-bar .music-info {
    position: relative;
    height: 100%;
}
.bottom-bar .music-info .music-pic {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 36px;
    flex: 0 0 36px;
    width: 36px;
    height: 36px;
}
.bottom-bar .music-info .music-detail {
    padding: 0 5px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: distribute;
    justify-content: space-around;
}
.bottom-bar .music-info .music-detail p.music-name {
    font-size: 14px;
    font-weight: 400;
    color: #333;
    padding: 2px 0;
}
.bottom-bar .music-info .music-detail p {
    width: 100%;
    margin: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.bottom-bar .music-info .music-detail p.music-singer {
    color: #aaa;
    font-size: 10px;
    font-weight: 400;
    padding: 2px 0;
}
.bottom-bar .music-info .music-detail p {
    width: 100%;
    margin: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.bottom-bar .playpause {
    border: 2px solid #999;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    position: relative;
}
.bottom-bar .playpause i {
    display: block;
    position: absolute;
    top: 50%;
    left: 55%;
    -webkit-transform: translate3d(-50%,-50%,0);
    transform: translate3d(-50%,-50%,0);
    width: 22px;
    font-size: 14px;
    color: #333;
    text-align: center;
}
.bottom-bar .music-list {
    margin-left: 10px;
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 36px;
    flex: 0 0 36px;
    width: 36px;
    height: 100%;
    line-height: 36px;
    text-align: center;
    font-size: 26px;
    color: #999;
}
</style>