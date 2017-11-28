<template>
	<el-select v-model='code' :placeholder="placeholder || '请选择'" clearable>
		<template v-for="option of companyList">
			<el-option :label='option.name' :value='option.code'>{{formatOptionName(option.type,option.name)}}</el-option>
		</template>
	</el-select>
</template>

<script>
	import companyList from '@/data/all/company.json';

	export default {
		name: 'SelectCompany',
		data() {
			return {
				code: this.$options.propsData.value || '',
				companyList: companyList
			}
		},
		watch: {
			'code': "codeChange"
		},
		props: ['placeholder', 'value'],
		methods: {
			codeChange() {
				this.$emit('input', this.code)
			},
			formatOptionName(type, name) {
				switch(type) {
					case '0':
						return '─ ' + name;
						break;
					case '1':
						return '  └─ ' + name;
						break;
					case '2':
						return '　　 └─ ' + name;
						break;
					default:
						return name;
				}

				return type + name;
			}
		}
	}
</script>