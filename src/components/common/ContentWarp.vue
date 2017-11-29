<template>
	<div class="main-content-warp">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'ContentWarp'
	}
</script>

<style lang="scss">
	.main-content-warp {
		margin-top: 20px;
		&.center {
			text-align: center;
		}
		/*表格相关样式*/
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
		/*树形组件样式*/
		.el-tree {
			/*换图标*/
			.el-icon-caret-right:before {
				content: '\E601';
				color: #4a90e2;
			}
			.expanded {
				transform:none;
				&.el-icon-caret-right:before{
					content: '\E635';
				}
			}
			.is-leaf {
				&.el-icon-caret-right:before{
					color: transparent;
				}
			}
			/*调尺寸*/
			.el-tree-node__expand-icon {
				font-size: 14px;
			}
			.el-tree-node { white-space: normal;}
			.el-tree-node__content {
				height: auto;
			}
			.el-tree-node__label {
				padding: 5px 10px 5px 0;
				line-height: 20px;
			}
		}
	}
</style>