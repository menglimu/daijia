<!-- size：传值block为块级按钮  
disabled：是否禁止点击，默认false,-->
<template>
  <button class="lm-button" :class="[size?'lm-btn-'+size:'',{'disabled':disabled}]" 
  @click.stop="onClick($event)">
    <slot></slot>
  </button>
</template>
<style lang='scss'>
  .lm-button {
    position: relative;
    overflow: hidden;
    border: none;
    border-radius: 4px;
    height: 0.4rem;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    /*默认尺寸*/
    height: .33rem;
    padding-left:0.12rem;
    padding-right: 0.12rem;
    font-size: 0.14rem;

    &.lm-btn-block {
      display: block;
      width: 100%;
      height: .4rem;
      font-size: 0.16rem;
    }
    /*禁止点击*/
    &.disabled {
      color: #c3c3c3;
      background: #d9d9d9;
      cursor: not-allowed;
    }
  }
  .ripple-effect {
    position: absolute;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background: white;
    animation: ripple 1.5s;
    animation-fill-mode: forwards;
  }
  @keyframes ripple {
    from {
      transform: scale(1);
      opacity: 0.4;
    }
    to {
      transform: scale(50);
      opacity: 0;
    }
  }
</style>
<script>
  export default {
    props: ["size","disabled"],
    data() {
      return {
      }
    },
    ready() {
    },
    methods: {
      onClick(e) {
        if (this.disabled) {
          return
        }
        if (this.ripple) {
          this.$el.removeChild(this.ripple)
          clearInterval(this.timer)
        }
        let btn = this.$el
        let ripple = document.createElement('div')
        let x = e.pageX - btn.offsetLeft
        let y = e.pageY - btn.offsetTop
        ripple.classList.add('ripple-effect')
        ripple.style.height = btn.offsetHeight + 'px'
        ripple.style.width = btn.offsetHeight + 'px'
        ripple.style.backgroundColor = 'rgba(#FFF, 0.4)'
        ripple.style.left = x - (btn.offsetHeight / 2) + 'px'
        ripple.style.top = y - (btn.offsetHeight / 2) + 'px'
        btn.appendChild(ripple)
        this.ripple = ripple
        this.timer = setTimeout(() => {
          btn.removeChild(this.ripple)
          console.log(this.ripple)
          this.ripple = false
        }, 1500)
        this.$emit("tap")
      }
    }
  }
</script>