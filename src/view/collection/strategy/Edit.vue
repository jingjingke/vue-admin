<template>
  <el-main>
    <Breadcrumb>
      <el-breadcrumb-item>{{ title }}</el-breadcrumb-item>
    </Breadcrumb>
    <ContentWarp>
      <el-form class="content-form-warp" :rules="rules" ref="form" :model="form" label-width="100px">
        <el-form-item label="所属公司">
          <SelectCompany v-model="form.companyCode" :disabled="isLock"></SelectCompany>
        </el-form-item>
        <el-form-item label="所属产品">
          <SelectProduct v-model="form.productCode" :disabled="isLock"></SelectProduct>
        </el-form-item>
        <el-form-item label="策略名称">
          <el-input v-model="form.name" placeholder="请输入名称"></el-input>
        </el-form-item>
        <el-form-item label="策略角色">
          <el-button size="mini" type="primary" plain @click="addInfo.isOpen = true">新增</el-button>
          <el-table border stripe :data="form.stepStaffJSON" size="small">
            <el-table-column align="center" label="角色名称" prop="stepName" />
            <el-table-column align="center" label="员工姓名" prop="debtPolicyStepStaffBoList" :formatter="formatValue" />
            <el-table-column align="center" label="操作" width="200px">
              <template slot-scope="scope">
                <el-button size="mini" type="primary" icon="el-icon-edit" plain @click="openChange(scope.row)">
                  修改
                </el-button>
                <el-button size="mini" type="danger" plain @click="openDelete(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-form-item>
        <el-form-item>
          <el-button @click="submitForm('form')" type="primary">保存</el-button>
        </el-form-item>
      </el-form>
    </ContentWarp>

    <!--新增窗口-->
    <el-dialog title="新增策略角色" width="600px" center :visible.sync="addInfo.isOpen" :show-close="false">
      <el-form :model="addInfo.form" ref="formByAdd" :rules="rules" label-width="80px">
        <el-form-item label="角色名称" prop="name">
          <el-input v-model="addInfo.form.name" placeholder="请输入名称"></el-input>
        </el-form-item>
        <el-form-item label="选择员工" prop="debtPolicyStepStaffBoList">
          <el-select v-model="addInfo.form.debtPolicyStepStaffBoList" multiple placeholder="请选择">
            <el-option label="王露颖" value="685"></el-option>
            <el-option label="邹继攀" value="708"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="sendAddAjax('formByAdd')">新 增</el-button>
        <el-button @click="resetAddInfo">取 消</el-button>
      </div>
    </el-dialog>
  </el-main>
</template>

<script>
import edit from "./edit";
export default edit;
</script>