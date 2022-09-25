//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入插件
import VueRouter from 'vue-router'

import router from './router/index';

Vue.use(VueRouter)


//关闭Vue的生产提示
Vue.config.productionTip = false
//使用插件

//创建vm
new Vue({
	router,
	el:'#app',
	render: h => h(App),
})
