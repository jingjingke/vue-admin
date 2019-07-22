import Vue from "vue";
import qr from "./index.vue";

// 构造子类
const QrConstructor = Vue.extend(qr);

// 创建实例并挂到一个新建的DIV节点上--后面会放进body
let instance = new QrConstructor({
  el: document.createElement("div")
});

// 抛出的主方法
const qrCode = function(options) {
  // 如果传进来的是字符串， 则应该是图片地址
  if (typeof options === "object") {
    options = {
      imgSrc: options[0],
      imgName: options[1]
    };
    // 判断并将值挂到实例上
    for (let prop in options) {
      if (options.hasOwnProperty(prop)) {
        instance[prop] = options[prop];
      }
    }
    // 显示的值
    instance.visible = true;
    // 将实例放入body
    document.body.appendChild(instance.$el);
  }
};

export default qrCode;
