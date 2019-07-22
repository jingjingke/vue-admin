<template>
  <div id="app" class="my-app">
    <SideBar></SideBar>
    <el-container direction="vertical">
      <Header></Header>
      <router-view />
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style>
body {
  margin: 0;
}
html,
body,
.my-app {
  height: 100%;
}

/* 引入通用样式 */
@import url("../assets/css/style.css");
</style>