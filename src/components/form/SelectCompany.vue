<template>
	<el-select v-model='code' :placeholder="placeholder || '请选择'" :disabled='disabled || false' clearable>
		<template v-for="option of companyList">
			<el-option :label='option.name' :value='option.code'>{{formatOptionName(option.type,option.name)}}</el-option>
		</template>
	</el-select>
</template>

<script>
	const companyList = [{
		"area": "",
		"code": "0",
		"createTime": "2017-05-25 16:28:02",
		"createUserId": "admin",
		"hasChild": "1",
		"id": 1,
		"isEnd": "0",
		"name": "总公司",
		"parentId": "",
		"principalArea": "",
		"principalUserId": "",
		"status": "0",
		"type": "-1"
	}, {
		"area": "330000",
		"code": "0001",
		"createTime": "2017-06-20 10:08:59",
		"createUserId": "1",
		"guaranteed": "55",
		"hasChild": "1",
		"id": 24,
		"isEnd": "0",
		"name": "浙江金爱农网络科技有限公司",
		"parentId": "1",
		"principalArea": "330000",
		"status": "0",
		"type": "0"
	}, {
		"area": "330802",
		"code": "00010001",
		"createTime": "2017-06-20 10:14:40",
		"createUserId": "1",
		"hasChild": "1",
		"id": 25,
		"isEnd": "0",
		"name": "浙江金爱农网络科技有限公司衢州分公司",
		"parentId": "24",
		"principalArea": "330802",
		"status": "0",
		"type": "1"
	}];

	export default {
		name: 'SelectCompany',
		data() {
			return {
				code: this.$options.propsData.value || '',
				companyList: companyList
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