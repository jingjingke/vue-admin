<template>
	<el-col :span="20">
		<div class="company-big-title">公司管理（<span>总公司</span>）</div>
		<SearchWarp>
			<el-form>
				<el-form-item>
					<el-button type="primary" plain @click="$router.push('/group/company/staff')">进入员工管理</el-button>
					<el-button plain>分配部门</el-button>
					<el-button plain>分配角色</el-button>
					<el-button plain>修改</el-button>
					<el-button type="danger" plain>禁用</el-button>
				</el-form-item>
			</el-form>
		</SearchWarp>
		<div class="company-little-title"><span class="el-icon-location"></span>公司负责区域</div>
		<div class="company-has-address"><span>常州市</span><span>钟楼区</span><span>天宁区</span><span>新北区</span><span>武进区</span><span>金坛区</span><span>溧阳市</span></div>
		<div class="company-little-title"><span class="el-icon-setting"></span>子公司管理
			<el-button type="text">添加子公司</el-button>
		</div>
		<el-table border stripe :data='searchInfo.list' size='small'>
			<el-table-column align='center' label="子公司名称" prop='name' min-width='340px' fixed />
			<el-table-column align='center' label="code" prop='code' width='180' />
			<el-table-column align='center' label="地址" prop='areaName' width='100' />
			<el-table-column align='center' label="状态" prop='status' :formatter='formatValue' width='60' />
			<el-table-column align='center' label="操作" min-width='550px'>
				<template slot-scope="scope">
					<el-button size="mini" type="primary" icon="el-icon-edit" plain @click='openChange(scope.row)'>修改</el-button>
					<el-button size="mini" plain>分配部门</el-button>
					<el-button size="mini" plain>分配角色</el-button>
					<el-button size="mini" type="primary" plain>员工管理</el-button>
					<el-button size="mini" :type="scope.row.status===0?'success':'danger'" plain @click='openStatus(scope.row)'>{{scope.row.status===0?'启用':'禁用'}}</el-button>
					<el-button size="mini" plain>二维码</el-button>
				</template>
			</el-table-column>
		</el-table>
	</el-col>
</template>

<script>
	import company from './company';
	export default company;
</script>