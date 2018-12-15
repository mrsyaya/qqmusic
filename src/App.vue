<template>
  <div id="app">
    <Header/>
    <transition>
        <router-view></router-view>
    </transition>
    <player></player>
  </div>
</template>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
<script>
  import './assets/css/index.css'
  import Header from './components/header/Header.vue'
  import Player from "./components/player/player.vue"
  export default {
    name: 'App',
    components:{
    Header,
    Player
  }
}
</script>
<style>
  /* 隐藏滚动条 */
 ::-webkit-scrollbar{
        display:none;
} 
body{
  background:gray;background:rgba(0.2,0,0,0.1)
}
.v-enter{
  opacity: 0;
 transform:translate(100%)
}
.v-leave-to{
 transform: translate(-100%);
 position: absolute
}
.v-enter-active, .v-leave-active{
  transition: all 0.5s ease
}
</style>

