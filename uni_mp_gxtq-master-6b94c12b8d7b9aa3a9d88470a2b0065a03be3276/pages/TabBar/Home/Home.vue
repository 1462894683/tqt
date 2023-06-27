<template>
	<view class="overall">
		<view class="head"></view>
		<view class="img">
			<image src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/01首页-banner.png" mode=""></image>
			<view class="ka_bac">
				<image src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/ka_bac.png" mode=""></image>
				<view class="member">
					<view class="member_left">
						<text>暂未开通</text>
						<image src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/svip.png" mode=""></image>
						<text>会员</text>
					</view>
					<view class="member_right">
						<text>立即开通会员权益</text>
						<image src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/jian.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<view class="atlas" v-show="!lists">
			<map style="width:100%; height:100%;" :scale="scale" :latitude="latitude" :longitude="longitude"
				:markers="covers">
			</map>
			<view class="button" @click="judge">
				<image src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/code.png" mode=""></image>
				<text>二维码开门</text>
			</view>
		</view>
		<view class="atlas" v-show="lists">
			<image class="image" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/bank_bg.png" mode=""></image>
			<view class="slice">
				<view class="backdrop">
					<image class="radio" @click="Leave" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/li.png" mode=""></image>
					<image class="radio" @click="switchs" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/guan.png" mode=""></image>
				</view>

			</view>
		</view>
		<register :show="show" @change="change" @codeID="codeID"></register>
		<view class="consume">
			<view class="expense">
				<view class="details">0:30:20</view>
				<view class="matter">累计消费时间</view>
			</view>
			<view class="expense">
				<view class="money">
					<text class="symbol">￥</text>
					<text class="num">38.8</text>
				</view>
				<view class="matter">消费金额</view>
			</view>
			<view class="expense" @click="employ">
				<image src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/rule.png" mode=""></image>
				<view class="matter">使用规则</view>
			</view>
		</view>
		<view class="discount">
			<view class="coupon">
				<view class="coupon_left">领券中心</view>
				<view class="coupon_right">
					<text>查看全部</text>
					<image src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/hei.png" mode=""></image>
				</view>
			</view>
			<view class="dabbler">
				<view class="voucher">
					<image src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/on_sale.png" mode=""></image>
					<view class="authority">
						<view class="wallet">￥</view>
						<view class="property">
							<view class="auth_left">15</view>
							<view class="auth_right">
								<view class="cash">新人专享券</view>
								<view class="full">满0元可用</view>
							</view>
						</view>
					</view>
				</view>
				<view class="voucher">
					<image src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/on_sale.png" mode=""></image>
					<view class="authority">
						<view class="wallet">折扣</view>
						<view class="property">
							<view class="auth_left">8.8</view>
							<view class="auth_right">
								<view class="cash">优惠券名称</view>
								<view class="full">满200元可用</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<dialogs :msg="msg" :kafka="kafka" @alter="alter"></dialogs>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>
<script>
	import QQMapWX from "@/common/qqmap-wx-jssdk.min.js"
	import register from "@/components/register.vue"
	import dialogs from "@/components/dialogs.vue"
	export default {
		components: {
			register,
			dialogs
		},
		data() {
			return {
				value: false,
				current: 0,
				show: false,
				cloudID: '',
				latitude: 39.909, //纬度
				longitude: 116.39742, //经度
				scale: 10, //地图缩放程度
				msg: false,
				lists: false,
				kafka: false,
				covers: [{
					id: 1,
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: 'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/ding.png',
					width: 25, //宽
					height: 45, //高
				}],

			}
		},
		methods: {
			change(a) {
				this.show = a
			},
			alter(e) {
				this.msg = e
				uni.clearStorage();
				this.cloudID = ' '
			},
			switchs() {
				uni.navigateTo({
					url: 'pages/TabBar/Home/components/Switch'
				});
			},
			judge() {
				if (this.cloudID === '') {
					this.show = true
					// this.addMarker()
				} else {
					this.show = false
					uni.setStorageSync('deviate', true)
					uni.navigateTo({
						url: 'pages/TabBar/Home/components/Open'
					});
				}
			},
			codeID(ID) {
				this.cloudID = ID
				console.log(ID)
			},
			Leave() {

				const light = uni.getStorageSync('light')
				if (light === true) {
					this.$refs.uToast.show({
						type: "default",
						message: "请先关灯以及将球杆归位！"
					});
				} else {
					this.$Router.push({
						path:'/pages/TabBar/Home/components/Leave',
						query:{isShowLeaveBtn:true}
					})
					// uni.navigateTo({
					// 	url: 'pages/TabBar/Home/components/Leave'
					// });
				}
			},
			employ() {
				uni.navigateTo({
					url: 'pages/TabBar/Home/components/Payment'
				});
			}
		},
		onLoad() {
			// uni.clearStorage();
		},
		onShow() {
			this.msg = uni.getStorageSync('list')
			this.lists = uni.getStorageSync('lists')
			this.kafka = uni.getStorageSync('kafka')
			uni.removeStorageSync('list')
			uni.removeStorageSync('lists');
			//千万不能删除
			// #ifdef MP-WEIXIN
			this.setTabBarIndex(0);
			// #endif
		},
		mounted() {
			// this.isIphoneXup = app.globalData.isIphoneXup?app.globalData.isIphoneXup:false
			// console.log(app.globalData.isIphoneXup)
	
		}
	}
</script>

<style lang="scss" scoped>
	.overall {
		background: #D1D3EC;
		height: 1590rpx;
	}

	.head {
		height: 88rpx;
		background-color: black;
	}

	.img {
		width: 100%;
		position: relative;
	}

	image {
		width: 100%;
	}

	.ka_bac {
		position: absolute;
		bottom: 8rpx;
		left: 30rpx;
		width: 690rpx;
		height: 90rpx;

		image {
			width: 100%;
			height: 100%;
		}

		.member {
			top: 0;
			left: 0;
			position: absolute;
			width: 100%;
			height: 100%;

			.member_left {
				float: left;
				width: 43%;
				height: 100%;
				margin-left: 24rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;

				text {
					font-size: 30rpx;
					font-family: PingFang SC-Heavy, PingFang SC;
					font-weight: 800;
					color: #B5B5B5;
				}

				image {
					width: 90rpx;
					height: 30rpx;
				}
			}

			.member_right {
				float: right;
				width: 31%;
				height: 100%;
				margin-right: 21rpx;
				display: flex;
				align-items: center;

				text {
					font-size: 24rpx;
					font-family: PingFang SC-Heavy, PingFang SC;
					font-weight: 800;
					color: #FFD397;
				}

				image {
					width: 6.27rpx;
					height: 12.2rpx;
					margin-left: 10rpx;
				}
			}
		}
	}

	.atlas {
		width: 690rpx;
		height: 380rpx;
		margin: 30rpx auto 21rpx;
		position: relative;
		border-radius: 30rpx;
		overflow: hidden;

		.button {
			bottom: 19rpx;
			left: 17rpx;
			position: absolute;
			width: 656rpx;
			height: 86rpx;
			background: linear-gradient(180deg, #3A3869 0%, #33335F 100%);
			box-shadow: 0rpx 20rpx 16rpx 1rpx rgba(0, 0, 0, .3);
			;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 20rpx 20rpx 20rpx 20rpx;

			image {
				width: 35.07rpx;
				height: 35.2rpx;
			}

			text {
				margin-left: 12rpx;
				font-size: 30rpx;
				font-family: PingFang SC-Bold, PingFang SC;
				font-weight: bold;
				color: #FFFFFF;
			}
		}

		.image {
			border-radius: 30rpx;
			width: 100%;
			height: 100%;
		}

		.slice {
			bottom: 0;
			left: 0;
			position: absolute;
			width: 100%;
			height: 130rpx;
			border-radius: 30rpx;
			background-color: rgba(255, 255, 255, .2);

			.backdrop {
				display: flex;
				justify-content: space-around;
				align-items: center;
				position: relative;
				width: 100%;
				height: 100%;

				.radio {
					height: 88rpx;
					width: 320rpx;
				}
			}
		}
	}

	.consume {
		width: 690rpx;
		height: 140rpx;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 21rpx;

		.expense {
			width: 216rpx;
			height: 140rpx;
			background: #E0E2F1;
			box-shadow: 0rpx 8rpx 16rpx 1rpx #758DE5;
			border-radius: 20rpx;
			text-align: center;

			.details {
				width: 136rpx;
				height: 45rpx;
				font-size: 34rpx;
				font-family: OPPOSans-Heavy, OPPOSans;
				font-weight: 800;
				color: #060409;
				display: inline-block;
				margin-top: 31rpx;
			}

			.money {
				margin-top: 31rpx;

				.symbol {
					font-size: 20rpx;
					font-family: OPPOSans-Heavy, OPPOSans;
					font-weight: 800;
					color: #060409;
				}

				.num {
					font-size: 34rpx;
					font-family: OPPOSans-Heavy, OPPOSans;
					font-weight: 800;
					color: #060409;
				}
			}

			.matter {
				width: 100%;
				font-size: 24rpx;
				font-family: PingFang SC-Medium, PingFang SC;
				font-weight: 500;
				color: #010208;
				margin-top: 4rpx;
			}

			image {
				margin-top: 31rpx;
				width: 46rpx;
				height: 46rpx;
			}
		}
	}

	.discount {
		margin: 0 auto;
		width: 690rpx;
		height: 270rpx;
		background: #E5E6F2;
		box-shadow: 0rpx 8rpx 16rpx 1rpx #758DE5;
		border-radius: 30rpx;
		margin-bottom: 25rpx;
		overflow: hidden;

		.coupon {
			height: 42rpx;
			width: 100%;
			margin-top: 18rpx;

			.coupon_left {
				float: left;
				width: 120rpx;
				font-size: 30rpx;
				font-family: PingFang SC-Heavy, PingFang SC;
				font-weight: 800;
				color: #0C0B19;
				margin-left: 25rpx;
				display: flex;
				align-items: center;
			}

			.coupon_right {
				float: right;
				height: 100%;
				width: 109rpx;
				display: flex;
				margin-right: 27rpx;
				align-items: center;

				text {
					font-size: 24rpx;
					font-family: PingFang SC-Medium, PingFang SC;
					font-weight: 500;
					color: #0C0B19;
				}

				image {
					margin-left: 6rpx;
					width: 6.27rpx;
					height: 12.2rpx;
				}
			}
		}

		.dabbler {
			width: 690rpx;
			height: 144rpx;
			margin: 37rpx auto 0;
			display: flex;

			.voucher {
				width: 310rpx;
				height: 144rpx;
				margin-left: 24rpx;
				position: relative;

				image {
					width: 100%;
					height: 100%;
					filter: drop-shadow(0px 3px 7px #EB4853);
					// box-shadow: 0rpx 8rpx 16rpx 1rpx #758DE5;
				}

				.authority {
					position: absolute;
					width: 310rpx;
					height: 144rpx;
					top: 0;

					.wallet {
						position: absolute;
						width: 50rpx;
						height: 28rpx;
						top: 13rpx;
						left: 19rpx;
						font-size: 20rpx;
						font-family: PingFang SC-Bold, PingFang SC;
						font-weight: bold;
						color: #FCEDD8;
					}

					.property {
						margin-left: 10rpx;

						.auth_left {
							float: left;
							width: 84rpx;
							height: 85rpx;
							font-size: 70rpx;
							font-family: DIN-Bold, DIN;
							font-weight: bold;
							color: #FCEDD8;
							margin-top: 30rpx;
						}

						.auth_right {
							margin-top: 35rpx;
							margin-right: 20rpx;
							float: right;
							width: 150rpx;
							height: 85rpx;

							.cash {
								font-size: 30rpx;
								font-family: PingFang SC-Bold, PingFang SC;
								font-weight: bold;
								color: #FCEDD8;
							}

							.full {
								margin-top: 8rpx;
								font-size: 24rpx;
								font-family: PingFang SC-Medium, PingFang SC;
								font-weight: 500;
								color: #FCEDD8;
							}
						}
					}
				}
			}
		}
	}

	.warp {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.rect {
		width: 120px;
		height: 120px;
		background-color: #fff;
	}



	/deep/.u-popup__content {
		border-radius: 30rpx 30rpx 0 0;
	}
</style>