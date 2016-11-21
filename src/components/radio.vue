<style lang="scss">
	@import "./../css/base";
	.lm-radio-group{
		.lm-radio-row{
			@include inline($class:'.text')
            height: 0.4rem;
            margin-left: 0.1rem;
            img{
                width: 0.24rem;
            }
            &.left{
                .text{text-align: right;padding-right: 0.1rem;}
                @for $i from 1 through 3 {
                    &>*:nth-child(#{$i}){
                        order:(4 - $i);
                    }
                }
            }
            &:last-child{
                border-bottom:none;
            }
		}
	}
</style>
<template>
    <div class="lm-radio-group">
    	<div v-for="(val, index) in radio" class="lm-radio-row" :class="{left:left}" 
            @click="checkAction(index)"
        >
            <img v-if="val.img" :src="val.img">
            <span v-if="val.icon" :class="val.icon"></span>
            <span class="text">{{val.lable}}</span>
    		<check :checked="val.checked" @input="checkInput(arguments[0],index)"></check>
    	</div>
    </div>
    
    
</template>
<script>
	import check from "./check"
	export default {
		components: {
		  	check,
		},
    props: ["radioData","multi","left"],
    data(){
    	return {
    		radio:this.radioData,
            value:[],
    	}
    },
    methods: {
        checkAction (index) {
            this.changeValue(!this.radio[index].checked,index)
        },
        checkInput (val,index) {
            this.changeValue(val,index)
        },
        changeValue(val,index){
            if (!this.radio[index].disabled) {
                if (!this.multi) {
                    this.checkFalse()
                }
                this.radio[index].checked = val
                if (!this.multi) {
                    this.$emit('change',val&&(this.radio[index].value||index+1)||false);
                }else{
                    this.value = []
                    for (var i = 0; i < this.radio.length; i++) {
                        this.radio[i].checked&&this.value.push(this.radio[i].value||i+1)
                    }
                    this.$emit('change',this.value);
                }
            }
        },
        checkFalse(){
            for (var i = 0; i < this.radio.length; i++) {
                this.radio[i].checked = false;
            }
        }
    },
    computed:{

    },
	}
</script>