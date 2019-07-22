export default {
  name: "GroupRole",
  data() {
    return {
      searchInfo: {
        // 存放查询表单及列表数据
        list: [],
        form: {
          name: "",
          type: ""
        }
      },
      addInfo: {
        // 存放新增窗口显示状态及它的表单数据
        isOpen: false,
        form: {
          name: "",
          type: "",
          hideLevel: 0
        }
      },
      changeInfo: {
        isOpen: false,
        form: {}
      },
      typeList: ["后台", "省级", "市级", "县级"],
      rules: {
        name: [
          {
            required: true,
            message: "角色名称不能为空",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "number",
            required: true,
            message: "角色分类不能为空",
            trigger: "change"
          }
        ],
        hideLevel: [
          {
            type: "number",
            required: true,
            message: "资料等级不能为空",
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
          hideLevel: 0,
          id: 25,
          name: "副总经理",
          status: "0",
          type: "1"
        },
        {
          hideLevel: 0,
          id: 24,
          name: "市级指派员",
          status: "0",
          type: "0"
        },
        {
          hideLevel: 0,
          id: 22,
          name: "市级管理员",
          status: "0",
          type: "0"
        },
        {
          hideLevel: 100,
          id: 21,
          name: "超级管理员",
          status: "0",
          type: "0"
        },
        {
          hideLevel: 0,
          id: 20,
          name: "省级风控",
          roleNo: "0010",
          status: "0",
          type: "1"
        },
        {
          hideLevel: 90,
          id: 10,
          name: "市级财务",
          roleNo: "0009",
          status: "0",
          type: "2"
        },
        {
          hideLevel: 80,
          id: 9,
          name: "县级内务",
          roleNo: "0008",
          status: "0",
          type: "3"
        },
        {
          hideLevel: 99,
          id: 8,
          name: "总经理",
          roleNo: "0007",
          status: "0",
          type: "1"
        },
        {
          hideLevel: 98,
          id: 7,
          name: "市级负责人",
          roleNo: "0006",
          status: "0",
          type: "2"
        },
        {
          hideLevel: 90,
          id: 6,
          name: "市级风控",
          roleNo: "0005",
          status: "0",
          type: "2"
        }
      ];
    },
    // 格式化数字转成字符串名
    formatValue(row, column, cellValue) {
      return this.typeList[cellValue];
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
          type: parseInt(obj.type),
          hideLevel: obj.hideLevel
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
    }
  },
  mounted() {
    // 查询默认列表
    this.getListAjax();
  }
};
