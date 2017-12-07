<template>
	<el-main>
		<Breadcrumb></Breadcrumb>
		<SearchWarp>
			<el-form :inline="true" ref="searchInfo.form" :model="searchInfo.form">
				<el-form-item label="角色名称">
					<el-input v-model="searchInfo.form.name" placeholder="请输入角色名称"></el-input>
				</el-form-item>
				<el-form-item label="分类">
					<el-select v-model="searchInfo.form.type" placeholder="请选择" clearable>
						<el-option v-for="(option,index) in typeList" :key="option" :label="option" :value="index">
						</el-option>
					</el-select>
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
				<el-table-column align='center' label="角色名称" prop='name' min-width='160' />
				<el-table-column align='center' label="分类" prop='type' :formatter='formatValue' />
				<el-table-column align='center' label="资料等级" prop='hideLevel' />
				<el-table-column align='center' label="操作" width='260px' >
					<template slot-scope="scope">
						<el-button size="mini" type="primary" icon="el-icon-edit" plain @click='openChange(scope.row)'>修改</el-button>
						<el-button size="mini" type="success" plain @click='$router.push("/group/role/power/"+scope.row.id)'>分配权限</el-button>
					</template>
				</el-table-column>
			</el-table>
		</ContentWarp>
		<ContentWarp class='center'>
			<el-pagination :page-size="10" layout="total, prev, pager, next, jumper" :total="126">
			</el-pagination>
		</ContentWarp>
		
		<!--新增窗口-->
		<el-dialog title="新增角色" width='600px' center :visible.sync='addInfo.isOpen' :show-close='false'>
			<el-form :model="addInfo.form" ref='formByAdd' :rules="rules" label-width="100px">
				<el-form-item label="角色名称" prop='name'>
					<el-input v-model="addInfo.form.name" placeholder="请输入角色名称"></el-input>
				</el-form-item>
				<el-form-item label="分类" prop='type'>
					<el-select v-model="addInfo.form.type" placeholder="请选择" clearable>
						<el-option v-for="(option,index) in typeList" :key="option" :label="option" :value="index">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="资料等级" prop='hideLevel'>
					<el-input-number v-model="addInfo.form.hideLevel" :min="0" :max="100"></el-input-number>
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
				<el-form-item label="角色名称" prop='name'>
					<el-input v-model="changeInfo.form.name" placeholder="请输入"></el-input>
				</el-form-item>
				<el-form-item label="分类" prop='type'>
					<el-select v-model="changeInfo.form.type" placeholder="请选择" clearable>
						<el-option v-for="(option,index) in typeList" :key="option" :label="option" :value="index">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="资料等级" prop='hideLevel'>
					<el-input-number v-model="changeInfo.form.hideLevel" :min="0" :max="100"></el-input-number>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="sendChangeAjax('formByChange')">修 改</el-button>
				<el-button @click="resetChangeInfo">取 消</el-button>
			</div>
		</el-dialog>
		
	</el-main>
</template>
<script>
	import role from './role';
	export default role;
</script>