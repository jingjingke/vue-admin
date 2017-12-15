<template>
	<el-main>
		<Breadcrumb></Breadcrumb>
		<SearchWarp>
			<el-form :inline="true" ref="searchInfo.form" :model="searchInfo.form">
				<el-form-item label="流程名称">
					<el-input v-model="searchInfo.form.name" placeholder="请输入流程名称"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="success" @click="getListAjax">查询</el-button>
					<el-button type="danger" @click='addInfo.isOpen = true'>新增</el-button>
				</el-form-item>
			</el-form>
		</SearchWarp>
		<ContentWarp>
			<el-table border stripe :data='searchInfo.list' size='small'>
				<el-table-column align='center' label="流程名称" prop='processName' min-width='200px' />
				<el-table-column align='center' label="定义名称" prop='definedName' min-width='200px' />
				<el-table-column align='center' label="日期" prop='addDate' width='140' />
				<el-table-column align='center' label="操作" width='180'>
					<template slot-scope="scope">
						<el-button size="mini" icon="el-icon-search" @click='$imgPreview([scope.row.litpic,scope.row.processName])'>查看流程图</el-button>
					</template>
				</el-table-column>
			</el-table>
		</ContentWarp>
		<!--<ContentWarp class='center'>
			<el-pagination :page-size="10" layout="total, prev, pager, next, jumper" :total="126">
			</el-pagination>
		</ContentWarp>-->
		
		<!--新增窗口-->
		<el-dialog title="新增流程" width='600px' center :visible.sync='addInfo.isOpen' :show-close='false'>
			<el-form :model="addInfo.form" ref='formByAdd' :rules="rules" label-width="80px">
				<el-form-item label="流程名称" prop='name'>
					<el-input type='text' v-model="addInfo.form.name"></el-input>
				</el-form-item>
				<el-form-item label="选择流程" prop='file'>
					<el-upload ref='addUpload' action="xxx" :auto-upload="false" :on-change="changeAddFile" :on-remove='removeAddFile'>
						<el-button size="small" type="primary">点击上传</el-button>
						<div slot="tip" class="el-upload__tip">请选择需要上传的*.zip文件！</div>
					</el-upload>
					<div class="disNone">
						<el-input type='text' v-model="addInfo.form.file"></el-input>
					</div>
				</el-form-item>
				<el-form-item label="流程描述" prop='desc'>
					<el-input type='textarea' v-model="addInfo.form.desc"></el-input>
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
	import process from './process';
	export default process;
</script>