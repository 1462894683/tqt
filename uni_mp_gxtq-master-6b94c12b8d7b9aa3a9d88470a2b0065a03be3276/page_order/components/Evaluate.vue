<template>
	<view class="orderconfirm">
		<view class="topbar">
			<TopBar title="评价" :blackShow="true" :isShowReturn="true"></TopBar>
		</view>
		<view class="Evaluate-box">
			<view class="Evaluate">
				<image src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/bg.png"></image>
				<view class="Evaluate-text">
					<view class="EvaluateTitle">易果蓝莓大颗易果蓝莓大颗 当季水果</view>
					<view class="EvaluateInfo">
						<text class="EvaluateNum">85g</text>
						<text class="EvaluateXian"></text>
						<text class="EvaluatWrapped">有包装</text>
						<text class="EvaluateNumS">X2</text>
					</view>
				</view>
			</view>
		
			<view class="Evaluate-two">
				<view class="Evaluate-score">
					<text class="seore">评分</text>
					<view class="userRate">
						<u-rate size="20"
						 active-color="#F2CB51" 
						 inactive-color="#F2CB51" 
						 :count="count" 
						 v-model="value"
						 @change="change"
						 gutter="6">
						 </u-rate>
					</view>
					<view class="worse"  v-if="range">{{evaluate}}</view>
					<view class="worse" v-if="worseText">比较差</view>
				</view>
				<view class="Evaluate-textase">
					<textarea class="inputs" placeholder="请输入您的评价..." id="" cols="30" rows="10"></textarea>
				</view>
				<view class="Evaluate-Image">
					<!--自定义组件上传图片-->
					<uploadImg></uploadImg>
				</view>
			</view>
		
			<button class="Evaluate-btn" @click="submit">提交评价</button>
		
		</view>
		
		
	</view>
</template>

<script>
		//顶部
		import TopBar from '@/components/common/TopBar.vue'
		//上传图片
		import uploadImg from '@/components/upload-img.vue'
		export default {
			components:{TopBar,uploadImg},
		data() {
			return {
				count: 5,//总共可选择的图标
				value: 1,//选中星星的数量
				worseText:true,//
				range:false,
				list:[
					'比较差',
					'比较差',
					'较差',
					'一般',
					'好',
					'非常好'
				],
				evaluate:''
			}
		},
		methods: {
			//改变星星事件
			change(value){
				this.evaluate = this.list[value]
				this.range = true
				this.worseText = false		
			},
			//
			submit(){
				this.$ui.showToast({ title: '正在加载中', icon: 'success' }).then(res => {
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.orderconfirm{
	width: 750rpx;
	height: 1624rpx;
	background: #F6F7FE;
	border-radius: 0rpx 0rpx 0rpx 0rpx;

	.topbar{
		width: 750rpx;
		height: 148rpx;
		position: fixed;
		top: 0;
		background: #F6F7FE;	
		z-index: 100;
	}
	.Evaluate-box{
		padding-top: 134rpx;
		.Evaluate{
			width: 690rpx;
			height: 269rpx;
			background: #FFFFFF;
			border-radius: 30rpx 30rpx 30rpx 30rpx;
			opacity: 1;
			margin: 20rpx 0 20rpx 30rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			image{
				width: 230rpx;
				height: 200rpx;
				background: #EFEFEF;
				border-radius: 10rpx 10rpx 10rpx 10rpx;
				opacity: 1;
				margin-left: 29rpx;
				margin-right: 42rpx;
			}
			.Evaluate-text{
				width: 360rpx;
				height: 200rpx;
				border-radius: 30rpx 30rpx 30rpx 30rpx;
				opacity: 1;
				margin-top: 31rpx;
				margin-right: 29rpx;
				display: flex;
				align-items: center;
				flex-direction: column;
				.EvaluateTitle{
					width: 360rpx;
					height: 84rpx;
					font-size: 30rpx;
					font-family: PingFang SC-Medium, PingFang SC;
					font-weight: 500;
					color: #010208;
					margin-bottom: 18rpx;
					-webkit-background-clip: text;
				}
				.EvaluateInfo{
					width: 360rpx;
					height: 37rpx;
					display: flex;
					opacity: 60.00%;
					align-items: center;
					justify-content: space-between;
					.EvaluateNum{						
						font-family: PingFang SC-Medium, PingFang SC;
						font-weight: 500;												
					}
					.EvaluateXian{
						width: 0rpx;
						height: 22rpx;
						opacity: 1;
						border: 1rpx solid #707070;
						margin-left: -133rpx;
					}
					.EvaluatWrapped{
						font-family: PingFang SC-Bold, PingFang SC;
						font-weight: bold;
						margin-left: -122rpx;
					}
					.EvaluateNumS{
						font-family: PingFang SC-Bold, PingFang SC;
						font-weight: bold;
					}
					.EvaluateNum,.EvaluatWrapped,.EvaluateNumS{
						font-size: 26rpx;
						-webkit-background-clip: text;
						color: #010208;
					}
				}
			
				
			}
		}
		
		.Evaluate-two{
			width: 690rpx;
			height: 691rpx;
			background: #FFFFFF;
			border-radius: 30rpx 30rpx 30rpx 30rpx;
			opacity: 1;
			margin-left: 30rpx;
			display: flex;
			flex-direction: column;
			.Evaluate-score{
				width: 630rpx;
				height: 42rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin: 29rpx 0 38rpx 31rpx;
				.seore{
					font-size: 30rpx;
					font-family: PingFang SC-Regular, PingFang SC;
					font-weight: 400;
					color: #010208;
					opacity: 50.00%;
					-webkit-background-clip: text;
				}
				.userRate{
					margin-left: -42rpx;
				}
				.worse{
					font-size: 30rpx;
					font-family: PingFang SC-Bold, PingFang SC;
					font-weight: bold;
					color: #FF1E21;
					line-height: 0rpx;
					-webkit-background-clip: text;
				}
			}
			.Evaluate-textase{
				width: 650rpx;
				height: 388rpx;
				background: #F6F7FE;
				border-radius: 30rpx 30rpx 30rpx 30rpx;
				opacity: 1;
				margin-left: 20rpx;
				margin-bottom: 20rpx;
				.inputs{
					width: 600rpx;
					height: 349rpx;
					font-size: 30rpx;
					font-family: PingFang SC-Regular, PingFang SC;
					font-weight: 400;
					color: #010208;
					margin-top: 39rpx;
					margin-left: 29rpx;
					line-height: 0;
				}
			}
			
		}
	
		.Evaluate-btn{
			margin-top: 278rpx;
			width: 690rpx;
			height: 88rpx;
			background: #FF1E21;
			border-radius: 20rpx 20rpx 20rpx 20rpx;
			opacity: 1;
			font-size: 34rpx;
			font-family: PingFang SC-Medium, PingFang SC;
			font-weight: 500;
			color: #FFFFFF;
		}
	}
}	
</style>
