<template>
  <el-select v-model="pid" :placeholder="placeholder || '请选择'" :disabled="disabled || false" clearable>
    <template v-for="(option, index) of processList">
      <el-option :label="option.deployName" :value="option.deploymentId" :key="'processList' + index"></el-option>
    </template>
  </el-select>
</template>

<script>
const processList = [
  {
    processDefKey: "orderApply",
    processDefName: "orderApply:2:2",
    deployName: "浙江代扣2-2",
    deploymentId: "2",
    processDefinitionId: "orderApply:3:107"
  },
  {
    suspendsionState: false,
    processDefKey: "orderApply",
    processDefName: "orderApply:1:1",
    deployName: "20171031-浙江",
    deploymentId: "1",
    processDefinitionId: "orderApply:2:8"
  }
];

export default {
  name: "SelectProcess",
  data() {
    return {
      pid: this.$options.propsData.value || "",
      processList: processList
    };
  },
  watch: {
    pid: "pidChange",
    value(val) {
      this.pid = val;
    }
  },
  props: ["placeholder", "value", "disabled"],
  methods: {
    pidChange() {
      this.$emit("input", this.pid);
    }
  }
};
</script>