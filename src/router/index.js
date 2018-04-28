import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/Home"
import FindMusic from "@/components/FindMusic"
import PerRecomm from "@/components/PerRecomm"
import SongsSheet from "@/components/SongsSheet"
import AnchorsRadio from "@/components/AnchorsRadio"
import RankingList from "@/components/RankingList"

// 异步组件
// const Login = r => require.ensure([], () => r(require("@/pages/Login.vue")), "login")		// 引入异步组件（这样的好处是当打开这个组件时才加载）

Vue.use(Router)

export default new Router({
  routes: [
    { 
      path: "/home",
      component: Home,
    },
    { 
      path: "/findmusic", 
      component: FindMusic, 
      children: [
        { path: "perrecomm", component: PerRecomm  },
        { path: "songssheet", component: SongsSheet  },
        { path: "anchorsradio", component: AnchorsRadio  },
        { path: "rankinglist", component: RankingList  },
        { path: "/", redirect: "perrecomm"}
      ]
    },
    { path: "/", redirect: "/home" }
  ]
})
