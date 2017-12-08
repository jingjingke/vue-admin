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
			},
			addInfo: { //存放新增窗口显示状态及它的表单数据
				isOpen: false,
				form: {
					name: '',
					seq: 0,
					isShow:1,
					isFinish:0,
					uri:'',
					templateId:'',
					isMust:1,
					hideLevel:1
				}
			},
			changeInfo: {
				isOpen: false,
				form: {}
			},
			deleteInfo: {
				isOpen: false,
				form: {}
			},
			rules: {
				name: [{
					required: true,
					message: '资料名称不能为空',
					trigger: 'change'
				}],
				uri: [{
					required: true,
					message: '图标URL不能为空',
					trigger: 'change'
				}],
				templateId: [{
					required: true,
					message: '模板ID不能为空',
					trigger: 'change'
				}]
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
		//打开修改窗口
		openChange(obj) {
			this.changeInfo.isOpen = true;
			setTimeout(() => {
				//去掉表单验证处带颜色的边框先
				this.$refs['formByChange'].resetFields()
				//提取列表中的值
				this.changeInfo.form = {
					id:obj.id,
					name: obj.name,
					seq: obj.seq,
					isShow:obj.isShow,
					isFinish:obj.isFinish,
					uri:obj.uri || '',
					templateId:obj.templateId || '',
					isMust:obj.isMust || 1,
					hideLevel:obj.hideLevel || 1
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
		//打开删除窗口
		openDelete(obj) {
			this.deleteInfo = {
				isOpen: true,
				form: obj
			}
		},
		//删除ajax
		sendDeleteAjax() {
			console.log('确认删除ID为'+this.deleteInfo.form.id+'的资料')
		}
	},
	mounted(){
		this.list.title = materialTree[0].name;
		this.list.data = materialTree[0].children;
		this.list.isFinish = false;
	}
}