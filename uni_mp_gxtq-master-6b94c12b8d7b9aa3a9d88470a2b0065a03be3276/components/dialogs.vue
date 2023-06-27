<template>
	<u-overlay :show='msg'>
		<view class="warps" v-show="!kafka">
			<image src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/tan.png" mode=""></image>
			<view class="close" @click="$emit('alter',false)">
				<image src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/cha.png" mode=""></image>
			</view>
			<image class="wire" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/duan.png" mode=""></image>
			<view class="begin">
				<view class="start">计费已开始</view>
				<view class="start">祝您玩的愉快!</view>
				<button class="custom-style" type="primary" @click="$emit('alter',false)">确定</button>
				<view class="leave">离开时，支付订单后会生成关门二维码！</view>
			</view>
		</view>
		<view class="warps" v-show="kafka">
			<image src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/chu.png" mode=""></image>
			<view class="close" @click="$emit('alter',false)">
				<image src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/cha.png" mode=""></image>
			</view>
			<image class="wire" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/duan.png" mode=""></image>
			<view class="begin">
				<button class="custom-styles" type="primary" @click="$emit('alter',false)">离开</button>
			</view>
		</view>
	</u-overlay>
</template>

<script>
	export default {
		name: "dialog",
		props: {
			msg: {
				type: Boolean,
				default: ""
			},
			kafka: {
				type: Boolean,
				default: ""
			},
		},
		data() {
			return {
				change: false,
			};
		},
		onLoad() {
			
		},
		onShow() {
			
		}
	}
</script>

<style lang="scss" scoped>
	.warps {
		width: 612rpx;
		height: 650rpx;
		margin: auto;
		position: relative;

		image {
			width: 100%;
			height: 100%;
		}

		.close {
			width: 34rpx;
			height: 34rpx;
			position: absolute;
			top: 0;
			right: 25rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.wire {
			width: 1rpx;
			height: 150rpx;
			position: absolute;
			top: 32rpx;
			right: 40rpx;
		}

		.begin {
			width: 532rpx;
			height: 320rpx;
			position: absolute;
			bottom: 0;
			left: 20rpx;
			text-align: center;

			.start {
				font-size: 36rpx;
				font-family: PingFang SC-Bold, PingFang SC;
				font-weight: bold;
				color: #010208;
				margin-top: 10rpx;
			}

			.custom-style {
				height: 88rpx;
				background-color: #461A5F;
				border-radius: 20rpx;
				margin-top: 44rpx;
			}

			.leave {
				margin-top: 20rpx;
				font-size: 24rpx;
				font-family: PingFang SC-Regular, PingFang SC;
				font-weight: 400;
				color: #010208;
			}
			.custom-styles{
				margin-top: 192rpx;
				height: 88rpx;
				background-color: #461A5F;
				border-radius: 20rpx;
			}
		}
	}
</style>