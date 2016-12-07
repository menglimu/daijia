<style lang="scss" scoped>
@import "./../../css/base";
.toast-content{
  
 //  @extend %margin-center;
	// @extend %trans-center-X;
  z-index: 1000;
	@extend %flex-middle;
  position: absolute;
  bottom: 0.6rem;
  width: 100%;
  &>div{
  	position: relative;
  	color: #000;
  	width: 60%;
  	min-height: 0;
  	// background-color: rgba(0,0,0,0.8);
	  // padding: 0.05rem 0.1rem;
	  // border-radius: 4px;
	  margin:0 auto;
  	img{
  		width: 100%;
  	}
  	span{
  		position: absolute;
  		@include pos(25%,10%,20%,28%);
  		text-align: center;
  	}
  }
}
</style>
<template>
	<div class="toast-content">
		 <transition
		    enter-active-class="animated bounceIn"
		    leave-active-class="animated bounceOutRight"
		  >
		    <div v-show="visible">
					<img src="./../../assets/toastBg.png">
		    	<span>{{value}}</span>
		    </div>
		  </transition>
	</div>
</template>
<script>
export default {
   props: ["visible","value"],
 }
</script>