export default {
  name: "GroupDepartment",
  data() {
    return {
      searchInfo: {
        // 存放查询表单及列表数据
        list: [],
        form: {
          name: ""
        }
      },
      addInfo: {
        // 存放新增窗口显示状态及它的表单数据
        isOpen: false,
        form: {
          name: "",
          description: ""
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
        name: [
          {
            required: true,
            message: "部门名称不能为空",
            trigger: "change"
          }
        ],
        description: [
          {
            required: true,
            message: "部门职责不能为空",
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
          description: "内务1",
          id: 43,
          name: "内务部",
          status: "0"
        },
        {
          description: "风控",
          id: 42,
          name: "风控部",
          status: "0"
        },
        {
          description: "超级",
          id: 41,
          name: "超级管理员",
          status: "0"
        },
        {
          description: "核算支持",
          id: 36,
          name: "财务部",
          status: "0"
        },
        {
          description: "管理",
          id: 35,
          name: "总经理",
          status: "0"
        },
        {
          description: "外访支持",
          id: 34,
          name: "外访部",
          status: "0"
        },
        {
          description: "业务支持",
          id: 33,
          name: "业务部",
          status: "0"
        }
      ];
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
          id: obj.id,
          name: obj.name,
          description: obj.description
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
    // 打开删除窗口
    openDelete(obj) {
      this.deleteInfo = {
        isOpen: true,
        form: obj
      };
    },
    // 启用禁用ajax
    sendDeleteAjax() {
      console.log("确认删除ID为" + this.deleteInfo.form.id + "的部门");
    }
  },
  mounted() {
    // 查询默认列表
    this.getListAjax();
  }
};
