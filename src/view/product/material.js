import materialTree from '@/data/all/materialTree.json';

export default {
	name: 'ProductMaterial',
	data() {
		return {
			materialTree:materialTree,
			list:{
				title:'',
				data:[],
				isFinish:false,
			}
		}
	},
	methods: {
		//点击树上节点
		handleNodeClick(data) {
			this.list.title = data.name;
			this.list.data = data.children || [];
			if(data.children !== undefined && data.children.length > 0 && data.children[0].isFinish !== undefined && data.children[0].isFinish === 1){
				this.list.isFinish = true;
			}else{
				this.list.isFinish = false;
			}
		},
		//格式化数字转成字符串名
		formatValue(row, column, cellValue) {
			if(column.property === 'isMust'){
				return cellValue===0?'是':'否';
			}else{
				return cellValue===0?'否':'是';
			}
		},
	},
	mounted(){
		this.list.title = materialTree[0].name;
		this.list.data = materialTree[0].children;
		this.list.isFinish = false;
	}
}