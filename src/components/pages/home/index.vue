<template>
<div>
 <head-index></head-index>
</div>
 
</template>

<script>
	import headIndex from "./myheader"
export default {
  name: 'home',
  data(){
  	return {
  		icons:[]
  	}
  },
 components:{
 	headIndex
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
