<template>
	<view class="successPop">
		<u-popup bgColor="transparent" :show="true" mode="center"  @close="$emit('closePay',false)" @open="open">
				<view class="imgBox">
					<image class="openimg" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/20会员弹框@2x.png" mode=""></image>
					<view class="content">
						<view class="title-top">恭喜您开通会员</view>
							<view class="title-center">共享台球室包年会员</view>
							<view class="time">有效期：2023.04.20至2024.04.19</view>
							<view class="btn" @click="openSuccessAndToOtherPage"><text>确定</text></view>
					</view>
				</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		name:"VipOpenSuccess",
		props:{
				  isShow:{
					  type:Boolean,
					  default:false
				  }
		},
		data() {
			return {
				   show: this.isShow
			};
		},
		methods: {
		  open() {
			// console.log('open');
		  },
		  close() {
			this.show = false
			// console.log('close');
		  },
		  //会员开通成功并跳转
		  openSuccessAndToOtherPage(){
			  this.$emit('closePay',false)//关闭弹窗
			  this.$Router.pushTab({path:'/pages/TabBar/Mine/Mine'})//跳转到开通之前的页面
		  }
		}
	}
</script>

<style lang="scss" scoped>
.successPop{
	font-family: PingFang SC-Bold, PingFang SC;
	width: 690rpx;
	height: 564rpx;
	.imgBox{
		width: 690rpx;
		height: 564rpx;
		overflow: hidden;
		.openimg{
			width: 690rpx;
			height: 564rpx;
		}
		.content{
			width: 690rpx;
			height: 564rpx;
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			.title-top{
				width: 252rpx;
				height: 50rpx;
				font-size: 36rpx;
				font-weight: bold;
				color: #010208;
				margin-left: 92rpx;
				margin-top: 108rpx;
				line-height: 50rpx;
			}
			.title-center{
				width: 270rpx;
				height: 42rpx;
				font-size: 30rpx;
				font-family: PingFang SC-Medium, PingFang SC;
				font-weight: 500;
				color: #FFFFFF;
				line-height: 0rpx;
				-webkit-background-clip: text;
				margin-left: 209rpx;
				margin-top: 76rpx;
				line-height: 42rpx;
			}
			.time{
				width: 376rpx;
				height: 33rpx;
				font-size: 24rpx;
				font-family: PingFang SC-Medium, PingFang SC;
				font-weight: 500;
				color: #FFFFFF;
				line-height: 33rpx;
				-webkit-background-clip: text;
				opacity: .5;
				margin-left: 156rpx;
				margin-top: 17rpx;
			}
			.btn{
				width: 532rpx;
				height: 88rpx;
				background: #FED2A8;
				border-radius: 20rpx 20rpx 20rpx 20rpx;
				border: 1rpx solid #ECC28E;
				text-align: center;
				line-height: 88rpx;
				margin-top: 92rpx;
				margin-left: 66rpx;
				text{
					width: 60rpx;
					height: 42rpx;
					font-size: 30rpx;
					font-family: PingFang SC-Bold, PingFang SC;
					font-weight: bold;
					color: #010208;
					line-height: 0rpx;
					-webkit-background-clip: text;
				}
			}
		}
	}
}
</style>