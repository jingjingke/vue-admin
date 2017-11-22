<template>
	<el-aside :width="isCollapse===true?'64px':'200px'" class='side-menu'>
		<div class="page-title" @click='toggleCollapse'>
			<i class="el-icon-more" v-if='isCollapse'></i>
			<template v-else>金爱农运营后台</template>
		</div>
		<el-menu unique-opened router :collapse='isCollapse'>
			<el-submenu v-for='(menu,index) of menus' :index="menu.children[0].route">
				<template slot="title">
					<i :class="menu.icon"></i>
					<span>{{menu.name}}</span>
				</template>
				<el-menu-item v-for='child in menu.children' :index='child.route'>{{child.name}}</el-menu-item>
			</el-submenu>
		</el-menu>
	</el-aside>
</template>

<script>
	export default {
		name: 'SideBar',
		data() {
			return {
				isCollapse: false,
				canClick: true,
				menus: [{
					name: '工作流设置',
					icon:'el-icon-sort',
					children: [{
						name: '流程管理',
						route: '/work/process'
					}, {
						name: '产品流程分配',
						route: '/work/assignment'
					}, {
						name: '委派规则配置',
						route: '/work/delegate'
					}]
				}, {
					name: '组织架构',
					icon:'el-icon-share',
					children: [{
						name: '公司管理',
						route: '/group/company'
					}, {
						name: '角色管理',
						route: '/group/role'
					}, {
						name: '部门管理',
						route: '/group/department'
					}, {
						name: '权限管理',
						route: '/group/power'
					}]
				}, {
					name: '产品管理',
					icon:'el-icon-menu',
					children: [{
						name: '产品设置',
						route: '/product/config'
					}, {
						name: '资料配置',
						route: '/product/material'
					}]
				}, {
					name: '任务管理',
					icon:'el-icon-setting',
					children: [{
						name: '任务概况',
						route: '/task/info'
					}, {
						name: '我的任务',
						route: '/task/my'
					}, {
						name: '任务派发',
						route: '/task/dispatch'
					}]
				}, {
					name: '订单管理',
					icon:'el-icon-star-on',
					children: [{
						name: '借款订单查询',
						route: '/order/loan'
					}, {
						name: '意向订单查询',
						route: '/order/intend'
					}]
				}, {
					name: '用户管理',
					icon:'el-icon-search',
					children: [{
						name: '用户查询',
						route: '/user/find'
					}]
				}, {
					name: '短信管理',
					icon:'el-icon-message',
					children: [{
						name: '模板配置',
						route: '/sms/config'
					}, {
						name: '模板审核',
						route: '/sms/review'
					}, {
						name: '模板启用',
						route: '/sms/enabled'
					}]
				}, {
					name: '催收管理',
					icon:'el-icon-bell',
					children: [{
						name: '策略',
						route: '/collection/strategy'
					}, {
						name: '催收流程',
						route: '/collection/process'
					}, {
						name: '角色催收地区',
						route: '/collection/area'
					}]
				}, {
					name: '案件管理',
					icon:'el-icon-document',
					children: [{
						name: '案件列表',
						route: '/board/all'
					}, {
						name: '所有未催',
						route: '/board/not-reminder'
					}, {
						name: '所有已催',
						route: '/board/has-reminded'
					}, {
						name: '答应会还',
						route: '/board/promised'
					}, {
						name: '重点关注',
						route: '/board/focus'
					}]
				}]
			}
		},
		methods: {
			//切换菜单打开或关系状态
			toggleCollapse() {
				if(this.canClick === true) {
					this.canClick = false;
					this.isCollapse = !this.isCollapse;
					// 设置0.8秒内不让它再点击了
					setTimeout(() => {
						this.canClick = true;
					}, 800)
				}

			}
		}
	}
</script>

<style lang="scss">
	.side-menu {
		overflow: inherit;
		background: #fbfbfb;
		transition: all 0.3s;
		/*标题*/
		.page-title {
			height: 60px;
			line-height: 60px;
			color: #fff;
			text-align: center;
			font-size: 18px;
			font-weight: bold;
			background: #4b4a63;
			cursor: pointer;
		}
		/*下拉菜单*/
		.el-menu {
			border-right: none;
			&:not(.el-menu--collapse) {
				width: 200px;
			}
			&.el-menu--collapse {
				width: 64px;
			}
			.el-submenu__title {
				height: 60px;
				line-height: 60px;
				background: #ededf0;
				color: #333;
				border-bottom: 1px solid #d8d8de;
			}
			.is-active {
				.el-submenu__title {
					font-weight: bold;
				}
			}
			.el-menu-item {
				color: #4a90e2;
				background: #fafafa;
				border-bottom: 1px solid #e8e8e8;
				text-indent: 14px;
				&.is-active {
					font-weight: bold;
					color: #222;
					background: #fff;
				}
			}
		}
	}
</style>