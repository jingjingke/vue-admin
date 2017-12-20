export default {
	name: 'CollectionStrategy',
	data() {
		return {
			searchInfo: { //存放查询表单及列表数据
				list: [],
				form: {
					productCode: '',
					companyCode: ''
				}
			},
			deleteInfo: {
				isOpen: false,
				form: {}
			}
		}
	},
	methods: {
		//查询列表
		getListAjax() {
			console.log("发送ajax查询数据或分页规则处理")
			//模拟取得列表
			this.searchInfo.list = [{
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
			}];
		},
		//格式化数字转成字符串名
		formatValue(row, column, cellValue) {
			//根据传入的prop值确认规则列表
			if(column.property === 'debtPolicyStepBoList') {
				let nameArr = [];
				cellValue.forEach(item=>{
					let valueArr = [];
					item.debtPolicyStepStaffBoList.forEach(list=>{
						valueArr.push(list.staffName)
					})
					nameArr.push(item.stepName + "（" + valueArr.join(",") + "）")
				})
				return nameArr.join('，')
			}
		},
		//打开删除窗口
		openDelete(obj) {
			this.deleteInfo = {
				isOpen: true,
				form: obj
			}
		},
		//启用禁用ajax
		sendDeleteAjax() {
			console.log('确认删除ID为' + this.deleteInfo.form.id + '的策略')
		}
	},
	created() {
		this.getListAjax()
	}
}