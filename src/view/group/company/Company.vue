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
			<el-button type="text" @click='addInfo.isOpen = true'>添加子公司</el-button>
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
		
		<!--新增子公司-->
		<el-dialog title="添加子公司" width='600px' center :visible.sync='addInfo.isOpen' :show-close='false' :before-close='resetAddInfo'>
			<el-form :model="addInfo.form" ref='formByAdd' :rules="addChildRules" label-width="120px">
				<el-form-item label="子公司名称" prop='name'>
					<el-input type='text' v-model="addInfo.form.name"></el-input>
				</el-form-item>
				<el-form-item label="子公司Code" prop='code'>
					<el-input type='text' v-model="addInfo.form.code"></el-input>
				</el-form-item>
				<el-form-item label="投资担保账户" prop='guaranteed'>
					<el-input type='text' v-model="addInfo.form.guaranteed"></el-input>
				</el-form-item>
				<el-form-item label="上级公司">
					<el-input type='text' value='总公司' :disabled="true"></el-input>
				</el-form-item>
				<template v-if='addInfo.isOpen'>
					<el-form-item label="地址区域" prop='area'>
						<SelectAddress v-model='addInfo.form.area' btnText='确认'></SelectAddress>
						<div class="disNone">
							<el-input type='text' v-model="addInfo.form.area"></el-input>
						</div>
					</el-form-item>
					<el-form-item label="负责区域" prop='principalArea'>
						<SelectAddress v-model='addInfo.form.principalArea' multiple btnText='添加'></SelectAddress>
						<div class="disNone">
							<el-input type='text' v-model="addInfo.form.principalArea"></el-input>
						</div>
					</el-form-item>
				</template>
				<el-form-item label="是否最终节点" prop='isEnd'>
					<el-radio-group v-model="addInfo.form.isEnd">
						<el-radio label="0">不是</el-radio>
						<el-radio label="1">是</el-radio>
					</el-radio-group>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="sendAddAjax('formByAdd')">新 增</el-button>
				<el-button @click="resetAddInfo">取 消</el-button>
			</div>
		</el-dialog>
		
	</el-col>
</template>

<script>
	import company from './company';
	export default company;
</script>