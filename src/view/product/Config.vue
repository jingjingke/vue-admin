<template>
	<el-main>
		<Breadcrumb></Breadcrumb>
		<SearchWarp>
			<el-form :inline="true" ref="searchInfo.form" :model="searchInfo.form">
				<el-form-item label="产品名称">
					<el-input type='text' v-model="searchInfo.form.name" placeholder='请输入产品名称'></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="success" @click="getListAjax">查询</el-button>
					<el-button type="danger" @click='addInfo.isOpen = true'>新增</el-button>
				</el-form-item>
			</el-form>
		</SearchWarp>
		<ContentWarp>
			<el-table border stripe :data='searchInfo.list' size='small'>
				<el-table-column align='center' label="产品名称" prop='name' min-width='150' />
				<el-table-column align='center' label="产品码" prop='code' min-width='100' />
				<el-table-column align='center' label="模型ID" prop='modelId' min-width='100' />
				<el-table-column align='center' label="状态" prop='status' :formatter='formatValue' min-width='60' />
				<el-table-column align='center' label="操作" width='200'>
					<template slot-scope="scope">
						<el-button size="mini" type="primary" icon="el-icon-edit" plain @click='openChange(scope.row)'>修改</el-button>
						<el-button size="mini" :type="scope.row.status===0?'success':'danger'" plain @click='openStatus(scope.row)'>{{scope.row.status===0?'启用':'禁用'}}</el-button>
					</template>
				</el-table-column>
			</el-table>
		</ContentWarp>
		<!--<ContentWarp class='center'>
			<el-pagination :page-size="10" layout="total, prev, pager, next, jumper" :total="126">
			</el-pagination>
		</ContentWarp>-->
		
		<!--新增窗口-->
		<el-dialog title="新增产品" width='600px' center :visible.sync='addInfo.isOpen' :show-close='false'>
			<el-form :model="addInfo.form" ref='formByAdd' :rules="rules" label-width="100px">
				<el-form-item label="产品名称" prop='name'>
					<el-input v-model="addInfo.form.name"></el-input>
				</el-form-item>
				<el-form-item label="产品码" prop='code'>
					<el-input v-model="addInfo.form.code"></el-input>
				</el-form-item>
				<el-form-item label="模型ID" prop='modelId'>
					<el-input v-model="addInfo.form.modelId"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="sendAddAjax('formByAdd')">新 增</el-button>
				<el-button @click="resetAddInfo">取 消</el-button>
			</div>
		</el-dialog>
		
		<!--修改窗口-->
		<el-dialog title="修改产品" width='600px' center :visible.sync='changeInfo.isOpen' :show-close='false'>
			<el-form :model="changeInfo.form" ref='formByChange' :rules="rules" label-width="100px">
				<el-form-item label="产品名称" prop='name'>
					<el-input v-model="changeInfo.form.name"></el-input>
				</el-form-item>
				<el-form-item label="产品码" prop='code'>
					<el-input v-model="changeInfo.form.code" disabled></el-input>
				</el-form-item>
				<el-form-item label="模型ID" prop='modelId'>
					<el-input v-model="changeInfo.form.modelId" disabled></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="sendChangeAjax('formByChange')">修 改</el-button>
				<el-button @click="resetChangeInfo">取 消</el-button>
			</div>
		</el-dialog>
		
		<!--禁用或启用窗口-->
		<el-dialog :title="statusInfo.form.status==='1'?'启用':'禁用'" width='600px' center :visible.sync='statusInfo.isOpen' :show-close='false'>
			<p class="text-center">确定{{statusInfo.form.status==='1'?'启用':'禁用'}}<span class="text-red"> {{statusInfo.form.name}} </span>吗？</p>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="sendStatusAjax">确 认</el-button>
				<el-button @click="statusInfo.isOpen = false">取 消</el-button>
			</div>
		</el-dialog>
		
	</el-main>
</template>

<script>
	import config from './config';
	export default config;
</script>