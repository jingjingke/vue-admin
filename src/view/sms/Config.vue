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
				<el-table-column align='center' label="操作" width='140px' >
					<template slot-scope="scope">
						<template v-if='scope.row.status === 1'>
							<el-button size="mini" type="primary" icon="el-icon-edit" plain @click='openChange(scope.row)'>修改</el-button>
						</template>
						<template v-if='scope.row.status === 3'>
							<el-button size="mini" type="danger" plain >查看不过理由</el-button>
						</template>
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
	import config from './config';
	export default config;
</script>