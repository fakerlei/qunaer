<template>
	<div class="banner">
		<div class="banner_title">
			<div class="banner_title_left">
			 <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png"/>
			 <p>本周热门榜单</p>	
			</div>
			<div class="banner_title_right">
				<i class="iconfont">&#xe62d;</i><p>全部榜单</p>
			</div>
		</div>
		<div class="banner_icons" ref="wrapper">
			<ul class="content">
				<li v-for="item in banner" :key="item.id">
					<img :src="item.imgurl"/>
					<p>{{item.title}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import BScroll from 'better-scroll'
	export default{
		props:["banner"],
		created(){
			console.log(this.banner)
		},
		mounted(){
        this.$nextTick(() => {
        let wrapper = this.$refs.wrapper;
        this.scroll = new BScroll(wrapper,{
        	scrollX: true
        })
    })   
  }
}
</script>
<style lang="scss" scoped>
.banner{
	margin-top: .25rem;
	height: 4rem;
	width: 100%;
	background: #ffffff;
	overflow: hidden;
	.banner_title{
		overflow: hidden;
		height: .99rem;
		.banner_title_left{
			float: left;
			img{
				float: left;
				margin-left: .27rem;
				margin-top: .12rem;
				width: 20px;
				height: 20px;
				margin-top: 10px;
				margin-right: 6px;
			}
			p{
				float: left;
				font-size: 24px;
				font-weight: normal;
				line-height: .99rem;
			}
		}
		.banner_title_right{
			float: right;
			i{
				float: right;
				line-height: .99rem;
				margin-right: .35rem;
				margin-left: .15rem;
			}
			p{
				float: right;
				line-height: .99rem;
				
			}
			
		}
	}
	.banner_icons{
		width: 100%;
		overflow: hidden;
		ul{
		width: 10.7rem;
     	display: flex;	
     	padding-left: .2rem;		
		}
		li{
			height: 3.04rem;
			width: 2rem;
			margin-right:.1rem;
			p{
				width: 100%;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
				line-height: .7rem;
				font-size: 12px;
				text-align: center;
			}
		 img{
			width: 2rem;
			height: 2rem;
		}	
		}
		
	}
}
</style>