// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//单独使用element组件
import {
  MessageBox,Message,Input,Button,Form,FormItem,Container,Header,Aside,Main,Footer
} from 'element-ui'

Vue.use(Input)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)

Vue.prototype.$message = Message
//Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert

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
