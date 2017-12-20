<template>
	<el-row class='dialog-address-warp'>
		<el-col :span="6">
			<el-select placeholder="选择省" v-model='prov'>
				<template v-for="option of provList">
					<el-option :label='option.address' :value='option.code'></el-option>
				</template>
			</el-select>
		</el-col>
		<el-col :span="6">
			<el-select placeholder="选择市" v-model='city'>
				<template v-for="option of cityList">
					<el-option :label='option.address' :value='option.code'></el-option>
				</template>
			</el-select>
		</el-col>
		<el-col :span="6">
			<el-select placeholder="选择区" v-model='area'>
				<template v-for="option of areaList">
					<el-option :label='option.address' :value='option.code'></el-option>
				</template>
			</el-select>
		</el-col>
		<el-col :span="6">
			<template v-if='prov !== ""'>
				<el-button type="primary" @click='submitResult' plain>{{btnText || '确 定'}}</el-button>
			</template>
		</el-col>
		<el-col :span='24' class='dialog-address-tag'>
			<el-tag :key="tag" v-for="(tag,index) in nameList" closable @close="closedTag(index)" size='small'>{{tag}}</el-tag>
		</el-col>
	</el-row>
</template>

<script>
	const data = {
		"86": [{
			"code": "110000",
			"address": "北京市"
		}],
		"110000": {
			"110100": "北京市"
		},
		"110100": {
			"110101": "东城区",
			"110102": "西城区",
			"110105": "朝阳区"
		}
	};

	export default {
		name: 'SelectAddress',
		data() {
			return {
				prov: '',
				city: '',
				area: '',
				provList: data['86'],
				cityList: [],
				areaList: [],
				codeList: [],
				nameList: []
			}
		},
		watch: {
			'prov': 'provChange',
			'city': 'cityChange',
			'value': 'checkValue'
		},
		props: ['value', 'name', 'multiple', 'btnText'],
		methods: {
			//将对象转为格式化的数组
			formatAddress(obj) {
				let arr = [];
				for(let key in obj) {
					arr.push({
						code: key,
						address: obj[key]
					})
				}
				return arr;
			},
			//从数组中取得指定code的对应的值
			getValue(code, arr) {
				for(let i = 0; i < arr.length; i++) {
					if(arr[i].code === code) {
						return arr[i].address;
					}
				}
			},
			//选择省时
			provChange() {
				this.resetCity();
				this.cityList = this.formatAddress(data[this.prov])
			},
			//选择市时
			cityChange() {
				this.resetArea();
				this.areaList = this.formatAddress(data[this.city])
			},
			//重置省选择
			resetProv() {
				this.prov = '';
				this.resetCity();
			},
			//重置城市选择
			resetCity() {
				this.city = '';
				this.resetArea();
			},
			//重置区选择
			resetArea() {
				this.area = '';
			},
			//点击添加结果到结果区域
			submitResult() {
				//如果传入multiple值或者指定为真的话就表示这个组件可以多选
				if(this.$options.propsData.multiple === '' || this.$options.propsData.multiple === true) {
					this.reseultAdd()
				} else {
					this.resultReplace()
				}
				//传递值
				this.$emit('input', String(this.codeList))
			},
			//添加到结果区
			reseultAdd() {
				if(this.area !== '') {
					this.checkRedundant(this.area, this.getValue(this.area, this.areaList))
				} else if(this.city !== '') {
					this.checkRedundant(this.city, this.getValue(this.city, this.cityList))
				} else if(this.prov !== '') {
					this.checkRedundant(this.prov, this.getValue(this.prov, this.provList))
				}
			},
			//检查是否有重复或上级或下级重复[检查code]
			checkRedundant(str, name) {
				let strArr = str.match(/[0-9]{2}/g);
				for(let i = 0; i < this.codeList.length; i++) {
					let codeArr = this.codeList[i].match(/[0-9]{2}/g);
					if(str === this.codeList[i]) {
						this.$alert('“ ' + name + ' ”已经添加过了！', '提示', {
							callback: action => {}
						})
						return false;
					} else if(strArr[0] === codeArr[0]) {
						if(strArr[1] === codeArr[1]) {
							if(strArr[2] === '00') {
								this.$alert('它的下级“ ' + this.nameList[i] + ' ”已经添加过了！', '提示', {
									callback: action => {}
								})
								return;
							} else if(codeArr[2] === '00') {
								this.$alert('它的上级“ ' + this.nameList[i] + ' ”已经添加过了！', '提示', {
									callback: action => {}
								})
								return;
							}
						} else {
							if(strArr[1] === '00') {
								this.$alert('它的下级“ ' + this.nameList[i] + ' ”已经添加过了！', '提示', {
									callback: action => {}
								})
								return;
							} else if(codeArr[1] === '00') {
								this.$alert('它的上级“ ' + this.nameList[i] + ' ”已经添加过了！', '提示', {
									callback: action => {}
								})
								return;
							}
						}
					}
				}
				this.codeList.push(str)
				this.nameList.push(name)
			},
			//替换到结果区
			resultReplace() {
				//根据省市区框中的值替换数组中原有值
				if(this.area !== '') {
					this.codeList.splice(0, this.codeList.length, this.area);
					this.nameList.splice(0, this.nameList.length, this.getValue(this.area, this.areaList));
				} else if(this.city !== '') {
					this.codeList.splice(0, this.codeList.length, this.city);
					this.nameList.splice(0, this.nameList.length, this.getValue(this.city, this.cityList));
				} else if(this.prov !== '') {
					this.codeList.splice(0, this.codeList.length, this.prov);
					this.nameList.splice(0, this.nameList.length, this.getValue(this.prov, this.provList));
				}
			},
			//删除标签
			closedTag(index) {
				this.nameList.splice(index, 1)
				this.codeList.splice(index, 1)
				this.$emit('input', String(this.codeList))
			},
			//监听并检查value值变化情况
			checkValue(value) {
				//初始化结果的值  -- 挂载时先判断传过来的值不为空时
				if(typeof value === 'string' && value !== '' && value !== String(this.codeList)) {
					//整理数据
					let nameArr = [];
					let codeArr = value.split(',');
					let propsName = this.$options.propsData.name;
					if(typeof propsName === 'string' && propsName !== '') {
						//正则替换引号再去分组
						propsName = propsName.replace(/['|"]/g, '')
						nameArr = propsName.split(',')
					}
					//添加数据
					for(let i = 0; i < codeArr.length; i++) {
						this.codeList.push(codeArr[i]);
						this.nameList.push(nameArr[i] || codeArr[i])
					}
				}
			}
		},
		mounted() {
			this.checkValue(this.value);
		}
	}
</script>

<style lang="scss">
	.el-dialog {
		.dialog-address-warp {
			.el-button {
				width: 85%;
				margin-left: 15%;
			}
			.el-select {
				width: 95%;
				margin-right: 5%;
			}
		}
	}
	
	.dialog-address-tag {
		line-height: 24px;
		.el-tag {
			margin: 6px 5px 0 0;
		}
	}
</style>