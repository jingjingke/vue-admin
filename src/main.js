// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//单独使用element组件
import {
  Upload,Dialog,Pagination,Table,TableColumn,Breadcrumb,BreadcrumbItem,Menu,Submenu,MenuItem,MenuItemGroup,Dropdown,DropdownMenu,DropdownItem,MessageBox,Message,Radio,RadioGroup,Input,Option,Select,Button,Form,FormItem,Container,Header,Aside,Main,Footer
} from 'element-ui'

Vue.use(Upload)
Vue.use(Dialog)
Vue.use(Pagination)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Input)
Vue.use(Option)
Vue.use(Select)
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

//引入全局方法开始
import methods from './methods';
Object.keys(methods).forEach((key)=>{
	Vue.prototype[key] = methods[key];
})
//引入全局方法结束

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
