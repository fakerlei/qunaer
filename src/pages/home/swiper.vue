<template>
	<div class="swiper">
		<div class="swiper-container" id="swiper1">
	    <div class="swiper-wrapper">
	       <div class="swiper-slide" v-for="(items,index) in imgUrl" :key="index">
	       	<img :src="items"/>
	       </div>
	    </div>
	    <div class="swiper-pagination"></div>
	    </div>
	</div>
</template>
<script>
import Swiper from 'swiper'
import '../../../node_modules/swiper/dist/css/swiper.css'
export default{
  name:'',
  props:["imgUrl"],
  data(){
  return{
		
	}
		},

	 watch:{
		imgUrl(){
			this.$nextTick(()=>{
			var mySwiper = new Swiper ('#swiper1', {
		    loop: true, 
		    pagination: {
		      el: '.swiper-pagination',
		    },
		    autoplay: {
		    delay: 1000,
		    stopOnLastSlide: false,
		    disableOnInteraction: false,
		    }
		  })
		})	
		}	
	}
}
</script>

<style lang="scss" scoped>
	.swiper-container{
		
		img{
			max-width: 100%;
			height:2rem;
		}
	}
</style>