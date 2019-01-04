<template>
    <div class="swiper-container gallary" @click="gallaryClose">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(index,item) in list" :key="index" >
      		<img class="gallary-img" :src="item" />
      		{{list}}
        </div>
    </div>
	</div>	
</template>

<script>
 	import"../../../node_modules/swiper/dist/css/swiper.css"
	import Swiper from 'swiper'
	export default{
		props:["imglist"],
		        methods:{
		        	gallaryClose(){
		        		this.$emit('close')
		        	}
		        },
		        computed:{
		        	list(){
		        		return this.imglist
		        	}
		        },
		        created(){
		        	 console.log(this.imglist)
		        },
		/*		mounted(){
				this.$nextTick(()=>{
				   var mySwiper = new Swiper ('.swiper-container', {
	               loop: true, // 循环模式选项
	               autoplay: {
				    delay: 1000,
				    disableOnInteraction: false,
				    },
	                })
				}) 			        
		},*/
		watch:{
			imglist(){
			/*	this.$nextTick(()=>{
			   var mySwiper = new Swiper ('.swiper-container', {
               loop: true, // 循环模式选项
               autoplay: {
			    delay: 1000,
			    disableOnInteraction: false,
			    },
                })
				})*/
			}
		}
	}
</script>

<style lang="scss" scoped>
  .gallary{
  	position: fixed;
  	right: 0;
  	top: 0;
  	bottom: 0;
  	left: 0;
  	background: #969896;
  	.gallary-img{
  	    max-width: 100%;
  		height: 80%;
  		position: absolute;
  		right: 0;
	  	top: 0;
	  	bottom: 0;
	  	left: 0;
	  	margin: auto;
  	}
  }
</style>