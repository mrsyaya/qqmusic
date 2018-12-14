<template>
       <div class="singer-detail">
            <music-list :title="singer.name" :songs='songs' :qq-image="singer.avator"></music-list>
       </div> 
</template>
<script>
    import MusicList from "./MusicList.vue"
    import {mapGetters} from "vuex"
    import {getSingerDetail} from "../../api/singer"
    import {createSong} from "../../common/js/song"
  export default{
      name:"singerdetail",
      data(){
          return {
              songs:[]
          }
      },
      components:{
        MusicList
      },
      computed:{
         ...mapGetters(['singer'])
      },
      created(){
        //    console.log(this.singer)
          this.getDetail()

      },
      methods:{
        getDetail(){
            if(!this.singer.id){
                this.$router.push('/singer')
                return
            }
            getSingerDetail(this.singer.id).then(res=>{
                this.songs=this.lizeSongs(res.data.list)
                // console.log(this.songs)
                // console.log(res)
            }).catch(err=>{
                console.log(err)
            })
        },
        lizeSongs(list){
            let ret=[];
            list.forEach(item=>{
                let {musicData}=item
                if(musicData.songid&&musicData.albummid){
                    ret.push(createSong(musicData))
                }
            })
            return ret
        }
      }

  }

</script>
<style scoped>
    .singer-detail{
        position: fixed;
        left:0;
        top:0;
        z-index:100;
        background-color: #fff;
        width:100%;
        height:100%;
        overflow: hidden;
    }
    .slide-enter-active, .slide-leave-active{
        transition: all 0.3s

    }
   
  .slide-enter, .slide-leave-to{
    transform: translate3d(100%, 0, 0)
  }
 
</style>