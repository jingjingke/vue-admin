<template>
	<el-breadcrumb separator="/">
		<el-breadcrumb-item :to="{path:'/'+startRoute}">{{startName}}</el-breadcrumb-item>
		<el-breadcrumb-item>{{endName}}</el-breadcrumb-item>
		<slot></slot>
	</el-breadcrumb>
</template>

<script>
	//导入菜单
	import menuJson from '@/data/menus';
	
	export default {
		name:'Breadcrumb',
		data(){
			return {
				startName:'',
				startRoute:'',
				endName:''
			}
		},
		methods:{
			//根据路由路径判断当前打开属于哪个菜单
			checkPath(){
				//获取路径数组
				let arr = this.$route.path.split('/');
				let path = '/'+arr[1]+'/'+arr[2];
				//循环菜单取得当前菜单位置
				//判断菜单的数组不为空
				if(menuJson.length > 0){
					menuJson.forEach((item)=>{
						//判断它的子有内容
						if(item.children.length > 0){
							item.children.forEach((list)=>{
								if(list.route === path){
									this.startName = item.name;
									this.startRoute = arr[1];
									this.endName = list.name;
								}
							})
						}
					})
				}
			}
		},
		mounted(){
			this.checkPath()
		}
	}
</script>