<template>
  <div>
  	<myheader />
  	<Swiper :imgUrl="imgUrl"/>
  	<Navbar :icons="icons"/>
  	<Banner :banner="banner"/>
  	<Group :groups="groups"/>
  </div>
</template>

<script>
	import myheader from './myheader'
	import Swiper from './swiper'
	import Navbar from './navbar'
	import Banner from './banner'
	import Group from './group'
export default {
  name: '',
  data () {
    return {
      imgUrl:[],
      icons:[],
      banner:[],
      groups:[]
    }
  },
		 components:{
		 	myheader,
		 	Swiper,
		 	Navbar,
		 	Banner,
		 	Group
		 },
 		 created(){
			this.$http.get("http://localhost:3000/data").then((res)=>{
				this.imgUrl=res.data.imglist
				this.icons=res.data.icons
				this.banner=res.data.banner
				this.groups=res.data.group
			})
		}
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
