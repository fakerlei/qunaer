<template>
<div>
<div class="city_header">
	<div class="city_title">
		<i @click="goBack" class="iconfont">&#xe641;</i>
		<a class="city_title_item">城市选择</a>
	</div>
	<div class="city_change">
		<input type="text" @input="searchCity" placeholder="请输入搜索字" value="" />
	</div>
	
</div>
    <div class="showmessage" @click="hidden_search" v-show="show_search">
    	<li>{{filterResult}}</li>
    </div>
</div> 
</template>

<script>
	export default{
		props:["cityList"],
		data(){
			return{
			show_search:false,
			filterResult:[]
			}
		},
		methods:{
			goBack(){
				this.$router.go(-1)
			},
			searchCity(e){
				var value = e.target.value
				this.show_search = true
				if(!e.target.value){
				this.show_search = false
				}
			this.filterResult = this.result.filter((item)=>{
				if(item.name.indexOf(value) != -1){
					return true
				}
			})
			},
			hidden_search(){
				this.show_search = false
			}
		},
		computed:{
			result(){
				var result = []
				 this.cityList.forEach((item)=>{
					console.log(item.cityList)
					for(var i in item.cityList){
						result.push({
							"name":item.cityList[i]
						})
					}
				})
				 return result
			}
		}
	}
</script>

<style lang="scss" scoped>
  .city_header{
  	position: fixed;
  	top: 0;
  	left: 0;
  	width: 100%;
  	height: 1.55rem;
  	background: #01bdda;
  	.city_title{
  		height: .75rem;
  		border-bottom: 0.5px solid #ffffff;
  		.city_title_item{
  			line-height: .9rem;
  			text-align: center;
  			color:#dfffff;
  			font-size: 20px;
  			margin: 0 2.15rem;
  		}
  		.iconfont{
  			color:#dfffff;
  			margin-left: .28rem;
  			font-size: 24px
  		}
  	}
  	.city_change{
  	height: .46rem;
  	display: flex;
  	padding: 0 5px;
  	input{        
  		width: 100%;
  		text-align: center;
  		margin-top: 5px;
  		height: .6rem;
  		border-radius: 3px; 		
  	}
  	}
  }
	.showmessage{
	z-index: 3;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 1.55rem;
	background: #f7f7f7;
}
</style>