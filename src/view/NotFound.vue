<template>
  <div class="not-found">
    <p class="title">您要找的页面正在躲猫猫···</p>
    <p class="des">是不是地址输错了？或者页面还在开发中?</p>
    <p class="link">
      <template>{{time}}</template> 秒后将为您跳转至<el-button type="text" @click='goLogin'>登录页</el-button>
    </p>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  data() {
    return {
      time: 10,
      countdown: ""
    };
  },
  methods: {
    goLogin() {
      this.$router.push("/login");
    }
  },
  mounted() {
    // 打开页面进入倒计时
    this.countdown = setInterval(() => {
      if (this.time <= 0) {
        // 清除计时并跳转路由
        this.goLogin();
      } else {
        this.time--;
      }
    }, 1000);
  },
  destroyed() {
    // 页面销毁时清除倒计时
    clearInterval(this.countdown);
  }
};
</script>

<style lang="scss">
.not-found {
  overflow: hidden;
  margin: 0 auto;
  width: 700px;
  padding-top: 400px;
  font-size: 14px;
  text-align: center;
  background: url(../assets/img/bg3.jpg) no-repeat 0 50px;
  .title {
    font-weight: bold;
    font-size: 24px;
    color: #00b0ab;
    margin: 0;
  }
  .des {
    color: #999;
    font-size: 14px;
  }
}
</style>