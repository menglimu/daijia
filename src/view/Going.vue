<style lang="scss">
@import "./../css/base";
#going{
	.driverInfo{
		@include inline(2);
		padding: 0.1rem;
		img{
			width: 60px;
			height: 60px;
			border-radius: 50%;
		}
		.call{
			@extend %clear-bg-border;
			@extend %flex-middle;
			width: 50px;
			height: 50px;
			border-radius: 50%;
			background-color: #FFF;
		}
		.text-group{
			padding-left: 5px;
			font-size: 0.14rem;
		}
	}
	.content{
		width: 80%;
		@extend %margin-center;
		.line{
			@extend %line-text-line;
			color: $gray;
			margin: 0.2rem auto;
		}
		.cell-right{
			@extend %cell-right;
			margin: 0 auto 0.1rem;
		}
	}
	.pay{
		width: 90%;
		color: #fff;
		margin-top: 30px;
		@extend %margin-center;
		background-color: red;
	}
}
</style>
<template>
  <div id="going">
  	<div class="driverInfo">
  		<img src="../assets/logo.png"/>
  		<div class="text-group">
  			<div class="name">黄师傅&nbsp;&nbsp;川A123456</div>
  			<div>东风神州</div>
  			<div>399单</div>
  		</div>
  		<btn class="call"><span class="ion-android-call"></span></btn>
  	</div>
  	<div class="content">
  		<div class="line">订单详情</div>
  		<div class="cell-right">费用合计<span>8.00元</span></div>
  		<div class="cell-right">起步价<span>8.00元</span></div>
  		<div class="cell-right">公里费用<span>8.00元</span></div>
  		<div class="cell-right">超时费用<span>8.00元</span></div>
  		<div class="line">支付方式</div>
  		<radio :multi="true" :radioData="radio" @change="payWay=arguments[0];greet()"></radio>
  	</div>
  	<btn class="pay" size="block" @tap="greet">确认支付</btn>
  </div>
</template>
<script>
	import btn from "./../components/btn1"
	import radio from "./../components/radio"
	export default {
	  components: {
	  	btn,radio
	  },
	  data(){
	  	return {
	  		radio:[
	  			{checked:false,lable:'木有法',img:"static/img/logo.png"},
	  			{checked:true,lable:'木有法',img:"static/img/logo.png"},
	  			{checked:false,lable:'木有法',img:"static/img/logo.png"},
	  		],//require()
	  		payWay:null,
	  	}
	  },
	  mounted(){
	  },
	  methods: {
	    greet: function (event) {
	    	this.toast.show("123")
				// this.popMask.show()
	    	console.log(this.payWay.length)
	    	console.log(this.payWay)
	    	return;
	      // 方法内 `this` 指向 vm
	      alert('Hello ' + this.name + '!')
	      // `event` 是原生 DOM 事件
	      alert(event.target.tagName)
	    },
	  }
	}
</script>