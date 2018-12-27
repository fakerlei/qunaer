<template>
	<div class="header">
		<div class="header_title">
		 <span>热门城市</span>	
		</div>	
			<ul class="citylist">
				<li>北京</li>
				<li>北京</li>
				<li>北京</li>
	
			</ul>	
				<ul class="citylist">
				<li>北京</li>
				<li>北京</li>
				<li>北京</li>
	
			</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		created(){
			
		}
	}
</script>

<style lang="scss" scoped>
 .header_title{
 	height: .7rem;
 	background: #f7f7f7;
 	line-height: .7rem;
 	padding-left: 0.33rem;
 	display: flex; 	
 }
 .citylist{
 		display: flex;
 		li{
 			width: 33.33%;
 			height: .9rem;
 			border-bottom: 1px solid #282828;
 			border-right: 1px solid #282828 ;
 		}
 	}
</style>