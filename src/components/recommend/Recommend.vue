<template>
    <div>
        <div class="slider">
            <mt-swipe class="luobo" @change="handleChange">
                <mt-swipe-item v-for="(item,index) in slider" :key="index" >
                    <router-link :to="item.linkUrl">
                            <img :src="item.picUrl">
                    </router-link>
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <!-- <div class="swiper-container">
            <ul>
                <li v-for="(item,index) in slider" :key="index">
                        <img :src="item.picUrl">
                </li>
            </ul>
        </div> -->

        <router-view></router-view>
    </div>
</template>
<script>
    import {getRecommend} from "../../api/recommend"
    export default{
        name:"recommend",
        data(){
            return {
                slider:[]
            }
        },
       created(){
           this.getlun() 
        //    this.goaxios()
       },
       mounted(){
         
            // var mySwiper = new Swiper('.swiper-container', {
	        //    autoplay: true,//可选选项，自动滑动
            // })
         
       },
        methods: {
            //在config里的index.js配置
        //     goaxios(){
        //     let url='/list'
        //         this.$http.get(url).then(res=>{
        //             console.log(res)
        //         }).catch(err=>{
        //             console.log(err)
        //         })
        //    },
            getlun(){
               getRecommend().then(res=>{
                    console.log(res.data.slider)
                    this.slider=res.data.slider
                }).catch(err=>{
                    console.log(err)
                })
            },
            handleChange(index) {
                
            }
        }
    }
</script>
<style scoped>
    img{width:100%;height:150px;float:left;position: absolute;top:0;left:0}
    .luobo{width:100%;height:150px;overflow: hidden;position: relative;;}
    .swiper-container{
        position:fixed;
        top:40px;

    }
</style>