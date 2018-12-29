<template>
  <div>
  	<myheader />
  	<Swiper :imgUrl="imgUrl"/>
  	<Navbar :icons="icons"/>
  	<Banner :banner="banner"/>
  </div>
</template>

<script>
	import myheader from './myheader'
	import Swiper from './swiper'
	import Navbar from './navbar'
	import Banner from './banner'
export default {
  name: '',
  data () {
    return {
      imgUrl:[],
      icons:[],
      banner:[]
    }
  },
		 components:{
		 	myheader,
		 	Swiper,
		 	Navbar,
		 	Banner
		 },
 		 created(){
			this.$http.get("http://localhost:3000/data").then((res)=>{
				this.imgUrl=res.data.imglist
				this.icons=res.data.icons
				this.banner=res.data.banner
			})
		}
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
