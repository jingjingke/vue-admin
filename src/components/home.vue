<template>
	<el-container id="app">
		<SideBar></SideBar>
		<el-container direction='vertical'>
			<Header></Header>
			<router-view/>
		</el-container>
	</el-container>
</template>

<script>
	export default {
		name: 'Home'
	}
</script>

<style>
	body {
		margin: 0;
	}
	html,body,body>.el-container {
		height: 100%;
	}
	
	/*引入通用样式*/
	@import url("../assets/css/style.css");
</style>