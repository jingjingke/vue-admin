<template>
  <el-main>
    <Breadcrumb></Breadcrumb>
    <SearchWarp>
      <el-form :inline="true" ref="searchInfo.form" :model="searchInfo.form">
        <el-form-item label="公司">
          <SelectCompany v-model="searchInfo.form.companyCode"></SelectCompany>
        </el-form-item>
        <el-form-item label="场景">
          <el-select v-model="searchInfo.form.sceneId" placeholder="请选择" clearable>
            <el-option v-for="(option, index) of sceneList" :key="index + 1" :label="option" :value="index + 1">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="searchInfo.form.status" placeholder="请选择" clearable>
            <el-option v-for="option of statusList" :key="option.value" :label="option.name" :value="option.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="getListAjax">查询</el-button>
        </el-form-item>
      </el-form>
    </SearchWarp>
    <ContentWarp>
      <el-table border stripe :data="searchInfo.list" size="small">
        <el-table-column align="center" label="公司" prop="companyName" min-width="260" />
        <el-table-column align="center" label="场景" prop="sceneId" :formatter="formatValue" width="70" />
        <el-table-column align="center" label="扩展字段" prop="senceExt" width="120" />
        <el-table-column align="center" label="短信模版" prop="templateContent" min-width="300" />
        <el-table-column align="center" label="任务名称" prop="taskName" min-width="180" />
        <el-table-column align="center" label="时间表达式" prop="taskCron" width="100" />
        <el-table-column align="center" label="调用url" prop="taskUrl" min-width="180" />
        <el-table-column align="center" label="任务描述" prop="taskDesc" min-width="180" />
        <el-table-column align="center" label="操作" width="180px">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" icon="el-icon-edit" plain @click="openChange(scope.row)">修改
            </el-button>
            <el-button size="mini" :type="scope.row.status === 5 ? 'success' : 'danger'" plain
              @click="openStatus(scope.row)">{{ scope.row.status === 5 ? "启用" : "禁用" }}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </ContentWarp>
    <!--<ContentWarp class='center'>
			<el-pagination :page-size="10" layout="total, prev, pager, next, jumper" :total="126">
			</el-pagination>
		</ContentWarp>-->

    <!--修改窗口-->
    <el-dialog title="修改模板" width="600px" center :visible.sync="changeInfo.isOpen" :show-close="false">
      <el-form :model="changeInfo.form" ref="formByChange" :rules="rules" label-width="120px">
        <el-form-item label="公司">
          <el-input type="text" v-model="changeInfo.form.companyName" disabled></el-input>
        </el-form-item>
        <el-form-item label="产品">
          <el-input type="text" v-model="changeInfo.form.productName" disabled></el-input>
        </el-form-item>
        <el-form-item label="场景">
          <el-input type="text" :value="sceneList[changeInfo.form.sceneId - 1]" disabled></el-input>
        </el-form-item>
        <el-form-item label="扩展字段" prop="senceExt">
          <el-input type="text" v-model="changeInfo.form.senceExt"></el-input>
        </el-form-item>
        <el-form-item label="短信签名" prop="msgSign">
          <el-input type="text" v-model="changeInfo.form.msgSign"></el-input>
        </el-form-item>
        <el-form-item label="短信模板" prop="templateContent">
          <el-input type="textarea" v-model="changeInfo.form.templateContent" :rows="3"></el-input>
        </el-form-item>
        <el-form-item label="任务名称" prop="taskName">
          <el-input type="text" v-model="changeInfo.form.taskName"></el-input>
        </el-form-item>
        <el-form-item label="时间表达式" prop="taskCron">
          <el-input type="text" v-model="changeInfo.form.taskCron"></el-input>
        </el-form-item>
        <el-form-item label="调用url" prop="taskUrl">
          <el-input type="text" v-model="changeInfo.form.taskUrl"></el-input>
        </el-form-item>
        <el-form-item label="任务描述" prop="taskDesc">
          <el-input type="textarea" v-model="changeInfo.form.taskDesc"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="sendChangeAjax('formByChange')">修 改</el-button>
        <el-button @click="resetChangeInfo">取 消</el-button>
      </div>
    </el-dialog>

    <!--禁用或启用窗口-->
    <el-dialog :title="statusInfo.form.status === 5 ? '启用' : '禁用'" width="600px" center
      :visible.sync="statusInfo.isOpen" :show-close="false">
      <p class="text-center">
        确定{{ statusInfo.form.status === 5 ? "启用" : "禁用"
        }}<span class="text-red"> {{ statusInfo.form.taskName }} </span>吗？
      </p>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="sendStatusAjax">确 认</el-button>
        <el-button @click="statusInfo.isOpen = false">取 消</el-button>
      </div>
    </el-dialog>
  </el-main>
</template>

<script>
import enabled from "./enabled";
export default enabled;
</script>