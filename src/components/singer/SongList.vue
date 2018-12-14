<template>
    <div class="song-list">
            <div v-show="!songs.length" class="loading-container">
                <loading></loading>
            </div>
        <ul>
           <li v-for="(song,index) in songs" :key="song.id" class="item" @click="selectItem(song,index)">
                <div class="content">
                   <h1 class="name">{{song.name}}</h1>
                   <p class="desc">{{getSongname(song)}}</p>
                </div>
           </li> 
        </ul>
       
    </div>
</template>
<script>
    import Loading from "../loading/loading.vue"
    export default{
        data(){
            return {

            }
        },
        components:{
            Loading
        },
        props:{
            songs:{
                type:Array,
                default:[]
            }
        },
        methods:{
           getSongname(song){
               return `${song.singer} · ${song.album}`
           },
           selectItem(item,index){
               this.$emit("select",item,index)
           }
        }
    }
</script>
<style scoped>
    .song-list{
       height: 100%;
    }
    ul{
        height:100%
    }
    .item{
    display: flex;
      align-items: center;
      box-sizing: border-box;
      height: 40px;
      position:relative
    }
     .content{
         width:100%;
         overflow: hidden;
         line-height:20px;
         flex:1
         /* border-bottom: 1px solid burlywood */
     }
     .content .name{
         color:#000;
         font-size:16px;
         font-family:'楷体';
         margin-top:5px;
         font-weight: 300;
         white-space:nowrap;
         overflow: hidden;
        text-overflow: ellipsis;
     }
     .content .desc{
         margin-top:2px;
         white-space:nowrap;
         overflow: hidden;
        text-overflow: ellipsis;
         color:gray;
         font-size:12px;
         line-height: 12px;
     }
     .loading-container{
        position: absolute;
        width: 100%;
        top: 100%;
        transform: translateY(-50%)
     }
       
     
</style>