<template>
	<el-main>
		<Breadcrumb></Breadcrumb>
		<SearchWarp>
			<el-form :inline="true" ref="searchInfo.form" :model="searchInfo.form">
				<el-form-item label="公司">
					<SelectCompany v-model="searchInfo.form.companyCode"></SelectCompany>
				</el-form-item>
				<el-form-item label="场景">
					<el-select v-model='searchInfo.form.sceneId' placeholder="请选择" clearable>
						<el-option v-for='(option,index) of sceneList' :key='index+1' :label='option' :value='index+1'></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="状态">
					<el-select v-model='searchInfo.form.status' placeholder="请选择" clearable>
						<el-option v-for='(option,index) of statusList' :key='index+1' :label='option' :value='index+1'></el-option>
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-button type="success" @click="getListAjax">查询</el-button>
				</el-form-item>
			</el-form>
		</SearchWarp>
		<ContentWarp>
			<el-table border stripe :data='searchInfo.list' size='small'>
				<el-table-column align='center' label="公司" prop='companyName' min-width='320' />
				<el-table-column align='center' label="场景" prop='sceneId' :formatter='formatValue' width='70' />
				<el-table-column align='center' label="扩展字段" prop='senceExt' width='120' />
				<el-table-column align='center' label="短信模版" prop='templateContent' min-width='360' />
				<el-table-column align='center' label="状态" prop='status' :formatter='formatValue' width='100' />
				<el-table-column align='center' label="操作" width='180px'>
					<template slot-scope="scope">
						<el-button size="mini" type="success" plain @click='openPass(scope.row)'>通过</el-button>
						<el-button size="mini" type="danger" plain @click='openFail(scope.row)'>不通过</el-button>
					</template>
				</el-table-column>
			</el-table>
		</ContentWarp>
		<!--<ContentWarp class='center'>
			<el-pagination :page-size="10" layout="total, prev, pager, next, jumper" :total="126">
			</el-pagination>
		</ContentWarp>-->

		<!--不通过-->
		<el-dialog title="不通过理由" width='600px' center :visible.sync='failInfo.isOpen' :show-close='false'>
			<el-form :model="failInfo.form" ref='formByFail' :rules="rules">
				<el-form-item prop='verifyFailReason'>
					<el-input type='textarea' v-model="failInfo.form.verifyFailReason" placeholder="请输入不通过理由"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="sendFailAjax('formByFail')">确 定</el-button>
				<el-button @click="resetFailInfo">取 消</el-button>
			</div>
		</el-dialog>
		
		<!--通过-->
		<el-dialog title="通过" width='600px' center :visible.sync='passInfo.isOpen' :show-close='false'>
			<el-form :model="passInfo.form" ref='formByPass' :rules="rules" label-width="100px">
				<el-form-item label="公司">
					<el-input type='text' v-model="passInfo.form.companyName" disabled></el-input>
				</el-form-item>
				<el-form-item label="产品">
					<el-input type='text' v-model="passInfo.form.productName" disabled></el-input>
				</el-form-item>
				<el-form-item label="场景">
					<el-input type='text' :value="sceneList[passInfo.form.sceneId-1]" disabled></el-input>
				</el-form-item>
				<el-form-item label="扩展字段" prop='senceExt'>
					<el-input type='text' v-model="passInfo.form.senceExt"></el-input>
				</el-form-item>
				<el-form-item label="短信签名" prop='msgSign'>
					<el-input type='text' v-model="passInfo.form.msgSign"></el-input>
				</el-form-item>
				<el-form-item label="短信模板" prop='templateContent'>
					<el-input type='textarea' v-model="passInfo.form.templateContent"></el-input>
				</el-form-item>
				<el-form-item label="任务名称" prop='taskName'>
					<el-input type='text' v-model="passInfo.form.taskName"></el-input>
				</el-form-item>
				<el-form-item label="时间表达式" prop='taskCron'>
					<el-input type='text' v-model="passInfo.form.taskCron"></el-input>
				</el-form-item>
				<el-form-item label="调用url" prop='taskUrl'>
					<el-input type='text' v-model="passInfo.form.taskUrl"></el-input>
				</el-form-item>
				<el-form-item label="任务描述" prop='taskDesc'>
					<el-input type='textarea' v-model="passInfo.form.taskDesc"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="sendPassAjax('formByPass')">确 认</el-button>
				<el-button @click="resetPassInfo">取 消</el-button>
			</div>
		</el-dialog>
		
	</el-main>
</template>

<script>
	import review from './review';
	export default review;
</script>