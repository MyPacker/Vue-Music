<template>
    
    <div class="songsheet">
        <div class="songheader" :style="{
                    backgroundImage: 'url('+ temData.coverImgUrl +')',
                    backgroundSize: '1280%',
                    backgroundPosition: 'center top', 
                }">
            <i class="back icon-back" @click="handleCloseThis"></i> 
            <p class="title">歌单</p> 
            <i class="search icon-search"></i>
            <i class="menu icon-list-circle"></i>
        </div>
        <div class="content">
            <div class="top" :style="{
                backgroundImage: 'url('+ temData.coverImgUrl +')',
                backgroundSize: '1280%',
                backgroundPosition: 'center top'
            }">
                <div class="songsheetdisc">
                    <div class="songsheetimg">
                        <img :src="temData.coverImgUrl" /> 
                        <span class="info">i</span>
                    </div>
                    <div class="disc">
                        <p class="songsheetname">{{ temData.name }}</p> 
                    </div>
                </div> 
                <div class="do">
                    <div class="list nocollect">
                        <i class="icon-music"></i>
                        <span class="disc">收藏</span>
                    </div>
                    <div class="list">
                        <i class="icon-music"></i>
                        <span class="disc">评论</span>
                    </div>
                    <div class="list">
                        <i class="icon-music"></i>
                        <span class="disc">分享</span>
                    </div> 
                    <div class="list">
                        <i class="icon-music"></i>
                        <span class="disc">下载</span>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="bottom-wrapper">
                    <div class="info">
                        <i class="icon-music"></i> 
                        <span class="name">播放全部</span>
                        <span class="count">(共15首)</span>
                    </div> 
                    <div class="rightSetting">
                        <i class="icon-menu"></i>
                        <span>多选</span>
                    </div>
                </div>
                <div class="border-1px"></div>
                <div class="songlists">
                    <div :data-name="item.name" :data-singer="item.album.artists[0].name" :data-img="item.album.picUrl" class="songlist" v-for="(item, index) in temData.tracks" :key="index" :id="item.id" @click="handleGetMusic">
                        <div class="warpper">
                            <div class="listIndex">
                                <span class="index">{{ index+1 }}</span>
                                <i class="iconIndex icon-volume-medium" style="display: none;"></i>
                            </div>
                            <div class="songInfo">
                                <div class="detail">
                                    <p class="name">{{ item.name }}</p> 
                                    <p class="singer">{{ item.album.artists[0].name }}</p>
                                </div> 
                                <div class="border-1px"></div>
                            </div>
                        </div> 
                        <i class="rightSetting icon-list-circle"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import axios from "axios";
    import { mapState } from 'vuex'
    export default {
        data(){
            return {
                temData: "",
                
            }
        },
        props: ["detailListTip"],
        methods: {
            handleCloseThis(){
                this.$store.commit("ListOnOff")
            },
            handleGetMusic(e){
                let musicId = e.currentTarget.id
                let {name,singer,img} = e.currentTarget.dataset
                console.log(name)

                console.log(musicId)
                axios.get(`/music/url?id=${musicId}`).then((res) => {
                    console.log(res)
                    this.$store.commit("GlobalPlayerSrc", {
                        musicId,
                        url: res.data.data[0].url,
                        name,
                        singer,
                        img
                    })
                })
                
            }
        },
        mounted(){
            console.log(this.detailListTip)
            let listId = this.detailListTip
            axios.get(`/playlist/detail?id=${listId}`).then((res)=>{
                console.log(res.data.result.tracks)
                this.temData = res.data.result
                this.$store.commit()
            })
        }
    }
</script>

<style scoped>
    .songsheet, .songsheet .songheader {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
    }
    .songsheet {
        bottom: 0;
        z-index: 14;
        background: #fff;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    }
    .songsheet .songheader {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        height: 50px;
        z-index: 10;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 0 10px;
    }
    .songsheet .songheader i {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 36px;
        flex: 0 0 36px;
        width: 36px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        font-size: 24px;
        color: #fff;
    }
    .songsheet .songheader .title {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        max-width: calc(100% - 108px);
        font-size: 16px;
        color: #fff;
        font-weight: 400;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin: 0;
        padding: 0 5px;
    }
    .songsheet .songheader i {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 36px;
        flex: 0 0 36px;
        width: 36px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        font-size: 24px;
        color: #fff;
    }
    .songsheet .songheader i.menu {
        font-size: 20px;
    }
    .songsheet .content {
        min-height: calc(100vh - 46px);
        background: #fff;
        box-sizing: border-box;
    }
    .songsheet .content .top {
        height: 155px;
        background: #000;
        padding: 70px 25px 20px;
    }
    .songsheet .content .top .songsheetdisc {
        height: 100px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }
    .songsheet .content .top .songsheetdisc .songsheetimg {
        position: relative;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100px;
        flex: 0 0 100px;
        width: 100px;
        height: 100px;
    }
    .songsheet .content .top .songsheetdisc .songsheetimg img {
        width: 100px;
        height: 100px;
    }
    .songsheet .content .top .songsheetdisc .songsheetimg .info {
        display: block;
        position: absolute;
        bottom: 2px;
        right: 2px;
        width: 16px;
        height: 16px;
        border: 1px solid #f0f0f0;
        border-radius: 50%;
        text-align: center;
        line-height: 16px;
        color: #fff;
        font-weight: 400;
        background: rgba(0,0,0,.6);
    }
    .songsheet .content .top .songsheetdisc .disc {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        max-width: calc(100% - 100px);
        margin-left: 15px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        padding-top: 10px;
    }
    .songsheet .content .top .songsheetdisc .disc p.songsheetname {
        height: 40px;
        line-height: 20px;
        font-size: 14px;
        font-weight: 500;
        overflow: hidden;
        color: #fff;
    }
    .songsheet .content .top .songsheetdisc .disc .user {
        width: 100%;
        height: 30px;
        line-height: 30px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .songsheet .content .top .songsheetdisc .disc .user .avatar {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        color: #f0f0f0;
    }
    .songsheet .content .top .songsheetdisc .disc .user .songsheetuser {
        text-indent: 6px;
        max-width: calc(100% - 40px);
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: #f0f0f0;
        font-size: 12px;
        color: #fff;
    }
    .songsheet .content .top .songsheetdisc .disc p {
        margin: 0;
    }
    .songsheet .content .top .songsheetdisc .disc .user i {
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        font-size: 12px;
        color: #f0f0f0;
    }
    .songsheet .content .top .do, .songsheet .content .top .do div {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }
    .songsheet .content .top .do {
        width: 100%;
        height: 40px;
        -ms-flex-align: center;
        margin-top: 15px;
    }
    .songsheet .content .top .do div {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-flex-align: center;
        color: #fff;
    }
    .songsheet .content .top .do, .songsheet .content .top .do div {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }
    .songsheet .content .top .do div i {
        width: 28px;
        height: 28px;
        font-size: 18px;
        text-align: center;
        line-height: 28px;
    }
    .songsheet .content .top .do div span {
        font-size: 12px;
    }
    .songsheet .content .bottom, .songsheet .content .bottom .border-1px {
        position: relative;
    }
    .songsheet .content .bottom .border-1px:after {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-top: 1px solid rgba(7,17,27,.1);
    content: " ";
}
    .songsheet .content .bottom .bottom-wrapper {
    height: 42px;
    line-height: 42px;
}
.songsheet .content .bottom .bottom-wrapper .info {
    position: absolute;
    top: 0;
    right: 0;
    height: 42px;
    width: 100%;
    line-height: 42px;
    font-size: 0;
}
.songsheet .content .bottom .bottom-wrapper .rightSetting {
    position: absolute;
    top: 0;
    right: 0;
    height: 42px;
    width: auto;
    font-size: 0;
    padding: 0 10px;
}
.songsheet .content .bottom .bottom-wrapper .info i {
    height: 42px;
    width: 42px;
    line-height: 42px;
    text-align: center;
    font-size: 16px;
    margin-right: 5px;
    margin-left: 10px;
    vertical-align: middle;
    color: #666;
}
.songsheet .content .bottom .bottom-wrapper .info span {
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    color: #333;
}
.songsheet .content .bottom .bottom-wrapper .info span.count {
    font-size: 10px;
    margin-left: 5px;
    font-weight: 400;
    color: #aaa;
}
.songsheet .content .bottom .bottom-wrapper .rightSetting i {
    height: 42px;
    width: 42px;
    line-height: 42px;
    text-align: center;
    font-size: 16px;
    margin-right: 2px;
    vertical-align: middle;
    color: #666;
}
.songsheet .content .bottom .bottom-wrapper .rightSetting span {
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
    color: #666;
}
.songlists {
    padding-bottom: 46px;
}
.songlists .songlist {
    height: 54px;
    position: relative;
}
.songlists .songlist .warpper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 54px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    botttom: 0;
}
.songlists .songlist .warpper .listIndex {
    width: 54px;
    height: 54px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 54px;
    flex: 0 0 54px;
    font-size: 0;
}
.songlists .songlist .warpper .listIndex .index {
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    color: #bababa;
    width: 54px;
    height: 54px;
    line-height: 54px;
    text-align: center;
}
.songlists .songlist .warpper .listIndex .iconIndex {
    display: inline-block;
    font-size: 14px;
    color: #c62f2f;
    width: 54px;
    height: 54px;
    line-height: 54px;
    text-align: center;
}.songlists .songlist .warpper .songInfo {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    height: 54px;
    max-width: calc(100% - 54px);
    box-sizing: border-box;
}
.songlists .songlist .warpper .songInfo .detail {
    width: auto;
    max-width: calc(100% - 54px);
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 5px;
    box-sizing: border-box;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: distribute;
    justify-content: space-around;
}
.songlists .songlist .warpper .songInfo .detail p.name {
    font-size: 14px;
    color: #333;
    padding: 2px 0;
    font-weight: 400;
}
.songlists .songlist .warpper .songInfo .detail p {
    margin: 0;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.songlists .songlist .warpper .songInfo .detail p.singer {
    font-size: 10px;
    color: #aaa;
    padding: 2px 0;
    font-weight: 400;
}
.songlists .songlist .rightSetting {
    position: absolute;
    right: 0;
    top: 0;
    width: 54px;
    height: 54px;
    line-height: 54px;
    font-size: 14px;
    text-align: center;
    color: #aaa;
}
</style>
