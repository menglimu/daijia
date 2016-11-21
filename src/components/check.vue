<style lang="scss">
@import "./../css/base";
.lm-check-icon {
    width: 0.2rem;
    height: 0.2rem;
    border: 1px solid #ccc;
    border-radius: 50%;
    color: red;
    @extend %flex-middle;
    font-size: 12px;
    &:before{
        opacity: 0;
    }
}

.lm-check-icon.checked{
    &:before{
        opacity: 1;
    }
}
.lm-check-icon.disabled{
    background: #f3f3f3;
}
</style>
<template>
    <span
        class="lm-check-icon ion-android-done"
        :class="{
            'checked': checked,
            'disabled': disabled
        }"
        @click.stop="checkAction()"
    >
    </span> 
</template>
<script>
export default {
    props: {
        disabled:{
            type:null,
            default:false
        },
        checked:{
            type:null,
            default:false
        },
    },
    methods: {
        checkAction () {
            if (!this.disabled) {
                this.$emit('input', !this.checked)
            }
        },
    },
    computed:{
        // checkedSelf(){
        //     return this.checked
        // }
    },
}
</script>