webpackJsonp([6],{"98a6":function(e,t,n){"use strict";function a(e){n("Hd59")}Object.defineProperty(t,"__esModule",{value:!0});var i={data:function(){return{companyTree:[{area:"",code:"0",hasChild:"1",id:1,isEnd:"0",name:"总公司",parentId:"",principalArea:"",principalUserId:"",status:"0",type:"-1",children:[{area:"330000",code:"0001",guaranteed:"55",hasChild:"1",id:24,isEnd:"0",name:"浙江金爱农网络科技有限公司",parentId:"1",principalArea:"330000",status:"0",type:"0"}]}]}},methods:{handleNodeClick:function(e){console.log("点击了公司："+e.name+"ID为："+e.id)}}},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-main",[n("Breadcrumb"),e._v(" "),n("ContentWarp",[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:4}},[n("el-form",[n("el-form-item",[n("el-button",{attrs:{plain:""}},[e._v("一键生成推广二维码")])],1)],1),e._v(" "),n("el-tree",{attrs:{data:e.companyTree,props:{children:"children",label:"name"},accordion:""},on:{"node-click":e.handleNodeClick}})],1),e._v(" "),n("router-view")],1)],1)],1)},o=[],l={render:r,staticRenderFns:o},p=l,c=n("/Xao"),s=a,d=c(i,p,!1,s,null,null);t.default=d.exports},BaX8:function(e,t,n){t=e.exports=n("BkJT")(!1),t.push([e.i,".company-big-title{font-size:18px;font-weight:700}.company-big-title span{font-size:16px;font-weight:400;color:#555}.company-little-title{font-size:16px;margin-top:10px;line-height:3em}.company-little-title>span{color:#ccc;padding-right:5px}.company-little-title .el-button{margin-left:10px}.company-has-address span{font-size:12px;padding:5px 10px;border:1px solid #e8e8e8;border-radius:20px;margin-right:5px}",""])},Hd59:function(e,t,n){var a=n("BaX8");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("8bSs")("c437d67c",a,!0)}});