
require('./css/base/_base.css');
require('./css/ionicicon.css');

import Vue from 'vue'
import App from './App'
import router from './router.js'
//import Home from "./daijia"
import global from './global/global.js'

global()

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')

/* eslint-disable no-new */
//new Vue({
//el: '#app',
//render: h => h(Home)
//})
