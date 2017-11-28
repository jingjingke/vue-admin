import listData from '@/data/list/work-assignment.json';

export default {
	name: 'WorkAssignment',
	data() {
		return {
			searchInfo: { //存放查询表单及列表数据
				list: [],
				form: {
					productCode: '',
					companyCode: '',
					processId: ''
				}
			},
			addInfo: { //存放新增窗口显示状态及它的表单数据
				isOpen: false,
				form: {
					productCode: '',
					companyCode: '',
					processId: ''
				}
			},
			changeInfo: {
				isOpen: false,
				form: {
					productCode: '',
					companyCode: '',
					processId: ''
				}
			},
			statusInfo: {
				isOpen: false,
				form: {}
			},
			statusRule: [{
				text: 0,
				value: "禁用"
			}, {
				text: 1,
				value: "启用"
			}],
			createdRule: [{
				text: 0,
				value: "未分配"
			}, {
				text: 1,
				value: "已分配"
			}],
			rules: {
				productCode: [{
					required: true,
					message: '请选择产品',
					trigger: 'change'
				}],
				companyCode: [{
					required: true,
					message: '请选择公司',
					trigger: 'change'
				}],
				processId: [{
					required: true,
					message: '请选择流程',
					trigger: 'change'
				}]
			}
		}
	},
	methods: {
		//查询列表
		getListAjax() {
			console.log("发送ajax查询数据或分页规则处理")
			//模拟取得列表
			this.searchInfo.list = listData;
		},
		//格式化数字转成字符串名
		formatValue(row, column, cellValue) {
			//根据传入的prop值确认规则列表
			let ruleArr = [];
			if(column.property === 'status') {
				ruleArr = this.statusRule;
			} else if(column.property === 'isAutoCreated') {
				ruleArr = this.createdRule;
			}
			//循环判断规则列表值
			for(let i = 0; i < ruleArr.length; i++) {
				if(ruleArr[i].text === cellValue) {
					return ruleArr[i].value
				}
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
		//打开修改窗口
		openChange(obj) {
			this.changeInfo.isOpen = true;
			setTimeout(() => {
				//去掉表单验证处带颜色的边框先
				this.$refs['formByChange'].resetFields()
				//提取列表中的值
				this.changeInfo.form = {
					productCode: obj.productCode,
					companyCode: obj.companyCode,
					processId: obj.processId
				}
			}, 100)
		},
		//修改ajax
		sendChangeAjax(formName) {
			this.$refs[formName].validate((valid) => {
				//字段验证是否成功
				if(valid) {
					console.log('在此发送changeInfo.form数据')
					console.log(this.changeInfo.form)
				} else {
					return false;
				}
			})
		},
		//重置修改窗口
		resetChangeInfo() {
			//清空表单
			this.$refs['formByChange'].resetFields()
			//关闭窗口
			this.changeInfo.isOpen = false
		},
		//打开启用禁用窗口
		openStatus(obj) {
			this.statusInfo = {
				isOpen: true,
				form: obj
			}
		},
		//启用禁用ajax
		sendStatusAjax() {
			console.log('确认启用或禁用')
		},
	},
	mounted() {
		//查询默认列表
		this.getListAjax()
	}
}