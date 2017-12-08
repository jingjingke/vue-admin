import listData from '@/data/list/sms-common.json';

export default {
	name: 'SmsConfig',
	data() {
		return {
			searchInfo: { //存放查询表单及列表数据
				list: [],
				form: {
					name: '',
					status:'',
					sceneId:''
				}
			},
			sceneList:['逾期'],
			statusList:['审核中','已审核','审核不通过','启用','禁用'],
			addInfo: { //存放新增窗口显示状态及它的表单数据
				isOpen: false,
				form: {
					name: '',
					sceneId:1
				}
			},
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
				return this.statusList[cellValue-1]
			} else if(column.property === 'sceneId') {
				return this.sceneList[cellValue-1]
			}
		},
	},
	mounted() {
		//查询默认列表
		this.getListAjax()
	}
}