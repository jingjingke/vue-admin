import listData from '@/data/list/sms-review.json';

export default {
	name: 'SmsReview',
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
			sceneList: ['逾期'],
			statusList: ['审核中'],
			failInfo: {
				isOpen: false,
				form: {}
			},
			passInfo: {
				isOpen: false,
				form: {},
			},
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
		//格式化数字转成字符串名
		formatValue(row, column, cellValue) {
			//根据传入的prop值确认规则列表
			if(column.property === 'status') {
				return this.statusList[cellValue - 1]
			} else if(column.property === 'sceneId') {
				return this.sceneList[cellValue - 1]
			}
		},
		//打开不通过窗口
		openFail(obj) {
			this.failInfo = {
				isOpen: true,
				form: {
					id: obj.id,
					verifyFailReason: ''
				}
			}
		},
		//发送不通过理由
		sendFailAjax(formName) {
			this.$refs[formName].validate((valid) => {
				//字段验证是否成功
				if(valid) {
					console.log('在此发送failInfo.form数据')
					console.log(this.failInfo.form)
				} else {
					return false;
				}
			})
		},
		//重置不过通窗口
		resetFailInfo() {
			//清空表单
			this.$refs['formByFail'].resetFields()
			//关闭窗口
			this.failInfo.isOpen = false
		},
		//打开通过窗口
		openPass(obj) {
			this.passInfo.isOpen = true;
			setTimeout(() => {
				//去掉表单验证处带颜色的边框先
				this.$refs['formByPass'].resetFields()
				//提取列表中的值
				this.passInfo.form = {
					id: obj.id,
					companyName: obj.companyName,
					productName: obj.productName,
					sceneId: obj.sceneId,
					senceExt: obj.senceExt,
					msgSign: obj.msgSign,
					templateContent: obj.templateContent,
					taskName: '',
					taskCron: '',
					taskUrl: '',
					taskDesc: ''
				}
			}, 100)
		},
		//通过ajax
		sendPassAjax(formName) {
			this.$refs[formName].validate((valid) => {
				//字段验证是否成功
				if(valid) {
					console.log('在此发送passInfo.form数据')
					console.log(this.passInfo.form)
				} else {
					return false;
				}
			})
		},
		//重置通过窗口
		resetPassInfo() {
			//清空表单
			this.$refs['formByPass'].resetFields()
			//关闭窗口
			this.passInfo.isOpen = false
		}
	},
	mounted() {
		//查询默认列表
		this.getListAjax()
	}
}