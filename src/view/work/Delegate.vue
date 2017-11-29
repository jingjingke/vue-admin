<template>
	<el-main>
		<Breadcrumb></Breadcrumb>
		<SearchWarp>
			<el-form :inline="true" ref="searchInfo.form" :model="searchInfo.form">
				<el-form-item label="所属产品">
					<SelectProduct v-model="searchInfo.form.productCode"></SelectProduct>
				</el-form-item>
				<el-form-item label="所属公司">
					<SelectCompany v-model="searchInfo.form.companyCode"></SelectCompany>
				</el-form-item>
				<el-form-item label="所属流程">
					<SelectProcess v-model="searchInfo.form.processId"></SelectProcess>
				</el-form-item>
				<el-form-item>
					<el-button type="success" @click="getListAjax">查询</el-button>
					<el-button type="danger" @click='addInfo.isOpen = true'>新增</el-button>
				</el-form-item>
			</el-form>
		</SearchWarp>
		<ContentWarp>
			<el-table border stripe :data='searchInfo.list' size='small'>
				<el-table-column align='center' label="公司" prop='companyName' />
				<el-table-column align='center' label="产品名称" prop='productName' />
				<el-table-column align='center' label="流程名称" prop='processName' />
				<el-table-column align='center' label="被指派角色" prop='assignedRole.name' />
				<el-table-column align='center' label="指派方式" prop='type' :formatter='formatValue' />
				<el-table-column align='center' label="指派角色" prop='roleName' :formatter='formatValue' />
				<el-table-column align='center' label="状态" prop='status' :formatter='formatValue' />
				<el-table-column align='center' label="操作">
					<template slot-scope="scope">
						<el-button size="mini" type="primary" icon="el-icon-edit" plain @click='openChange(scope.row)'>修改</el-button>
						<el-button size="mini" :type="scope.row.status===0?'success':'danger'" plain @click='openStatus(scope.row)'>{{scope.row.status===0?'启用':'禁用'}}</el-button>
					</template>
				</el-table-column>
			</el-table>
		</ContentWarp>
		<ContentWarp class='center'>
			<el-pagination :page-size="10" layout="total, prev, pager, next, jumper" :total="126">
			</el-pagination>
		</ContentWarp>

		<!--新增窗口-->
		<el-dialog title="新增委派规则" width='600px' center :visible.sync='addInfo.isOpen' :show-close='false' :before-close='resetAddInfo'>
			<el-form :model="addInfo.form" ref='formByAdd' :rules="rules" label-width="100px">
				<el-form-item label="选择公司" prop='companyCode'>
					<SelectCompany v-model="addInfo.form.companyCode"></SelectCompany>
					<div class="disNone">
						<el-input type='text' v-model="addInfo.form.companyCode"></el-input>
					</div>
				</el-form-item>
				<el-form-item label="选择产品" prop='productCode'>
					<SelectProduct v-model="addInfo.form.productCode"></SelectProduct>
					<div class="disNone">
						<el-input type='text' v-model="addInfo.form.productCode"></el-input>
					</div>
				</el-form-item>
				<el-form-item label="选择流程" prop='processId'>
					<SelectProcess v-model="addInfo.form.processId"></SelectProcess>
					<div class="disNone">
						<el-input type='text' v-model="addInfo.form.processId"></el-input>
					</div>
				</el-form-item>
				<el-form-item label="被指派角色" prop='assignedRoleId'>
					<SelectRole v-model="addInfo.form.assignedRoleId"></SelectRole>
					<div class="disNone">
						<el-input type='text' v-model="addInfo.form.assignedRoleId"></el-input>
					</div>
				</el-form-item>
				<el-form-item label="指派方式" prop='type'>
					<el-radio-group v-model="addInfo.form.type">
						<el-radio label="1">自动</el-radio>
						<el-radio label="2">人工</el-radio>
					</el-radio-group>
				</el-form-item>
				<template v-if='addInfo.form.type==="2"'>
					<el-form-item label="指派角色" prop='roleId'>
						<SelectRole v-model="addInfo.form.roleId"></SelectRole>
						<div class="disNone">
							<el-input type='text' v-model="addInfo.form.roleId"></el-input>
						</div>
					</el-form-item>
				</template>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="sendAddAjax('formByAdd')">新 增</el-button>
				<el-button @click="resetAddInfo">取 消</el-button>
			</div>
		</el-dialog>
			
		<!--修改窗口-->
		<el-dialog title="修改委派规则" width='600px' center :visible.sync='changeInfo.isOpen' :show-close='false' :before-close='resetChangeInfo'>
			<el-form :model="changeInfo.form" ref='formByChange' :rules="rules" label-width="100px">
				<el-form-item label="选择公司" prop='companyCode'>
					<SelectCompany v-model="changeInfo.form.companyCode"></SelectCompany>
					<div class="disNone">
						<el-input type='text' v-model="changeInfo.form.companyCode"></el-input>
					</div>
				</el-form-item>
				<el-form-item label="选择产品" prop='productCode'>
					<SelectProduct v-model="changeInfo.form.productCode"></SelectProduct>
					<div class="disNone">
						<el-input type='text' v-model="changeInfo.form.productCode"></el-input>
					</div>
				</el-form-item>
				<el-form-item label="选择流程" prop='processId'>
					<SelectProcess v-model="changeInfo.form.processId"></SelectProcess>
					<div class="disNone">
						<el-input type='text' v-model="changeInfo.form.processId"></el-input>
					</div>
				</el-form-item>
				<el-form-item label="被指派角色" prop='assignedRoleId'>
					<SelectRole v-model="changeInfo.form.assignedRoleId"></SelectRole>
					<div class="disNone">
						<el-input type='text' v-model="changeInfo.form.assignedRoleId"></el-input>
					</div>
				</el-form-item>
				<el-form-item label="指派方式" prop='type'>
					<el-radio-group v-model="changeInfo.form.type">
						<el-radio label="1">自动</el-radio>
						<el-radio label="2">人工</el-radio>
					</el-radio-group>
				</el-form-item>
				<template v-if='changeInfo.form.type==="2"'>
					<el-form-item label="指派角色" prop='roleId'>
						<SelectRole v-model="changeInfo.form.roleId"></SelectRole>
						<div class="disNone">
							<el-input type='text' v-model="changeInfo.form.roleId"></el-input>
						</div>
					</el-form-item>
				</template>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="sendChangeAjax('formByChange')">修 改</el-button>
				<el-button @click="resetChangeInfo">取 消</el-button>
			</div>
		</el-dialog>
		
		<!--禁用或启用窗口-->
		<el-dialog :title="statusInfo.form.status==='1'?'启用':'禁用'" width='600px' center :visible.sync='statusInfo.isOpen' :show-close='false'>
			<p class="text-center">确定{{statusInfo.form.status==='1'?'启用':'禁用'}}<span class="text-red"> {{statusInfo.form.companyName}} </span>-<span class="text-red"> {{statusInfo.form.productName}} </span>下<br><template v-if='statusInfo.form.assignedRole !== undefined'><span class="text-red"> {{statusInfo.form.assignedRole.name}} </span></template>的<span class="text-red"> {{statusInfo.form.type==="0"?"人工分配":"自动派发"}} </span>吗？</p>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="sendStatusAjax">确 认</el-button>
				<el-button @click="statusInfo.isOpen = false">取 消</el-button>
			</div>
		</el-dialog>

	</el-main>
</template>

<script>
	import delegate from './delegate';
	export default delegate;
</script>