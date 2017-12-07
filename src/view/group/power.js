import powerTree from '@/data/all/powerTree.json';
import listData from '@/data/list/group-power.json';

export default {
	name: 'GroupPower',
	data() {
		return {
			powerTree: powerTree,
			searchInfo: { //存放查询表单及列表数据
				list: []
			},
			typeList: ['一级菜单', '二级菜单', '页面', '动作'],
			addInfo: { //存放新增窗口显示状态及它的表单数据
				isOpen: false,
				form: {
					name: '',
					type: '',
					url: '',
					projectPath: '',
					href: '',
					seq: 0,
					parentId: 1 //根据左侧的树状态来决定
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
					message: '名称不能为空',
					trigger: 'change'
				}],
				type: [{
					type: 'number',
					required: true,
					message: '类型不能为空',
					trigger: 'change'
				}]
			}
		}
	},
	methods: {
		//点击树上节点
		handleNodeClick(data) {
			console.log('点击的权限：' + data.name + 'ID为：' + data.id);
			//根据id查询相应的列表
			this.getListAjax(data.id)
		},
		//查询列表
		getListAjax(id) {
			console.log("发送ajax查询数据或分页规则处理")
			//模拟取得列表
			this.searchInfo.list = listData;
		},
		//格式化数字转成字符串名
		formatValue(row, column, cellValue) {
			return this.typeList[cellValue]
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
					id: obj.id,
					name: obj.name,
					type: parseInt(obj.type),
					url: obj.url,
					projectPath: obj.projectPath,
					href: obj.href,
					seq: obj.seq,
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
		//启用禁用ajax
		sendDeleteAjax() {
			console.log('确认删除ID为' + this.deleteInfo.form.id + '的权限')
		}
	},
	mounted() {
		//初始化查询顶级列表
		this.getListAjax(1)
	}
}