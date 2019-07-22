export default {
  name: "GroupCompany",
  data() {
    return {
      companyData: {
        id: 1,
        name: "总公司",
        code: "001",
        twoDimensionCodeImageUrl:
          "http://cgtzimage.b0.upaiyun.com/matrix/image/000000000000000B.png"
      },
      searchInfo: {
        // 存放查询表单及列表数据
        list: []
      },
      addInfo: {
        // 存放新增窗口显示状态及它的表单数据
        isOpen: false,
        form: {
          name: "",
          code: "",
          guaranteed: "",
          isEnd: "",
          area: "",
          principalArea: "",
          parentId: "" // ******从当前所在公司数据取得
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
      bangDepartment: {
        isOpen: false,
        list: []
      },
      bangRole: {
        isOpen: false,
        list: []
      },
      companyRules: {
        name: [
          {
            required: true,
            message: "公司名称不能为空",
            trigger: "change"
          }
        ],
        code: [
          {
            required: true,
            message: "公司编码不能为空",
            trigger: "change"
          }
        ],
        guaranteed: [
          {
            required: true,
            message: "投资担保账户不能为空",
            trigger: "change"
          }
        ],
        isEnd: [
          {
            required: true,
            message: "请选择是否为最终节点",
            trigger: "change"
          }
        ],
        area: [
          {
            required: true,
            message: "请选择并确认地址区域",
            trigger: "change"
          }
        ],
        principalArea: [
          {
            required: true,
            message: "请选择并添加负责区域",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    // 查询列表
    getListAjax() {
      console.log("发送ajax查询数据或分页规则处理");
      // 模拟取得列表
      this.searchInfo.list = [
        {
          area: "330000",
          areaName: "浙江省",
          code: "0001",
          guaranteed: "55",
          hasChild: "1",
          id: 24,
          isEnd: "0",
          name: "浙江金爱农网络科技有限公司",
          parentId: "1",
          parentName: "总公司",
          principalArea: "330000",
          principalAreaName: "浙江省",
          status: "0",
          type: "0",
          twoDimensionCodeImageUrl:
            "http://cgtzimage.b0.upaiyun.com/matrix/image/000000000000000B.png"
        }
      ];
    },
    // 格式化数字转成字符串名
    formatValue(row, column, cellValue) {
      // 根据传入的prop值确认规则列表
      if (column.property === "status") {
        return this.fomatLoopValue(cellValue, [
          {
            text: "1",
            value: "禁用"
          },
          {
            text: "0",
            value: "启用"
          }
        ]);
      }
    },
    // 新增ajax
    sendAddAjax(formName) {
      this.$refs[formName].validate(valid => {
        // 字段验证是否成功
        if (valid) {
          console.log("在此发送addInfo.form数据");
          console.log(this.addInfo.form);
        } else {
          return false;
        }
      });
    },
    // 重置新值数据-关闭窗口
    resetAddInfo() {
      // 清空表单
      this.resetForm("formByAdd");
      // 关闭窗口
      this.addInfo.isOpen = false;
    },
    // 打开修改窗口
    openChange(obj) {
      this.changeInfo.isOpen = true;
      setTimeout(() => {
        // 去掉表单验证处带颜色的边框先
        this.$refs["formByChange"].resetFields();
        // 提取列表中的值
        this.changeInfo.form = {
          name: obj.name,
          code: obj.code,
          guaranteed: obj.guaranteed,
          isEnd: obj.isEnd,
          area: obj.area,
          principalArea: obj.principalArea,
          parentId: obj.parentId,
          parentName: obj.parentName,
          areaName: obj.areaName,
          principalAreaName: obj.principalAreaName
        };
      }, 100);
    },
    // 修改ajax
    sendChangeAjax(formName) {
      this.$refs[formName].validate(valid => {
        // 字段验证是否成功
        if (valid) {
          console.log("在此发送changeInfo.form数据");
          console.log(this.changeInfo.form);
        } else {
          return false;
        }
      });
    },
    // 重置修改窗口
    resetChangeInfo() {
      // 清空表单
      this.$refs["formByChange"].resetFields();
      // 关闭窗口
      this.changeInfo.isOpen = false;
    },
    // 打开启用禁用窗口
    openStatus(obj) {
      this.statusInfo = {
        isOpen: true,
        form: obj
      };
    },
    // 启用禁用ajax
    sendStatusAjax() {
      console.log("确认启用或禁用");
    },
    // 点击分配部门
    openDepartment(id) {
      // 实际需要根据id经过ajax取得绑定的部门
      this.bangDepartment = {
        isOpen: true,
        list: [
          {
            bangStatus: "1",
            id: 41,
            name: "超级管理员"
          },
          {
            bangStatus: "1",
            id: 33,
            name: "业务部"
          },
          {
            bangStatus: "1",
            id: 34,
            name: "外访部"
          },
          {
            bangStatus: "0",
            id: 35,
            name: "总经理"
          },
          {
            bangStatus: "1",
            id: 36,
            name: "财务部"
          },
          {
            bangStatus: "1",
            id: 42,
            name: "风控部"
          },
          {
            bangStatus: "0",
            id: 43,
            name: "内务部"
          }
        ]
      };
      // 初始默认选中的情况
      setTimeout(() => {
        this.checkBangDefault("bangDepartment", this.bangDepartment.list);
      }, 100);
    },
    // 公司绑定部门发送ajax
    sendDepartmentAjax() {
      console.log(
        "绑定部门---实际上是发送this.bangDepartment.list经过修改后的数据"
      );
      console.log(JSON.stringify(this.bangDepartment.list));
      // this.closeBang('bangDepartment')// 关闭时
    },
    // 分配部分发生变化时--实时
    selectDepartmentChange(value) {
      this.checkBangStatus(value, this.bangDepartment.list);
    },
    // 点击分配角色
    openRole(id) {
      // 实际需要根据id经过ajax取得绑定的角色
      this.bangRole = {
        isOpen: true,
        list: [
          {
            bangStatus: "1",
            id: 1,
            name: "管理员"
          },
          {
            bangStatus: "1",
            id: 21,
            name: "超级管理员"
          },
          {
            bangStatus: "0",
            id: 2,
            name: "县级业务员"
          },
          {
            bangStatus: "0",
            id: 3,
            name: "县级风控"
          },
          {
            bangStatus: "0",
            id: 4,
            name: "县级外访员"
          },
          {
            bangStatus: "0",
            id: 5,
            name: "县级负责人"
          },
          {
            bangStatus: "1",
            id: 6,
            name: "市级风控"
          },
          {
            bangStatus: "1",
            id: 7,
            name: "市级负责人"
          },
          {
            bangStatus: "1",
            id: 8,
            name: "总经理"
          },
          {
            bangStatus: "0",
            id: 9,
            name: "县级内务"
          },
          {
            bangStatus: "0",
            id: 10,
            name: "市级财务"
          },
          {
            bangStatus: "1",
            id: 20,
            name: "省级风控"
          },
          {
            bangStatus: "1",
            id: 22,
            name: "市级管理员"
          },
          {
            bangStatus: "1",
            id: 24,
            name: "市级指派员"
          },
          {
            bangStatus: "1",
            id: 25,
            name: "副总经理"
          }
        ]
      };
      // 初始默认选中的情况
      setTimeout(() => {
        this.checkBangDefault("bangRole", this.bangRole.list);
      }, 100);
    },
    // 关闭绑定部门或角色窗口
    closeBang(name) {
      this.bangDepartment.isOpen = false;
      this.bangRole.isOpen = false;
      this.$refs[name].clearSelection();
    },
    // 公司绑定角色发送ajax
    sendRoleAjax() {
      console.log("绑定角色---实际上是发送this.bangRole.list经过修改后的数据");
      console.log(JSON.stringify(this.bangRole.list));
      // this.closeBang('bangRole')// 关闭时
    },
    // 分配角色选择发生变化时
    selectRoleChange(value) {
      this.checkBangStatus(value, this.bangRole.list);
    },
    // 检查并调整绑定部门或角色
    checkBangStatus(selectObj, allObj) {
      // 将选择项的ID整成一个数组
      let arr = [];
      for (let i = 0; i < selectObj.length; i++) {
        arr.push(selectObj[i].id);
      }
      // 循环对象，如果ID在arr中，则bang的状态调1否0
      for (let i = 0; i < allObj.length; i++) {
        allObj[i].bangStatus = arr.indexOf(allObj[i].id) >= 0 ? "1" : "0";
      }
    },
    // 过滤并初始化刚打开绑定窗口时选择状态
    checkBangDefault(formname, arr) {
      let newArr = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].bangStatus === "1") {
          newArr.push(arr[i]);
        }
      }
      if (newArr.length > 0) {
        newArr.forEach(row => {
          this.$refs[formname].toggleRowSelection(row);
        });
      }
    }
  },
  mounted() {
    // 查询默认列表
    this.getListAjax();
  }
};
