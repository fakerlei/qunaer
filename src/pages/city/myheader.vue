<template>
<div class="city_header">
	<div class="city_title">
		<i class="iconfont">&#xe641;</i>
		<a class="city_title_item">城市选择</a>
	</div>
	<div class="city_change">
		<h1 class="city_change_left">境内</h1>
		<h1 class="city_change_right">境外.港澳台</h1>
	</div>
</div>
</template>

<script>
	export default{
		
	}
</script>

<style lang="scss" scoped>
  .city_header{
  	height: 1.55rem;
  	background: #01bdda;
  	.city_title{
  		height: .75rem;
  		border-bottom: 1px solid #ffffff;
  		.city_title_item{
  			line-height: .9rem;
  			text-align: center;
  			color:#dfffff;
  			font-size: 20px;
  			margin: 0 2.3rem;
  		}
  		.iconfont{
  			color:#dfffff;
  			margin-left: .28rem;
  			font-size: 24px
  		}
  	}
  	.city_change{
  	border-radius: 2px;
  	width: 5.5rem;
  	height: .46rem;
  	border: 1px solid #ffffff;
  	margin-left: 1rem;
  	margin-top:.15rem;
  	overflow: hidden;
  	.city_change_left{
  		float: left;
  		line-height: .46rem;
  		width: 50%;
  		text-align: center;
  		background: #ffffff;
  		color: #abfff6;
  	}
  	.city_change_right{
  		float: left;
  		line-height: .46rem;
  		width: 50%;
  		text-align: center;
  		color: #abfff6;
  	}
  	}
  }
</style>