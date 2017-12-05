import listData from '@/data/list/group-staff.json';
import departmentList from '@/data/all/companyDepartment.json';
import roleList from '@/data/all/companyRole.json';

export default {
	name: 'GroupStaff',
	data() {
		return {
			companyData: {
				id: 1,
				name: '总公司',
				code:'001',
				twoDimensionCodeImageUrl:"http://cgtzimage.b0.upaiyun.com/matrix/image/000000000000000B.png"
			},
			departmentList:[],
			roleList:[],
			searchInfo: { //存放查询表单及列表数据
				list: [],
				form: {
					name: '',
					phone: '',
				}
			},
			addInfo: { //存放新增窗口显示状态及它的表单数据
				isOpen: false,
				form: {
					loginAccount:'',
					password:'',
					name:'',
					phoneNo:'',
					email:'',
					departmentId:'',
					companyCode:'001',	//从companyData中获取
					companyId:1,		//同上
					roleIdList:''
				}
			},
			changeInfo: {
				isOpen: false,
				form: {}
			},
			statusInfo: {
				isOpen: false,
				form: {}
			},
			passInfo:{
				isOpen: false,
				form: {
					password:'',
					password2:'',
				},
				data:{}
			},
			rules: {
				loginAccount: [{
					required: true,
					message: '登录名不能为空',
					trigger: 'change'
				}],
				password: [{
					required: true,
					message: '密码不能为空',
					trigger: 'change'
				}],
				password2: [{
					required: true,
					message: '确认密码不能为空',
					trigger: 'change'
				}],
				name: [{
					required: true,
					message: '姓名不能为空',
					trigger: 'change'
				}],
				phoneNo: [{
					required: true,
					message: '手机号不能为空',
					trigger: 'change'
				}],
				departmentId: [{
					type: 'number',
					required: true,
					message: '请选择所在部门',
					trigger: 'change'
				}],
				roleIdList: [{
					type: 'array',
					required: true,
					message: '所属角色不能为空',
					trigger: 'change'
				}]
			}
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
				return this.fomatLoopValue(cellValue, [{
					text: '1',
					value: "禁用"
				}, {
					text: '0',
					value: "启用"
				}]);
			}else if(column.property === 'email') {
				return cellValue || "未填写";
			}else if(column.property === 'roleList') {
				let arr = [];
				for(let i=0; i < cellValue.length;i++){
					arr.push(cellValue[i].name)
				}
				return arr.join('、');
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
			//清空非必填的
			this.addInfo.form.email = '';
			//关闭窗口
			this.addInfo.isOpen = false
		},
		//打开修改窗口
		openChange(obj) {
			this.changeInfo.isOpen = true;
			setTimeout(() => {
				//去掉表单验证处带颜色的边框先
				this.$refs['formByChange'].resetFields()
				//重整roleIdList
				let roleIdList = [];
				if(obj.roleList !== ''){
					obj.roleList.forEach(item=>{
						roleIdList.push(parseInt(item.id))
					})
				}
				//提取列表中的值
				this.changeInfo.form = {
					id:obj.id,
					loginAccount:obj.loginAccount,
					name:obj.name,
					phoneNo:obj.phoneNo,
					email:obj.email,
					departmentId:parseInt(obj.departmentId),
					companyCode:obj.companyCode,
					companyId:parseInt(obj.companyId),
					companyId:1,
					roleIdList:roleIdList
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
			this.resetForm('formByChange')
			//清空非必填的
			this.changeInfo.form.email = '';
			//关闭窗口
			this.changeInfo.isOpen = false
		},
		//打开启用禁用窗口
		openStatus(obj) {
			this.statusInfo = {
				isOpen: true,
				form: obj
			}
		},
		//启用禁用ajax
		sendStatusAjax() {
			console.log('确认启用或禁用')
		},
		//打开重置密码窗口
		openPass(obj) {
			this.passInfo.isOpen = true;
			this.passInfo.data = obj;
		},
		//修改密码ajax
		sendPassAjax(formName) {
			this.$refs[formName].validate((valid) => {
				//字段验证是否成功
				if(valid) {
					console.log('在此发送passInfo.form数据')
					console.log(this.passInfo.form)
				} else {
					return false;
				}
			})
		},
		//重置密码窗口
		resetPassInfo() {
			//清空表单
			this.$refs['formByPass'].resetFields()
			//关闭窗口
			this.passInfo.isOpen = false
		}
	},
	mounted() {
		//查询默认列表
		this.getListAjax();
		//过滤绑定部门
		departmentList.forEach(item=>{
			if(item.bangStatus==='1'){
				this.departmentList.push(item)
			}
		})
		//过滤绑定角色
		roleList.forEach(item=>{
			if(item.bangStatus==='1'){
				this.roleList.push(item)
			}
		})
	}
}