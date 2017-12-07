<template>
	<el-main>
		<Breadcrumb>
			<el-breadcrumb-item>分配权限</el-breadcrumb-item>
		</Breadcrumb>
		<ContentWarp>
			<div class="role-power-table">
				<table cellpadding="0" cellspacing="0" border="0">
					<thead>
						<tr>
							<th :colspan="2" width="160"><el-checkbox v-model="level01" @change='checkAll("checklevel01",level01,listlevel01)'>一级菜单</el-checkbox></th>
							<th :colspan="2"><el-checkbox v-model="level02" @change='checkAll("checklevel02",level02,listlevel02)'>二级菜单</el-checkbox></th>
							<th><el-checkbox v-model="level03" @change='checkAll("checklevel03",level03,listlevel03)'>页面或动作</el-checkbox></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td width="36"></td>
							<td width="120"></td>
							<td width="36"></td>
							<td width="120"></td>
							<td></td>
							<td></td>
						</tr>
						<template v-for='(list,index01) of powerList'>
						<tr v-for='(item,index02) of list.children'>
							<template v-if='index02 === 0'>
								<td :rowspan='list.children.length'><el-checkbox :label='list.id' v-model="checklevel01" @change='level01Change(list.id)'></el-checkbox></td>
								<td :rowspan='list.children.length'>{{list.name}}</td>
							</template>
							<td><el-checkbox :label='item.id' v-model="checklevel02"></el-checkbox></td>
							<td>{{item.name}}</td>
							<td>
								<template v-for='sub of item.children'>
									<el-checkbox :label='sub.id' v-model="checklevel03">{{sub.name}}</el-checkbox>
								</template>
							</td>
						</tr>
						</template>
					</tbody>
				</table>
			</div>
			<div class="text-center mt30">
				<el-button type="primary">保 存</el-button>
				<el-button>取 消</el-button>
			</div>
		</ContentWarp>
	</el-main>
</template>

<script>
	import power from './power';
	export default power;
</script>

<style lang='scss'>
	.role-power-table {
		table,th,td {
			border: 1px solid #e6ebf5;
		}
		table {
			width: 100%;
			border-width:1px 1px 0 0;
			font-size: 12px;
		}
		th,td {
			border-width:0 0 1px 1px;
			text-align: center;
			line-height: 36px;
		}
		th {
			background: #f5f6f8;
			color: #52516e;
		}
		td {
			color: #5a5e66;
		}
		tbody tr {
			td:nth-child(1),td[rowspan]+td {
				.el-checkbox__label {
					display: none;
				}
			}
		}
		.active td {
			background: #fcfcfd;
		}
	}
</style>