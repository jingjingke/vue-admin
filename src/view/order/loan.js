export default {
	name: 'OrderLoan',
	data() {
		return {
			searchTime:'',
			searchInfo: { //存放查询表单及列表数据
				list: [],
				form: {
					orderNo: '',
					phone:'',
					status:'',
					beginTime:'',
					endTime:''
				}
			},
			statusList:['初始化','审批中','审批通过','审批不通过']
		}
	},
	methods: {
		//选中搜索日期时
		checkSearchData(minDate,maxDate){
			this.searchInfo.form.beginTime = minDate;
			this.searchInfo.form.endTime = maxDate
		},
		getListAjax(){
			console.log('发送this.searchInfo.form的数据去查询')
			console.log(this.searchInfo.form)
			//模拟ajax取得列表数据
			this.searchInfo.list = [{
				id:1,
				orderNo:20171223000001,
				name:'测试2',
				phone:15012345678,
				loanAmount:40000,
				creditAmount:0,
				status:0
			}]
		},
		//格式化数字转成字符串名
		formatValue(row, column, cellValue) {
			return this.statusList[cellValue]
		},
	},
	created(){
		this.getListAjax()
	}
}