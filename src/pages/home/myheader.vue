<template>
  <div class="hello">
    <i class="iconfont back">&#xe641;</i>
    <div class="search">
    	<span><i class="iconfont">&#xe632;</i></span>
    	<input type="text" placeholder="输入城市/景点/游玩主题" value="" />	
    </div>
    
    <div class="hello_right">
    	<span class="hello_right_city">
    		<router-link to="/city">{{city}}</router-link>
    	</span>
    </div>
     
  </div>

</template>

<script>
import { mapState } from 'vuex'
export default {
  name: '',
  data () {
    return {
      
    }
  },
  computed:{
  	 ...mapState(['city'])
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .hello{
  	height: 0.88rem;
  	width: 100%;
  	background: #06bad5;
  	display: flex;
  	align-items: center;
  	color: #cafdff;
  	.search{
  		flex: 1;
  		width: 5.38rem;
  		height: 0.61rem;
  		background: #ffffff;
  		border-radius: 5px;
  		display: flex;
  	  align-items: center;
  	  .iconfont{
  	  	margin: 0 0.19rem;
  	  	color: #e7e7e7;
  	  }
  	}
  	.back{
  		margin-left: 0.18rem;
  		margin-right: 0.3rem;
  	}
  	.iconfont{
  		color: #cafdff;
  	}
  	.hello_right{
  		position: relative;
  		color: #cafdff;
  		padding: 0 .5rem 0 .2rem;  	
  		.hello_right_city:after{
  			content: '';
  			position: absolute;
  		  top: .07rem;
  		  right: .2rem;
  	    width: 0;
  	    height:0;
  	    border-left:.14rem solid transparent;
  	    border-right: .14rem solid transparent;
  	    border-top: .14rem solid #fff;
  		}
  		.hello_right_city{
  			a{
  	    color: #cafdff;	
  	    }
  		} 		 
  	}
  }
</style>
