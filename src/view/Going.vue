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
  <drawer v-model="drawer">123</drawer>
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
  		<radio :multi="true" :radioData="radio" @change="payWay=arguments[0];alert()"></radio>
  	</div>
  	<btn class="pay" @click="greet">确认支付</btn>
  	<picker @change="pickvalue=arguments[0];alert()" :rankNum="3" :data="provincedata"></picker>
  </div>
</template>
<script>
	import btn from "./../components/btn1"
	import radio from "./../components/radio"
	import drawer from "./../components/drawer"
	import picker from "./../components/pickerChild"
	import scroll from "./../components/scroll"
	export default {
	  components: { 
	  	btn,radio,drawer,picker,scroll
	  },
	  data(){
	  	return {
	  		radio:[
	  			{checked:false,lable:'木有法',img:"static/img/logo.png"},
	  			{checked:true,lable:'木有法',img:"static/img/logo.png"},
	  			{checked:false,lable:'木有法',img:"static/img/logo.png"},
	  		],//require()
	  		payWay:null,
	  		drawer:false,
	  		pickvalue:null,
	  		provincedata:[{
                    name:'北京市',
                    value:'1',
                    child:[
                        {
                        "id": "2288",
                        "name": "东城区"
                        },
                         
                        {
                            "id": "2051",
                            "name": "延庆县",
                            "child": [
                                {
                                    "id": "2099",
                                    "name": "延庆镇"
                                },
                                {
                                    "id": "2100",
                                    "name": "永宁镇"
                                },
                                {
                                    "id": "2101",
                                    "name": "康庄镇"
                                },
                                {
                                    "id": "2102",
                                    "name": "大榆树镇"
                                },
                                {
                                    "id": "2103",
                                    "name": "井庄镇"
                                },
                                {
                                    "id": "2104",
                                    "name": "八达岭镇"
                                }
                            ]
                        },
                        {
                            "id": "2301",
                            "name": "大兴区"
                        },
                        {
                            "id": "2300",
                            "name": "昌平区"
                        },
                        {
                            "id": "2299",
                            "name": "顺义区"
                        },
                        {
                            "id": "2298",
                            "name": "通州区"
                        },
                        {
                            "id": "2297",
                            "name": "房山区"
                        },
                        {
                            "id": "2296",
                            "name": "门头沟区"
                        },
                        {
                            "id": "2295",
                            "name": "海淀区"
                        },
                        {
                            "id": "2294",
                            "name": "石景山区"
                        },
                        {
                            "id": "2293",
                            "name": "丰台区"
                        },
                        {
                            "id": "2292",
                            "name": "朝阳区"
                        },
                        {
                            "id": "2291",
                            "name": "宣武区"
                        },
                        {
                            "id": "2290",
                            "name": "崇文区"
                        },
                        {
                            "id": "2289",
                            "name": "西城区"
                        },
                    ]
                },
                {
                    name:'北京市',
                    value:'1',
                    child:[
                        {
                            "id": "2300",
                            "name": "昌平区"
                        },
                        {
                            "id": "2299",
                            "name": "顺义区"
                        },
                        {
                            "id": "2298",
                            "name": "通州区"
                        },
                        {
                            "id": "2297",
                            "name": "房山区"
                        },
                        {
                            "id": "2296",
                            "name": "门头沟区"
                        },
                        {
                            "id": "2295",
                            "name": "海淀区"
                        },
                        {
                            "id": "2294",
                            "name": "石景山区"
                        },
                        {
                            "id": "2293",
                            "name": "丰台区"
                        },
                        {
                            "id": "2292",
                            "name": "朝阳区"
                        },
                        {
                            "id": "2291",
                            "name": "宣武区"
                        },
                        {
                            "id": "2290",
                            "name": "崇文区"
                        },
                        {
                            "id": "2289",
                            "name": "西城区"
                        },
                        {
                            "id": "2051",
                            "name": "延庆县",
                            "child": [
                                {
                                    "id": "2099",
                                    "name": "延庆镇"
                                },
                                {
                                    "id": "2100",
                                    "name": "永宁镇"
                                },
                                {
                                    "id": "2101",
                                    "name": "康庄镇"
                                },
                                {
                                    "id": "2102",
                                    "name": "大榆树镇"
                                },
                                {
                                    "id": "2103",
                                    "name": "井庄镇"
                                },
                                {
                                    "id": "2104",
                                    "name": "八达岭镇"
                                }
                            ]
                        },
                    ]
                }
                ]
	  	}
	  },
	  mounted(){
	  },
	  methods: {
	  	alert(){
	  		console.log(this.pickvalue);
	  		// this.messageBox.confirm('123').then(()=>{console.log(112)})
	  	},
	    greet: function (event) {
<<<<<<< HEAD
	    	this.drawer = true
	    	// this.toast.show("1234")
	    	// this.messageBox.prompt('123').then(()=>{console.log(112312)})
=======
	    	this.toast.show("1234")
>>>>>>> 669a1918ec877dbc352d6d3e1e5b3e78b25404f9
				// this.popMask.show()
	    	// console.log(this.payWay.length)
	    	// console.log(this.payWay)
	    	return;
	      // 方法内 `this` 指向 vm
	      alert('Hello ' + this.name + '!')
	      // `event` 是原生 DOM 事件
	      alert(event.target.tagName)
	    },
	  }
	}
</script>