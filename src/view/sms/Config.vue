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
					<el-button type="danger" @click='addInfo.isOpen = true'>新增</el-button>
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
				<el-table-column align='center' label="操作" width='140px'>
					<template slot-scope="scope">
						<template v-if='scope.row.status === 1'>
							<el-button size="mini" type="primary" icon="el-icon-edit" plain @click='openChange(scope.row)'>修改</el-button>
						</template>
						<template v-if='scope.row.status === 3'>
							<el-button size="mini" type="danger" plain @click='openReason(scope.row)'>查看不过理由</el-button>
						</template>
					</template>
				</el-table-column>
			</el-table>
		</ContentWarp>
		<!--<ContentWarp class='center'>
			<el-pagination :page-size="10" layout="total, prev, pager, next, jumper" :total="126">
			</el-pagination>
		</ContentWarp>-->

		<!--新增窗口-->
		<el-dialog title="新增模板" width='600px' center :visible.sync='addInfo.isOpen' :show-close='false'>
			<el-form :model="addInfo.form" ref='formByAdd' :rules="rules" label-width="80px">
				<el-form-item label="所属公司" prop='companyCode'>
					<SelectCompany v-model="addInfo.form.companyCode"></SelectCompany>
					<div class="disNone">
						<el-input type='text' v-model="addInfo.form.companyCode"></el-input>
					</div>
				</el-form-item>
				<el-form-item label="产品">
					<el-input type='text' value='微农贷' disabled></el-input>
				</el-form-item>
				<el-form-item label="场景" prop='sceneId'>
					<el-select v-model='addInfo.form.sceneId' placeholder="请选择" clearable>
						<el-option v-for='(option,index) of sceneList' :key='index+1' :label='option' :value='index+1'></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="扩展字段" prop='senceExt'>
					<el-input type='text' v-model="addInfo.form.senceExt"></el-input>
				</el-form-item>
				<el-form-item label="备注" prop='remark'>
					<el-input type='text' v-model="addInfo.form.remark"></el-input>
				</el-form-item>
				<el-form-item label="发送方式" prop='sendType'>
					<el-radio-group v-model="addInfo.form.sendType">
						<el-radio :label="1">短信</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="发送对象" prop='targetType'>
					<el-radio-group v-model="addInfo.form.targetType">
						<el-radio :label="1">借款人</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="短信签名" prop='msgSign'>
					<el-input type='text' v-model="addInfo.form.msgSign"></el-input>
				</el-form-item>
				<el-form-item label="短信模板" prop='templateContent'>
					<el-input type='textarea' v-model="addInfo.form.templateContent" :rows='3'></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="sendAddAjax('formByAdd')">新 增</el-button>
				<el-button @click="resetAddInfo">取 消</el-button>
			</div>
		</el-dialog>
		
		<!--修改窗口-->
		<el-dialog title="修改模板" width='600px' center :visible.sync='changeInfo.isOpen' :show-close='false'>
			<el-form :model="changeInfo.form" ref='formByChange' :rules="rules" label-width="80px">
				<el-form-item label="所属公司" prop='companyCode'>
					<SelectCompany v-model="changeInfo.form.companyCode"></SelectCompany>
					<div class="disNone">
						<el-input type='text' v-model="changeInfo.form.companyCode"></el-input>
					</div>
				</el-form-item>
				<el-form-item label="产品">
					<el-input type='text' value='微农贷' disabled></el-input>
				</el-form-item>
				<el-form-item label="场景" prop='sceneId'>
					<el-select v-model='changeInfo.form.sceneId' placeholder="请选择" clearable>
						<el-option v-for='(option,index) of sceneList' :key='index+1' :label='option' :value='index+1'></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="扩展字段" prop='senceExt'>
					<el-input type='text' v-model="changeInfo.form.senceExt"></el-input>
				</el-form-item>
				<el-form-item label="备注" prop='remark'>
					<el-input type='text' v-model="changeInfo.form.remark"></el-input>
				</el-form-item>
				<el-form-item label="发送方式" prop='sendType'>
					<el-radio-group v-model="changeInfo.form.sendType">
						<el-radio :label="1">短信</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="发送对象" prop='targetType'>
					<el-radio-group v-model="changeInfo.form.targetType">
						<el-radio :label="1">借款人</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="短信签名" prop='msgSign'>
					<el-input type='text' v-model="changeInfo.form.msgSign"></el-input>
				</el-form-item>
				<el-form-item label="短信模板" prop='templateContent'>
					<el-input type='textarea' v-model="changeInfo.form.templateContent" :rows='3'></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="sendChangeAjax('formByChange')">修 改</el-button>
				<el-button @click="resetChangeInfo">取 消</el-button>
			</div>
		</el-dialog>
		
		<!-- 查看不过理由 -->
		<el-dialog title="不过理由" width='600px' center :visible.sync='reasonInfo.isOpen' :show-close='false'>
			<p class="text-center">{{reasonInfo.form.verifyFailReason}}</p>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="reasonInfo.isOpen = false">关 闭</el-button>
			</div>
		</el-dialog>
		
	</el-main>
</template>

<script>
	import config from './config';
	export default config;
</script>