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
					//先判断这个页面不为password页面再去跳转
					if(this.$route.path !== '/user/password'){
						this.$router.push('/user/password')
					}
				}else if(command === 'out'){
					console.log('执行退出操作--例如清相关数据再去跳转')
					this.$router.push('/login')
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