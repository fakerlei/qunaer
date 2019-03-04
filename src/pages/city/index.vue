<template>
  <div class="city_index">
  	<myheader :cityList="cityList"/>
    <citylist :cityList="cityList" 
    	:hotcity="hotcity"
    	ref="list" />
    <sidebar :cityList="cityList" 
    	       @changgecity="handleChangeCity"></sidebar>
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
		},
	  methods:{
	  	handleChangeCity(index){
			 this.$refs.list.scrollCity(index)
		 }
	  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.city_index{
	display: flex;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	citylist{
		overflow: hidden;
		flex: 1;
	}
}
</style>
