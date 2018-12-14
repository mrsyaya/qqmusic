import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
import {playMode} from "../common/js/config"
const store=new Vuex.Store({
    state:{
       singer:{},
       playing:false,
       fullScreen:false,
       playlist:[],
       suilist:[],
       mode: playMode.suiplay,
       currentIndex:-1
    },
    getters:{
       singer:state=>state.singer,
       playing:state=>state.playing,
       playlist:state=>state.playlist,
       fullScreen:state=>state.fullScreen,
       suilist:state=>state.suilist,
       mode:state=>state.mode,
       currentIndex:state=>state.currentIndex,
       currentSong:state=>{
           return state.playlist[state.currentIndex] || {}
       }

    },
    mutations:{
        setSinger(state,singer){
          state.singer=singer
       },
       setPlaying(state,flag){
        state.playing=flag
       },
       setFullScreen(state,flag){
        state.fullScreen=flag 
    },
    setPlayList(state,list){
            state.playlist=list
    },
    setSuiList(state,list){
        state.suilist=list
    },
    setPlayMode(state,mode){
        state.mode=mode
    },
    setCurrentIndex(state,index){
          state.currentIndex=index  
    },
    },
    actions:{
        setSinger(ctx,singer){
            ctx.commit('setSinger',singer)
        },
        selectPlay(ctx, {list,index}){
            ctx.commit("setSuiList",list),
            ctx.commit("setPlayList",list) ,
            ctx.commit("setFullScreen",true) ,
            ctx.commit("setCurrentIndex",index) ,
            ctx.commit("setPlaying",true)  
        }
    }
})
export default store

