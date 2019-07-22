const data = [
  {
    name: "工作流设置",
    icon: "el-icon-sort",
    children: [
      {
        name: "流程管理",
        route: "/work/process"
      },
      {
        name: "产品流程分配",
        route: "/work/assignment"
      },
      {
        name: "委派规则配置",
        route: "/work/delegate"
      }
    ]
  },
  {
    name: "组织架构",
    icon: "el-icon-share",
    children: [
      {
        name: "公司管理",
        route: "/group/company"
      },
      {
        name: "角色管理",
        route: "/group/role"
      },
      {
        name: "部门管理",
        route: "/group/department"
      },
      {
        name: "权限管理",
        route: "/group/power"
      }
    ]
  },
  {
    name: "产品管理",
    icon: "el-icon-menu",
    children: [
      {
        name: "产品设置",
        route: "/product/config"
      },
      {
        name: "资料配置",
        route: "/product/material"
      }
    ]
  },
  // {
  //   name: "任务管理",
  //   icon: "el-icon-setting",
  //   children: [
  //     {
  //       name: "任务概况",
  //       route: "/task/info"
  //     },
  //     {
  //       name: "我的任务",
  //       route: "/task/my"
  //     },
  //     {
  //       name: "任务派发",
  //       route: "/task/dispatch"
  //     }
  //   ]
  // },
  {
    name: "订单管理",
    icon: "el-icon-star-on",
    children: [
      {
        name: "借款订单查询",
        route: "/order/loan"
      },
      {
        name: "意向订单查询",
        route: "/order/intend"
      }
    ]
  },
  {
    name: "用户管理",
    icon: "el-icon-search",
    children: [
      {
        name: "用户查询",
        route: "/user/find"
      }
    ]
  },
  {
    name: "短信管理",
    icon: "el-icon-message",
    children: [
      {
        name: "模板配置",
        route: "/sms/config"
      },
      {
        name: "模板审核",
        route: "/sms/review"
      },
      {
        name: "模板启用",
        route: "/sms/enabled"
      }
    ]
  },
  {
    name: "催收管理",
    icon: "el-icon-bell",
    children: [
      {
        name: "策略",
        route: "/collection/strategy"
      }
      // {
      //   name: "催收流程",
      //   route: "/collection/process"
      // },
      // {
      //   name: "角色催收地区",
      //   route: "/collection/area"
      // }
    ]
  }
  // {
  //   name: "案件管理",
  //   icon: "el-icon-document",
  //   children: [
  //     {
  //       name: "案件列表",
  //       route: "/board/all"
  //     },
  //     {
  //       name: "所有未催",
  //       route: "/board/not-reminder"
  //     },
  //     {
  //       name: "所有已催",
  //       route: "/board/has-reminded"
  //     },
  //     {
  //       name: "答应会还",
  //       route: "/board/promised"
  //     },
  //     {
  //       name: "重点关注",
  //       route: "/board/focus"
  //     }
  //   ]
  // }
];

export default data;
