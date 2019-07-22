<template>
  <div class="login-page">
    <div class="login-page-form">
      <h1>{{webInfo.name}}</h1>
      <el-form ref="login" :model="form" class="login-form">
        <el-form-item label="用户名" prop='name' :rules='{required:true,message:"用户名不能为空"}'>
          <el-input type='text' v-model='form.name' placeholder='请输入登录名/手机号'></el-input>
        </el-form-item>
        <el-form-item label="密码" prop='pass' :rules='{required:true,message:"密码不能为空"}'>
          <el-input type='password' v-model='form.pass' placeholder='请输入密码'></el-input>
        </el-form-item>
        <el-button @click="submitForm('login')" type="primary">点击登录</el-button>
      </el-form>
      <p class="login-copy-right">© {{year}} {{webInfo.copy}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        name: "",
        pass: ""
      },
      year: ""
    };
  },
  created() {
    // 获取当前年份
    this.year = new Date().getFullYear();
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // // JS验证通过，请求接口
          // // 登录-不成功
          // this.$alert("登录名或密码错误,请重试!", "", {
          //   center: true
          // });
          // // 登录-成功后跳转至下一页
          // this.$message({
          //   message: "登录成功！",
          //   type: "success"
          // });
          this.$router.push("/work");
        }
      });
    }
  }
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  height: 100%;
  font-size: 14px;
}

.login-page {
  height: 100%;
  background: url(../assets/img/bg2.jpg) no-repeat #f0f0f0;
  background-size: 100%;
}

.login-page-form {
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 360px;
  margin: -200px 0 0 -180px;
  h1 {
    color: #555;
    font-size: 24px;
  }
}

.login-form {
  background: #fff;
  padding: 12px 24px 36px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  .el-button {
    width: 100%;
  }
}

.login-copy-right {
  color: #999;
}
</style>