<template>
  <div>
   <img @click="toggleShow" src="//img1.qunarzz.com/sight/p0/1710/6f/6ff979b8c0f1f633a3.img.jpg_600x330_cf9e8068.jpg"/>
   <gallary :imglist="imglist" 
   	        @close="handleClose"
   	        v-show="show"/>
  </div>
</template>

<script>
	import gallary from '@/components/common/gallary'
export default {
  name: '',
  data () {
    return {
      imglist:[],
      show:false
    }
  },
  components:{
  	gallary
  },
   created(){
		this.$http.get("http://localhost:3000/data",{
			params:{
					id:this.$route.params.id
			}	
		}).then((res)=>{
			this.imglist=res.data.imglist
			})
		},
		methods:{
			handleClose(){
				this.show = false
			},
			toggleShow(){
				this.show = true
			}
		}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
	max-width: 100%;
}
</style>
