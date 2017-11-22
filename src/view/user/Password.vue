<template>
	<el-main>
		<el-breadcrumb separator="/">
			<el-breadcrumb-item>用户管理</el-breadcrumb-item>
			<el-breadcrumb-item>重置密码</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form class='reset-password-form' :rules="rules" ref="form" :model="form" label-width="100px">
			<el-form-item label="用户名">
				<el-input v-model="form.name" :disabled="true"></el-input>
			</el-form-item>
			<el-form-item label="旧密码" prop='passOld'>
				<el-input type='text' v-model="form.passOld"></el-input>
			</el-form-item>
			<el-form-item label="新密码" prop='passNew1'>
				<el-input type='password' v-model="form.passNew1"></el-input>
			</el-form-item>
			<el-form-item label="确认新密码" prop='passNew2'>
				<el-input type='password' v-model="form.passNew2"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button @click="submitForm('form')" type="primary">点击确认</el-button>
				<el-button @click="resetForm('form')">重置</el-button>
			</el-form-item>
		</el-form>
	</el-main>
</template>

<script>
	export default {
		name: 'Password',
		data() {
			return {
				form: {
					name: 'admin-lixi',
					passOld: '',
					passNew1: '',
					passNew2: ''
				},
				rules: {
					passOld: [{
							required: true,
							message: '旧密码不能为空！',
							trigger: 'blur'
						},
						{
							min: 6,
							max: 20,
							message: '密码为6-20个字符'
						}
					],
					passNew1: [{
							required: true,
							message: '新密码不能为空！',
							trigger: 'blur'
						},
						{
							min: 6,
							max: 20,
							message: '密码为6-20个字符'
						}
					],
					passNew2: [{
							required: true,
							message: '确认密码不能为空！',
							trigger: 'blur'
						},
						{
							min: 6,
							max: 20,
							message: '密码为6-20个字符'
						}
					]
				}
			}
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						console.log('验证通过')
					} else {
						console.log('不通过')
					}
				})
			},
			resetForm(formName){
				this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style>
	.reset-password-form {
		width: 600px;
		margin: 0 auto;
		padding: 50px 100px 50px 50px;
	}
</style>