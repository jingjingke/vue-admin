<template>
	<el-main>
		<Breadcrumb></Breadcrumb>
		<ContentWarp>
			<el-row :gutter="20">
				<el-col :span="4">
					<el-tree :data="materialTree" :props="{children: 'children',label: 'name'}" accordion @node-click="handleNodeClick"></el-tree>
				</el-col>
				<el-col :span="20">
					<div class="content-right-title">
						{{list.title}}
						<template v-if='list.title !== "微农贷1.0"'>
							<el-button type='danger' @click='addInfo.isOpen = true'>新 增</el-button>
						</template>
					</div>
					<el-table border stripe :data='list.data' size='small'>
						<el-table-column align='center' label="资料名称" prop='name' min-width='160px' fixed />
						<template v-if='list.title !== "微农贷1.0"'>
							<el-table-column align='center' label="最终节点" prop='isFinish' :formatter='formatValue' />
							<el-table-column align='center' label="排序" prop='seq' />
							<el-table-column align='center' label="显示" prop='isShow' :formatter='formatValue'/>
						</template>
						<template v-if='list.isFinish'>
							<el-table-column align='center' label="是否必填" prop='isMust' :formatter='formatValue' />
							<el-table-column align='center' label="资料等级" prop='hideLevel' />
							<el-table-column align='center' label="模板ID" prop='templateId' />
						</template>
						</el-table-column>
						<template v-if='list.title !== "微农贷1.0"'>
							<el-table-column align='center' label="操作" width='200px'>
								<template slot-scope="scope">
									<el-button size="mini" type="primary" icon="el-icon-edit" plain @click='openChange(scope.row)'>修改</el-button>
									<el-button size="mini" type="danger" plain @click='openDelete(scope.row)'>删除</el-button>
								</template>
							</el-table-column>
						</template>
					</el-table>
				</el-col>
			</el-row>
		</ContentWarp>
	</el-main>
</template>

<script>
	import material from './material';
	export default material;
</script>