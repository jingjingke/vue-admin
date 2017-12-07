<template>
	<el-main>
		<Breadcrumb></Breadcrumb>
		<ContentWarp>
			<el-row :gutter="20">
				<el-col :span="4">
					<el-form>
						<el-form-item>
							<el-button plain>管理顶级权限</el-button>
						</el-form-item>
					</el-form>
					<el-tree :data="powerTree" :props="{children: 'children',label: 'name'}" accordion @node-click="handleNodeClick"></el-tree>
				</el-col>
				<el-col :span="20">
					<div class="power-add-title">
						顶级权限
						<el-button type='danger' @click='addInfo.isOpen = true'>新 增</el-button>
					</div>
					<el-table border stripe :data='searchInfo.list' size='small'>
						<el-table-column align='center' label="权限名称" prop='name' min-width='160px' fixed />
						<el-table-column align='center' label="项目路径" prop='projectPath' min-width='300px' />
						<el-table-column align='center' label="绝对路径" prop='url' min-width='240px' />
						<el-table-column align='center' label="链接" prop='href' min-width='240px' />
						<el-table-column align='center' label="排序" prop='seq' width='60' />
						<el-table-column align='center' label="类型" prop='type' :formatter='formatValue' width='100' />
						<el-table-column align='center' label="操作" min-width='200px'>
							<template slot-scope="scope">
								<el-button size="mini" type="primary" icon="el-icon-edit" plain @click='openChange(scope.row)'>修改</el-button>
								<el-button size="mini" type="danger" plain @click='openDelete(scope.row)'>删除</el-button>
							</template>
						</el-table-column>
					</el-table>
				</el-col>
			</el-row>
		</ContentWarp>
		
		
		<!--新增窗口-->
		<el-dialog title="新增权限" width='600px' center :visible.sync='addInfo.isOpen' :show-close='false'>
			<el-form :model="addInfo.form" ref='formByAdd' :rules="rules" label-width="100px">
				<el-form-item label="权限名称" prop='name'>
					<el-input v-model="addInfo.form.name"></el-input>
				</el-form-item>
				<el-form-item label="项目路径" prop='projectPath'>
					<el-input v-model="addInfo.form.projectPath"></el-input>
				</el-form-item>
				<el-form-item label="绝对路径" prop='url'>
					<el-input v-model="addInfo.form.url"></el-input>
				</el-form-item>
				<el-form-item label="链接" prop='href'>
					<el-input v-model="addInfo.form.href"></el-input>
				</el-form-item>
				<el-form-item label="排序" prop='seq'>
					<el-input-number v-model="addInfo.form.seq" :min="0" :max="100"></el-input-number>
				</el-form-item>
				<el-form-item label="类型" prop='type'>
					<el-select v-model="addInfo.form.type" clearable placeholder="请选择">
						<el-option v-for="(option,index) in typeList" :key='index' :label="option" :value='index'></el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="sendAddAjax('formByAdd')">新 增</el-button>
				<el-button @click="resetAddInfo">取 消</el-button>
			</div>
		</el-dialog>
		
		
		<!--修改窗口-->
		<el-dialog title="修改权限" width='600px' center :visible.sync='changeInfo.isOpen' :show-close='false'>
			<el-form :model="changeInfo.form" ref='formByChange' :rules="rules" label-width="100px">
				<el-form-item label="权限名称" prop='name'>
					<el-input v-model="changeInfo.form.name"></el-input>
				</el-form-item>
				<el-form-item label="项目路径" prop='projectPath'>
					<el-input v-model="changeInfo.form.projectPath"></el-input>
				</el-form-item>
				<el-form-item label="绝对路径" prop='url'>
					<el-input v-model="changeInfo.form.url"></el-input>
				</el-form-item>
				<el-form-item label="链接" prop='href'>
					<el-input v-model="changeInfo.form.href"></el-input>
				</el-form-item>
				<el-form-item label="排序" prop='seq'>
					<el-input-number v-model="changeInfo.form.seq" :min="0" :max="100"></el-input-number>
				</el-form-item>
				<el-form-item label="类型" prop='type'>
					<el-select v-model="changeInfo.form.type" clearable placeholder="请选择">
						<el-option v-for="(option,index) in typeList" :key='index' :label="option" :value='index'></el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="sendChangeAjax('formByChange')">修 改</el-button>
				<el-button @click="resetChangeInfo">取 消</el-button>
			</div>
		</el-dialog>
		
		<!--删除按钮-->
		<el-dialog title="删除" width='600px' center :visible.sync='deleteInfo.isOpen' :show-close='false'>
			<p class="text-center">确定删除<span class="text-red"> {{deleteInfo.form.name}} </span>吗？</p>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="sendDeleteAjax">确 认</el-button>
				<el-button @click="deleteInfo.isOpen = false">取 消</el-button>
			</div>
		</el-dialog>
		
	</el-main>
</template>

<script>
	import power from './power.js';
	export default power;
</script>

<style lang="scss">
	.power-add-title {
		font-size: 18px;
		font-weight: bold;
		padding-bottom: 32px;
		.el-button {
			float: right;
		}
	}
</style>