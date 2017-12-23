const pageData = {
	"companyCode": "0001",
	"companyName": "浙江金爱农网络科技有限公司",
	"debtPolicyStepBoList": [{
		"debtPolicyStepStaffBoList": [{
			"id": 101,
			"policyStepId": 2,
			"staffId": 684,
			"staffName": "尹佳倩"
		}],
		"id": 2,
		"policyId": 2,
		"stepName": "收息前手"
	}, {
		"debtPolicyStepStaffBoList": [{
			"id": 105,
			"policyStepId": 3,
			"staffId": 695,
			"staffName": "张财银"
		}, {
			"id": 106,
			"policyStepId": 3,
			"staffId": 696,
			"staffName": "吴顺"
		}],
		"id": 3,
		"policyId": 2,
		"stepName": "电催前手"
	}, {
		"debtPolicyStepStaffBoList": [{
			"id": 120,
			"policyStepId": 4,
			"staffId": 684,
			"staffName": "尹佳倩"
		}, {
			"id": 121,
			"policyStepId": 4,
			"staffId": 685,
			"staffName": "王露颖"
		}],
		"id": 4,
		"policyId": 2,
		"stepName": "电催中手"
	}, {
		"debtPolicyStepStaffBoList": [{
			"id": 124,
			"policyStepId": 5,
			"staffId": 708,
			"staffName": "邹继攀"
		}],
		"id": 5,
		"policyId": 2,
		"stepName": "上门催收"
	}, {
		"debtPolicyStepStaffBoList": [{
			"id": 130,
			"policyStepId": 6,
			"staffId": 717,
			"staffName": "朱梦莎"
		}],
		"id": 6,
		"policyId": 2,
		"stepName": "法务"
	}],
	"id": 2,
	"name": "浙江微农贷催收策略",
	"productCode": "WND",
	"productName": "微农贷"
};

export default {
	data() {
		return {
			title: '',
			isLock: false,
			form: {},
			strategyRoleList: [],
			addInfo: { //存放新增窗口显示状态及它的表单数据
				isOpen: false,
				form: {
					stepName: '',
					debtPolicyStepStaffBoList: []
				}
			},
			rules: {
				name: [{
					required: true,
					message: '角色名称不能为空',
					trigger: 'change'
				}],
				debtPolicyStepStaffBoList: [{
					type: 'array',
					required: true,
					message: '员工不能为空',
					trigger: 'change'
				}]
			}
		}
	},
	watch: {
		'$route.path': 'checkRoute'
	},
	methods: {
		//观察路由
		checkRoute() {
			//初始表单
			this.resetDefaultForm();
			//获取路由参数
			let id = this.$route.params.id;
			//由路由参数判断模板是新增还是修改
			if(id === undefined) {
				this.title = '新增'
				this.isLock = false;
			} else {
				this.title = '修改'
				this.isLock = true;
				this.form = {
					id: pageData,
					name: pageData.name,
					companyCode: pageData.companyCode,
					productCode: pageData.productCode,
					stepStaffJSON: pageData.debtPolicyStepBoList
				}
			}
		},
		//初始化表单
		resetDefaultForm() {
			this.form = {
				companyCode: '',
				productCode: '',
				name: '',
				stepStaffJSON: []
			}
		},
		//格式化数字转成字符串名
		formatValue(row, column, cellValue) {
			//根据传入的prop值确认规则列表
			if(column.property === 'debtPolicyStepStaffBoList') {
				let nameArr = [];
				cellValue.forEach(item=>{
					nameArr.push(item.staffName)
				})
				return nameArr.join('，')
			}
		},
		//保存
		submitForm(form){
			console.log('整页保存提交')
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
	created() {
		//初始化
		this.checkRoute()
	}
}