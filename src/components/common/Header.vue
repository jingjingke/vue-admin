<template>
	<el-header>
		<el-dropdown trigger="click" @command="handleCommand">
			<span class="el-dropdown-link">admin-lixi<i class="el-icon-arrow-down el-icon--right"></i></span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command='reset'>重置密码</el-dropdown-item>
				<el-dropdown-item command='out'>退出</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
	</el-header>
</template>

<script>
	export default {
		name: 'Header',
		data() {
			return {

			}
		},
		methods: {
			handleCommand(command) {
				if(command === 'reset'){
					console.log('去重置密码页面')
				}else if(command === 'out'){
					console.log('执行退出操作')
				}
			}
		}
	}
</script>

<style lang="scss">
	.el-header {
		background: #52516e;
		line-height: 60px;
		.el-dropdown {
			float: right;
			color: #fff;
			cursor: pointer;
		}
		.el-dropdown-link {
			display: block;
		}
	}
</style>