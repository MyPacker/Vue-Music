<template>
    <div class="mymusic">
        <div class="typelist" style="background: rgb(247, 247, 247);">
            <i class="info icon-music"></i> 
            <div class="typelist-detail">
                <span class="name">我的音乐</span> 
                <span class="count">(28)</span> 
                <p class="border-1px"></p> 
                <i class="isPlaying icon-volume-medium"></i>
            </div>
        </div>
        <div class="typelist" style="background: rgb(247, 247, 247);">
            <i class="info icon-zuijinplay"></i> 
            <div class="typelist-detail">
                <span class="name">最近播放</span> 
                <span class="count">(28)</span> 
                <p class="border-1px"></p> 
            </div>
        </div>
        <div class="typelist" style="background: rgb(247, 247, 247);">
            <i class="info icon-diantai"></i> 
            <div class="typelist-detail">
                <span class="name">我的电台</span> 
                <span class="count">(28)</span> 
                <p class="border-1px"></p> 
            </div>
        </div>
        <div class="typelist" style="background: rgb(247, 247, 247);">
            <i class="info icon-collect"></i> 
            <div class="typelist-detail">
                <span class="name">我的收藏</span> 
                <span class="count">(28)</span> 
                <p class="border-1px"></p> 
            </div>
        </div>
        <div class="musicsheet">
            <div class="title">
                <i class="toggle icon-down"></i>
                <div class="detail">
                    <span class="name">我创建的歌单</span>
                    <span class="count">(5)</span> 
                    <i class="setting icon-setting"></i>
                </div>
            </div>
            <div>
                <div class="content">
                    <img src="http://oiq8j9er1.bkt.clouddn.com/music_far%20away.jpg" alt="" class="sheetimg"> 
                    <div class="detail">
                        <p class="name">我喜欢的音乐</p> 
                        <p class="count">30首歌曲</p> 
                        <i class="setting icon-list-circle" @click="handleOpenOptions"></i>
                        <p class="border-1px"></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="musicsheet">
            <div class="title">
                <i class="toggle icon-down"></i>
                <div class="detail">
                    <span class="name">我收藏的歌单</span>
                    <span class="count">(5)</span> 
                    <i class="setting icon-setting"></i>
                </div>
            </div>
            <div>
                <div class="content">
                    <img src="http://oiq8j9er1.bkt.clouddn.com/music_far%20away.jpg" alt="" class="sheetimg"> 
                    <div class="detail">
                        <p class="name">我喜欢的音乐</p> 
                        <p class="count">30首歌曲</p> 
                        <i class="setting icon-list-circle"></i>
                        <p class="border-1px"></p>
                    </div>
                </div>
            </div>
        </div>
        <transition name="option">
            <MaskOptions v-if="optionsShow"></MaskOptions>
        </transition>
    </div>
</template>
<script>
    import MaskOptions from "@/components/MaskOptions"

    export default {
        data(){
            return {
                optionsShow: false
            }
        },
        components: {
            MaskOptions
        },
        methods: {
            handleOpenOptions(){
                this.optionsShow = !this.optionsShow
            }
        }
    }
</script>
<style scoped>
    .option-enter-active, .option-leave-active {
        transition: all .5s;
    }
    .option-enter, option-leave-to{
        transform: translateY(100px)
    }
    .option-enter-to, option-leave{
        transform: translateY(0)
    }
</style>