<template>
    <div class="music-list">
     
                <div class="back" @click="back">
                        <i class="iconfont huibiao">&#xe601;</i>
                    </div>
                    <h1 class="title" v-html="title"></h1>
                    <div class="qq-image" :style="bgStyle" ref="QqImage">
                        <img :src="QqImage" :alt="title" class="img_small" :class="songs.length?'zhuan':'pause'">
                        <div class="play-wrapper" >
                            <div class="play" v-show="songs.length">
                                <i class="iconfont icon-play">&#xe61d;</i>
                                <span class="text">一键播放GO</span>
                            </div>
                        </div>
                    </div>
                    <scroll :data="songs" class="list" ref="list">
                        
                            <div class="song-list-wrapper">
                                <song-list :songs="songs" @select="selectItem"></song-list>
                            </div>
                    </scroll>
              
        </div>
           

</template>
<script>
    import Scroll from "../scroll/scroll.vue"
    import SongList from "./SongList.vue"
    import {mapActions} from "vuex"
    export default{
        name:"music-list",
        props:{
           title:{
               type:String,
               default:''
           },
           songs:{
               type:Array,
               default:[]
           },
           QqImage:{
             type:String,
             default:''
           }
        },
        data() {
      return {
        
      }
    },
        components:{
            SongList,
            Scroll,
 
        },
        computed:{
            bgStyle(){
                
                return `background-image:url(${this.QqImage})`
            }
        },
     
    mounted() {
         this.$refs.list.$el.style.top = `${this.$refs.QqImage.clientHeight}px`
 },
        methods:{
            back(){
                this.$router.go(-1)
            },
            selectItem(item,index){
            this.selectPlay({
                list:this.songs,
                index:index
            }) 
         },
         ...mapActions(['selectPlay'])
        },
       
        
    }
</script>
<style scoped>
    .music-list{
        width:100%;
        position: fixed;
        display: block
        
    }
	.huibiao{
        position: relative;
        left:10px;
        top:7px;
        color:yellow;
        font-size:25px;
        z-index:40
    }
    .title{
     position: absolute;
      top: 2%;
      left:38%;
      z-index: 40;
      width:80%;
      color:#fff;
      font-size:18px;
    }
    .qq-image{
      position: absolute;
      top:0;
      width: 100%;
      height: 0;
      padding-top: 70%;
      transform-origin: top;
      background-size: cover; 
      opacity: 0.8;
    }
    .img_small{
        width:50px;
        height:50px;
        border-radius: 50%;
        z-index: 56;
        position: absolute;;
        top:11%;
        left:80%;
        border:1px solid gold;
        transform: rotate(45deg);
        background-image: radial-gradient(5em 30em ellipse, #fff, yellow);
        box-shadow: 0 0 0 10px #343935;
       
    }
    .zhuan{
        animation:mymove 8s linear infinite;
    }
    .pause{
        animation-play-state: paused
    }
    @keyframes mymove{
        0%{transform: rotate(0)}
        100%{transform: rotate(360deg)}
    }
    .list{
    position: fixed;
    overflow: hidden;
      top:0;
      bottom: 0;
      height:100%;
      width:100%;
      background-color:gray;background:rgba(0.2,0,0,0.1);
    }
     
    .song-list-wrapper{
        padding: 15px 30px;
        
    }   

    .play-wrapper{
        position: absolute;
        bottom: 20px;
        z-index: 50;
        width: 100%;
    }
        
    .play{
        box-sizing: border-box;
          width: 135px;
          padding:3px 0;
          margin: 0 auto;
          text-align: center;
          border: 1px solid gold;
          color:yellow;
          border-radius: 100px;
          font-size: 0;
        }
         
          .icon-play{
            display: inline-block;
            vertical-align: middle;
            margin-right: 6px;
            font-size: 22px;
          }
            
          .text{
            display: inline-block;
            vertical-align: middle;
            font-size: 15px;
          }
          
    
   

</style>