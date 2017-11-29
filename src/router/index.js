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
			},{
				path: 'staff', //无路径时默认跳到登录页
				name: 'GroupStaff',
				component: resolve => require(['@/view/group/company/Staff.vue'], resolve)
			}]
		}, {
			path: 'group/role', //组织架构-角色管理
			name: 'GroupRole',
			component: resolve => require(['@/view/group/Role.vue'], resolve)
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
			path: 'task', //任务管理
			redirect: 'task/info'
		}, {
			path: 'task/info', //任务管理-任务概况
			name: 'TaskInfo',
			component: resolve => require(['@/view/task/Info.vue'], resolve)
		}, {
			path: 'task/my', //任务管理-我的任务
			name: 'TaskMy',
			component: resolve => require(['@/view/task/My.vue'], resolve)
		}, {
			path: 'task/dispatch', //任务管理-任务派发
			name: 'TaskDispatch',
			component: resolve => require(['@/view/task/Dispatch.vue'], resolve)
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
			component: resolve => require(['@/view/collection/Strategy.vue'], resolve)
		}, {
			path: 'collection/process', //催收管理-催收流程
			name: 'CollectionProcess',
			component: resolve => require(['@/view/collection/Process.vue'], resolve)
		}, {
			path: 'collection/area', //催收管理-角色催收地区
			name: 'CollectionArea',
			component: resolve => require(['@/view/collection/Area.vue'], resolve)
		}, {
			path: 'board', //案件管理
			redirect: 'board/all'
		}, {
			path: 'board/all', //案件管理-案件列表
			name: 'BoardAll',
			component: resolve => require(['@/view/board/All.vue'], resolve)
		}, {
			path: 'board/not-reminder', //案件管理-所有未催
			name: 'BoardNotReminder',
			component: resolve => require(['@/view/board/NotReminder.vue'], resolve)
		}, {
			path: 'board/has-reminded', //案件管理-所有已催
			name: 'BoardHasReminded',
			component: resolve => require(['@/view/board/HasReminded.vue'], resolve)
		}, {
			path: 'board/promised', //案件管理-答应会还
			name: 'BoardPromised',
			component: resolve => require(['@/view/board/Promised.vue'], resolve)
		}, {
			path: 'board/focus', //案件管理-重点关注
			name: 'BoardFocus',
			component: resolve => require(['@/view/board/Focus.vue'], resolve)
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
		path: '*', //404页面
		name: 'NotFound',
		component: resolve => require(['@/view/NotFound'], resolve)
	}]
})