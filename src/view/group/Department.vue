<template>
	<el-main>
		<Breadcrumb></Breadcrumb>
		<SearchWarp>
			<el-form :inline="true" ref="searchInfo.form" :model="searchInfo.form">
				<el-form-item label="部门名称">
					<el-input v-model="searchInfo.form.name" placeholder="请输入部门名称"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="success" @click="getListAjax">查询</el-button>
					<el-button type="danger" @click='addInfo.isOpen = true'>新增</el-button>
				</el-form-item>
			</el-form>
		</SearchWarp>
		<ContentWarp>
			<el-table border stripe :data='searchInfo.list' size='small'>
				<el-table-column align='center' label="ID" prop='id' width='80' />
				<el-table-column align='center' label="部门名称" prop='name' min-width='160' />
				<el-table-column align='center' label="部门描述" prop='description' min-width='300' />
				<el-table-column align='center' label="操作" width='260px' >
					<template slot-scope="scope">
						<el-button size="mini" type="primary" icon="el-icon-edit" plain @click='openChange(scope.row)'>修改</el-button>
						<el-button size="mini" type="danger" plain @click='openDelete(scope.row)'>删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</ContentWarp>
		<!--<ContentWarp class='center'>
			<el-pagination :page-size="10" layout="total, prev, pager, next, jumper" :total="126">
			</el-pagination>
		</ContentWarp>-->
		
		<!--新增窗口-->
		<el-dialog title="新增部门" width='600px' center :visible.sync='addInfo.isOpen' :show-close='false'>
			<el-form :model="addInfo.form" ref='formByAdd' :rules="rules" label-width="100px">
				<el-form-item label="部门名称" prop='name'>
					<el-input v-model="addInfo.form.name"></el-input>
				</el-form-item>
				<el-form-item label="部门职责" prop='description'>
					<el-input type='textarea' v-model="addInfo.form.description"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="sendAddAjax('formByAdd')">新 增</el-button>
				<el-button @click="resetAddInfo">取 消</el-button>
			</div>
		</el-dialog>
		
		<!--修改窗口-->
		<el-dialog title="修改角色" width='600px' center :visible.sync='changeInfo.isOpen' :show-close='false'>
			<el-form :model="changeInfo.form" ref='formByChange' :rules="rules" label-width="100px">
				<el-form-item label="部门名称" prop='name'>
					<el-input v-model="changeInfo.form.name"></el-input>
				</el-form-item>
				<el-form-item label="部门职责" prop='description'>
					<el-input type='textarea' v-model="changeInfo.form.description"></el-input>
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
	import department from './department';
	export default department;
</script>