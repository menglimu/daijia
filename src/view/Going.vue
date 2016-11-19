<style lang="scss">
@import "base";
#going{
	.lm-inline{
		display:flex;
		padding: 0.1rem;
	}
	.driverInfo{
		// @extend .lm-inline;
		@include inline(2);
		padding: 0.1rem;
		img{
			width: 60px;
			height: 60px;
			border-radius: 50%;
		}
		.call{
			margin-top: 5px;
			width:50px;
			height: 50px;
		}
		.text{
			padding-left: 5px;
			font-size: 0.14rem;
			
		}
	}
	.line{
		@include line-text-line(21px);
		width: 80%;
	}
	.cell{
		width: 80%;
		margin: 0 auto;
		span{ 
			@extend .right;
		}
	}
}
</style>
<template>
  <div id="going">
  	<div class="driverInfo">
  		<img src="../assets/logo.png"/>
  		<div class="text">
  			<div class="name">黄师傅&nbsp;&nbsp;川A123456</div>
  			<div>东风神州</div>
  			<div>399单</div>
  		</div>
  		<btn icon="ion-alert" class="call"></btn>
  	</div>
  	<div class="line">订单详情</div>
  	<div class="cell">费用合计<span>8.00元</span></div>
  </div>
</template>
<script>
	import btn from "./../components/btn"
	export default {
	  components: {
	  	btn,
	  },
	  data(){
	  	return {
	  		start:"",
	  		end:"",
	  		startlist:[],
	  		endlist:[],
	  		value:"123",
	  		position:"localing"
	  	}
	  },
	  mounted(){
	  },
	  methods: {
	    greet: function (event) {
	    	return;
	      // 方法内 `this` 指向 vm
	      alert('Hello ' + this.name + '!')
	      // `event` 是原生 DOM 事件
	      alert(event.target.tagName)
	    },
	  }
	}
</script>