//定义类
class Scroll {
  constructor(target,{
  	transtion = 'Y',
  	a = 0.2,
  	section = true,
  	scrollOver = null,
  }={}) {
    this.targetParent = target //滚动的div包括固定大小的框，及滚动子元素
    this.target = this.targetParent.childNodes[0]
    this.transtion = transtion //方向 'Y'||'X'
    this.a = a //摩擦系数
    this.height = this.target.offsetHeight
    this.parentHeight = this.targetParent.offsetHeight //childNodes parentElement
    if (section) {//分段滑动
    	this.section = section
    	this.sectHeight = this.target.childNodes[0] ? this.target.childNodes[0].offsetHeight:0 
    }
    this.position = 0
    this.scrollOver = scrollOver

    this.initData()
    this.init()

		// 创建
		// this.evtScroll = document.createEvent("HTMLEvents");
		// // 初始化
		// this.evtScroll.initEvent("scrollover", true, false);
  }

  initData(){
    this.lastPos = 0
    this.lastTime = 0
    this.nowTime = 0 
    this.speed = 0
    this.v = 0
  }

  init(){
  	this.target.addEventListener('touchstart',(e)=>{this.onStart(e)})
    this.target.addEventListener('touchmove',(e)=>{this.onMove(e)})
    this.target.addEventListener('touchend',(e)=>{this.onEnd(e)})
  }

  onStart(e){
	    // e.preventDefault()
	    this.sectHeight = this.target.childNodes[0] ? this.target.childNodes[0].offsetHeight:0
	    this.height = this.target.offsetHeight
	    e.stopPropagation()
	    this.target.style.transition = 'transform 0ms ease-out';
	    if (this.transtion == 'Y') {
	        this.lastPos = e.targetTouches[0].screenY
	        this.lastTime = new Date()
	    }
	}
	onMove(e){	
	    e.stopPropagation()
	    this.speed = e.targetTouches[0].screenY - this.lastPos
	    this.position += this.speed
	    this.lastPos = e.targetTouches[0].screenY
	    this.nowTime = new Date()
	    this.v = Math.abs(this.speed / (this.nowTime - this.lastTime))
	    this.lastTime = new Date()
	}
	onEnd(e){
	    e.stopPropagation()
	    let v = this.v * 10
	    if (this.posLen(this.position) != this.position) {
	    	this.endScroll(this.posLen(this.position), 0.5)
	    }else{
	    	let pos = 0
		    if (this.speed > 0) {
		    	pos = this.position + v*v/2/this.a
		    }else{
		    	pos = this.position - v*v/2/this.a
		    }
		    this.endScroll(this.posLen(pos) , this.v/2)
	    }
	}
	//结束时缓动，使用css3动画
	endScroll(pos,time){
		// console.log(pos)
			if (this.section) {
				let remainder =  Math.abs(pos) % this.sectHeight
				if (remainder != 0) {
					//超出一半到下一个
					// pos = remainder > this.sectHeight/2 ? pos-this.sectHeight+remainder : pos+remainder
					//超出及到下个
					if (pos<0) { 
						pos = pos > this.position ? pos+remainder : pos-this.sectHeight+remainder
					}else{
						pos = pos > this.position ? pos+this.sectHeight-remainder : pos-remainder
					}
					
				}
			}
	    this.target.style.transition = 'transform '+time*1000+'ms ease-out';
	    this.position  = pos
	    //回调
	    setTimeout(()=> {
	    	this.target.style.transition = 'transform '+0+'ms ease-out';
	    	this.scrollOver&&this.scrollOver(pos) 
	    }, time*1000);
	    
			// 触发创建的自定义事件
			// this.target.dispatchEvent(this.evtScroll);

	    this.initData()
	}

	posLen(pos){
	    if (pos > 0) {
	    	return 0
	    } else if(pos < this.parentHeight - this.height){
	    	return this.parentHeight - this.height
	    }else{
	    	return pos
	    }
	}

	get position(){
			return this._position
	}

	set position(val){
			this._position = val
			if (this.transtion=='X') {
	        this.target.style.transform = 'translate3d('+val+'px ,0px, 0px)'
	    }else{
	        this.target.style.transform = 'translate3d(0px, '+val+'px, 0px)'
	    }
	}
}
export default Scroll
