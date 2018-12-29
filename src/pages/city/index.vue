<template>
  <div>
  	<myheader />
    <citylist :cityList="cityList" :hotcity="hotcity" />
    <sidebar :cityList="cityList" />
  </div>
</template>

<script>
import myheader from './myheader'
import citylist from './citylist'
import sidebar from './sidebar'
export default {
  name: '',
  data () {
    return {
      cityList:[],
      hotcity:[]
    }
  },
		 components:{
		 	myheader,
		 	citylist,
		 	sidebar
		 },
 		 created(){
			this.$http.get("http://localhost:3000/data").then((res)=>{
				this.cityList=res.data.city
				this.hotcity=res.data.hotcity
			})
		}
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
