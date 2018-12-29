<template>
	<div class="sidebar">
     	<ul>
     		<li v-for="item in cityList" :key="item.id">{{item.code}}</li>
     	</ul>
	</div>
</template>

<script>
	
	export default{
	props:["cityList"]	
	}
</script>

<style lang="scss" scoped>
  .sidebar{
  	width: 30px;
  	position: fixed;
  	right: 0;
  	top: 2rem;
  	li{
  		width: 100%;
  		height: 20px;
  		line-height: 20px;
  		text-align: center;
  	}
  }
</style>