//引入调用图像预览的组件
import ImgPreview from '@/components/imgPreview/index.js';

var methods = {
	//重置表达数据
	resetForm:function(formName){
		this.$refs[formName].resetFields()
	},
	//全局-查看图片
	$imgPreview:ImgPreview,
	//精确小数点位置
	fomatFloat(value,pos){
		return Math.round(value*Math.pow(10, pos))/Math.pow(10, pos);
	}
}
export default methods;