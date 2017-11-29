<template>
	<el-col :span="20">
		<div class="company-big-title">员工管理（<span>总公司</span>）</div>
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
				<el-table-column align='center' label="邮箱" prop='email' :formatter='formatValue' min-width='150px'/>
				<el-table-column align='center' label="部门" prop='departmentName' width='100' />
				<el-table-column align='center' label="角色" prop='roleList' :formatter='formatValue' min-width='180px'/>
				<el-table-column align='center' label="状态" prop='status' :formatter='formatValue' width='60' />
				<el-table-column align='center' label="创建时期" prop='createTime' :formatter='fomatTime' width='100' />
				<el-table-column align='center' label="操作" min-width='350px'>
					<template slot-scope="scope">
						<el-button size="mini" type="primary" icon="el-icon-edit" plain @click='openChange(scope.row)'>修改</el-button>
						<el-button size="mini" type="warning" plain >重置密码</el-button>
						<el-button size="mini" :type="scope.row.status===0?'success':'danger'" plain @click='openStatus(scope.row)'>{{scope.row.status===0?'启用':'禁用'}}</el-button>
						<el-button size="mini" plain>二维码</el-button>
					</template>
				</el-table-column>
			</el-table>
		</ContentWarp>
		<ContentWarp class='center'>
			<el-pagination :page-size="10" layout="total, prev, pager, next, jumper" :total="126">
			</el-pagination>
		</ContentWarp>
	</el-col>
</template>

<script>
	import staff from './staff';
	export default staff;
</script>