webpackJsonp([15],{OLJZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={name:"GroupRole",data:function(){return{searchInfo:{list:[],form:{name:"",type:""}},addInfo:{isOpen:!1,form:{name:"",type:"",hideLevel:0}},changeInfo:{isOpen:!1,form:{}},typeList:["后台","省级","市级","县级"],rules:{name:[{required:!0,message:"角色名称不能为空",trigger:"change"}],type:[{type:"number",required:!0,message:"角色分类不能为空",trigger:"change"}],hideLevel:[{type:"number",required:!0,message:"资料等级不能为空",trigger:"change"}]}}},methods:{getListAjax:function(){console.log("发送ajax查询数据或分页规则处理"),this.searchInfo.list=[{hideLevel:0,id:25,name:"副总经理",status:"0",type:"1"},{hideLevel:0,id:24,name:"市级指派员",status:"0",type:"0"},{hideLevel:0,id:22,name:"市级管理员",status:"0",type:"0"},{hideLevel:100,id:21,name:"超级管理员",status:"0",type:"0"},{hideLevel:0,id:20,name:"省级风控",roleNo:"0010",status:"0",type:"1"},{hideLevel:90,id:10,name:"市级财务",roleNo:"0009",status:"0",type:"2"},{hideLevel:80,id:9,name:"县级内务",roleNo:"0008",status:"0",type:"3"},{hideLevel:99,id:8,name:"总经理",roleNo:"0007",status:"0",type:"1"},{hideLevel:98,id:7,name:"市级负责人",roleNo:"0006",status:"0",type:"2"},{hideLevel:90,id:6,name:"市级风控",roleNo:"0005",status:"0",type:"2"}]},formatValue:function(e,t,n){return this.typeList[n]},sendAddAjax:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;console.log("在此发送addInfo.form数据"),console.log(t.addInfo.form)})},resetAddInfo:function(){this.resetForm("formByAdd"),this.addInfo.isOpen=!1},openChange:function(e){var t=this;this.changeInfo.isOpen=!0,setTimeout(function(){t.$refs.formByChange.resetFields(),t.changeInfo.form={id:e.id,name:e.name,type:parseInt(e.type),hideLevel:e.hideLevel}},100)},sendChangeAjax:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;console.log("在此发送changeInfo.form数据"),console.log(t.changeInfo.form)})},resetChangeInfo:function(){this.$refs.formByChange.resetFields(),this.changeInfo.isOpen=!1}},mounted:function(){this.getListAjax()}},a=o,l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-main",[n("Breadcrumb"),e._v(" "),n("SearchWarp",[n("el-form",{ref:"searchInfo.form",attrs:{inline:!0,model:e.searchInfo.form}},[n("el-form-item",{attrs:{label:"角色名称"}},[n("el-input",{attrs:{placeholder:"请输入角色名称"},model:{value:e.searchInfo.form.name,callback:function(t){e.$set(e.searchInfo.form,"name",t)},expression:"searchInfo.form.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"分类"}},[n("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.searchInfo.form.type,callback:function(t){e.$set(e.searchInfo.form,"type",t)},expression:"searchInfo.form.type"}},e._l(e.typeList,function(e,t){return n("el-option",{key:e,attrs:{label:e,value:t}})}))],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"success"},on:{click:e.getListAjax}},[e._v("查询")]),e._v(" "),n("el-button",{attrs:{type:"danger"},on:{click:function(t){e.addInfo.isOpen=!0}}},[e._v("新增")])],1)],1)],1),e._v(" "),n("ContentWarp",[n("el-table",{attrs:{border:"",stripe:"",data:e.searchInfo.list,size:"small"}},[n("el-table-column",{attrs:{align:"center",label:"ID",prop:"id",width:"80"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"角色名称",prop:"name","min-width":"160"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"分类",prop:"type",formatter:e.formatValue}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"资料等级",prop:"hideLevel"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作",width:"260px"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit",plain:""},on:{click:function(n){e.openChange(t.row)}}},[e._v("修改")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"success",plain:""},on:{click:function(n){e.$router.push("/group/role/power/"+t.row.id)}}},[e._v("分配权限")])]}}])})],1)],1),e._v(" "),n("ContentWarp",{staticClass:"center"},[n("el-pagination",{attrs:{"page-size":10,layout:"total, prev, pager, next, jumper",total:126}})],1),e._v(" "),n("el-dialog",{attrs:{title:"新增角色",width:"600px",center:"",visible:e.addInfo.isOpen,"show-close":!1},on:{"update:visible":function(t){e.$set(e.addInfo,"isOpen",t)}}},[n("el-form",{ref:"formByAdd",attrs:{model:e.addInfo.form,rules:e.rules,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"角色名称",prop:"name"}},[n("el-input",{attrs:{placeholder:"请输入角色名称"},model:{value:e.addInfo.form.name,callback:function(t){e.$set(e.addInfo.form,"name",t)},expression:"addInfo.form.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"分类",prop:"type"}},[n("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.addInfo.form.type,callback:function(t){e.$set(e.addInfo.form,"type",t)},expression:"addInfo.form.type"}},e._l(e.typeList,function(e,t){return n("el-option",{key:e,attrs:{label:e,value:t}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"资料等级",prop:"hideLevel"}},[n("el-input-number",{attrs:{min:0,max:100},model:{value:e.addInfo.form.hideLevel,callback:function(t){e.$set(e.addInfo.form,"hideLevel",t)},expression:"addInfo.form.hideLevel"}})],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.sendAddAjax("formByAdd")}}},[e._v("新 增")]),e._v(" "),n("el-button",{on:{click:e.resetAddInfo}},[e._v("取 消")])],1)],1),e._v(" "),n("el-dialog",{attrs:{title:"修改角色",width:"600px",center:"",visible:e.changeInfo.isOpen,"show-close":!1},on:{"update:visible":function(t){e.$set(e.changeInfo,"isOpen",t)}}},[n("el-form",{ref:"formByChange",attrs:{model:e.changeInfo.form,rules:e.rules,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"角色名称",prop:"name"}},[n("el-input",{attrs:{placeholder:"请输入"},model:{value:e.changeInfo.form.name,callback:function(t){e.$set(e.changeInfo.form,"name",t)},expression:"changeInfo.form.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"分类",prop:"type"}},[n("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.changeInfo.form.type,callback:function(t){e.$set(e.changeInfo.form,"type",t)},expression:"changeInfo.form.type"}},e._l(e.typeList,function(e,t){return n("el-option",{key:e,attrs:{label:e,value:t}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"资料等级",prop:"hideLevel"}},[n("el-input-number",{attrs:{min:0,max:100},model:{value:e.changeInfo.form.hideLevel,callback:function(t){e.$set(e.changeInfo.form,"hideLevel",t)},expression:"changeInfo.form.hideLevel"}})],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.sendChangeAjax("formByChange")}}},[e._v("修 改")]),e._v(" "),n("el-button",{on:{click:e.resetChangeInfo}},[e._v("取 消")])],1)],1)],1)},r=[],s={render:l,staticRenderFns:r},i=s,f=n("/Xao"),c=f(a,i,!1,null,null,null);t.default=c.exports}});