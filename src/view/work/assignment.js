import listData from '@/data/list/work-assignment.json';

export default {
	name: 'WorkAssignment',
	data() {
		return {
			searchInfo: { //存放查询表单及列表数据
				list: [],
				form: {
					productCode:'',
					companyCode:''
				}
			},
			addInfo: { //存放新增窗口显示状态及它的表单数据
				isOpen: false,
				form: {
					name: '',
					file: '',
					desc: ''
				}
			},
			statusRule:[{text:0,value:"禁用"},{text:1,value:"启用"}],
			createdRule:[{text:0,value:"未分配"},{text:1,value:"已分配"}],
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
		formatValue(row, column, cellValue){
			//根据传入的prop值确认规则列表
			let ruleArr = [];
			if(column.property === 'status'){
				ruleArr = this.statusRule;
			}else if(column.property === 'isAutoCreated'){
				ruleArr = this.createdRule;
			}
			//循环判断规则列表值
			for(let i=0;i<ruleArr.length;i++){
				if(ruleArr[i].text === cellValue){
					return ruleArr[i].value
				}
			}
		}
	},
	mounted() {
		//查询默认列表
		this.getListAjax()
	}
}