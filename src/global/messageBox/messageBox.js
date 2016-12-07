import Vue from 'vue';
import Promise from './../Promise';
const  messageConstructor = Vue.extend(require('./messageBox.vue'));
const  msgBox = document.createElement('div')
document.body.appendChild(msgBox);
const messageBox = {}

function createMessage(config) {
 	let  message = new messageConstructor({
    el: document.createElement('div'),
  });
  message.config = config
  let promise = new Promise()
  message.callback = (data)=>{
  	if (data) {
  		promise.resolve()
  	} else {
  		promise.reject()
  	}
  	Vue.popMask.delete()
  }
  Vue.popMask.push()
  document.body.appendChild(message.$el);
  return promise
} 

messageBox.alert = function (msg,config={}) {
	config.type = 'alert'
	config.msg = msg
	config.show = true
	return createMessage(config)
}

messageBox.confirm = function (msg,config={}) {
	config.type = 'confirm'
	config.msg = msg
	config.show = true
	return createMessage(config)
}

messageBox.prompt = function (msg,config={}) {
	config.type = 'prompt'
	config.msg = msg
	config.show = true
	return createMessage(config)
}

Vue.messageBox = Vue.prototype.messageBox = messageBox
//https://wangdahoo.github.io/vonic/docs/#!/
//轮播 按钮 选项卡 vumscroll 侧边栏 底部弹出选项 加载中
//轮播 选项卡 3级联动 