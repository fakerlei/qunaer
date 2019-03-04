<template>
<div class="header wrapper" ref="wrapper">	
	<div class="contain">
		<div class="header_title">
		 <span>热门城市</span>
		</div>	
			<ul class="citylist">
				<li @click="handleCity(item)" 
					:class="{active : item == city}" 
					v-for="item in hotcity" 
					:key="item.id" >{{item}}</li>
			</ul>
	    <div class="header_title">
		 <span>字母排序</span>	
		</div>	
			<ul class="codelist">
                <li v-for="item in cityList" :key="item.id">{{item.code}}</li>
			</ul>
		<div class="" v-for="item in cityList" :key="item.id" >
			 <div class="header_title" >
		        <span ref="code">{{item.code}}</span>	
		     </div>	
			 <ul class="itemlist">
                <li @click="handleCity(item)" v-for="item in item.cityList" :key="item.id">{{item}}</li>
			 </ul>		
		</div>		
	</div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations,mapState } from 'vuex'
	export default{
		props:["cityList","hotcity"],
		data(){
			return{
				cityName:''
			}
		},2
		computed:{
		    ...mapState(["city"])	
		},
	     methods:{	     
	         handleCity(item){
	         	 this.$router.go(-1)
	         	 this.changeCity(item)
	         },
	        ...mapMutations(["changeCity"]),
	        scrollCity(index){
	        	this.scroll.scrollToElement(this.$refs.code[index])
	        }
	     },
	     mounted(){
            this.$nextTick(() => {
          	  this.scroll = new BScroll(this.$refs.wrapper, {
          	  	click:true
          	  })
          	  console.log(this.cityList)
	     })
	}
}
</script>

<style lang="scss" scoped>
.header{
	overflow: hidden;
	margin-top: 1.55rem;
}
 .header_title{
 	height: .7rem;
 	background: #CCCCCC;
 	line-height: .7rem;
 	padding-left: 0.33rem;
 	display: flex; 	
 }
 .citylist{	
 		display: flex;
 		width: 100%;
 		flex-wrap: wrap;
 		li{
 			box-sizing: border-box;
 			width: 33.33%;
 			height: .9rem;
 			border-bottom: .03px solid #ddd;
 			border-right: .02px solid #ddd ;
 			line-height: .9rem;
 			text-align: center;			
 		}
 		 .active{
 	border: 1px solid #25A4BB;
 		}
 	}
 .codelist{
 	    padding: .2rem 0;
 	 	display: flex;
 		width: 100%;
 		flex-wrap: wrap;
 		li{
 			width: 16.66%;
 			height: .94rem;
 			line-height: .94rem;
 			text-align: center;
 		}
 	}
 .itemlist{
 	    padding: .2rem 0;
 	 	display: flex;
 		width: 100%;
 		flex-wrap: wrap;
 		li{
 			box-sizing: border-box;
 			width: 25%;
 			height: .9rem;
 			border-bottom: .03px solid #ddd;
 			border-right: .02px solid #ddd ;
 			line-height: .9rem;
 			text-align: center;
 			overflow: hidden;
 			text-overflow: ellipsis;
 			white-space: nowrap;
 		}
 	}

</style>