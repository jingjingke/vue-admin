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
		
		<!--新增窗口-->
		<el-dialog title="新增资料" width='600px' center :visible.sync='addInfo.isOpen' :show-close='false'>
			<el-form :model="addInfo.form" ref='formByAdd' :rules="rules" label-width="120px">
				<el-form-item label="资料名称" prop='name'>
					<el-input v-model="addInfo.form.name"></el-input>
				</el-form-item>
				<el-form-item label="排序" prop='seq'>
					<el-input-number v-model="addInfo.form.seq" :min="0" :max="100"></el-input-number>
				</el-form-item>
				<el-form-item label="有数据时才显示" prop='isShow'>
					<el-radio-group v-model="addInfo.form.isShow">
						<el-radio :label="1">是</el-radio>
						<el-radio :label="0">否</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="是否最终节点" prop='isFinish'>
					<el-radio-group v-model="addInfo.form.isFinish">
						<el-radio :label="1">是</el-radio>
						<el-radio :label="0">否</el-radio>
					</el-radio-group>
				</el-form-item>
				<template v-if='addInfo.form.isFinish === 1'>
					<el-form-item label="图标URL" prop='uri'>
						<el-input v-model="addInfo.form.uri"></el-input>
					</el-form-item>
					<el-form-item label="模板ID" prop='templateId'>
						<el-input v-model="addInfo.form.templateId"></el-input>
					</el-form-item>
					<el-form-item label="是否必填" prop='isMust'>
						<el-radio-group v-model="addInfo.form.isMust">
							<el-radio :label="0">是</el-radio>
							<el-radio :label="1">否</el-radio>
						</el-radio-group>
					</el-form-item>
					<template v-if='addInfo.form.isMust===0'>
						<el-form-item label="资料等级" prop='hideLevel'>
							<el-input-number v-model="addInfo.form.hideLevel" :min="1" :max="10"></el-input-number>
						</el-form-item>
					</template>
				</template>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="sendAddAjax('formByAdd')">新 增</el-button>
				<el-button @click="resetAddInfo">取 消</el-button>
			</div>
		</el-dialog>
		
		<!--修改窗口-->
		<el-dialog title="修改资料" width='600px' center :visible.sync='changeInfo.isOpen' :show-close='false'>
			<el-form :model="changeInfo.form" ref='formByChange' :rules="rules" label-width="120px">
				<el-form-item label="资料名称" prop='name'>
					<el-input v-model="changeInfo.form.name"></el-input>
				</el-form-item>
				<el-form-item label="排序" prop='seq'>
					<el-input-number v-model="changeInfo.form.seq" :min="0" :max="100"></el-input-number>
				</el-form-item>
				<el-form-item label="有数据时才显示" prop='isShow'>
					<el-radio-group v-model="changeInfo.form.isShow">
						<el-radio :label="1">是</el-radio>
						<el-radio :label="0">否</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="是否最终节点" prop='isFinish'>
					<el-radio-group v-model="changeInfo.form.isFinish">
						<el-radio :label="1">是</el-radio>
						<el-radio :label="0">否</el-radio>
					</el-radio-group>
				</el-form-item>
				<template v-if='changeInfo.form.isFinish === 1'>
					<el-form-item label="图标URL" prop='uri'>
						<el-input v-model="changeInfo.form.uri"></el-input>
					</el-form-item>
					<el-form-item label="模板ID" prop='templateId'>
						<el-input v-model="changeInfo.form.templateId"></el-input>
					</el-form-item>
					<el-form-item label="是否必填" prop='isMust'>
						<el-radio-group v-model="changeInfo.form.isMust">
							<el-radio :label="0">是</el-radio>
							<el-radio :label="1">否</el-radio>
						</el-radio-group>
					</el-form-item>
					<template v-if='changeInfo.form.isMust===0'>
						<el-form-item label="资料等级" prop='hideLevel'>
							<el-input-number v-model="changeInfo.form.hideLevel" :min="1" :max="10"></el-input-number>
						</el-form-item>
					</template>
				</template>
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
	import material from './material';
	export default material;
</script>