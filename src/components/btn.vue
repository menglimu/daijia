<!--
	type提供4种按钮样式供选择：无边框无背景色(noborder)，无边框(primary)，边框与字体同步(default，可以不传值),只显示图标(type不传，icon传入相关图标)
	size提供4种大小。默认。small，large，block
	dispalay设置不可点击
	color背景颜色
	fontcolor字体颜色
-->


<style lang="scss">
.rd-btn {
    position: relative;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  border: 1px solid transparent;
  white-space: nowrap;
  font-size: .14rem;
  height: .33rem;
  min-width: .66rem;
  border-radius: 4px;
  padding: 0 .06rem;
  transition: background 0.2s;
  outline: none;
  border-color: #d9d9d9;
  i{
  	margin:0 .05rem
  }
}
/*4种按钮形状*/
.rd-btn.default,.primary,.rd-btn-icon{
	&:after {
	    background-color: #000;
	    content: " ";
	    opacity: 0;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    position: absolute;
	    border-radius: 4px;
	}
    &:active{
		  &:after{
			opacity: 0.3;
		  }
	}
}
.rd-btn.default {
    color: #333;
    background-color: #fff;
    border-color: #d9d9d9;
}
.rd-btn.primary {
    color: #fff;
    background-color: #57c5f7;
    border: none;
}
.rd-btn.rd-btn-icon { 
    width: .33rem;
    min-width: initial;
    border-radius: 50%;
    padding: 0;
    i {
        margin: 0;
    }
    &:after {
    	border-radius: 50%;
    }
}
.rd-btn-icon-only {
    vertical-align: baseline;
}
.rd-btn.noborder{
	border: none;
	background: none;
	min-width: auto;
	&:active{
		color: #57c5f7;
	}
}
/*3种尺寸*/
.rd-btn.rd-btn-small {
    height: .24rem;
    min-width: .44rem;
}
.rd-btn.rd-btn-large {
	font-size: .16rem;
    height: .4rem;
    min-width: .8rem;
}
.rd-btn.rd-btn-block {
    display: block;
    width: 100%;
    height: .4rem;
}
.rd-btn.rd-btn-icon{
	&.rd-btn-small{
		width: 0.3rem;
	}
	&.rd-btn-large{
		width: .4rem;
	}
}
/*禁止点击*/
.rd-btn.rd-btn-disabled {
    color: #c3c3c3;
    background: #d9d9d9;
    cursor: not-allowed;
    &:active {
        color: #c3c3c3;
        /*background: #ececec;*/
        border-color: #d9d9d9;
        &:after{
        	opacity: 0;
        }
    }
}

</style>
<template>
    <button 
        class="rd-btn"
        :class="btnClass"
    >
        <i class="rd-btn-icon-only" :class="iconClass" v-if="icon"></i>
        <span v-if="!icon">
            <slot class="bj"></slot>
        </span>
    </button>
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            default: () => {
                return 'default'
            }
        },
        icon: {
            type: String,
            default () {
                return ''
            }
        },
        size: {
            type: String,
            default: () => {
                return 'default'
            }
        },
        disabled: {
            type: Boolean,
            default () {
                return false
            }
        }
    },
    computed: {
        iconClass () {
            let list = []
            if (!this.icon) return list
            list.push(this.icon)
            return list
        },
        btnClass () {
            let list = []
            if(!this.icon){
	            switch (this.type) {
			        case 'primary':
			            list.push('primary')
			            break
			        case 'noborder':
			        	list.push('noborder')
			        	break
			        case 'default':
			        	list.push('default')
			        	break
	            }
            }
            switch (this.size) {
	            case 'small':
	                list.push('rd-btn-small')
	                break
	            case 'large':
	                list.push('rd-btn-large')
	                break
	            case 'block':
	            	list.push('rd-btn-block')
	            	break
            }
            if (this.disabled) {
                list.push('rd-btn-disabled')
            }
            if (this.icon) {
                list.push('rd-btn-icon')
            }
            return list
        },
    }
}
</script>