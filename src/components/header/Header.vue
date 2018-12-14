<template>
	<div>
		<div class="top">
			<i class="music-logo"></i>
			<p class="tit">Music Player</p>
			<div>
				<i class="iconfont icon-wode" @click="goback"></i>
			</div>
		</div>
		<div class="nav">
			<router-link to="/recommend" class="nav-item">推荐</router-link>
			<router-link to="/singer" class="nav-item">歌手</router-link>
			<router-link to="/toplists" class="nav-item">排行榜</router-link>
			<router-link to="/search" class="nav-item">搜索</router-link>
        </div>
	</div>
</template>
<script>
    import Singer from "../singer/Singer.vue"
	export default {
        name:"qq-header",
        components:{
            Singer
		},
		methods:{
		  goback(){
			  this.$router.push("/singin")
		  } 
		}
	}
</script>
<style scoped>
	.top{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 44px;
		padding: 0 10px;
	    background-color: #31c27c;
	}
	.music-logo{
		width: 30px;
		height: 30px;
        background-image: url("../../assets/img/logo.png");
		background-size: cover;
	}
	.top .iconfont{
		font-size: 22px;
		color: #fff;
	}
	.nav{
		display: flex;
		height: 40px;
		line-height: 40px;
	}
	.nav-item{
		flex-grow: 1;
		text-align: center;
		color: #666;
        text-decoration: none
	}
	.router-link-active{
		color: #31c27c;
		border-bottom: 2px solid #31c27c;
        text-decoration:none
	}
	.tit{
		color:gold;font-weight: 700;
		font-family: 'Times New Roman', Times, serif;
		font-size:20px
	}

</style>