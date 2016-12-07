<style lang="scss" scoped>
@import "./../../css/base";
div{
		z-index: 999;
    background-color: rgba(0,0,0,0.8);
    position: fixed;
    @include pos(0);
}
</style>
<template>
	<transition
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
    <div v-if="visible"></div>
  </transition>
</template>
<script>
export default {
   props: ["visible"],
}
</script>