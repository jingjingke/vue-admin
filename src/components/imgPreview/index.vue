<template>
	<div class="popup-img-preview" v-if='visible'>
		<div class="img-warp" :style="'margin-top:'+(-imgInfo.height*imgInfo.scale/2)+'px;'">
			<img @mousedown.prevent='imgMouseDown' :src="imgSrc" :style="'width: '+ imgInfo.width*imgInfo.scale +'px; left:'+imgInfo.left+'px; top:'+imgInfo.top+'px; transform: rotate(' + imgInfo.rotate + 'deg);'" />
		</div>
		<div class="view-btns">
			<el-button round size="mini" icon='el-icon-zoom-in' @click='zoomUp'>放大</el-button>
			<el-button round size="mini" icon='el-icon-zoom-out' @click='zoomDown'>缩小</el-button>
			<el-button round size="mini" icon='el-icon-refresh' @click='clockwiseRotation'>顺时针旋转</el-button>
			<el-button type='danger' round size="mini" icon='el-icon-close' @click='visible = false'>关闭</el-button>
			<div class="img-infos inline" v-if='imgName === "" || imgName === undefined'>缩放：{{Math.round(imgInfo.scale*100)}}%</div>
			<div class="img-infos" v-else>{{imgName}}　[ 缩放：{{Math.round(imgInfo.scale*100)}}% ]</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				imgInfo:{}
			}
		},
		props:['imgSrc','imgName','visible'],
		methods:{
			//初始化图片相关信息
			resetImgInfo(){
				this.imgInfo = {
					width:0,
					height:0,
					scale:1,
					left:0,
					top:0,
					rotate:0,
					isMove:false,
					x:0,
					y:0,
					dx:0,
					dy:0,
				}
			},
			//放大
			zoomUp(){
				this.imgInfo.scale = this.fomatFloat(this.imgInfo.scale + 0.2,1)
			},
			//缩小
			zoomDown(){
				if(this.imgInfo.scale <= 0.4){
					this.$alert('不能再继续缩小尺寸了！','',{
						center: true,
						confirmButtonText: '我知道了'
					})
				}else{
					this.imgInfo.scale = this.fomatFloat(this.imgInfo.scale - 0.2,1)
				}
			},
			//顺时针旋转
			clockwiseRotation(){
				this.imgInfo.rotate = this.imgInfo.rotate + 90 === 360 ? 0 : this.imgInfo.rotate + 90;
			},
			//获取图片尺寸
			getImgSize(url){
				let newImg = new Image();
				newImg.src = url;
				newImg.onload = () =>{
					this.imgInfo.width = newImg.width;
					this.imgInfo.height = newImg.height;
				}
			},
			//鼠标在图片上按下
			imgMouseDown(e){
				this.imgInfo.isMove = true;
				//记录开始位置
				this.imgInfo.x = e.screenX;
				this.imgInfo.y = e.screenY;
				//记录当前top,left值
				this.imgInfo.dx = this.imgInfo.left;
				this.imgInfo.dy = this.imgInfo.top;
			},
			//监听鼠标移动事件
			imgMouseMove(e){
				if(this.imgInfo.isMove === true){
					this.imgInfo.left = this.imgInfo.dx + e.screenX - this.imgInfo.x;
					this.imgInfo.top = this.imgInfo.dy + e.screenY - this.imgInfo.y;
				}
			},
			//监听鼠标弹起事件
			imgMouseUp(e){
				if(this.imgInfo.isMove === true){
					this.imgInfo.left = this.imgInfo.dx + e.screenX - this.imgInfo.x;
					this.imgInfo.top = this.imgInfo.dy + e.screenY - this.imgInfo.y;
					this.imgInfo.isMove = false;
				}
			}
		},
		created(){
			//创建时第一次初始化图片数据
			this.resetImgInfo()
		},
		watch:{
			visible:{
				handler(val){
					//当值为真时表示该图片预览窗口打开，否则正在关闭窗口
					if(val){
						//去计算图片长宽尺寸
						this.getImgSize(this.imgSrc)
						//监听鼠标移动与弹起
						document.body.addEventListener('mousemove',this.imgMouseMove,false)
						document.addEventListener('mouseup',this.imgMouseUp,false)
					}else{
						//重置缩放等信息
						this.resetImgInfo()
						//解除监听鼠标移动与弹起
						document.body.removeEventListener('mousemove',this.imgMouseMove,false)
						document.removeEventListener('mouseup',this.imgMouseUp,false)
					}
				}
			}
		}
	}
</script>

<style lang='scss'>
	.popup-img-preview {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.2);
		.img-warp {
			position: relative;
			width: 100%;
			height: 100%;
			text-align: center;
			top: 50%;
			img {
				position: relative;
			}
		}
		.view-btns {
			position: fixed;
			bottom: 20px;
		    left: 50%;
		    width: 560px;
		    line-height: 50px;
		    margin-left: -280px;
		    border-radius:25px;
		    background: rgba(0,0,0,0.6);
		    text-align: center;
		    color: #fff;
		    .info {
		    	font-weight: bold;
		    	font-size: 14px;
		    	margin-left: 12px;
		    }
		}
		.img-infos {
			font-size: 14px;
			line-height:1.2;
			padding-bottom: 15px;
			&.inline {
				display:inline-block;
				line-height: 60px;
				padding: 0 0 0 10px;
			}
		}
	}
</style>
