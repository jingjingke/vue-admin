<template>
	<div class="main-content-warp"><slot></slot></div>
</template>

<script>
	export default {
		name:'ContentWarp'
	}
</script>

<style lang="scss">
	.main-content-warp {
		margin-top: 20px;
		&.center {
			text-align: center;
		}
		.el-table th {
			background: #f5f6f8;
			color: #52516e;
		}
		.el-table--striped .el-table__body tr.el-table__row--striped td {
			background: #fcfcfd;
		}
		.el-table--enable-row-hover .el-table__body tr:hover>td {
			background: #fdfcf7;
		}
	}
</style>