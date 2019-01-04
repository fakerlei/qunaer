<template>
<div>
		<div class="group_like">
			<img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"/>
			<span>猜你喜欢</span>
		</div>
	<div class="wrapper" ref="wrapper">	
		<div class="contain">
			<div class="group_list" @click="goGallary(item.id)" v-for="item in list" :key="item.id">
				<div class="group_list_left">
					<img :src="item.imgurl"/>
				</div>
				<div class="group_list_right">
					<p class="title">{{item.title}}</p>
					<p class="comments">{{item.cooment}}</p>
					<p class="price"><span>&yen;{{item.price}}</span>起</p>
				</div>
			</div>
		</div>	
	</div>
</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default{
		props:["groups"],
		data(){
			return{
			flage:false,
			grouplist:[],
			morelist:[]
			}			
		},
		computed:{
			list(){
				return this.groups.concat(this.morelist)
			}
		},
		watch:{
			list(){
			    this.scroll.refresh()
			}
		},
		mounted(){
	 	  this.loadData()			
		},
		methods:{
	     loadData() {
          this.$nextTick(() => {
          	  this.scroll = new BScroll(this.$refs.wrapper, {
          	  	probeType:2,
          	  	click: true
          	  })         	  
              this.scroll.on('scroll', (pos) => {
              	if(pos.y > 50 && !this.flage){
              	this.$http.get("http://localhost:3000/data").then((res)=>{
                 	this.morelist = res.data.grouplist
                 	console.log(res.data.grouplist)
                 })	
                 this.flage = true
              	}                
              })
              this.scroll.on('scrollEnd', () => {
              	this.flage = false
              })
          	
            })
         },
         goGallary(id){
         	this.$router.push({name:'GroupDetail',params: { id }})
         }  
     }	
}
</script>

<style lang="scss" scoped>

 .group_like{
	box-sizing: border-box;
	height: .99rem;
	width: 100%;
	line-height: .99rem;
	padding-left: .24rem;
	img{
		width: .33rem;
		height: .33rem;
		margin-bottom: .15rem;
	}
}
.group_list{
	border-bottom: .5px #ccc solid;
	display: flex;
	height: 2.36rem;
	padding: .18rem .24rem;
	img{
		width: 1.97rem;
		height: 2.02rem;
	}
	.group_list_right{
		flex: 1;
		margin-left: .24rem;
		.title{
			font-size: 16px;
			line-height: .84rem;
		}
		.comments{
			line-height: .6rem;
		}
		.price{
			line-height: .6rem;
			span{
				color: #ff8300;
				font-size: 16px;
			}
		}
	}
}
.wrapper{
	height: 9rem;
	overflow: hidden;	
}

</style>