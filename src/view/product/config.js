import listData from '@/data/list/product-config.json';

export default {
	name: 'ProductConfig',
	data() {
		return {
			searchInfo: { //存放查询表单及列表数据
				list: [],
				form: {
					name: ''
				}
			},
			addInfo: { //存放新增窗口显示状态及它的表单数据
				isOpen: false,
				form: {
					name: '',
					code: '',
					modelId: '',
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
				name: [{
					required: true,
					message: '名称不能为空',
					trigger: 'change'
				}],
				code: [{
					required: true,
					message: '产品码不能为空',
					trigger: 'change'
				}],
				modelId: [{
					required: true,
					message: '模型ID不能为空',
					trigger: 'change'
				}],
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
			return this.fomatLoopValue(cellValue, [{
				text: '0',
				value: "启用"
			}, {
				text: '1',
				value: "禁用"
			}]);
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
					name: obj.name,
					code: obj.code,
					modelId: obj.modelId
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