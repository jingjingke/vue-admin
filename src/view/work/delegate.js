export default {
	name: 'WorkDelegate',
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
					processId: '',
					assignedRoleId: '',
					type: '',
					roleId: '',
				}
			},
			changeInfo: {
				isOpen: false,
				form: {}
			},
			statusInfo: {
				isOpen: false,
				form: {}
			},
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
				}],
				assignedRoleId: [{
					required: true,
					message: '请选择被指派角色',
				}, {
					type: 'number',
					message: '请选择被指派角色',
					trigger: 'change'
				}],
				type: [{
					required: true,
					message: '请选择指派方式',
					trigger: 'change'
				}],
				roleId: [{
					required: true,
					message: '请选择指派角色',
				}, {
					type: 'number',
					message: '请选择指派角色',
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
			this.searchInfo.list = [{
				"assignedRole": {
					"hideLevel": 0,
					"id": 20,
					"name": "省级风控",
					"roleNo": "0010",
					"status": "0",
					"type": "1"
				},
				"assignedRoleId": "20",
				"companyId": "24",
				"companyName": "浙江金爱农网络科技有限公司",
				"companyCode": "0001",
				"id": 1,
				"processId": "1",
				"processName": "浙江申请减免",
				"productCode": "WND",
				"productName": "微农贷",
				"roleId": "",
				"status": "0",
				"type": "1",
			}];
		},
		//格式化数字转成字符串名
		formatValue(row, column, cellValue) {
			//根据传入的prop值确认规则列表
			if(column.property === 'type') {
				return this.fomatLoopValue(cellValue, [{
					text: '0',
					value: "人工分配"
				}, {
					text: '1',
					value: "自动指派"
				}]);
			} else if(column.property === 'status') {
				return this.fomatLoopValue(cellValue, [{
					text: '0',
					value: "启用"
				}, {
					text: '1',
					value: "禁用"
				}]);
			} else if(column.property === 'roleName') {
				return cellValue || '暂无';
			}
		},
		//新增ajax
		sendAddAjax(formName) {
			this.$refs[formName].validate((valid) => {
				//字段验证是否成功
				if(valid) {
					//如果分配方式自动的话就清除指派角色
					if(this.addInfo.form.type !== '2') {
						this.addInfo.form.roleId = ''
					}
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
					id: obj.id,
					productCode: obj.productCode,
					companyCode: obj.companyCode,
					processId: obj.processId,
					assignedRoleId: obj.assignedRole.id,
					type: obj.type,
					roleId: obj.roleId,
				}
			}, 100)
		},
		//修改ajax
		sendChangeAjax(formName) {
			this.$refs[formName].validate((valid) => {
				//字段验证是否成功
				if(valid) {
					//如果分配方式自动的话就清除指派角色
					if(this.changeInfo.form.type !== '2') {
						this.changeInfo.form.roleId = ''
					}
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
		}
	},
	mounted() {
		//查询默认列表
		this.getListAjax()
	}
}