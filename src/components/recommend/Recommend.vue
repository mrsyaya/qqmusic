<template>
    <div>
        <div class="slider">
            <mt-swipe class="luobo" @change="handleChange">
                <mt-swipe-item v-for="(item,index) in slider" :key="index" >
                            <img :src="item.picUrl">

                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="comment">
            <div class="plun">
                <span class="pun">发表评论</span>
            </div>
            <hr/>
            <textarea maxlength="300" class="content" placeholder="期待你的神评论···"></textarea>
            <mt-button type="primary" size="large" >提交</mt-button>
        </div>
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
    .plun{
        display:flex;
        justify-content: space-between;
    }
    .comment .pun{
        font-size:20px;
        font-weight:600;
        margin-top:10px;
    }
    .content{
    border: solid 1px #ececec;
    background-color: #f5f5f5;
    height:50px;
    overflow: hidden;
    width:100%;
    border-radius: 5px;
    resize:none;
    margin-top:3px;
    text-indent: 1em;
    }
</style>