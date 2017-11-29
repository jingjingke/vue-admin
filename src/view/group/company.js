import listData from '@/data/list/group-company.json';

export default {
	name: 'GroupCompany',
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
		}
	},
	methods: {
		handleNodeClick(data) {
			console.log(data);
		},
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
				return this.fomatLoopValue(cellValue, [{
					text: '1',
					value: "禁用"
				}, {
					text: '0',
					value: "启用"
				}]);
			}
		},
	},
	mounted() {
		//查询默认列表
		this.getListAjax()
	}
}