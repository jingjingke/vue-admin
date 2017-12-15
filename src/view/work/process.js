export default {
	name: 'WorkProcess',
	data() {
		return {
			searchInfo: { //存放查询表单及列表数据
				list: [],
				form: {
					name: ''
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
			rules: {
				name: [{
					required: true,
					message: '请输入流程名称',
					trigger: 'blur'
				}, {
					min: 2,
					max: 20,
					message: '长度为2-20个字符',
					trigger: 'blur'
				}],
				desc: [{
					required: true,
					message: '流程描述不能为空',
					trigger: 'blur'
				}, {
					min: 5,
					max: 100,
					message: '长度为5-100个字符',
					trigger: 'blur'
				}],
				file: [{
					required: true,
					message: '文件不能为空'
				}]
			}
		}
	},
	methods: {
		//重置新值数据-关闭窗口
		resetAddInfo() {
			//清空表单
			this.resetForm('formByAdd')
			//清除上传文件列表
			this.$refs.addUpload.clearFiles()
			//关闭窗口
			this.addInfo.isOpen = false
		},
		//查询列表
		getListAjax() {
			console.log("发送ajax查询数据或分页规则处理")
			//模拟取得列表
			this.searchInfo.list = [{
				"addDate": "2016-05-02",
				"processName": "浙江申请减免",
				"definedName": "orderApply:1:1",
				"litpic": "http://www.jingjingke.com/uploads/allimg/171026/1-1G026135P50-L.gif"
			}]
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
		//新增窗口--上传文件
		changeAddFile(file) {
			//清空原有文件列表
			this.$refs.addUpload.clearFiles()
			//赋值
			this.$refs.addUpload.uploadFiles[0] = file
			this.addInfo.form.file = JSON.stringify(file);
		},
		//新增窗口--删除上传文件
		removeAddFile(file) {
			//清空对应数据
			this.$refs.addUpload.uploadFiles = [];
			this.addInfo.form.file = '';
		}
	},
	mounted() {
		//查询默认列表
		this.getListAjax()
	}
}