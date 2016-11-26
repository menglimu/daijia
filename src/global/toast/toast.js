import Vue from 'vue';

const  toastConstructor = Vue.extend(require('./toast.vue'));
const  toast = new toastConstructor({
    el: document.createElement('div'),
  });
document.body.appendChild(toast.$el);

toast.close = function () {
  this.visible = false
}

toast.show = function (value){
  this.visible = true
  this.value = value
  setTimeout(()=>{
  	this.visible = false
  	this.value = ''
  },2000)
}

Vue.toast = Vue.prototype.toast = toast
//https://wangdahoo.github.io/vonic/docs/#!/
//轮播 按钮 选项卡 vumscroll 侧边栏 底部弹出选项 加载中