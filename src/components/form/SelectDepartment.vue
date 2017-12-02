<template>
	<el-select v-model='pid' :placeholder="placeholder || '请选择'" clearable>
		<template v-for="option of departmentList">
			<el-option :label='option.name' :value='option.id'></el-option>
		</template>
	</el-select>
</template>

<script>
	import departmentList from '@/data/all/department.json';

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
			'value' (val) { this.pid = val }
		},
		props: ['placeholder', 'value'],
		methods: {
			pidChange() {
				this.$emit('input', this.pid)
			}
		}
	}
</script>