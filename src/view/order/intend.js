export default {
	name: 'OrderIntend',
	data() {
		return {
			searchInfo: { //存放查询表单及列表数据
				list: [],
				form: {
					orderNo: '',
					phone: '',
					status: '',
					beginTime: '',
					endTime: ''
				}
			},
			addInfo: { //存放新增窗口显示状态及它的表单数据
				isOpen: false,
				form: {
					name: '',
					phone:'',
					productCode: '',
					loanAmount:'',
					loanDay:'',
					used:'',
					area:'',
					income:'',
					creditInfo:'',
					building:'',
					other:''
				}
			},
			rules: {
				name: [{
					required: true,
					message: '姓名不能为空',
					trigger: 'change'
				}],
				phone: [{
					required: true,
					message: '手机号不能为空',
					trigger: 'change'
				}],
				productCode: [{
					required: true,
					message: '请选择产品',
					trigger: 'change'
				}],
				loanAmount: [{
					type:'number',
					required: true,
					message: '请选择申请金额',
					trigger: 'change'
				}],
				loanDay: [{
					type:'number',
					required: true,
					message: '请选择借款期限',
					trigger: 'change'
				}],
				used: [{
					required: true,
					message: '用途不能为空',
					trigger: 'change'
				}],
				area: [{
					required: true,
					message: '请选择并确认地址区域',
					trigger: 'change'
				}],
				income: [{
					required: true,
					message: '收入来源不能为空',
					trigger: 'change'
				}],
				creditInfo: [{
					required: true,
					message: '征信情况不能为空',
					trigger: 'change'
				}],
				building: [{
					required: true,
					message: '自建房不能为空',
					trigger: 'change'
				}],
			},
			findInfo:{
				isOpen: false,
				form:{}
			},
			changeInfo: {
				isOpen: false,
				form: {}
			},
			statusList:['未分配','已分配'],
			amountList:['3万','4万','5万','6万','7万','8万','9万','10万'],
			dayList:['180天']
		}
	},
	methods: {
		getListAjax() {
			console.log('发送this.searchInfo.form的数据去查询')
			console.log(this.searchInfo.form)
			//模拟ajax取得列表数据
			this.searchInfo.list = [{
				id: 1,
				orderNo: 20171223000001,
				name: '测试1',
				phone: 15012345678,
				loanAmount:40000,
				loanDay:180,
				areaName:'浙江省衢州市江山市',
				used:'装修房子',
				productName:'微农贷',
				productCode:'WND',
				createTime:'2017-11-11 05:05:12',
				status: 0
			},{
				id: 2,
				orderNo: 20171223000002,
				name: '测试2',
				phone: 13098765432,
				loanAmount:50000,
				loanDay:180,
				areaName:'浙江省杭州市余杭区',
				used:'扩大经营',
				productName:'微农贷',
				productCode:'WND',
				createTime:'2017-11-20 17:07:07',
				status: 1
			}]
		},
		//格式化数字转成字符串名
		formatValue(row, column, cellValue) {
			return this.statusList[cellValue]
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
		//打开查看窗口
		openFind(obj){
			this.findInfo = {
				isOpen: true,
				form: obj
			}
		},
		//打开修改窗口
		openChange(obj) {
			this.changeInfo.isOpen = true;
			setTimeout(() => {
				//去掉表单验证处带颜色的边框先
				this.$refs['formByChange'].resetFields()
				//提取列表中的值
				this.changeInfo.form = JSON.parse(JSON.stringify(obj));
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
		}
	},
	created(){
		this.getListAjax()
	}
}