<template>
	<el-select v-model='pid' :placeholder="placeholder || '请选择'" clearable>
		<template v-for="option of roleList">
			<el-option :label='option.name' :value='option.id'></el-option>
		</template>
	</el-select>
</template>

<script>
	import roleList from '@/data/all/role.json';

	export default {
		name: 'SelectRole',
		data() {
			return {
				pid: this.$options.propsData.value || '',
				roleList: roleList
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