<template>
	<view>
		<u-popup :show="show" :round="10" mode="center" >
			<view class="popup">
				<view class="login">您还未登录</view>
				<view class="warn">请先登录，再进行此操作</view>
				<view class="notice">
					<view class="cancel" @click="$emit('change',false)">
						<text>取消</text>
					</view>
					<view class="confirm" @click="$emit('change',false);shows = true">
						<text>确定</text>
					</view>
				</view>
			</view>
		</u-popup>
		<u-popup :show="shows"  mode="bottom" @close="close" >
			<view class="register">
				<view class="space">登录逗逗空间</view>
				<view class="enter" :style="{backgroundColor:color}" @click="hint()">
					<text>微信登陆</text>
				</view>
				<view class="consent">
					<u-checkbox-group>
						<u-checkbox shape="circle" activeColor="green" @change="radioChange"></u-checkbox>
						<text>登录即同意</text>
						<text class="deal">《用户协议》</text>
						<text class="deal">《隐私协议》</text>
					</u-checkbox-group>
				</view>
			</view>
		</u-popup>
		<u-popup :show="popup" :round="10" mode="center" @close="close">
			<view class="popup">
				<view class="login">温馨提示</view>
				<view class="warn">
					请阅读并勾选
					<view class="user">《用户协议》《隐私协议》</view>
				</view>
				<view class="notice">
					<view class="cancel" @click="popup = false">
						<text>取消</text>
					</view>
					<view class="confirm" @click="popup = false;shows = true">
						<text>确定</text>
					</view>
				</view>
			</view>
		</u-popup>
		<u-popup :show="phone" mode="bottom">
			<view class="phone">
				<view class="employ">
					<view class="emp_left">
						<view class="images">
							<!-- <image src="" mode=""></image> -->
						</view>
						<view class="use">逗逗空间申请使用</view>
					</view>
					<view class="emp_right">
						<image src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/jie.png" mode=""></image>
					</view>
				</view>
				<view class="rational">你的手机号</view>
				<view class="call">
					<view class="call_left">
						<text class="tel">187*****234</text>
						<text class="wechat">微信绑定号码</text>
					</view>
					<view class="call_right">
						<image src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/xuan.png" mode=""></image>
					</view>
				</view>
				<view class="rest">使用其他号码登陆</view>
				<view class="other">
					<view class="other_left" @click="phone = false">
						<text>取消</text>
					</view>
					<view class="other_right" @click="phone = false;place = true;">
						<text>确认</text>
					</view>
				</view>
			</view>
		</u-popup>
		<u-popup :show="place" :round="10" mode="center">
			<view class="popup">
				<view class="login">逗逗空间需要获取你的地理位置</view>
				<view class="warn">授权当前位置</view>
				<view class="notice">
					<view class="cancel" @click="place = false">
						<text>取消</text>
					</view>
					<view class="confirm" @click="place = false">
						<text>确定</text>
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		name: "register",
		props: {
			isLogin:{
				type: Boolean,
				// default: ""
			},
			show: {
				type: Boolean,
				default: ""
			},
			content:{
				type: Boolean,
				default: ''
			},
			showPopup: {
				type: Boolean,
				default: false
			},
		},
		data() {
			return {
				shows: false,
				phone: false,
				popup: false,
				place: false,
				cloudID: '',
				color: '#D1D1D1',
			};
		},
		methods: {
			hint() {
				if (this.color === '#D1D1D1') {
					this.popup = true
					this.shows = false
				} else if (this.color === '#0ABC64') {
					this.phone = true
					this.shows = false
					this.login()
					
				}
			},
			radioChange(n) {
				if (n === true) {
					this.color = '#0ABC64'
				} else {
					this.color = '#D1D1D1'
				}
			},
			close() {
				this.shows = false
				this.popup = false
			},
			//获取openid
			init(){
				uni.login({
				        provider: "weixin",
				        success: function (res) {
				          let appid = "wx5513a19c3f29c4d5";
				          let secret = "124dcff085418278ce067ecedfb41cc5";
				          let url =
				            "https://api.weixin.qq.com/sns/jscode2session?appid=" +
				            appid +
				            "&secret=" +
				            secret +
				            "&js_code=" +
				            res.code +
				            "&grant_type=authorization_code";
				          uni.request({
				            url: url, // 请求路径
				            success: (r) => {
				              console.log("r", r);
				              console.info("用户的openId", r.data.openid);
							  uni.setStorageSync('request',r.data.openid);
							  console.log(uni.getStorageSync('request',r.data.openid),'wwwwwwwwwwwwwwwwwwwwww');
				            },
				          });
				        },
				});		
			},
			login() {
				uni.getUserProfile({
					desc: '登录后可同步数据',
					lang: 'zh_CN',
					success: (res) => {
						console.log('getUserProfile', res);
						uni.setStorageSync('getUserProfile',res);
						this.cloudID = res.cloudID
						this.$emit('codeID', this.cloudID)
					},
				});
			},
		},

	}
</script>

<style lang="scss" scoped>
	.popup {
		width: 612rpx;
		height: 396rpx;
		text-align: center;

		.login {
			margin-top: 40rpx;
			font-size: 34rpx;
			font-family: PingFang SC-Heavy, PingFang SC;
			font-weight: 800;
			color: #010208;
		}

		.warn {
			margin-top: 58rpx;
			font-size: 30rpx;
			font-family: PingFang SC-Medium, PingFang SC;
			font-weight: 500;
			color: #010208;

			.user {
				color: #0ABC64;
				margin-top: 4rpx;
			}
		}

		.notice {
			width: 100%;
			height: 110rpx;
			margin-top: 102rpx;

			.cancel {
				float: left;
				width: 304rpx;
				height: 100%;
				border-radius: 0 0 0 20rpx;
				background-color: white;
				border-top: 1rpx solid #F3F3F3;
				border-right: 1rpx solid #F3F3F3;
				display: flex;
				align-items: center;
				justify-content: center;

				text {
					font-size: 34rpx;
					font-family: PingFang SC-Bold, PingFang SC;
					font-weight: bold;
					color: #010208;
				}
			}

			.confirm {
				float: left;
				width: 304rpx;
				height: 100%;
				border-radius: 0 0 20rpx 0;
				background-color: white;
				border-top: 1rpx solid #F3F3F3;
				display: flex;
				align-items: center;
				justify-content: center;

				text {
					font-size: 34rpx;
					font-family: PingFang SC-Bold, PingFang SC;
					font-weight: bold;
					color: #010208;
				}
			}
		}
	}

	.register {
		width: 100%;
		height: 420rpx;
		text-align: center;
		margin-top: 57rpx;

		.space {
			font-size: 34rpx;
			font-family: PingFang SC-Heavy, PingFang SC;
			font-weight: 800;
			color: #010208;
		}

		.enter {
			margin: 101rpx auto 0;
			width: 670rpx;
			height: 88rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 20rpx;

			text {
				font-size: 34rpx;
				font-family: PingFang SC-Medium, PingFang SC;
				font-weight: 500;
				color: #FFFFFF;
			}
		}

		.consent {
			width: 617rpx;
			margin: 41rpx auto 0;

			.deal {
				color: #0ABC64;
			}
		}
	}

	.phone {
		width: 100%;
		height: 592rpx;

		.employ {
			width: 670rpx;
			height: 54rpx;
			margin: 57rpx auto 34rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.emp_left {
				width: 350rpx;
				height: 100%;
				display: flex;
				align-items: center;

				.images {
					float: left;
					width: 54rpx;
					height: 54rpx;
					background: #461A5F;
					border-radius: 100rpx;

					img {
						width: 100%;
						height: 100%;
					}
				}

				.use {
					float: left;
					width: 272rpx;
					height: 48rpx;
					font-size: 34rpx;
					margin-left: 8rpx;
					font-family: PingFang SC-Heavy, PingFang SC;
					font-weight: 800;
					color: #010208;
				}
			}

			.emp_right {
				width: 46rpx;
				height: 46rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}

		.rational {
			width: 670rpx;
			height: 42rpx;
			margin: 0 auto;
			font-size: 30rpx;
			font-family: PingFang SC-Regular, PingFang SC;
			font-weight: 400;
			color: #010208;
		}

		.call {
			width: 670rpx;
			height: 55rpx;
			padding: 30rpx 0;
			margin: 24rpx auto;
			border-top: 2rpx solid #EFEFEF;
			border-bottom: 2rpx solid #EFEFEF;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.call_left {
				height: 100%;
				width: 488rpx;

				.tel {
					font-size: 42rpx;
					font-family: OPPOSans-bold, OPPOSans;
					font-weight: bold;
					color: #010208;
				}

				.wechat {
					margin-left: 26rpx;
					font-size: 30rpx;
					font-family: PingFang SC-Regular, PingFang SC;
					font-weight: 400;
					color: #010208;
				}
			}

			.call_right {
				width: 38.52rpx;
				height: 29.62rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}

		.rest {
			width: 670rpx;
			height: 42rpx;
			margin: 0 auto;
			font-size: 30rpx;
			font-family: PingFang SC-Bold, PingFang SC;
			font-weight: bold;
			color: #461A5F;
		}

		.other {
			width: 670rpx;
			height: 88rpx;
			margin: 65rpx auto 0;
			display: flex;
			align-items: center;
			justify-content: space-around;

			view {
				width: 272rpx;
				height: 100%;
				border-radius: 20rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.other_left {
				background: #EBEBEB;

				text {
					font-size: 34rpx;
					font-family: PingFang SC-Medium, PingFang SC;
					font-weight: 500;
					color: #0ABC64;
				}
			}

			.other_right {
				background: #0ABC64;

				text {
					font-size: 34rpx;
					font-family: PingFang SC-Medium, PingFang SC;
					font-weight: 500;
					color: #FFFFFF;
				}
			}
		}
	}
</style>