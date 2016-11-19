
var VueRouter= require('vue-router')
import Vue from 'vue'
import Home from "./daijia"
import Going from "./view/Going"
Vue.use(VueRouter);
const router = new VueRouter({
   routes:[
			{ path: '/', component: Home },
			{ path: '/Going', component: Going },
		]
})
//router.routes=[
//	{ path: '/', component: Home },
//]	
 
export default router
