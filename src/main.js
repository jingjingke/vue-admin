// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//单独使用element组件
import { Container, Header, Aside, Main, Footer, Button} from 'element-ui'
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Button)

//使用element完整的框架
//import ElementUI from 'element-ui'
//Vue.use(ElementUI)

//注册全局组件开始
import components from './components/';
Object.keys(components).forEach((key)=>{
	Vue.component(key,components[key])
})
//注册全局组件完成

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
