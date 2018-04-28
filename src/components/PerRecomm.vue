<template>
    <div class="findrecommend">
        <SwiperMine></SwiperMine>
        <div class="recommend-type">
            <div class="div-type">
                <i class="icon-type icon-fm"></i> 
                <p class="title">私人FM</p>
            </div>
            <div class="div-type">
                <i class="icon-type icon-date"></i> 
                <p class="title">每日听歌推荐</p>
            </div> 
            <div class="div-type">
                <i class="icon-type icon-rank-list"></i> 
                <p class="title">云音乐热歌榜</p>
            </div>
        </div>
        <div class="findsheettitle">
            <span class="name">推荐歌单</span> 
            <i class="icon icon-right"></i>
        </div>
        <div class="recommend-list">
            <div class="findsheetlist" :id="item.id" v-for="(item, index) in songsList" :key="index" v-if="!(index>17)" @click="handleTargetDetailList">
                <div class="content">
                    <div class="image" :style="{
                            backgroundImage: 'url('+item.coverImgUrl+')',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center'
                        }"></div> 
                    <span class="toprighttips">
                        <i class="icon icon-erji"></i>{{ Math.round(item.playCount / 10000) }}万
                    </span>
                </div>
                <div class="title"> {{ item.name }}</div>
            </div>
        </div>
    </div>  

</template>
<script>
    import SwiperMine from "@/components/SwiperMine";
    import axios from "axios";
    import { mapState } from 'vuex'


    export default {
        data(){
            return{
                songsList: []
            }
        },
        methods: {
            handleTargetDetailList(e){
                this.$store.commit("ListOnOff")
                this.$store.commit("DetailListTip", e.currentTarget.id)
            }
        },
        computed: {
            listOnOff () {
                return this.$store.state.listOnOff
            }
        },
        components: {
            SwiperMine
        },
        mounted(){
            axios.get("/top/playlist/highquality").then((res) => {
                this.songsList = res.data.playlists
            })
        }
    }
</script>
<style scoped>
    .findrecommend .recommend-type, .findrecommend .recommend-type .div-type {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }
    .findrecommend .recommend-type {
        width: 100%;
        height: 90px;
        -ms-flex-align: center;
    }
    .findrecommend .recommend-type .div-type {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        height: 100%;
        width: 33.333333%;
        font-size: 0;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        padding: 0 10px;
    }
    .findrecommend .recommend-type .div-type .icon-type {
        display: inline-block;
        color: #c62f2f;
        font-size: 32px;
        width: 50px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        border: 1px solid #c62f2f;
        border-radius: 50%;
    }
    .findrecommend .recommend-type .div-type .title {
        font-size: 12px;
        font-weight: 400;
        margin: 0;
        margin-top: 8px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 100%;
        text-align: center;
    }
    .findsheettitle {
        box-sizing: border-box;
        height: 40px;
        line-height: 40px;
        position: relative;
    }
    .findsheettitle .name {
        display: inline-block;
        vertical-align: middle;
        height: 18px;
        line-height: 18px;
        position: relative;
        color: #333;
        font-size: 16px;
        font-weight: 400;
        padding-left: 12px;
    }
    .findsheettitle .name:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 3px;
        background: #c62f2f;
    }
    .findsheettitle .icon {
        display: inline-block;
        font-size: 16px;
        color: #999;
        vertical-align: middle;
    }
    .findrecommend .recommend-list {
        display: flex; 
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap 
    }
    .findsheetlist {
        display: inline-block;
        width: 33%;
        box-sizing: border-box;
        vertical-align: top;
    }
    .findsheetlist .content {
    width: 100%;
    height: auto;
    position: relative;
    }
    .findsheetlist .content .image {
        width: 100%;
        height: 0;
        padding-top: 100%;
    }
    .findsheetlist .content .toprighttips {
        height: 18px;
        line-height: 18px;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        color: #fff;
        font-size: 12px;
        font-weight: 400;
        text-align: right;
        padding: 0 4px;
    }
    .findsheetlist .content .toprighttips .icon {
        margin-right: 3px;
    }
    .findsheetlist .title {
        width: 100%;
        height: 34px;
        line-height: 17px;
        margin: 4px 0;
        padding: 0 3px;
        box-sizing: border-box;
        color: #333;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
</style>

