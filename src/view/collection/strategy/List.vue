<template>
  <el-main>
    <Breadcrumb></Breadcrumb>
    <SearchWarp>
      <el-form :inline="true" ref="searchInfo.form" :model="searchInfo.form">
        <el-form-item label="所属产品">
          <SelectProduct v-model="searchInfo.form.productCode"></SelectProduct>
        </el-form-item>
        <el-form-item label="所属公司">
          <SelectCompany v-model="searchInfo.form.companyCode"></SelectCompany>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="getListAjax">查询</el-button>
          <el-button type="danger" @click="$router.push('/collection/strategy/edit')">新增</el-button>
        </el-form-item>
      </el-form>
    </SearchWarp>
    <ContentWarp>
      <el-table border stripe :data="searchInfo.list" size="small">
        <el-table-column align="center" label="策略名称" prop="name" min-width="120px" />
        <el-table-column align="center" label="所属公司" prop="companyName" width="320" />
        <el-table-column align="center" label="所属产品" prop="productName" min-width="120px" />
        <el-table-column align="center" label="策略角色" prop="debtPolicyStepBoList" :formatter="formatValue"
          min-width="400px" />
        <el-table-column align="center" label="操作" width="170px">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" icon="el-icon-edit" plain
              @click="$router.push('/collection/strategy/edit/' + scope.row.id)">修改</el-button>
            <el-button size="mini" type="danger" plain @click="openDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </ContentWarp>

    <!--删除按钮-->
    <el-dialog title="删除" width="600px" center :visible.sync="deleteInfo.isOpen" :show-close="false">
      <p class="text-center">
        确定删除<span class="text-red"> {{ deleteInfo.form.name }} </span>吗？
      </p>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="sendDeleteAjax">确 认</el-button>
        <el-button @click="deleteInfo.isOpen = false">取 消</el-button>
      </div>
    </el-dialog>
  </el-main>
</template>

<script>
import list from "./list";
export default list;
</script>