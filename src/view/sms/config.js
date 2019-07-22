export default {
  name: "SmsConfig",
  data() {
    return {
      searchInfo: {
        // 存放查询表单及列表数据
        list: [],
        form: {
          name: "",
          status: "",
          sceneId: ""
        }
      },
      sceneList: ["逾期"],
      statusList: ["审核中", "已审核", "审核不通过", "启用", "禁用"],
      addInfo: {
        // 存放新增窗口显示状态及它的表单数据
        isOpen: false,
        form: {
          name: "",
          sceneId: 1,
          companyCode: "",
          msgSign: "",
          platCode: 1,
          platName: "金爱农",
          productCode: "WNA",
          remark: "",
          status: 1,
          senceExt: "",
          sceneId: 1,
          sendType: 1,
          targetType: 1,
          templateContent: "",
          templateName: ""
        }
      },
      changeInfo: {
        isOpen: false,
        form: {}
      },
      reasonInfo: {
        isOpen: false,
        form: {}
      },
      rules: {
        companyCode: [
          {
            required: true,
            message: "请选择公司",
            trigger: "change"
          }
        ],
        sceneId: [
          {
            type: "number",
            required: true,
            message: "请选择场景",
            trigger: "change"
          }
        ],
        senceExt: [
          {
            required: true,
            message: "扩展字段不能为空",
            trigger: "change"
          }
        ],
        remark: [
          {
            required: true,
            message: "备注不能为空",
            trigger: "change"
          }
        ],
        msgSign: [
          {
            required: true,
            message: "短信签名不能为空",
            trigger: "change"
          }
        ],
        templateContent: [
          {
            required: true,
            message: "短信模板不能为空",
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
          senceExt: "30",
          status: 3,
          productCode: "WND",
          remark: "逾期30天后发送短信任务",
          sceneId: 1,
          msgSign: "常山人公司",
          sendType: 1,
          platCode: "1",
          companyName: "常山分公司",
          companyCode: "000100010003",
          id: 68,
          platName: "金爱农",
          templateContent:
            "尊敬的${username}，你有一笔应还金额${amount}元的借 款在${date}到期，请你马上还款，逾 期超过30天，我们将通知你的紧急联系人和相关亲友。",
          senceName: "逾期",
          productName: "微农贷",
          targetType: 1,
          verifyFailReason: "短信模板内容渠道不通过",
          templateName: ""
        },
        {
          senceExt: "3",
          status: 1,
          productCode: "WND",
          remark: "3天还款",
          sceneId: 1,
          msgSign: "农贷",
          sendType: 1,
          platCode: "1",
          companyName: "山东金爱农",
          companyCode: "0002",
          id: 69,
          platName: "金爱农",
          templateContent: "尊敬的${username},请尽快安排还款",
          senceName: "逾期",
          targetType: 1,
          productName: "微农贷"
        }
      ];
    },
    // 格式化数字转成字符串名
    formatValue(row, column, cellValue) {
      // 根据传入的prop值确认规则列表
      if (column.property === "status") {
        return this.statusList[cellValue - 1];
      } else if (column.property === "sceneId") {
        return this.sceneList[cellValue - 1];
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
          id: obj.id,
          name: obj.name,
          sceneId: obj.sceneId,
          companyCode: obj.companyCode,
          msgSign: obj.msgSign,
          platCode: obj.platCode,
          platName: obj.platName,
          productCode: obj.productCode,
          remark: obj.remark,
          status: obj.status,
          senceExt: obj.senceExt,
          sceneId: obj.sceneId,
          sendType: obj.sendType,
          targetType: obj.targetType,
          templateContent: obj.templateContent,
          templateName: obj.templateName
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
    // 打开不过理由
    openReason(obj) {
      this.reasonInfo = {
        isOpen: true,
        form: obj
      };
    }
  },
  mounted() {
    // 查询默认列表
    this.getListAjax();
  }
};
