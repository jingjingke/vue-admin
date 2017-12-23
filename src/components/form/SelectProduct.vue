<template>
	<el-select v-model='code' :placeholder="placeholder || '请选择'" :disabled='disabled || false' clearable>
		<template v-for="option of productList">
			<el-option :label='option.name' :value='option.code'></el-option>
		</template>
	</el-select>
</template>

<script>
	const productList = [{
		"code": "WND",
		"id": 1,
		"modelId": "2",
		"name": "微农贷",
		"createUserId": "3"
	}, {
		"code": "SJD",
		"id": 4,
		"modelId": "8",
		"name": "宋江贷",
		"createUserId": "3"
	}];

	export default {
		name: 'SelectProduct',
		data() {
			return {
				code: this.$options.propsData.value || '',
				productList: productList
			}
		},
		watch: {
			'code': "codeChange",
			'value' (val) {
				this.code = val
			}
		},
		props: ['placeholder', 'value', 'disabled'],
		methods: {
			codeChange() {
				this.$emit('input', this.code)
			}
		}
	}
</script>