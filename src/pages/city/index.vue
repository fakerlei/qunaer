<template>
  <div>
  	<myheader />
    <citylist />
  </div>
</template>

<script>
import myheader from './myheader'
import citylist from './citylist'
export default {
  name: '',
  data () {
    return {
      cityList:[]
    }
  },
		 components:{
		 	myheader,
		 	citylist
		 },
 		 created(){
			this.$http.get("http://localhost:3000/data").then((res)=>{
				this.cityList=res.data.city
                console.log(res.data.city)
			})
		}
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
