// 引入调用图像预览的组件
import ImgPreview from "@/components/imgPreview/index.js";
import qrCode from "@/components/qrCode/index.js";
import webInfo from "./config.js";

var methods = {
  // 后台基础信息
  webInfo: webInfo,
  // 重置表达数据
  resetForm: function(formName) {
    this.$refs[formName].resetFields();
  },
  // 全局-查看图片
  $imgPreview: ImgPreview,
  // 全局-查看二维码
  $qr: qrCode,
  // 精确小数点位置
  fomatFloat(value, pos) {
    return Math.round(value * Math.pow(10, pos)) / Math.pow(10, pos);
  },
  // 循环取得值(转换字段由数字转为汉字用)
  fomatLoopValue(val, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].text === val) {
        return arr[i].value;
      }
    }
    // 如果没有的话就返回val
    return val;
  },
  // 格式化时间
  fomatTime(row, column, cellValue) {
    let time = new Date(cellValue);
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let day = time.getDate();
    return (
      year +
      "-" +
      (month >= 10 ? month : "0" + month) +
      "-" +
      (day >= 10 ? day : "0" + day)
    );
  }
};
export default methods;
