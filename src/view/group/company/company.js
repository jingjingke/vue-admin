import listData from '@/data/list/group-company.json';

export default {
	name: 'GroupCompany',
	data() {
		return {
			searchInfo: { //存放查询表单及列表数据
				list: []
			},
			addInfo: { //存放新增窗口显示状态及它的表单数据
				isOpen: false,
				form: {
					name: '',
					code: '',
					guaranteed: '',
					isEnd: '',
					area: '',
					principalArea: ''
				}
			},
			addChildRules: {
				name: [{
					required: true,
					message: '公司名称不能为空',
					trigger: 'change'
				}],
				code: [{
					required: true,
					message: '公司编码不能为空',
					trigger: 'change'
				}],
				guaranteed: [{
					required: true,
					message: '投资担保账户不能为空',
					trigger: 'change'
				}],
				isEnd: [{
					required: true,
					message: '请选择是否为最终节点',
					trigger: 'change'
				}],
				area: [{
					required: true,
					message: '请选择并确认地址区域',
					trigger: 'change'
				}],
				principalArea: [{
					required: true,
					message: '请选择并添加负责区域',
					trigger: 'change'
				},]
			}
		}
	},
	methods: {
		handleNodeClick(data) {
			console.log(data);
		},
		//查询列表
		getListAjax() {
			console.log("发送ajax查询数据或分页规则处理")
			//模拟取得列表
			this.searchInfo.list = listData;
		},
		//格式化数字转成字符串名
		formatValue(row, column, cellValue) {
			//根据传入的prop值确认规则列表
			if(column.property === 'status') {
				return this.fomatLoopValue(cellValue, [{
					text: '1',
					value: "禁用"
				}, {
					text: '0',
					value: "启用"
				}]);
			}
		},
		//新增ajax
		sendAddAjax(formName) {
			this.$refs[formName].validate((valid) => {
				//字段验证是否成功
				if(valid) {
					console.log('在此发送addInfo.form数据')
					console.log(this.addInfo.form)
				} else {
					return false;
				}
			})
		},
		//重置新值数据-关闭窗口
		resetAddInfo() {
			//清空表单
			this.resetForm('formByAdd')
			//关闭窗口
			this.addInfo.isOpen = false
		},
	},
	mounted() {
		//查询默认列表
		this.getListAjax()
	}
}