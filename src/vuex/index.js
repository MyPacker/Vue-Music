import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        listOnOff: false,
        detailListTip: "1",
        globalPlayerSrc: ""
    },
    mutations: {
        ListOnOff: function(state){
            state.listOnOff = !state.listOnOff
        },
        DetailListTip: function(state, id){
            state.detailListTip = id
        },
        GlobalPlayerSrc: function(state, data){
            console.log(data)
            state.globalPlayerSrc = data
        }
    }
})


export default store        // 暴露出去