<template>
    <div class="player" v-show="playlist.length>0">
      <transition name="normal">
        <div class="normal-player" v-show="fullScreen">
            <div class="background blur">
                <img width="100%" height="100%" :src="currentSong.img" class="pic-background">
            </div>
            <div class="top">
                    <div class="back" @click="goback" ref="back">
                          <i class="iconfont icon-back">&#xe62e;</i>
                    </div>
                        <h1 class="title" v-html="currentSong.name"></h1>
                        <h2 class="subtitle" v-html="currentSong.singer"></h2>
            </div>
            <div class="middle">
                    <div class="middle-l" >
                        <div class="cd-wrapper">
                              <div class="cd" :class="goXuan">
                                <img class="image" :src="currentSong.img" />
                              </div>
                        </div>
                    </div>
            </div>
            <div class="bottom">
                    <div class="operators">
                      <div class="icon i-left" >
                        <i class="iconfont icon-sequence">&#xe65f;</i>
                      </div>
                      <div class="icon i-left" >
                        <i @click="shang" class="iconfont fonticon-prev">&#xe689;</i>
                      </div>
                      <div class="icon i-center" >
                        <i class="iconfont" @click="toggolePlay" :class="iconto"></i>
                      </div>
                      <div class="icon i-right">
                        <i @click="xia" class="iconfont icon-next">&#xe688;</i>
                      </div>
                      <div class="icon i-right">
                        <i  class="iconfont icons" >&#xe604;</i>
                      </div>
                    </div>
                  </div>
        </div>
      </transition>
      <transition name="mini">
        <div class="mini-player" v-show="!fullScreen"  @click="getBo">
                       <div class="icon">
                        <img  width="40" height="40" :src="currentSong.img" :class="goXuan" class="yuan">
                      </div>
                      <div class="text">
                        <h2 class="name" v-html="currentSong.name"></h2>
                        <p class="desc" v-html="currentSong.singer"></p>
                      </div>
                      <div class="control">
                        <i class="iconfont icon-mini" :class="miniplay" @click.stop="toggolePlay"></i>
                        </div>
                      <div class="control">
                        <i class="iconfont icon-playlist">&#xe606;</i>
                </div>
        </div>
      </transition>
      <audio :src="currentSong.url" ref="audio" @canplay="showPlay"></audio>
    </div>
</template>
<script>
    import {mapGetters,mapMutations} from "vuex"
  export default{
      name:"player",
      data(){
        return {
          play:false
        }
      },
      computed:{
          ...mapGetters(['playlist',"fullScreen",'currentSong',"playing",'currentIndex']),
          iconto(){
           return this.playing? 'icon-zanting1':'icon-bofang5'
          },
          miniplay(){
            return this.playing? 'icon-zanting1':'icon-bofang5'
          },
          goXuan(){
            return this.playing? 'play':'pause'
          }
      },
      created(){
         console.log(this.currentSong)
      },
      methods:{
        goback(){
          this.setFullScreen(false)
        },
        getBo(){
          this.setFullScreen(true)
        },
        toggolePlay(){
            this.setPlaying(!this.playing)
        },
       xia(){
         if(!this.showPlay){
             return
         }
          let index=this.currentIndex+1
          if(index===this.playlist.length){
            index=0;
          }
          this.setCurrentIndex(index)
          if(!this.playing){
            this.toggolePlay()
          }
          this.play=false
        },
        shang(){
          if(!this.showPlay){
             return
         }
          let index=this.currentIndex-1;
          if(index===-1){
            index=this.playlist.length-1
          }
          this.setCurrentIndex(index)
          if(!this.playing){
            this.toggolePlay()
          }
          this.play=false
        },
        showPlay(){
          this.play=true
        },
        ...mapMutations(['setFullScreen',"setPlaying",'setCurrentIndex'])
      },
      watch:{
        currentSong() {
          this.$nextTick(()=>{
            console.log( this.$refs.audio)
          this.$refs.audio.play()
          })
          
        },
        playing(newPlaying){
            this.$nextTick(()=>{
              const audio=this.$refs.audio
            newPlaying?audio.play():audio.pause()
            })
        }
      }
  }
</script>
<style scoped>
     .player .normal-player{
         position: fixed;
         top:0;
         left:0;
         bottom:0;
         z-index:200;
         width:100%;
         background:#fff;
     }

      .background{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        opacity: 0.6;
        background:#b2b2b2;
      

      }
      .blur{
	      -webkit-filter: blur(10px);
        filter: blur(9px);
      }
      .top{
        position: relative;
        margin-bottom: 25px
      }
      .back{
        position: absolute;
          top: 0;
          left: 6px;
          z-index: 50;
          margin-top:6px;
      }
      .pic-background{
        opacity:0.9
      }
      .icon-back{
         color:yellowgreen;
          font-size:25px;
          padding: 9px;
          
      }
      .yuan{
        border-radius:50%
      }
      .image{
        border-radius: 50%;
        text-align:center
      }
      .title{
        width: 70%;
        margin: 0 auto;
        line-height: 40px;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 20px;
        color:#fff;
        font-family: "隶书";
        font-weight: 400
      }
      .subtitle{
        line-height: 20px;
        text-align: center;
        font-size:14px;
        color:#fff;
      }
      .middle{
        position: fixed;
        width: 100%;
        top: 80px;
        bottom: 170px;
        white-space: nowrap;
        font-size: 0;
      }
        .middle-l{
          display: inline-block;
          vertical-align: top;
          position: relative;
          width: 100%;
          height: 0;
          padding-top: 80%;
        }
        .cd-wrapper{
            position: absolute;
            left: 10%;
            top: 0;
            width: 80%;
            height: 100%;
          }
         .cd{
          width: 100%;
          height: 100%;
          border: 10px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
         }
         .bottom{
          position: absolute;
          bottom: 50px;
          width: 100%;
         }
        
        .dot-wrapper{
          text-align: center;
          font-size: 0
        }
        .dot{
          display: inline-block;
            vertical-align: middle;
            margin: 0 4px;
            width: 8px;
            height: 8px;
        }
        .normal-enter-active,.normal-leave-active{
              transition:all 0.4s;
        }
        .top,.bottom{
             transition:all 0.4s cubic-bezier(.6,.35,.4,1.26)
        }
        .normal-enter,.normal-leave-to{
          opacity: 0;

        }
        
        .operators{
          display: flex;
          align-items: center;
        }
          .icon{
            flex: 1;
            color:lawngreen;
            font-size:20px;
          }
          .i-left{
            text-align: right;
            font-size:25px;
          }
           
          .i-center{
            padding: 0 20px;
            text-align: center;
            font-size:25px;
          }
          .i-right{
            text-align: left;
            font-size:25px;
          }
          .icon-bofang5{
            font-size: 40px
          }
          .icon-zanting1{
            font-size: 40px
          }
           .icon-next{
            font-size:28px;
          }
          .icon-sequence{
            font-size:28px
          }
          .icon-mini{
            font-size:30px;color:yellow;
            margin-right:10px
          }
           .icons{
             font-size:30px
           } 
          .fonticon-prev{
            font-size:28px
          } 
          .mini-player{
          display: flex;
          align-items: center;
          position: fixed;
           left: 0;
          bottom: 0;
          z-index: 180;
          width: 100%;
          height: 60px;
          background:gray;
          border-radius: 2px;
          }
           .mini-enter-active,.mini-leave-active{
            transition:all 0.4s
          }
          .mini-enter,.mini-leave-to{
            opacity: 0;
          } 
      .icon{
        flex: 0 0 40px;
        width: 40px;
        padding: 0 10px 0 20px;
      }
        
      .text{
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        line-height: 20px;
        overflow: hidden;
      }
      .name{
        margin-bottom: 2px;
        white-space: nowrap;
        color:#fff;
        font-size:15px;
        font-family: "隶书"
      }
     .desc{
       color:#fff;
       font-size:10px;
     }
     .icon-playlist{
       color:orange;
       font-size:25px;
       margin-right:8px;
     }
     .play{
     animation: rotate 20s linear infinite
    }
    .pause{
      animation-play-state: paused;
    }
    @keyframes rotate{
      0%{transform: rotate(0)}
      
    100%{transform: rotate(360deg)}
      
    }
    
     
      
 </style>