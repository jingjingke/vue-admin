webpackJsonp([9],{"pi/2":function(e,t){},qzG6:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={name:"Login",data:function(){return{form:{name:"",pass:""},year:""}},created:function(){this.year=(new Date).getFullYear()},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){e&&t.$router.push("/work")})}}},a={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-page"},[r("div",{staticClass:"login-page-form"},[r("h1",[e._v(e._s(e.webInfo.name))]),e._v(" "),r("el-form",{ref:"login",staticClass:"login-form",attrs:{model:e.form}},[r("el-form-item",{attrs:{label:"用户名",prop:"name",rules:{required:!0,message:"用户名不能为空"}}},[r("el-input",{attrs:{type:"text",placeholder:"请输入登录名/手机号"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"密码",prop:"pass",rules:{required:!0,message:"密码不能为空"}}},[r("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.form.pass,callback:function(t){e.$set(e.form,"pass",t)},expression:"form.pass"}})],1),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("login")}}},[e._v("点击登录")])],1),e._v(" "),r("p",{staticClass:"login-copy-right"},[e._v("© "+e._s(e.year)+" "+e._s(e.webInfo.copy))])],1)])},staticRenderFns:[]};var n=r("VU/8")(s,a,!1,function(e){r("pi/2")},null,null);t.default=n.exports}});