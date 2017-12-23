import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/', //根
		component: resolve => require(['@/components/home'], resolve),
		children: [{
			path: '', //无路径时默认跳到登录页
			redirect: '/login'
		}, {
			path: 'work', //工作流设置
			redirect: 'work/process'
		}, {
			path: 'work/process', //工作流设置-流程管理
			name: 'WorkProcess',
			component: resolve => require(['@/view/work/Process.vue'], resolve)
		}, {
			path: 'work/assignment', //工作流设置-产品流程分配
			name: 'WorkAssignment',
			component: resolve => require(['@/view/work/Assignment.vue'], resolve)
		}, {
			path: 'work/delegate', //工作流设置-委派规则配置
			name: 'WorkDelegate',
			component: resolve => require(['@/view/work/Delegate.vue'], resolve)
		}, {
			path: 'group', //组织架构
			redirect: 'group/company'
		}, {
			path: 'group/company', //组织架构-公司管理
			component: resolve => require(['@/view/group/company/Warp.vue'], resolve),
			children: [{
				path: '/', //无路径时默认跳到登录页
				name: 'GroupCompany',
				component: resolve => require(['@/view/group/company/Company.vue'], resolve)
			}, {
				path: 'staff', //无路径时默认跳到登录页
				name: 'GroupStaff',
				component: resolve => require(['@/view/group/company/Staff.vue'], resolve)
			}]
		}, {
			path: 'group/role', //组织架构-角色管理
			name: 'GroupRole',
			component: resolve => require(['@/view/group/role/Role.vue'], resolve)
		}, {
			path: 'group/role/power/:id', //组织架构-角色管理
			name: 'GroupRolePower',
			component: resolve => require(['@/view/group/role/Power.vue'], resolve)
		}, {
			path: 'group/department', //组织架构-部门管理
			name: 'GroupDepartment',
			component: resolve => require(['@/view/group/Department.vue'], resolve)
		}, {
			path: 'group/power', //组织架构-权限管理
			name: 'GroupPower',
			component: resolve => require(['@/view/group/Power.vue'], resolve)
		}, {
			path: 'product', //产品管理
			redirect: 'product/config'
		}, {
			path: 'product/config', //产品管理-产品设置
			name: 'ProductConfig',
			component: resolve => require(['@/view/product/Config.vue'], resolve)
		}, {
			path: 'product/material', //产品管理-资料配置
			name: 'ProductMaterial',
			component: resolve => require(['@/view/product/Material.vue'], resolve)
		}, {
			path: 'order', //订单管理
			redirect: 'order/loan'
		}, {
			path: 'order/loan', //订单管理-借款订单查询
			name: 'OrderLoan',
			component: resolve => require(['@/view/order/Loan.vue'], resolve)
		}, {
			path: 'order/intend', //订单管理-意向订单查询
			name: 'OrderIntend',
			component: resolve => require(['@/view/order/Intend.vue'], resolve)
		}, {
			path: 'sms', //短信管理
			redirect: 'sms/config'
		}, {
			path: 'sms/config', //短信管理-模板配置
			name: 'SmsConfig',
			component: resolve => require(['@/view/sms/Config.vue'], resolve)
		}, {
			path: 'sms/review', //短信管理-模板审核
			name: 'SmsReview',
			component: resolve => require(['@/view/sms/Review.vue'], resolve)
		}, {
			path: 'sms/enabled', //短信管理-模板启用
			name: 'SmsEnabled',
			component: resolve => require(['@/view/sms/Enabled.vue'], resolve)
		}, {
			path: 'collection', //催收管理
			redirect: 'collection/strategy'
		}, {
			path: 'collection/strategy', //催收管理-策略
			name: 'CollectionStrategy',
			component: resolve => require(['@/view/collection/strategy/List.vue'], resolve)
		}, {
			path: 'collection/strategy/edit', //催收管理-策略-新增
			name: 'CollectionStrategyEdit',
			component: resolve => require(['@/view/collection/strategy/Edit.vue'], resolve)
		}, {
			path: 'collection/strategy/edit/:id', //催收管理-策略-修改
			name: 'CollectionStrategyEditById',
			component: resolve => require(['@/view/collection/strategy/Edit.vue'], resolve)
		}, {
			path: 'user', //用户管理
			redirect: 'user/find'
		}, {
			path: 'user/find', //用户管理-用户查询
			name: 'UserFind',
			component: resolve => require(['@/view/user/Find.vue'], resolve)
		}, {
			path: 'user/password', //用户管理-重置密码
			name: 'Password',
			component: resolve => require(['@/view/user/Password.vue'], resolve)
		}]
	}, {
		path: '/login', //登录页面
		name: 'Login',
		component: resolve => require(['@/view/Login'], resolve)
	}, {
		path: '/expired', //登录过期
		name: 'Expired',
		component: resolve => require(['@/view/Expired'], resolve)
	}, {
		path: '*', //404页面
		name: 'NotFound',
		component: resolve => require(['@/view/NotFound'], resolve)
	}]
})