<template>
  <div class="hello">
    <i class="iconfont back">&#xe641;</i>
    <div class="search">
    	<span><i class="iconfont">&#xe632;</i></span>
    	<input type="text" placeholder="输入城市/景点/游玩主题" value="" />	
    </div>
    
    <div class="hello_right">
    	<span class="hello_right_city">城市</span>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      
    }
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
  		width: 1.11rem;
  		margin-left: 0.23rem;
  		position: relative;
  		.hello_right_city:after{
  			content: '';
  			position: absolute;
  		  top: .1rem;
  		  right: .2rem;
  	    width: 0;
  	    height:0;
  	    border-left:.14rem solid transparent;
  	    border-right: .14rem solid transparent;
  	    border-top: .14rem solid #fff;
  		}
  	}
  }
</style>
