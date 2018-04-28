<template>
    <div class="musicdetail">
        <div class="filterbg" :style="{
            backgroundImage: 'url('+ img +')',
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
        }"></div>
        <div class="detailcontent">
            <div class="content-header">
                <i class="back icon-back" @click="handleOpenMusicPanel"></i>
                <div class="musicTopDetail">
                    <p class="name">{{ name }}</p>
                    <p class="singer">{{ singer }}</p>
                </div> 
                <i class="share icon-share"></i>
            </div>
            <div class="content-wrapper">
                <div class="cd">
                    <div class="swith-line">
                        <div class="triger" :class="{ tripuse: rtoteOnOff }"></div>
                    </div> 
                    <div class="cd-content">
                        <div class="wrapper animate ">
                            <div class="cd-bg"></div> 
                            <img class="img" :class="{ rtoteImg: rtoteOnOff }" :src="img">
                        </div>
                    </div>
                </div>
                <div class="musicDo">
                    <i class="icon icon-like"></i>
                    <i class="icon icon-download"></i>
                    <i class="icon icon-msg"></i>
                    <i class="icon icon-list-circle-small"></i>
                </div>
            </div>
            <div class="content-footer">
                <div class="div-range">
                    <div class="range">
                        <span class="span-left" style="">00:00</span> 
                        <i class="rangeicon icon-volume-medium" style="display: none;"></i> 
                        <div class="duration">
                            <span class="currentProgress" style="width: calc(0%);"></span> 
                            <span class="ball" style="width: 16px; height: 16px; margin-top: -7px; left: calc(0%);"></span>
                        </div> 
                        <span class="span-right" style="">03:38</span>
                    </div>
                </div> 
                <div class="musicDetailCtrl">
                    <i class="playType icon-music-shunxu"></i>
                    <i class="prev icon-prevdetail"></i>
                    <i class="playPause" :class="{ 'icon-playdetail': !rtoteOnOff, 'icon-pause-detail': rtoteOnOff}" @click="handleChangeToggle"></i>
                    <i class="next icon-nextdetail"></i> 
                    <i class="menu icon-list-music"></i>
                </div>
            </div>
        </div>
    </div> 
</template>
<script>
    export default {
        data(){
            return {
                rtoteOnOff: true
            }
        },
        props: ["myid", "name", "img", "singer"],
        methods: {
            handleOpenMusicPanel(){
                this.$emit("handleChangePanel")
            },
            handleChangeToggle(){
                this.rtoteOnOff = !this.rtoteOnOff;
                this.$emit("handleChangePlayerStatus")
            }
        },
        mounted(){
            console.log(this.myid)
            if(!this.myid){
                this.rtoteOnOff = !this.rtoteOnOff
                
            }
        }
    }
</script>
<style scoped>
    .musicdetail .detailcontent, .musicdetail .filterbg {
        position: fixed;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    .musicdetail .filterbg {
        transition: all .5s;
        z-index: 16;
        -webkit-filter: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiP…vbj0iMTAiIC8+DQogICAgICAgIDwvZmlsdGVyPg0KICAgIDwvZGVmcz4NCjwvc3ZnPg==#blur);
        filter: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiP…vbj0iMTAiIC8+DQogICAgICAgIDwvZmlsdGVyPg0KICAgIDwvZGVmcz4NCjwvc3ZnPg==#blur);
        -webkit-filter: blur(30px);
        filter: blur(30px);
    }
    .musicdetail {
        width: 100%;
        height: 100%;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        background: #aaa;
    }
    .musicdetail .detailcontent {
        z-index: 17;
        background: rgba(0,0,0,.15);
    }
    .musicdetail .detailcontent, .musicdetail .filterbg {
        position: fixed;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    .musicdetail .detailcontent .content-header {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        height: 10vh;
        padding-top: 1vh;
        box-sizing: border-box;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .musicdetail .detailcontent .content-header .back, .musicdetail .detailcontent .content-header .share {
        width: 50px;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50px;
        flex: 0 0 50px;
        height: 8vh;
        color: #fff;
        font-size: 24px;
        line-height: 8vh;
        text-align: center;
    }
    .musicdetail .detailcontent .content-header .musicTopDetail {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: #fff;
        width: calc(100% - 100px);
    }
    .musicdetail .detailcontent .content-header .share {
        font-size: 32px;
    }
    .musicdetail .detailcontent .content-header .musicTopDetail .name, .musicdetail .detailcontent .content-header .musicTopDetail .singer {
        margin: 0;
        color: #fff;
        font-size: 12px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .musicdetail .detailcontent .content-header .musicTopDetail .name {
        font-size: 14px;
        font-weight: 400;
    }
    .musicdetail .detailcontent .content-wrapper {
        position: absolute;
        top: 10vh;
        left: 0;
        bottom: 20vh;
        right: 0;
        overflow: hidden;
    }
    .musicdetail .detailcontent .content-wrapper .cd .swith-line {
        width: 80%;
        height: 1px;
        background-image: linear-gradient(270deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.6),hsla(0,0%,100%,0));
        margin: 0 auto;
    }
    .musicdetail .detailcontent .content-wrapper .cd .swith-line .triger {
        position: absolute;
        top: -14px;
        left: 50%;
        width: 90px;
        height: 140px;
        background-image: url(/static/img/swith.png);
        background-size: cover;
        transform-origin: 14px 16px;
        transition: all .3s;
        z-index: 5;
        transform: rotate(-20deg)
    }
    .musicdetail .detailcontent .content-wrapper .cd .cd-content, .musicdetail .detailcontent .content-wrapper .cd .cd-content .wrapper {
        width: 44vh;
        height: 44vh;
        position: relative;
        margin: 0 auto;
        margin-top: 70px;
    }
    .musicdetail .detailcontent .content-wrapper .cd .cd-content .wrapper.animate {
        -webkit-animation: goRotate 16s linear infinite .1s;
        animation: goRotate 16s linear infinite .1s;
    }
    .musicdetail .detailcontent .content-wrapper .cd .cd-content .wrapper .cd-bg {
        width: 44vh;
        height: 44vh;
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        background: url(/static/img/cd-mine.png);
        background-size: 100%;
        z-index: 2;
    }
    .musicdetail .detailcontent .content-wrapper .cd .cd-content .wrapper .img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        display: block;
        width: 28vh;
        height: 28vh;
        z-index: 1;
    }
    .musicdetail .detailcontent .content-wrapper .musicDo {
        width: 70vw;
        position: absolute;
        height: 40px;
        left: 50%;
        bottom: 0;
        -webkit-transform: translate3d(-50%,0,0);
        transform: translate3d(-50%,0,0);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: distribute;
        justify-content: space-around;
    }
    .musicdetail .detailcontent .content-wrapper .musicDo i {
        display: inline-block;
        width: 40px;
        line-height: 40px;
        text-align: center;
        color: hsla(0,0%,100%,.8);
        font-size: 20px;
    }
    .musicdetail .detailcontent .content-footer {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 18vh;
        color: #fff;
        background-image: linear-gradient(0deg,rgba(0,0,0,.8),rgba(0,0,0,.4),transparent,transparent);
    }
    .musicdetail .detailcontent .content-footer .div-range {
        height: 6vh;
    }
    .range {
        width: 90%;
        height: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        margin: 0 auto;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: flex;
        box-sizing: border-box;
        padding: 0 10px;
    }
    .range .span-left {
        font-size: 12px;
        color: hsla(0,0%,100%,.8);
        margin-right: 10px;
    }
    .musicdetail .detailcontent .content-footer {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 18vh;
        color: #fff;
        background-image: linear-gradient(0deg,rgba(0,0,0,.8),rgba(0,0,0,.4),transparent,transparent);
    }
    .range .rangeicon {
        font-size: 14px;
        color: hsla(0,0%,100%,.7);
        margin-right: 10px;
    }
    .range .duration {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        height: 2px;
        border-radius: 1px;
        background: hsla(0,0%,96%,.3);
        margin: 0 auto;
        font-size: 0;
        cursor: pointer;
        position: relative;
    }
    .range .duration .currentProgress {
        display: inline-block;
        width: 0;
        height: 2px;
        background: red;
        float: left;
        background: #c62f2f;
    }
    .range .duration .ball {
        position: absolute;
        width: 14px;
        height: 14px;
        left: -7px;
        background: #fff;
        border-radius: 50%;
        cursor: pointer;
    }
    .range .span-right {
        font-size: 12px;
        color: hsla(0,0%,100%,.8);
        margin-left: 10px;
    }
    .musicdetail .detailcontent .content-footer .musicDetailCtrl {
        height: 12vh;
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        font-size: 0;
    }
    .musicdetail .detailcontent .content-footer .musicDetailCtrl i.menu, .musicdetail .detailcontent .content-footer .musicDetailCtrl i.playType {
        font-size: 20px;
        color: #e1e1e1;
    }
    .musicdetail .detailcontent .content-footer .musicDetailCtrl i {
        display: inline-block;
        font-size: 28px;
        width: 20vw;
        height: 50px;
        line-height: 50px;
        text-align: center;
    }
    .musicdetail .detailcontent .content-footer .musicDetailCtrl i.playPause {
        font-size: 46px;
    }
    .musicdetail .detailcontent .content-footer .musicDetailCtrl i.menu, .musicdetail .detailcontent .content-footer .musicDetailCtrl i.playType {
        font-size: 20px;
        color: #e1e1e1;
    }
    .rtoteImg{
        transform-origin: center center !important;
        animation: myrotate 12s infinite linear !important;
    }
    @keyframes myrotate{
        0%{
            transform: rotateZ(0deg);
        }
        100%{
            transform: rotateZ(360deg);
        }
    }
    .musicdetail .detailcontent .content-wrapper .cd .swith-line .triger.tripuse{
        transform: rotate(7deg)
    }
</style>