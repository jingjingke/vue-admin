import listData from '@/data/list/sms-enabled.json';

export default {
	name: 'SmsEnabled',
	data() {
		return {
			searchInfo: { //存放查询表单及列表数据
				list: [],
				form: {
					name: '',
					status: '',
					sceneId: ''
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
			sceneList: ['逾期'],
			statusList: [{
				value: 4,
				name: '启用'
			}, {
				value: 5,
				name: '禁用'
			}],
			rules: {
				senceExt: [{
					required: true,
					message: '扩展字段不能为空',
					trigger: 'change'
				}],
				msgSign: [{
					required: true,
					message: '短信签名不能为空',
					trigger: 'change'
				}],
				templateContent: [{
					required: true,
					message: '短信模板不能为空',
					trigger: 'change'
				}],
				verifyFailReason: [{
					required: true,
					message: '请输入不过理由',
					trigger: 'change'
				}],
				taskName: [{
					required: true,
					message: '任务名称不能为空',
					trigger: 'change'
				}],
				taskCron: [{
					required: true,
					message: '时间表达式不能为空',
					trigger: 'change'
				}],
				taskUrl: [{
					required: true,
					message: '调用url不能为空',
					trigger: 'change'
				}],
				taskDesc: [{
					required: true,
					message: '任务描述不能为空',
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
		formatValue(row, column, cellValue) {
			//根据传入的prop值确认规则列表
			if(column.property === 'status') {
				return this.statusList[cellValue - 1]
			} else if(column.property === 'sceneId') {
				return this.sceneList[cellValue - 1]
			}
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
					companyName: obj.companyName,
					productName: obj.productName,
					sceneId: obj.sceneId,
					senceExt: obj.senceExt,
					msgSign: obj.msgSign,
					templateContent: obj.templateContent,
					taskName: obj.taskName,
					taskCron: obj.taskCron,
					taskUrl: obj.taskUrl,
					taskDesc: obj.taskDesc
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
		}
	},
	mounted() {
		//查询默认列表
		this.getListAjax()
	}
}