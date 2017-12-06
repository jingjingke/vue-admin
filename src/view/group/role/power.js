import listData from '@/data/list/group-role-power.json';

export default {
		name: 'GroupRolePower',
		data() {
			return {
				checked:false,
				level01:false,
				level02:false,
				level03:false,
				name:'',
				powerList:[],
				checkList:[]
			}
		},
		methods: {
			//先ajax取得该角色分配的权限
			getRolePower(){
				this.powerList = listData;
			}
		},
		mounted(){
			this.getRolePower()
		}
	}