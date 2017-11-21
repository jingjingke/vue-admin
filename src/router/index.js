import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Login from '@/view/Login'
import Info from '@/view/Info'
import NotFound from '@/view/NotFound'
import Password from '@/view/user/Password'


Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'Home',
			component: Home,
			children: [{
					path: '/',
					redirect: '/login'
				},
				{
					path: 'info',
					name: 'Info',
					component: Info
				},
				{
					path: 'user/password',	//用户-重置密码
					name: 'Password',
					component: Password
				}
			]
		},
		{
			path: '/login',
			name: 'Login',
			component: Login
		},
		{
			path: '*',
			name: 'NotFound',
			component: NotFound
		}
	]
})