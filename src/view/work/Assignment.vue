<template>
	<el-main>
		<Breadcrumb></Breadcrumb>
		<SearchWarp>
			<el-form :inline="true" ref="searchInfo.form" :model="searchInfo.form">
				<el-form-item label="所属产品">
					<el-input v-model="searchInfo.form.productCode" placeholder="请输入产品码"></el-input>
				</el-form-item>
				<el-form-item label="所属公司">
					<SelectCompany v-model="searchInfo.form.companyCode"></SelectCompany>
				</el-form-item>
				<el-form-item>
					<el-button type="success" @click="getListAjax">查询</el-button>
					<el-button type="danger" @click='addInfo.isOpen = true'>新增</el-button>
				</el-form-item>
			</el-form>
		</SearchWarp>
		<ContentWarp>
			<el-table border stripe :data='searchInfo.list' size='small'>
				<el-table-column align='center' label="产品名称" prop='productName' />
				<el-table-column align='center' label="产品编码" prop='productCode' />
				<el-table-column align='center' label="公司" prop='companyName' />
				<el-table-column align='center' label="流程名称" prop='processName' />
				<el-table-column align='center' label="定义名称" prop='definedName' />
				<el-table-column align='center' label="状态" prop='status' :formatter='formatValue' />
				<el-table-column align='center' label="是否分配" prop='isAutoCreated' :formatter='formatValue' />
				<el-table-column align='center' label="操作">
					<template slot-scope="scope">
						<el-button size="mini" type="primary" icon="el-icon-edit" plain>修改</el-button>
						<el-button size="mini" type="danger" plain>禁用</el-button>
					</template>
				</el-table-column>
			</el-table>
		</ContentWarp>
		<ContentWarp class='center'>
			<el-pagination :page-size="10" layout="total, prev, pager, next, jumper" :total="126">
			</el-pagination>
		</ContentWarp>
	</el-main>
</template>

<script>
	import assignment from './assignment';
	export default assignment;
</script>