<template>
	<el-select v-model='pid' :placeholder="placeholder || '请选择'" :disabled='disabled || false' clearable>
		<template v-for="option of departmentList">
			<el-option :label='option.name' :value='option.id'></el-option>
		</template>
	</el-select>
</template>

<script>
	const departmentList = [{
		"id": 41,
		"name": "超级管理员"
	}, {
		"id": 33,
		"name": "业务部"
	}, {
		"id": 34,
		"name": "外访部"
	}, {
		"id": 35,
		"name": "总经理"
	}, {
		"id": 36,
		"name": "财务部"
	}, {
		"id": 42,
		"name": "风控部"
	}, {
		"id": 43,
		"name": "内务部"
	}];

	export default {
		name: 'SelectDepartment',
		data() {
			return {
				pid: this.$options.propsData.value || '',
				departmentList: departmentList
			}
		},
		watch: {
			'pid': "pidChange",
			'value' (val) {
				this.pid = val
			}
		},
		props: ['placeholder', 'value', 'disabled'],
		methods: {
			pidChange() {
				this.$emit('input', this.pid)
			}
		}
	}
</script>