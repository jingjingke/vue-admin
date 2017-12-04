<template>
	<el-col :span="20">
		<div class="company-big-title">员工管理（<span>{{companyData.name}}</span>）</div>
		<SearchWarp>
			<el-form :inline="true" ref="searchInfo.form" :model="searchInfo.form">
				<el-form-item>
					<el-button type="primary" plain @click="$router.push('/group/company')">返回公司管理</el-button>
				</el-form-item>
				<el-form-item label="姓名">
					<el-input v-model="searchInfo.form.name" placeholder="请输入员工姓名"></el-input>
				</el-form-item>
				<el-form-item label="手机号">
					<el-input v-model="searchInfo.form.photo" placeholder="请输入手机号码"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="success" @click="getListAjax">查询</el-button>
					<el-button type="danger" @click='addInfo.isOpen = true'>新增</el-button>
				</el-form-item>
			</el-form>
		</SearchWarp>
		<ContentWarp>
			<el-table border stripe :data='searchInfo.list' size='small'>
				<el-table-column align='center' label="姓名" prop='name' width='80' fixed />
				<el-table-column align='center' label="登录名" prop='loginAccount' width='120' fixed />
				<el-table-column align='center' label="ID" prop='id' width='50' />
				<el-table-column align='center' label="手机号" prop='phoneNo' width='110' />
				<el-table-column align='center' label="邮箱" prop='email' :formatter='formatValue' min-width='150px' />
				<el-table-column align='center' label="部门" prop='departmentName' width='100' />
				<el-table-column align='center' label="角色" prop='roleList' :formatter='formatValue' min-width='180px' />
				<el-table-column align='center' label="状态" prop='status' :formatter='formatValue' width='60' />
				<el-table-column align='center' label="创建时期" prop='createTime' :formatter='fomatTime' width='100' />
				<el-table-column align='center' label="操作" min-width='350px'>
					<template slot-scope="scope">
						<el-button size="mini" type="primary" icon="el-icon-edit" plain @click='openChange(scope.row)'>修改</el-button>
						<el-button size="mini" type="warning" plain @click='openPass(scope.row)'>重置密码</el-button>
						<el-button size="mini" :type="scope.row.status==='1'?'success':'danger'" plain @click='openStatus(scope.row)'>{{scope.row.status==='1'?'启用':'禁用'}}</el-button>
						<el-button size="mini" plain>二维码</el-button>
					</template>
				</el-table-column>
			</el-table>
		</ContentWarp>
		<ContentWarp class='center'>
			<el-pagination :page-size="10" layout="total, prev, pager, next, jumper" :total="126">
			</el-pagination>
		</ContentWarp>

		<!--新增窗口-->
		<el-dialog title="新增员工" width='600px' center :visible.sync='addInfo.isOpen' :show-close='false'>
			<el-form :model="addInfo.form" ref='formByAdd' :rules="rules" label-width="90px">
				<el-form-item label="登录名" prop='loginAccount'>
					<el-input type='text' v-model="addInfo.form.loginAccount"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop='password'>
					<el-input type='password' v-model="addInfo.form.password"></el-input>
				</el-form-item>
				<el-form-item label="姓名" prop='name'>
					<el-input type='text' v-model="addInfo.form.name"></el-input>
				</el-form-item>
				<el-form-item label="手机号" prop='phoneNo'>
					<el-input type='text' v-model="addInfo.form.phoneNo"></el-input>
				</el-form-item>
				<el-form-item label="邮箱">
					<el-input type='text' v-model="addInfo.form.email"></el-input>
				</el-form-item>
				<el-form-item label="所在部门" prop='departmentId'>
					<el-select v-model='addInfo.form.departmentId' clearable>
						<template v-for="option of departmentList">
							<el-option :label='option.name' :value='option.id'></el-option>
						</template>
					</el-select>
				</el-form-item>
				<el-form-item label="所属角色" prop='roleIdList'>
					<el-select v-model='addInfo.form.roleIdList' multiple>
						<template v-for="option of roleList">
							<el-option :label='option.name' :value='option.id'></el-option>
						</template>
					</el-select>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="sendAddAjax('formByAdd')">新 增</el-button>
				<el-button @click="resetAddInfo">取 消</el-button>
			</div>
		</el-dialog>

		<!--修改窗口-->
		<el-dialog title="修改员工" width='600px' center :visible.sync='changeInfo.isOpen' :show-close='false'>
			<el-form :model="changeInfo.form" ref='formByChange' :rules="rules" label-width="80px">
				<el-form-item label="登录名" prop='loginAccount'>
					<el-input type='text' v-model="changeInfo.form.loginAccount"></el-input>
				</el-form-item>
				<el-form-item label="姓名" prop='name'>
					<el-input type='text' v-model="changeInfo.form.name"></el-input>
				</el-form-item>
				<el-form-item label="手机号" prop='phoneNo'>
					<el-input type='text' v-model="changeInfo.form.phoneNo"></el-input>
				</el-form-item>
				<el-form-item label="邮箱">
					<el-input type='text' v-model="changeInfo.form.email"></el-input>
				</el-form-item>
				<el-form-item label="所在部门" prop='departmentId'>
					<el-select v-model='changeInfo.form.departmentId' clearable>
						<template v-for="option of departmentList">
							<el-option :label='option.name' :value='option.id'></el-option>
						</template>
					</el-select>
				</el-form-item>
				<el-form-item label="所属角色" prop='roleIdList'>
					<el-select v-model='changeInfo.form.roleIdList' multiple>
						<template v-for="option of roleList">
							<el-option :label='option.name' :value='option.id'></el-option>
						</template>
					</el-select>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="sendChangeAjax('formByChange')">修 改</el-button>
				<el-button @click="resetChangeInfo">取 消</el-button>
			</div>
		</el-dialog>
		
		<!--修改密码单独的窗口-->
		<el-dialog :title="'正在修改 ' + passInfo.data.name + ' 的密码'" width='600px' center :visible.sync='passInfo.isOpen' :show-close='false'>
			<el-form :model="passInfo.form" ref='formByPass' :rules="rules" label-width="80px">
				<el-form-item label="新密码" prop='password'>
					<el-input type='password' v-model="passInfo.form.password"></el-input>
				</el-form-item>
				<el-form-item label="再次确认" prop='password2'>
					<el-input type='password' v-model="passInfo.form.password2"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="sendPassAjax('formByPass')">确 认</el-button>
				<el-button @click="resetPassInfo">取 消</el-button>
			</div>
		</el-dialog>
		
		<!--禁用或启用窗口-->
		<el-dialog :title="statusInfo.form.status==='1'?'启用':'禁用'" width='600px' center :visible.sync='statusInfo.isOpen' :show-close='false'>
			<p class="text-center">确定{{statusInfo.form.status==='1'?'启用':'禁用'}}<span class="text-red"> {{statusInfo.form.name}}（{{statusInfo.form.loginAccount}}） </span>吗？</p>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="sendStatusAjax">确 认</el-button>
				<el-button @click="statusInfo.isOpen = false">取 消</el-button>
			</div>
		</el-dialog>

	</el-col>
</template>

<script>
	import staff from './staff';
	export default staff;
</script>