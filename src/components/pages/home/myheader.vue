<template>
	<div class="header">
		<div class="left iconfont">&#xe62d;</div>
		<div class="search">
			<div class="search-content">
				<i class="iconfont">&#xe632;</i>
			请输入城市/景点/游玩信息	
			</div>
			</div>
			<router-link to="/city">
		   <div class="city">{{this.$store.state.city}}
			<i class="iconfont city-icon">&#xe62e;</i>
			
		</div>
		</router-link>
	</div>
</template>

<script>

export default{
	computer:{
		...mapState(['city'])
	}
}
</script>

<style scoped lang="scss">
	.header{
		display:flex;
		background:aquamarine;
		height: 3rem;
		.left{
			line-height: 3rem;
			text-align: center;
			margin-right: 8px;
			margin-left: 5px;
		}
		.search{
			 flex: 1;
		 	.search-content{
		 		font-size: 14px;
		 		width: 100%;
		 		margin-top: .35rem;
		 		background:#EAEAEA;
		 		height: 2.2rem;
		 		text-align: center;
		 		border-radius: 5px;
		 		line-height: 2.2rem;
		 		text-indent:-3rem
		 	}
		}
		.city{
			float: right;
			line-height: 3rem;
			width: 60px;

		}

	}
</style>