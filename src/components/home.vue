<template>
	<el-container id="app">
		<SideBar></SideBar>
		<el-container class='is-vertical'>
			<Header></Header>
			<router-view/>
			<Footer></Footer>
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
</style>