import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Login from '@/view/Login'
import Info from '@/view/Info'

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
				}
			]
		},
		{
			path: '/login',
			name: 'Login',
			component: Login
		}
	]
})