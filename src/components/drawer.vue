<template>
  <transition
    enter-active-class="animated bounceInLeft"
    leave-active-class="animated bounceOutLeft"
  >
    <div class="vue-drawer" v-if="value">
      <div class="main">
        <slot></slot>
      </div>
      <div class="mask" @click="hideMask"></div>
    </div>
  </transition> 
</template>

<script scoped>
 export default {
   props: ['value'],
   data() {
     return {
    }
  },
  mounted(){
  },
  watch: {
    value: function (val) {
      if (this.value) {
        this.popMask.push()
      } else {
        this.popMask.delete();
      }
    },
  },
  methods: {
   hideMask() {
     this.$emit('input',false)
   }
 }
}
</script>

<style lang="scss" scoped>
@import "./../css/base";
 .vue-drawer {
   position: absolute;
   @include pos(0);
   z-index: 1000;
   .main{
      position: absolute;
     @include pos(0,40%,0,0);
     overflow: scroll; 
     background-color:#eee;
   }
   .mask{
      position: absolute;
      @include pos(0,0,0,60%);
      background:none;
   }
 }
</style>