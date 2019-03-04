<template>
	<div class="sidebar" ref="sidebar">
     	<ul>
     		<li @touchstart="toggleCity(index)" 
     			v-for="(item,index) in cityList" 
     			:key="item.id"
     			@touchmove="cityMove">{{item.code}}</li>
     	</ul>
	</div>
</template>

<script>	
	export default{
	props:["cityList"],
	methods:{
		toggleCity(index){
			this.$emit('changgecity',index)
		},
		cityMove(e){
			let index = Math.ceil((e.touches[0].clientY-this.$refs.sidebar.offsetTop)/20)
			this.$emit('changgecity',index)
		}
	}
	}
</script>

<style lang="scss" scoped>
  .sidebar{
  	z-index: 999;
  	width: 30px;
  	position: fixed;
  	right: 0;
  	top: 3rem;
  	li{
  		width: 100%;
  		height: 20px;
  		line-height: 20px;
  		text-align: center;
  	}
  }
</style>