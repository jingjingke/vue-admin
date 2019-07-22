<template>
  <el-main>
    <Breadcrumb></Breadcrumb>
    <SearchWarp>
      <el-form :inline="true" ref="searchInfo.form" :model="searchInfo.form">
        <el-form-item label="姓名">
          <el-input v-model="searchInfo.form.name" placeholder="请输入员工姓名"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="searchInfo.form.phone" placeholder="请输入手机号码"></el-input>
        </el-form-item>
        <el-form-item label="身份证">
          <el-input v-model="searchInfo.form.name" placeholder="请输入身份证号码"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="searchInfo.form.status" placeholder="请选择" clearable>
            <el-option label="正常" :value="1"></el-option>
            <el-option label="注销" :value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="success">查询</el-button>
        </el-form-item>
      </el-form>
    </SearchWarp>
    <ContentWarp>
      <el-table border stripe :data="searchInfo.list" size="small">
        <el-table-column align="center" label="ID" prop="id" width="60px" />
        <el-table-column align="center" label="姓名" prop="name" min-width="100" />
        <el-table-column align="center" label="手机号" prop="phone" min-width="120" />
        <el-table-column align="center" label="身份证号" prop="code" min-width="160" />
        <el-table-column align="center" label="地区" prop="area" min-width="320" />
        <el-table-column align="center" label="状态" prop="status" width="80" />
        <el-table-column align="center" label="操作" width="120px">
          <template slot-scope="scope">
            <el-button size="mini" icon="el-icon-search" plain @click="openFind(scope.row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </ContentWarp>
    <!--<ContentWarp class='center'>
			<el-pagination :page-size="10" layout="total, prev, pager, next, jumper" :total="126">
			</el-pagination>
		</ContentWarp>-->

    <!-- 查看窗口 -->
    <el-dialog title="查看用户信息" width="400px" center :visible.sync="findInfo.isOpen" :show-close="false">
      <el-form :model="findInfo.form" label-position="right" label-width="110px" class="find-info-warp">
        <el-form-item label="姓名：">{{ findInfo.form.name }}</el-form-item>
        <el-form-item label="手机号：">{{ findInfo.form.phone }}</el-form-item>
        <el-form-item label="身份证号：">{{ findInfo.form.code }}</el-form-item>
        <el-form-item label="身份证有效期：">{{ findInfo.form.valid }}</el-form-item>
        <el-form-item label="地区：">{{ findInfo.form.area }}</el-form-item>
        <el-form-item label="状态：">{{ findInfo.form.status }}</el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="findInfo.isOpen = false">关 闭</el-button>
      </div>
    </el-dialog>
  </el-main>
</template>

<script>
export default {
  name: "UserFind",
  data() {
    return {
      searchInfo: {
        // 存放查询表单及列表数据
        list: [
          {
            id: 1,
            name: "张三",
            phone: "15012345678",
            code: "222123199910102323",
            valid: "2027-10-10",
            status: "正常",
            area: "南京市玄武区花园路12号"
          }
        ],
        form: {
          name: "",
          phone: "",
          code: "",
          status: ""
        }
      },
      findInfo: {
        isOpen: false,
        form: {}
      }
    };
  },
  methods: {
    // 打开删除窗口
    openFind(obj) {
      this.findInfo = {
        isOpen: true,
        form: obj
      };
    }
  }
};
</script>