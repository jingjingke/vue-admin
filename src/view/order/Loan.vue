<template>
  <el-main>
    <Breadcrumb></Breadcrumb>
    <SearchWarp>
      <el-form :inline="true" ref="searchInfo.form" :model="searchInfo.form">
        <el-form-item label="订单号">
          <el-input type="text" v-model="searchInfo.form.orderNo" placeholder="请输入订单号"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input type="text" v-model="searchInfo.form.phone" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="searchInfo.form.status" placeholder="请选择" clearable>
            <template v-for="(option, index) of statusList">
              <el-option :label="option" :value="index" :key="'statusList' + index"></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="下单时间">
          <el-date-picker v-model="searchTime" type="daterange" start-placeholder="开始日期" end-placeholder="结束日期"
            range-separator="至" value-format="yyyy-MM-dd" @change="checkSearchData"></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="getListAjax">查询</el-button>
          <el-button>导出</el-button>
        </el-form-item>
      </el-form>
    </SearchWarp>
    <ContentWarp>
      <el-table border stripe :data="searchInfo.list" size="small">
        <el-table-column align="center" label="订单号" prop="orderNo" width="130" />
        <el-table-column align="center" label="姓名" prop="name" min-width="100" />
        <el-table-column align="center" label="手机号" prop="phone" width="110" />
        <el-table-column align="center" label="借款金额" prop="loanAmount" min-width="140" />
        <el-table-column align="center" label="授信金额" prop="creditAmount" min-width="140" />
        <el-table-column align="center" label="状态" prop="status" :formatter="formatValue" width="100" />
        <el-table-column align="center" label="操作" width="120px">
          <template>
            <el-button size="mini" plain>查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </ContentWarp>
  </el-main>
</template>

<script>
import loan from "./loan";
export default loan;
</script>