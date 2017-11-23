<template>
	<div class="upload-file-warp">
		<slot></slot>
		<div slot="tip" class="el-upload__tip">{{title}}</div>
	</div>
</template>

<script>
	export default {
		name:'UploadFile',
		props:['title']
	}
</script>

<style>
	.upload-file-warp .el-upload__tip{
		
	}
</style>