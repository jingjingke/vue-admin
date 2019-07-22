import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/", // 根
      component: resolve => require(["@/components/home"], resolve),
      children: [
        {
          path: "", // 无路径时默认跳到登录页
          redirect: "/login"
        },
        {
          path: "work", // 工作流设置
          redirect: "work/process"
        },
        {
          path: "work/process",
          name: "WorkProcess",
          meta: {
            title: "工作流程管理"
          },
          component: resolve => require(["@/view/work/Process.vue"], resolve)
        },
        {
          path: "work/assignment",
          name: "WorkAssignment",
          meta: {
            title: "产品流程分配"
          },
          component: resolve => require(["@/view/work/Assignment.vue"], resolve)
        },
        {
          path: "work/delegate",
          name: "WorkDelegate",
          meta: {
            title: "委派规则配置"
          },
          component: resolve => require(["@/view/work/Delegate.vue"], resolve)
        },
        {
          path: "group", // 组织架构
          redirect: "group/company"
        },
        {
          path: "group/company",
          component: resolve =>
            require(["@/view/group/company/Warp.vue"], resolve),
          children: [
            {
              path: "/",
              name: "GroupCompany",
              meta: {
                title: "公司管理"
              },
              component: resolve =>
                require(["@/view/group/company/Company.vue"], resolve)
            },
            {
              path: "staff",
              name: "GroupStaff",
              meta: {
                title: "员工管理"
              },
              component: resolve =>
                require(["@/view/group/company/Staff.vue"], resolve)
            }
          ]
        },
        {
          path: "group/role",
          name: "GroupRole",
          meta: {
            title: "角色管理"
          },
          component: resolve => require(["@/view/group/role/Role.vue"], resolve)
        },
        {
          path: "group/role/power/:id",
          name: "GroupRolePower",
          meta: {
            title: "角色管理"
          },
          component: resolve =>
            require(["@/view/group/role/Power.vue"], resolve)
        },
        {
          path: "group/department",
          name: "GroupDepartment",
          meta: {
            title: "部门管理"
          },
          component: resolve =>
            require(["@/view/group/Department.vue"], resolve)
        },
        {
          path: "group/power",
          name: "GroupPower",
          meta: {
            title: "权限管理"
          },
          component: resolve => require(["@/view/group/Power.vue"], resolve)
        },
        {
          path: "product", // 产品管理
          redirect: "product/config"
        },
        {
          path: "product/config",
          name: "ProductConfig",
          meta: {
            title: "产品设置"
          },
          component: resolve => require(["@/view/product/Config.vue"], resolve)
        },
        {
          path: "product/material",
          name: "ProductMaterial",
          meta: {
            title: "资料配置"
          },
          component: resolve =>
            require(["@/view/product/Material.vue"], resolve)
        },
        {
          path: "order", // 订单管理
          redirect: "order/loan"
        },
        {
          path: "order/loan",
          name: "OrderLoan",
          meta: {
            title: "借款订单查询"
          },
          component: resolve => require(["@/view/order/Loan.vue"], resolve)
        },
        {
          path: "order/intend",
          name: "OrderIntend",
          meta: {
            title: "意向订单查询"
          },
          component: resolve => require(["@/view/order/Intend.vue"], resolve)
        },
        {
          path: "sms", // 短信管理
          redirect: "sms/config"
        },
        {
          path: "sms/config",
          name: "SmsConfig",
          meta: {
            title: "短信模板配置"
          },
          component: resolve => require(["@/view/sms/Config.vue"], resolve)
        },
        {
          path: "sms/review",
          name: "SmsReview",
          meta: {
            title: "短信模板审核"
          },
          component: resolve => require(["@/view/sms/Review.vue"], resolve)
        },
        {
          path: "sms/enabled",
          name: "SmsEnabled",
          meta: {
            title: "短信模板启用"
          },
          component: resolve => require(["@/view/sms/Enabled.vue"], resolve)
        },
        {
          path: "collection", // 催收管理
          redirect: "collection/strategy"
        },
        {
          path: "collection/strategy",
          name: "CollectionStrategy",
          meta: {
            title: "催收策略"
          },
          component: resolve =>
            require(["@/view/collection/strategy/List.vue"], resolve)
        },
        {
          path: "collection/strategy/edit",
          name: "CollectionStrategyEdit",
          meta: {
            title: "新增策略"
          },
          component: resolve =>
            require(["@/view/collection/strategy/Edit.vue"], resolve)
        },
        {
          path: "collection/strategy/edit/:id",
          name: "CollectionStrategyEditById",
          meta: {
            title: "修改策略"
          },
          component: resolve =>
            require(["@/view/collection/strategy/Edit.vue"], resolve)
        },
        {
          path: "user", // 用户管理
          redirect: "user/find"
        },
        {
          path: "user/find",
          name: "UserFind",
          meta: {
            title: "用户查询"
          },
          component: resolve => require(["@/view/user/Find.vue"], resolve)
        },
        {
          path: "user/password",
          name: "Password",
          meta: {
            title: "用户重置密码"
          },
          component: resolve => require(["@/view/user/Password.vue"], resolve)
        }
      ]
    },
    {
      path: "/login",
      name: "Login",
      meta: {
        title: "登录"
      },
      component: resolve => require(["@/view/Login"], resolve)
    },
    {
      path: "/expired",
      name: "Expired",
      meta: {
        title: "登录过期"
      },
      component: resolve => require(["@/view/Expired"], resolve)
    },
    {
      path: "*", // 404页面
      name: "NotFound",
      meta: {
        title: "找不到页面"
      },
      component: resolve => require(["@/view/NotFound"], resolve)
    }
  ]
});
