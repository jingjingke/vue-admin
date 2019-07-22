<template>
  <div v-if="visible">
    <el-dialog title="查看二维码" width="600px" center :visible="true" :show-close="false">
      <div class="text-center">
        下面是 <span class="text-red">{{ imgName }}</span> 的二维码
        <img :src="imgSrc" class="qr-code-img" />
      </div>
      <div slot="footer" class="dialog-footer">
        <a class="el-button el-button--success qr-code-a" :href="imgSrc" download>下载二维码</a>
        <el-button @click="visible = false">关闭此窗口</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["imgSrc", "imgName", "visible"]
};
</script>

<style>
.qr-code-img {
  display: block;
  width: 220px;
  height: 220px;
  margin: 0 auto;
}
.qr-code-a {
  text-decoration: none;
}
</style>
