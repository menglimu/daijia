<style lang="scss" scoped>
@import "./../../css/base";
div{
    background-color: rgba(0,0,0,0.8);
    position: fixed;
    @include pos(0);
}
</style>
<template>
    <div v-if="visible"></div>
</template>
<script>
export default {
   props: ["visible"],
}
</script>