<template>
	<el-select v-model='pid' :placeholder="placeholder || '请选择'" clearable>
		<template v-for="option of roleList">
			<el-option :label='option.name' :value='option.id'></el-option>
		</template>
	</el-select>
</template>

<script>
	const roleList = [{
		"id": 1,
		"name": "管理员"
	}, {
		"id": 21,
		"name": "超级管理员"
	}, {
		"id": 2,
		"name": "县级业务员"
	}, {
		"id": 3,
		"name": "县级风控"
	}, {
		"id": 4,
		"name": "县级外访员"
	}, {
		"id": 5,
		"name": "县级负责人"
	}, {
		"id": 6,
		"name": "市级风控"
	}, {
		"id": 7,
		"name": "市级负责人"
	}, {
		"id": 8,
		"name": "总经理"
	}, {
		"id": 9,
		"name": "县级内务"
	}, {
		"id": 10,
		"name": "市级财务"
	}, {
		"id": 20,
		"name": "省级风控"
	}, {
		"id": 22,
		"name": "市级管理员"
	}, {
		"id": 24,
		"name": "市级指派员"
	}, {
		"id": 25,
		"name": "副总经理"
	}];

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
			'value' (val) {
				this.pid = val
			}
		},
		props: ['placeholder', 'value'],
		methods: {
			pidChange() {
				this.$emit('input', this.pid)
			}
		}
	}
</script>