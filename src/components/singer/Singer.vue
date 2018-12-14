<template>
    <div class="singer">
        <div>
          <mt-index-list :show-indicator="true" >
				<mt-index-section v-for="(item,index) in singers" :key="index"  :index="item.title">
					<mt-cell v-for="(singer,index) in item.items" :key="index" class="singer-item">
						<div class="media"  @click="goTo(singer,index)">
							<img v-lazy="singer.avator">
							<span>{{singer.name}}</span>
						</div>
					</mt-cell>
				</mt-index-section>
			</mt-index-list>
        </div>
        <router-view></router-view>

    </div>
</template>
<script>
    import {getSingerList} from "../../api/singer"
    import {mapMutations,mapActions}  from "vuex"
    const HotSinger="热门"
    const HotSinger_length=10;
   export default {
       name:"singer",
       data(){
           return {
               singers:[],
               color:{color:'red'}
           }
       },
       created(){
           this.getSinger();
       },
       methods:{
           getSinger(){
            getSingerList().then(res=>{
                if(res.code==0){
                this.singers=res.data.list
                // console.log(this.slotSinger(this.singers))
                this.singers=this.slotSinger(this.singers)
                }
            })
           },
           slotSinger(list){
            let map={
                 hot:{
                     title:HotSinger,
                     items:[]
                 }
            };
            list.forEach((item,index)=>{
                if(index<HotSinger_length){
                    map.hot.items.push({
                        id:item.Fsinger_mid,
                        name:item.Fsinger_name,
                        avator:`https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg?max_age=2592000`
                    })
                }
                const key=item.Findex;
                if(!map[key]){
                    map[key]={
                        title:key,
                        items:[]
                    }
                };
                map[key].items.push({
                    id:item.Fsinger_mid,
                    name:item.Fsinger_name,
                    avator:`https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg?max_age=2592000`
                })

            })
            console.log(map)
            let hot=[];
            let ret=[];
            for(let key in map){
                let val=map[key]
                if(val.title.match(/[a-zA-Z]/)){
                    ret.push(val)
                }else if(val.title===HotSinger){
                    hot.push(val)
                }
            
            }
            ret.sort((a,b)=>{
                return a.title.charCodeAt(0)-b.title.charCodeAt(0)
            })
            return hot.concat(ret)
        },
       goTo(singer,index){
           this.$router.push({path:`/singer/${singer.id}?singername=${singer.name}`})
           this.setSinger(singer)
        //    console.log(this.$emit("sele",index))
       },
    //    ...mapMutations({
    //         setSinger:'setSinger'
    //    })
    ...mapActions(['setSinger'])
    

       }
   }
</script>
<style scoped >
   .singer{
       position:fixed;
       width:100%;
       top:87px;
       bottom:0;
       background:gray;background:rgba(0.2,0,0,0.1);
       z-index:22
   }
   .singer-item {
       position:relative;
       z-index:0;
       height:72px;

   }
   
   .media{
       position:absolute;
       bottom:0;
       left:0;
       width:80%;
       height:72px;
       line-height:72px;
       padding-left:20px

   }
   .media img{
       width:50px;
       height:50px;
       border-radius: 50%;
       display: inline-block;
       margin-right: 15px;
   }
    .media span{
        font-size: 14px;
        font-family: "微软雅黑";
        color:#000
    } 
    image[lazy=loading] {
    width: 50px;
	height: 50px;
    margin: auto;border-radius: 50%;
    } 
    .list_name{
        background:yellow
    }

    .mint-indexsection{
        width:100%;
    }

   

</style>
