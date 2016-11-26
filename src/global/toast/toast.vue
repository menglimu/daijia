<style lang="scss" scoped>
@import "./../../css/base";
div{
  background-color: rgba(0,0,0,0.8);
  @extend %margin-center;
	@extend %trans-center-X;
  position: fixed;
  bottom: 0.6rem;
  padding: 0.05rem 0.1rem;
  border-radius: 4px;
}
</style>
<template>
    <div v-show="visible">{{value}}</div>
</template>
<script>
export default {
   props: ["visible","value"],
}
</script>