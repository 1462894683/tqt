<template>
	<view>
		<view class="complete" v-show="deviate">
			<image src="/quan.png" mode=""></image>
			<image @click="back" class="wrong" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/cha.png" mode=""></image>
			<image class="wire" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/xian.png" mode=""></image>
			<view class="string" >
				<view class="scan">扫描二维码开门</view>
				<view class="code">
					<image src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/er.png" mode=""></image>
				</view>
				<view class="efficacy">
					5分钟 后二维码将失效
				</view>
			</view>
		</view>
		<view class="complete" v-show="!deviate">
			<image src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/quan.png" mode=""></image>
			<image @click="rollback" class="wrong" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/cha.png" mode=""></image>
			<image class="wire" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/xian.png" mode=""></image>
			<view class="string" >
				<view class="scan">扫描二维码开门</view>
				<view class="code">
					<image src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/er.png" mode=""></image>
				</view>
				<view class="efficacy">
					请在 5分钟内 扫码离开
				</view>
			</view>
			<view class="vamoose">
				<view>请扫码离开!</view>
				<view>5分钟未扫码离开，将生成新的订单，计费重新开始</view>
				<view>开门二维码可在订单中心查看</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				deviate: true
			}
		},
		methods: {
			back() {
				uni.setStorageSync('list', true)
				uni.setStorageSync('lists', true)
				uni.switchTab({
					url: 'pages/TabBar/Home/Home'
				})
			},
			rollback(){
				uni.setStorageSync('list',true)
				uni.setStorageSync('kafka',true)
				uni.switchTab({
					url: 'pages/TabBar/Home/Home'
				})
			}
		},
		onLoad() {
			this.deviate = uni.getStorageSync('deviate')
		}
	}
</script>

<style lang="scss" scoped>
	.complete {
		width: 750rpx;
		height: 1624rpx;
		position: relative;

		image {
			width: 100%;
			height: 100%;
		}

		.wrong {
			width: 34rpx;
			height: 34rpx;
			position: absolute;
			top: 132rpx;
			right: 65rpx;
		}

		.wire {
			position: absolute;
			width: 2rpx;
			height: 284rpx;
			top: 161rpx;
			right: 81rpx;
		}

		.string {
			position: absolute;
			top: 401rpx;
			left: 30rpx;
			width: 688rpx;
			height: 736rpx;
			background: #FFFFFF;
			border-radius: 30rpx;
			text-align: center;

			.scan {
				margin-top: 40rpx;
				font-size: 34rpx;
				font-family: PingFang SC-Heavy, PingFang SC;
				font-weight: 800;
				color: #010208;
			}

			.code {
				margin: 58rpx auto 41rpx;
				width: 445rpx;
				height: 445rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.efficacy {
				font-size: 30rpx;
				font-family: PingFang SC-Bold, PingFang SC;
				font-weight: bold;
				color: #010208;
			}
		}
		.vamoose{
			width: 635rpx;
			height: 113rpx;
			position: absolute;
			bottom: 225rpx;
			left: 58rpx;
			text-align: center;
			font-size: 26rpx;
			font-family: PingFang SC-Regular, PingFang SC;
			font-weight: 400;
			color: #FFFFFF;
			opacity: 50.00%;
		}
	}
</style>