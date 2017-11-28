<template>
	<el-select v-model='pid' :placeholder="placeholder || '请选择'" clearable>
		<template v-for="option of processList">
			<el-option :label='option.deployName' :value='option.deploymentId'></el-option>
		</template>
	</el-select>
</template>

<script>
	import processList from '@/data/all/process.json';

	export default {
		name: 'SelectProcess',
		data() {
			return {
				pid: this.$options.propsData.value || '',
				processList: processList
			}
		},
		watch: {
			'pid': "pidChange"
		},
		props: ['placeholder', 'value'],
		methods: {
			pidChange() {
				this.$emit('input', this.pid)
			}
		}
	}
</script>