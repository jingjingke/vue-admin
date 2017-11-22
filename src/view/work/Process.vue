<template>
	<el-main>
		<Breadcrumb></Breadcrumb>
		<SearchWarp>
			<el-form :inline="true" ref="searchForm" :model="searchForm">
				<el-form-item label="流程名称">
					<el-input v-model="searchForm.name" placeholder="请输入流程名称"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="success" @click="onSubmit">查询</el-button>
					<el-button type="danger">新增</el-button>
				</el-form-item>
			</el-form>
		</SearchWarp>
		<ContentWarp>
			<el-table border stripe :data='list' size='small'>
				<el-table-column align='center' label="日期" prop='addDate' />
				<el-table-column align='center' label="流程名称" prop='processName' />
				<el-table-column align='center' label="定义名称" prop='definedName' />
				<el-table-column align='center' label="操作">
					<template slot-scope="scope">
						<el-button size="mini" icon="el-icon-search">查看流程图</el-button>
					</template>
				</el-table-column>	
			</el-table>
		</ContentWarp>
		<ContentWarp class='center'>
			<el-pagination
		      :page-size="10"
		      layout="total, prev, pager, next, jumper"
		      :total="126">
		    </el-pagination>
		</ContentWarp>
		
		<el-dialog title="新增流程" :visible='true' width='600px' center>
			<el-form :model="form" label-width="80px">
			    <el-form-item label="流程名称">
			      <el-input type='text' v-model="form.name"></el-input>
			    </el-form-item>
			    <el-form-item label="选择流程">
			    	<el-upload
			    		action="https://jsonplaceholder.typicode.com/posts/"
			    		:auto-upload="false"
			    		:limit="1"
			    	>
			    		<el-button size="small" type="primary">点击上传</el-button>
			    		<!--<div slot="tip" class="el-upload__tip">请选择要上传的*.zip文件,建议文件不要过大！</div>-->
		    		</el-upload>
			      <!--<el-input type='file' v-model="form.file"></el-input>-->
			    </el-form-item>
			    <el-form-item label="流程描述">
			      <el-input type='textarea' v-model="form.desc"></el-input>
			    </el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary">新增</el-button>
				<el-button>取 消</el-button>
			</div>
		</el-dialog>
	</el-main>
</template>

<script>
	export default {
		name: 'WorkProcess',
		data() {
			return {
				form: {
		          name: '',
		          file:'',
		          desc: ''
		        },
				searchForm:{
					name:''
				},
				list:[{
					addDate: '2016-05-02',
					processName:'浙江申请减免',
					definedName:'orderApply:1:1'
				},{
					addDate: '2016-05-10',
					processName:'浙江代扣',
					definedName:'orderApply:2:3'
				},{
					addDate: '2016-05-19',
					processName:'浙江代扣2',
					definedName:'orderApply:3:1'
				},{
					addDate: '2016-05-25',
					processName:'浙江代扣2-2',
					definedName:'orderApply:3:2'
				},{
					addDate: '2016-05-28',
					processName:'浙江代扣2-3',
					definedName:'orderApply:3:3'
				},{
					addDate: '2016-05-19',
					processName:'浙江代扣2',
					definedName:'orderApply:3:1'
				},{
					addDate: '2016-05-25',
					processName:'浙江代扣2-2',
					definedName:'orderApply:3:2'
				},{
					addDate: '2016-05-28',
					processName:'浙江代扣2-3',
					definedName:'orderApply:3:3'
				},{
					addDate: '2016-05-25',
					processName:'浙江代扣2-2',
					definedName:'orderApply:3:2'
				},{
					addDate: '2016-05-28',
					processName:'浙江代扣2-3',
					definedName:'orderApply:3:3'
				}]
			}
		},
		methods: {
			onSubmit(){
				
			}
		}
	}
</script>