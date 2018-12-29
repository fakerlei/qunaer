<template>
		<div class="navbar">
		<div class="swiper-container " id="swiper2">
	    <div class="swiper-wrapper">
	      <div class="swiper-slide" v-for="(page,index) in pagelist" :key="index">
            <div class="icon_container">
            	<div class="icon_item" v-for="item in page" :key="item.id">
            		<img :src="item.imgurl"/>
            		<p class="icon_title">{{item.title}}</p>
            	</div>
            </div>
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
		props:["icons"],
		data(){
			return{
				
			}
		},
		computed:{
			pagelist(){
			var pages=[]
			this.icons.forEach((item,index)=>{
			var page = Math.floor(index/8)	
			if(!pages[page]){
			 pages[page]=[]
			}
			pages[page].push(item)
			})
			return pages
			}	
		},
		 watch:{
		pagelist(){
			this.$nextTick(()=>{
			var mySwiper = new Swiper ('#swiper2', {
		    loop: true, 
		    pagination: {
		      el: '.swiper-pagination',
		    },
		    autoplay: false
		  })
		})	
		}	
	}
	}
</script>

<style lang="scss" scped>
.navbar{
	background: #fff;
 .icon_container{
	height: 3.82rem;
	display: flex;
	flex-wrap: wrap;
	.icon_item{
		width: 25%;
		height:1.91rem;
	 img{
		width: 0.95rem;
		height: 0.95rem;
		margin: 0.24rem auto auto 0.45rem;
	 }
	 .icon_title{
	 	line-height: 0.42rem;
	 	text-align: center;
	 	width: 100%;
	 	text-overflow: ellipsis;
	 	overflow: hidden;
	 	white-space: nowrap
	 }	
	}	
 }
}	
</style>