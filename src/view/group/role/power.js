export default {
	name: 'GroupRolePower',
	data() {
		return {
			powerList: [], //权限列表返回JSON
			level01: false, //一级菜单全选按钮
			level02: false,
			level03: false,
			checkList: [], //树型结构（只包含一级）
			checklevel01: [], //一级菜单选中的权限
			checklevel02: [],
			checklevel03: [],
			listlevel01: [], //一级菜单所有的权限
			listlevel02: [],
			listlevel03: []
		}
	},
	methods: {
		//先ajax取得该角色分配的权限
		getRolePower() {
			this.powerList = [{
				"children": [{
					"children": [{
						"children": [],
						"hasRelevance": "1",
						"id": 169,
						"name": "查询资料列表",
						"parentId": "101",
						"seq": 4,
						"type": "3"
					}, {
						"children": [],
						"hasRelevance": "1",
						"id": 159,
						"name": "查询资料树",
						"parentId": "101",
						"seq": 0,
						"type": "3"
					}, {
						"children": [],
						"hasRelevance": "1",
						"id": 117,
						"name": "隐藏/显示",
						"parentId": "101",
						"seq": 3,
						"type": "3"
					}, {
						"children": [],
						"hasRelevance": "1",
						"id": 116,
						"name": "删除",
						"parentId": "101",
						"seq": 2,
						"type": "3"
					}, {
						"children": [],
						"hasRelevance": "1",
						"id": 115,
						"name": "修改",
						"parentId": "101",
						"seq": 1,
						"type": "3"
					}, {
						"children": [],
						"hasRelevance": "1",
						"id": 114,
						"name": "新增",
						"parentId": "101",
						"seq": 0,
						"type": "3"
					}],
					"hasRelevance": "1",
					"id": 101,
					"name": "资料配置",
					"parentId": "18",
					"seq": 1,
					"type": "1"
				}, {
					"children": [{
						"children": [],
						"hasRelevance": "1",
						"id": 167,
						"name": "产品模型查询",
						"parentId": "19",
						"seq": 3,
						"type": "2"
					}, {
						"children": [],
						"hasRelevance": "1",
						"id": 113,
						"name": "启用/禁用",
						"parentId": "19",
						"seq": 2,
						"type": "3"
					}, {
						"children": [],
						"hasRelevance": "1",
						"id": 112,
						"name": "修改",
						"parentId": "19",
						"seq": 1,
						"type": "3"
					}, {
						"children": [],
						"hasRelevance": "1",
						"id": 111,
						"name": "新增",
						"parentId": "19",
						"seq": 0,
						"type": "3"
					}],
					"hasRelevance": "1",
					"id": 19,
					"name": "产品设置",
					"parentId": "18",
					"seq": 0,
					"type": "1"
				}],
				"hasRelevance": "1",
				"id": 18,
				"name": "产品管理",
				"parentId": "",
				"seq": 12,
				"type": "0"
			}];
			//根据返回的结果初始化已经被选中的值
			this.powerList.forEach(list => {
				//树型结构
				this.checkList[list.id] = [];
				//存放一级菜单所有权限以及被选中权限
				this.listlevel01.push(list.id)
				if(list.hasRelevance === '1') {
					this.checklevel01.push(list.id)
				}
				//向下循环
				list.children.forEach(item => {
					//树型结构
					this.checkList[list.id].push(item.id)
					//存放二级菜单所有权限以及被选中权限
					this.listlevel02.push(item.id)
					if(item.hasRelevance === '1') {
						this.checklevel02.push(item.id)
					}
					//向下循环
					item.children.forEach(sub => {
						//存放动作或页面所有权限以及被选中权限
						this.listlevel03.push(sub.id)
						if(sub.hasRelevance === '1') {
							this.checklevel03.push(sub.id)
						}
					})
				})
			})
		},
		//一级菜单单个发生变化
		level01Change(id) {
			//判断现在是选中状态吗？
			if(this.checklevel01.indexOf(id) >= 0) {
				//选中一级，查二级并将它们都选中
				this.checkList[id].forEach(item => {
					if(this.checklevel02.indexOf(item) < 0) {
						this.checklevel02.push(item)
					}
				})
			} else {
				//未选中一级，查二级并将已存在的删除
				this.checkList[id].forEach(item => {
					let index = this.checklevel02.indexOf(item);
					if(index >= 0) {
						this.checklevel02.splice(index, 1)
					}
				})
			}
		},
		//检查数组中是否包含
		checkHas(value, arr) {
			for(let i = 0; i < arr.length; i++) {
				if(arr[i] === value) return true;
			}
			return false;
		},
		//点击全选事件
		checkAll(name, status, arr) {
			if(status) {
				this[name] = arr;
			} else {
				this[name] = [];
			}
		},
		//检查长度
		checkChange(arr01, arr02) {
			if(arr01.length === arr02.length) {
				return true;
			} else {
				return false;
			}
		},
		//点击保存
		goSave(){
			console.log('在此提交保存')
			//在保存完成后返回
			this.goBack()
		},
		//返回上一页
		goBack(){
			this.$router.back()
		}
	},
	watch: {
		'checklevel01Str': function() {
			this.level01 = this.checkChange(this.checklevel01, this.listlevel01)
		},
		'checklevel02Str': function() {
			this.level02 = this.checkChange(this.checklevel02, this.listlevel02)
		},
		'checklevel03Str': function() {
			this.level03 = this.checkChange(this.checklevel03, this.listlevel03)
		}
	},
	computed: {
		checklevel01Str: function() {
			return String(this.checklevel01);
		},
		checklevel02Str: function() {
			return String(this.checklevel02);
		},
		checklevel03Str: function() {
			return String(this.checklevel03);
		}
	},
	mounted() {
		//获取角色权限
		this.getRolePower()
	}
}