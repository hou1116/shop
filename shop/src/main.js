// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueResource);

//导入自定义组件
import Hello from './components/Hello.vue'
import list from './components/list.vue'

//分配路由
const router=new VueRouter({
		mode:'hash',
		base:__dirname,
		routes:[
			{
				path:'/',
				component:Hello,
				children : [
				{
					path : '/list',
					components : {
						list
					}
				}
			]
			},
		

		]
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})

