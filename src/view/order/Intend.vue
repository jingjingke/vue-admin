<template>
  <el-main>
    <Breadcrumb></Breadcrumb>
    <SearchWarp>
      <el-form :inline="true" ref="searchInfo.form" :model="searchInfo.form">
        <el-form-item label="姓名">
          <el-input type="text" v-model="searchInfo.form.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input type="text" v-model="searchInfo.form.phone" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="getListAjax">查询</el-button>
          <el-button type="danger" @click="addInfo.isOpen = true">接单</el-button>
        </el-form-item>
      </el-form>
    </SearchWarp>
    <ContentWarp>
      <el-table border stripe :data="searchInfo.list" size="small">
        <el-table-column align="center" label="订单号" prop="orderNo" min-width="130" />
        <el-table-column align="center" label="姓名" prop="name" min-width="100" />
        <el-table-column align="center" label="手机号" prop="phone" width="110" />
        <el-table-column align="center" label="借款金额" prop="loanAmount" min-width="140" />
        <el-table-column align="center" label="申请时间" prop="createTime" width="150" />
        <el-table-column align="center" label="状态" prop="status" :formatter="formatValue" width="100" />
        <el-table-column align="center" label="操作" width="180px">
          <template slot-scope="scope">
            <el-button size="mini" plain @click="openFind(scope.row)">查看</el-button>
            <template v-if="scope.row.status === 0">
              <el-button size="mini" type="primary" plain @click="openChange(scope.row)">处理</el-button>
            </template>
          </template>
        </el-table-column>
      </el-table>
    </ContentWarp>

    <!--新增接单-->
    <el-dialog title="接单" width="600px" center :visible.sync="addInfo.isOpen" :show-close="false">
      <el-form :model="addInfo.form" ref="formByAdd" :rules="rules" label-width="90px">
        <el-form-item label="姓名" prop="name">
          <el-input type="text" v-model="addInfo.form.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input type="text" v-model="addInfo.form.phone"></el-input>
        </el-form-item>
        <el-form-item label="所属产品" prop="productCode">
          <SelectProduct v-model="addInfo.form.productCode"></SelectProduct>
          <div class="disNone">
            <el-input type="text" v-model="addInfo.form.productCode"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="申请金额" prop="loanAmount">
          <el-select v-model="addInfo.form.loanAmount" placeholder="请选择" clearable>
            <template v-for="(option, index) of amountList">
              <el-option :label="option" :value="index" :key="'amountList' + index"></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="借款期限" prop="loanDay">
          <el-select v-model="addInfo.form.loanDay" placeholder="请选择" clearable>
            <template v-for="(option, index) of dayList">
              <el-option :label="option" :value="index" :key="'dayList' + index"></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="用途" prop="used">
          <el-input type="text" v-model="addInfo.form.used"></el-input>
        </el-form-item>
        <template v-if="addInfo.isOpen">
          <el-form-item label="地址区域" prop="area">
            <SelectAddress v-model="addInfo.form.area" btnText="确认"></SelectAddress>
            <div class="disNone">
              <el-input type="text" v-model="addInfo.form.area"></el-input>
            </div>
          </el-form-item>
        </template>
        <el-form-item label="收入来源" prop="income">
          <el-input type="textarea" v-model="addInfo.form.income" :rows="2"></el-input>
        </el-form-item>
        <el-form-item label="征信情况" prop="creditInfo">
          <el-input type="textarea" v-model="addInfo.form.creditInfo" :rows="2"></el-input>
        </el-form-item>
        <el-form-item label="自建房" prop="building">
          <el-input type="textarea" v-model="addInfo.form.building" :rows="2"></el-input>
        </el-form-item>
        <el-form-item label="其他">
          <el-input type="textarea" v-model="addInfo.form.other" :rows="2"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="sendAddAjax('formByAdd')">新 增</el-button>
        <el-button @click="resetAddInfo">取 消</el-button>
      </div>
    </el-dialog>

    <!-- 查看窗口 -->
    <el-dialog title="查看订单" width="400px" center :visible.sync="findInfo.isOpen" :show-close="false">
      <el-form :model="findInfo.form" label-position="right" label-width="110px" class="find-info-warp">
        <el-form-item label="姓名：">{{ findInfo.form.name }}</el-form-item>
        <el-form-item label="手机号：">{{ findInfo.form.phone }}</el-form-item>
        <el-form-item label="申请产品：">
          {{ findInfo.form.productName }}
        </el-form-item>
        <el-form-item label="申请金额：">
          {{ findInfo.form.loanAmount }}
        </el-form-item>
        <el-form-item label="借款用途：">{{ findInfo.form.used }}</el-form-item>
        <el-form-item label="借款期限：">
          {{ findInfo.form.loanDay + "天" }}
        </el-form-item>
        <el-form-item label="所在区域：">
          {{ findInfo.form.areaName }}
        </el-form-item>
        <el-form-item label="收入来源：">
          {{ findInfo.form.income || "未填写" }}
        </el-form-item>
        <el-form-item label="征信情况：">
          {{ findInfo.form.creditInfo || "未填写" }}
        </el-form-item>
        <el-form-item label="有无自建房：">
          {{ findInfo.form.building || "未填写" }}
        </el-form-item>
        <el-form-item label="其它：">
          {{ findInfo.form.other || "未填写" }}
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="findInfo.isOpen = false">关 闭</el-button>
      </div>
    </el-dialog>

    <!--处理（修改）窗口-->
    <el-dialog title="修改流程分配" width="600px" center :visible.sync="changeInfo.isOpen" :show-close="false">
      <el-form :model="changeInfo.form" ref="formByChange" :rules="rules" label-width="80px">
        <el-form-item label="订单号">
          <el-input type="text" v-model="changeInfo.form.orderNo" disabled></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input type="text" v-model="changeInfo.form.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input type="text" v-model="changeInfo.form.phone"></el-input>
        </el-form-item>
        <el-form-item label="所属产品" prop="productCode">
          <SelectProduct v-model="changeInfo.form.productCode"></SelectProduct>
          <div class="disNone">
            <el-input type="text" v-model="changeInfo.form.productCode"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="申请金额" prop="loanAmount">
          <el-select v-model="changeInfo.form.loanAmount" placeholder="请选择" clearable>
            <template v-for="(option, index) of amountList">
              <el-option :label="option" :value="index" :key="'amountList' + index"></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="借款期限" prop="loanDay">
          <el-select v-model="changeInfo.form.loanDay" placeholder="请选择" clearable>
            <template v-for="(option, index) of dayList">
              <el-option :label="option" :value="index" :key="'dayList' + index"></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="用途" prop="used">
          <el-input type="text" v-model="changeInfo.form.used"></el-input>
        </el-form-item>
        <template v-if="changeInfo.isOpen">
          <el-form-item label="地址区域" prop="area">
            <SelectAddress v-model="changeInfo.form.area" btnText="确认"></SelectAddress>
            <div class="disNone">
              <el-input type="text" v-model="changeInfo.form.area"></el-input>
            </div>
          </el-form-item>
        </template>
        <el-form-item label="收入来源" prop="income">
          <el-input type="textarea" v-model="changeInfo.form.income" :rows="2"></el-input>
        </el-form-item>
        <el-form-item label="征信情况" prop="creditInfo">
          <el-input type="textarea" v-model="changeInfo.form.creditInfo" :rows="2"></el-input>
        </el-form-item>
        <el-form-item label="自建房" prop="building">
          <el-input type="textarea" v-model="changeInfo.form.building" :rows="2"></el-input>
        </el-form-item>
        <el-form-item label="其他">
          <el-input type="textarea" v-model="changeInfo.form.other" :rows="2"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="sendChangeAjax('formByChange')">修 改</el-button>
        <el-button @click="resetChangeInfo">取 消</el-button>
      </div>
    </el-dialog>
  </el-main>
</template>

<script>
import intend from "./intend";
export default intend;
</script>