<template>
        <div class="loading">
            <img src="./loader.png">
            <p class="desc">{{title}}</p>
        </div>
</template>
      
<script>
      
export default {
          props: {
              title: {
                  type: String,
                  default: '正在拼命加载...'
              }
          }
      }
</script>
      
<style scoped >

      
        .loading{
            width: 100%;
         margin-left:20%;
          margin-top:140px;
        }
          .desc{
            line-height: 20px;
            font-size:18px;
            color:greenyellow;
            margin-top:10px;
           margin-left:20px;
          }
            
        
         
      
</style>