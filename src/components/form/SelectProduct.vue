<template>
	<el-select v-model='code' :placeholder="placeholder || '请选择'" clearable>
		<template v-for="option of productList">
			<el-option :label='option.name' :value='option.code'></el-option>
		</template>
	</el-select>
</template>

<script>
	import productList from '@/data/all/product.json';

	export default {
		name: 'SelectProduct',
		data() {
			return {
				code: this.$options.propsData.value || '',
				productList: productList
			}
		},
		watch: {
			'code': "codeChange"
		},
		props: ['placeholder', 'value'],
		methods: {
			codeChange() {
				this.$emit('input', this.code)
			}
		}
	}
</script>