<style lang="scss">
    @import "./../css/base";
    .scroll-group{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>
<template>
    <div class="scroll-group">
        <slot></slot>
    </div>
</template>
<script>
    import scroll from './../global/lmScroll'
    export default {
        data(){
            return {
                scroll:null,
            }
        },
        methods:{
            scrollOver(e){
                this.$emit('scrollOver',e)
            },
            setPosition(num){
                this.scroll.position = num
            }
        },
        mounted(){
            this.scroll = new scroll(this.$el,{
                scrollOver:this.scrollOver,
            })
        },
    }
</script>