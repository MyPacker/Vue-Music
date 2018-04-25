<template>
  <div>
    <div class="header">
			<div class="header-warpper">
				<i class="menu icon-menu" @click="sliderShow = !sliderShow;maskShow=!maskShow"></i>
				<div class="centermenu">
          <router-link to="/home">
            <i >
              <i class="music icon-music"></i>
            </i>
          </router-link>
          <router-link to="/findmusic">
            <i >
              <i class="find icon-wangyi"></i>
            </i> 
          </router-link>
          <router-link to="/xxx">
            <i>
              <i class="community icon-community"></i>
            </i>
          </router-link>
				</div> 
				<i class="search icon-search"></i> 
			</div>
		</div>
		
		
		<router-view></router-view>
		
    <transition name="mask">
      <div class="menu-mask" v-if="maskShow" @click="sliderShow=!sliderShow;maskShow=!maskShow"></div>
    </transition> 
    <transition name="slider">
      <div class="menu-content" v-if="sliderShow">
        <div class="menu-detail">
          <div class="menu-userInfo" style="background-image: url(&quot;http://www.daiwei.org/index/images/img/indeximg.jpg&quot;); background-size: cover;">
            <img width="56" height="56" class="avatar" src="/static/images/userlogo.jpg"> 
            <div class="user-detail">
              <span class="name">未曾遗忘的青春</span> 
            </div>
          </div>
        </div> 
        <div class="content">
          <div class="sidelist">
            <i class="icon icon-message"></i> 
            <span class="title">我的消息</span> 
            <span class="disc" style="display: none;">
              
            </span>
          </div> 
          <div class="sidelist">
            <i class="icon icon-vip"></i>
            <span class="title">我的会员</span>
            <span class="disc">2018.05.10到期</span>
          </div> 
          <div class="sidelist">
            <i class="icon icon-market"></i>
            <span class="title">商城</span> 
            <span class="disc" style="display: none;">
              
            </span>
          </div> 
          <span class="split" style="background: rgb(240, 240, 240); height: 5px; border-color: rgb(238, 238, 238);"></span>
          <div class="sidelist">
            <i class="icon icon-friend"></i>
            <span class="title">我的好友</span>
            <span class="disc" style="display: none;"></span>
          </div> 
          <div class="sidelist">
            <i class="icon icon-place"></i> 
            <span class="title">附近的人</span>
            <span class="disc" style="display: none;"></span>
          </div> 
          <span class="split" style="background: rgb(240, 240, 240); height: 5px; border-color: rgb(238, 238, 238);"></span>
          <div class="sidelist">
            <i class="icon icon-theme"></i>
            <span class="title">个性换肤</span>
            <span class="disc">官方红</span>
          </div> 
          <div class="sidelist">
            <i class="icon icon-set-time"></i>
            <span class="title">定时播放</span>
            <span class="disc" style="display: none;"></span>
          </div> 
          <div class="sidelist">
            <i class="icon icon-lock"></i>
            <span class="title">音乐闹钟</span> 
            <span class="disc" style="display: none;"></span>
          </div> 
          <div class="sidelist">
            <i class="icon icon-car"></i>
            <span class="title">驾驶模式</span>
            <span class="disc" style="display: none;"></span>
          </div> 
          <div class="sidelist">
            <i class="icon icon-cloud"></i> 
            <span class="title">音乐云盘</span>
            <span class="disc" style="display: none;"></span>
          </div>
        </div> 
        <div class="footer">
          <p class="border-1px"></p>
          <div class="nightmode">
            <i class="icon-night"></i>
            <span>夜间模式</span>
          </div> 
          <div class="setting">
            <i class="icon-setting"></i>
            <span>设置</span>
          </div> 
          <div class="exit">
            <i class="icon-exit"></i>
            <span>退出</span>
          </div>
        </div>
      </div>
    </transition>  
    

  
    <BottomPlayer @handleChangePanel="handleChangePanelOnOff"></BottomPlayer>

    <transition name="musicpanel">
      <div class="musicdetail-box" v-if="musicPanelOnOff">
        <MusicPanel @handleChangePanel="handleChangePanelOnOff"></MusicPanel>
      </div>
    </transition>
    
  </div>

</template>

<script>
import MusicPanel from '@/components/MusicPanel';
import BottomPlayer from "@/components/BottomPlayer"

var bus = new Vue()


export default {
  name: 'App',
  data(){
    return {
      tabOnOff: true,
      musicPanelOnOff: false,
      sliderShow: false,
      maskShow: false
    }
  },
  methods: {
    handleTab(e){
      this.tabOnOff = e.currentTarget.dataset.tabidx
    },
    handleChangePanelOnOff(){
      this.musicPanelOnOff = !this.musicPanelOnOff
    }
  },
  components: {
    MusicPanel,
    BottomPlayer
  }
}
</script>

<style>
  .compone-router{
    position: fixed;
    top: 50px;
  }
  .mask-enter-active, .mask-leave-active {
    transition: opacity .5s;
  }
  .mask-enter, .mask-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .mask-enter-to, .mask-leave /* .fade-leave-active below version 2.1.8 */ {
    opacity: 1;
  }

  .slider-enter-active, .slider-leave-active {
    transition: all .2s;
  }
  .slider-enter, .slider-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateX(-280px)
  }
  .slider-enter-to, .slider-leave /* .fade-leave-active below version 2.1.8 */ {
    transform: translateX(0)
  }

  .musicpanel-enter-active, .musicpanel-leave-active {
    transition: all .3s
  }
  .musicpanel-enter /* .fade-leave-active below version 2.1.8 */ {
    transform: translateY(100%)
  }
  .musicpanel-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateX(100%);
    opacity: 0
  }
  .musicpanel-enter-to, .musicpanel-leave /* .fade-leave-active below version 2.1.8 */ {
    transform: translateY(0)
  }

  .musicdetail-box{
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 20;
  }
  
</style>
