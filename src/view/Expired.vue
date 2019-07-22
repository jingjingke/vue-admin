<template>
  <div class="expired-page">
    <p class="title">您的登录信息已过期，需要重新登录</p>
    <p class="link">
      <template>{{time}}</template> 秒后将为您跳转至<el-button type="text" @click='goLogin'>登录页</el-button>
    </p>
  </div>
</template>

<script>
export default {
  name: "Expired",
  data() {
    return {
      time: 5,
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
.expired-page {
  text-align: center;
  padding-top: 100px;
  &:before {
    display: block;
    width: 252px;
    height: 252px;
    background: url(../assets/img/bg4.jpg) no-repeat;
    margin: 0 auto;
    content: "";
  }
  .title {
    color: #00b0ab;
    font-size: 20px;
    font-weight: bold;
    margin: 30px 0 5px;
  }
  .link {
    font-size: 14px;
    color: #999;
    margin-top: 0;
  }
}
</style>