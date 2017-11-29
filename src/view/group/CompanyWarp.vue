<template>
	<el-main>
		<Breadcrumb></Breadcrumb>
		<ContentWarp>
			<el-row :gutter="20">
				<el-col :span="4">
					<el-form>
						<el-form-item>
							<el-button plain>一键生成推广二维码</el-button>
						</el-form-item>
					</el-form>
					<el-tree :data="companyTree" :props="{children: 'children',label: 'name'}" accordion @node-click="handleNodeClick"></el-tree>
				</el-col>
				<router-view/>
			</el-row>
		</ContentWarp>
	</el-main>
</template>

<script>
	import companyTree from '@/data/all/companyTree.json';

	export default {
		data() {
			return {
				companyTree: companyTree,
			}
		},
		methods: {
			handleNodeClick(data) {
				console.log('点击了公司：'+data.name+'ID为：'+data.id);
			}
		}
	}
</script>

<style lang='scss'>
	.company-big-title {
		font-size: 18px;
		font-weight: bold;
		span {
			font-size: 16px;
			font-weight: normal;
			color: #555;
		}
	}
	
	.company-little-title {
		font-size: 16px;
		margin-top: 10px;
		line-height: 3em;
		&>span {
			color: #ccc;
			padding-right: 5px;
		}
		.el-button {
			margin-left: 10px;
		}
	}
	
	.company-has-address {
		span {
			font-size: 12px;
			padding: 5px 10px;
			border: 1px solid #e8e8e8;
			border-radius: 20px;
			margin-right: 5px;
		}
	}
</style>