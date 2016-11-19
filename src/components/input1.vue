<style lang="scss">
.lineheight{
		/*height: 100%;
		line-height: .38rem;*/
}
$fontcolor: #000000;
$bgcolor:#FFFFFF;
.lm-input-row{
	display: flex;
	position: relative;
	height: .4rem;
	font-size:.16rem;
	text-align: center;
	border: 1px solid rgba(0,0,0,.2);
	border-radius: 3px;
	background-color: $bgcolor;
	color: $fontcolor;
	input, pre, span{
		height: 100%;
		line-height: .38rem;
	}
	
	.list{
		position: absolute;
		top: 100%;
		width: 100%;
		max-height: 3rem;
		z-index: 100;
		background-color: $bgcolor;
		margin-top: 2px;
		border: 1px solid #D9D9D9;
		border-top: none;
		li{border-bottom: 1px solid #D9D9D9;padding: 0.1rem 0;margin-left: .1rem;}
	}
	.lm-input-box{
		 flex: 1;
		@extend .lineheight;
		position: relative;
		padding-left: .1rem;
		input{
			padding-right: .2rem;
			height:100%;
			width: 100%;
			outline: 0;
			-webkit-appearance: none;
			background: none;
			border: none;
		}
		span{
			position: absolute;
			width: .2rem;
			right: 0;
			top:0;
			height: 100%;
		}
	}
	.left{
		@extend .lineheight;
		padding-left: 0.05rem;
	}
	.right-icon{
		height: 100%;
		line-height: .38rem;
		float: right;
		text-align: center;
		width: .4rem;
		font-size: .18rem;
		/*border-left: 1px solid #D9D9D9;*/
	}
	.right{
		@extend .lineheight;
		text-align: center;
		width: .56rem;
		font-size: .12rem;
		border-left: 1px solid #D9D9D9;
		&:active{
			color: #57C5F7;
		}
	}
}
</style>

<template>
	<div class="lm-input-row" :class="rowlist">
		<div class="left" v-if=rowlist.left><pre>{{label}}</pre></div>
		<div class="lm-input-box">
			<input :type=inputType :value=value @focus="focus" @blur="blur" @input="input" :placeholder=placeholder>
			<template v-if=rowlist.clear>
				<span v-show=clearshow @click="clear">x</span>
			</template>
		</div>
		<div v-if="rowlist.right">
			<span class="right-icon" v-if="type=='password'" :class="iconlist" @click="password" :style="iconstyle"></span>
			<span class="right" v-if="right">{{right}}</span>
		</div>
			<ul v-show="listshow&&list.length>0" class="list" v-if=list>
				<li v-for="(vle, index) in list" @click="taplist(index)">{{vle}}</li>
			</ul>
	</div>
</template>
<script>
export default {
		data(){
			return {
				inputType:"text",
				rowlist:{"clear":true,"left":false,"right":false}, 
				iconlist:[],
				clearshow:false,
				listshow:false,
				inputvalue:"",
				inputlist:"",
			}
		},
    props: ['type','fontcolor','color','label','value','right','list','placeholder'],
    mounted(){
    	switch(this.type){
				case "password":
					this.rowlist.right=true;
					this.inputType = "password";
					this.iconlist = ["ion-eye"];
				break;
			}
    	if(this.right){
    		this.rowlist.right=true;
    	}
    	if (this.label) {
    		this.rowlist.left=true;
    	}
    },
    methods:{
    	focus(){
    		if (this.rowlist.clear) {
    			this.clearshow=true;
    		}
    		if (this.list) {
    			this.listshow=true;
    		}
    	},
    	blur(){
    		if (this.rowlist.clear) {
    			setTimeout(()=>this.clearshow=false,100);
    		}
    		if (this.list) {
    			setTimeout(()=>this.listshow=false,100);
    		}
    	},
    	input(){
    		this.value = event.target.value;
    		this.$emit('input', this.value);
    	},
    	taplist(index){
    		this.value = this.list[index];
    		this.$emit('input', this.value);
    	},
    	clear(){
    		this.value="";
    	},
    	password(){
    		if(this.inputType == "text"){
    			this.inputType = "password";
    		}else{
    			this.inputType = "text";
    		}
    		
    	}
    },
    computed: {
    		iconstyle () {
    			var list={}
    			if(this.type=="password"){
    				list["color"]={"text":"#007aff","password" : "#333"}[this.inputType]
    			}
    			return list;
    		},
    		
    },
}
</script>