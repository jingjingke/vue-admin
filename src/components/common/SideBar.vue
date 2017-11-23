<template>
	<div :width="isCollapse===true?'64px':'200px'" class='side-menu'>
		<div class="page-title" @click='toggleCollapse'>
			<i class="el-icon-more" v-if='isCollapse'></i>
			<template v-else>金爱农运营后台</template>
		</div>
		<el-menu unique-opened router :collapse='isCollapse' :default-active='activeValue'>
			<template v-for='(menu,index) in menuJson'>
				<el-submenu :index="menu.children[0].route">
					<template slot="title">
						<i :class="menu.icon"></i>
						<span>{{menu.name}}</span>
					</template>
					<template v-for='child in menu.children'>
						<el-menu-item :index='child.route'>{{child.name}}</el-menu-item>
					</template>
				</el-submenu>
			</template>
		</el-menu>
	</div>
</template>

<script>
	//导入菜单
	import menuJson from '@/data/menus';
	
	export default {
		name: 'SideBar',
		data() {
			return {
				isCollapse: false,
				canClick: true,
				activeValue:'',
				menuJson:menuJson
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

			},
			//根据路由路径判断当前打开的是哪个路由
			checkPath(){
				//针对路径可能是带路由参数的情况，所以统一处理
				let arr = this.$route.path.split('/')
				//判断路由2级以上
				if(arr.length > 2){
					this.activeValue =  '/'+arr[1]+'/'+arr[2];
				}
			}
		},
		watch:{
			'$route.path':'checkPath'
		},
		mounted(){
			//进入页面初始第一次检查
			this.checkPath();
		}
	}
</script>

<style lang="scss">
	.side-menu {
		float: left;
		height: 100%;
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
					background:#e2e2e2;
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