<template>
	<view class="complete">
		<TopBar :whiteShow="true" :isShowReturn="true" title='订单确认'></TopBar>
		<view class="head">
			<image src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/header.png" mode=""></image>
			<view class="time">
				<view class="time_left">
					<image src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/deng2.png" mode=""></image>
					<text>等待付款</text>
				</view>
				<view class="time_right">
					<text>时长：</text>
					<view><u-count-down :time="24 * 60 * 60 * 1000" format="HH:mm:ss"></u-count-down></view>
				</view>
			</view>
			<view class="site" v-for="item in address" :key="item.id">
				<view class="site_top">
					<image src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/ding2.png" mode=""></image>
					<text>{{item.name}}</text>
				</view>
				<view class="site_bottom">{{item.site}}</view>
			</view>
		</view>
		<view class="indent" v-for="item in minute" :key="item.id"> 
			<view class="serial">
				订单编号：<text>{{item.number}}</text>
			</view>
			<view class="details">
				<view class="deta_left">
					<image src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/bg.png" mode=""></image>
				</view>
				<view class="deta_right">
					<view class="club">
						<view class="club_left">台球俱乐部</view>
						<view class="club_right"><text>{{item.num}}</text>元/小时</view>
					</view>
					<view class="duration">
						<view class="durat_left">开始时间</view>
						<view class="durat_right">{{item.begin}}</view>
					</view>
					<view class="duration">
						<view class="durat_left">结束时间</view>
						<view class="durat_right">{{item.finish}}</view>
					</view>
					<view class="duration">
						<view class="durat_left">免费时长</view>
						<view class="durat_right">{{item.time}}</view>
					</view>
				</view>
			</view>
			<view class="figure jointly">
				<view class="join">金额</view>
				<view class="figure_right mutual">￥{{item.amount}}</view>
			</view>
			<view class="reduced jointly" @click="reduced">
				<view class="join">优惠券</view>
				<view class="reduced_right mutual">
					-￥{{item.reduced}}
					<image src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/25跳转@2x.png" mode=""></image>
				</view>
			</view>
			<view class="figure jointly">
				<view class="join">合计</view>
				<view class="figure_right mutual">￥{{totalPrice}}</view>
			</view>
			<view class="remark jointly">
				<view class="join">备注</view>
				<view class="remark_right mutual">{{item.remarks}}</view>
			</view>
		</view>
		<view class="bottom-box">
			<!-- 一个页面底部 -->
			<view class="purchase" v-if="settlement">
				<view class="purchase_left"><text>实付</text><text class="buy">￥{{totalPrice}}</text></view>
				<view class="purchase_right" @click="drawee">立即购买</view>
			</view>
			<!-- 一个页面底部 -->
			<view class="purchase" v-if="isShowLeaveBtn">
				<view class="purchase_left"><text>实付</text><text class="buy">￥{{minute[0].total}}</text></view>
				<view class="purchase_right" @click="drawee()">立即购买</view>
			</view>
			<!-- 一个页面底部 -->
			<view class="leaveOrder" v-if="isShowLeave" @click="goBuyBtn()">离开</view>
			<!-- 一个页面底部 -->
			<view class="leaveOrder" v-if="isShowDelete" @click="goDeleteCart()">删除订单</view>
		</view>
			
		<DeleteModel v-if="isDeleteCartShow" :isDeleteCartShow="isDeleteCartShow" 
			@closeDeleteModel="closeDeleteModel" @confirmDeleteCart="confirmDeleteCart" titleModel="是否确定删除"
		></DeleteModel>
		
	</view>
</template>

<script>
	import TopBar from '@/components/common/TopBar.vue'
	import DeleteModel from '@/pages/TabBar/Shopping/components/DeleteModel.vue'
	export default {
		components: {
			TopBar,DeleteModel
		},
		data() {
			return {
				totalPrice:0,//商品总价
				address: [{
					id: 1,
					name: '逗逗空间光谷广场',
					site: '北京市东城区火车北站街道幸福花园'
				}],
				minute: [{
					id: 1,
					number: 2021071714171234,
					num: 20,
					finish: '2022.08 .20 14: 00',
					time: '30min',
					begin: '2022.08 .20 10: 00',
					amount:'260.80',
					reduced:'20.00',
					total:'240.00',
					remarks:'里面有一个桌子是坏的'
				}],
				settlement:false,//结算展示
				isShowLeaveBtn:false,//首页离开按钮
				isShowLeave:false,//订单离开按钮
				isShowDelete:false,//订单删除按钮
				isDeleteCartShow:false,//删除购物车模态框
			}
		},
		onShow() {
			this.isShowLeaveBtn = this.$Route.query.isShowLeaveBtn
			this.isShowLeave = this.$Route.query.isShowLeave
			this.isShowDelete = this.$Route.query.isShowDelete
			this.settlement = this.$Route.query.settlement
			this.totalPrice = this.$Route.query.totalPrice
		},
		methods: {
			reduced(){
				this.$Router.push({path:'/pages/TabBar/Mine/components/Coupon'})
			},
			drawee(){
				uni.setStorageSync('deviate', false)
				this.$Router.push({path:'/pages/TabBar/Home/components/Open'})
			},
			//跳转到订单实付页面
			goBuyBtn(){
				this.$Router.push({
					path:'/pages/TabBar/Home/components/Leave',
					query:{isShowLeaveBtn:true}
				})
			},
			//删除订单
			goDeleteCart(){
				this.isDeleteCartShow=true
			},
			//确定删除购物车
			confirmDeleteCart(show){
				console.log(show,'00000000000000000000');
			},
			//关闭模态框
			closeDeleteModel(show){
				this.isDeleteCartShow = show
			},
		},		
	}
	
</script>

<style lang="scss" scoped>
	.complete {
		width: 750rpx;
		height: 1624rpx;
		background: #F6F7FE;
	}

	.head {
		width: 100%;
		height: 524rpx;
		position: relative;

		image {
			width: 100%;
			height: 100%;
		}

		.time {
			position: absolute;
			width: 666rpx;
			height: 45rpx;
			top: 246rpx;
			left: 58rpx;
			display: flex;
			justify-content: space-between;

			.time_left {
				width: 182rpx;
				height: 100%;
				display: flex;
				align-items: center;

				image {
					width: 40rpx;
					height: 40rpx;
				}

				text {
					margin-left: 12rpx;
					font-size: 32rpx;
					font-family: PingFang SC-Medium, PingFang SC;
					font-weight: 500;
					color: #FFFFFF;
				}
			}

			.time_right {
				width: 220rpx;
				height: 100%;

				text {
					font-size: 30rpx;
					font-family: PingFang SC-Medium, PingFang SC;
					font-weight: 500;
					color: #FFFFFF;
				}

				view {
					float: right;
					width: 130rpx;
				}
			}
		}

		.site {
			width: 690rpx;
			height: 158rpx;
			top: 336rpx;
			left: 32rpx;
			background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, #FFFFFF 100%);
			box-shadow: 0rpx 6rpx 16rpx 1rpx rgba(117, 141, 229, 0.43);
			border-radius: 30rpx;
			position: absolute;

			.site_top {
				height: 45rpx;
				width: 350rpx;
				margin-top: 31rpx;
				margin-left: 31rpx;
				display: flex;
				align-items: center;

				image {
					width: 36rpx;
					height: 40rpx;
				}

				text {
					margin-left: 11rpx;
					font-size: 32rpx;
					font-family: PingFang SC-Bold, PingFang SC;
					font-weight: bold;
					color: #010208;
				}
			}

			.site_bottom {
				width: 426rpx;
				height: 37rpx;
				margin-left: 78rpx;
				margin-top: 2rpx;
				font-size: 26rpx;
				font-family: PingFang SC-Regular, PingFang SC;
				font-weight: 400;
				color: #010208;
			}
		}

		/deep/.u-count-down__text {
			color: #FFFFFF !important;
		}
	}

	.indent {
		width: 690rpx;
		height: 712rpx;
		background: #FFFFFF;
		border-radius: 30rpx;
		margin: 34rpx auto 0;
		overflow: hidden;

		.serial {
			margin-top: 45rpx;
			margin-left: 29rpx;
			width: 590rpx;
			height: 42rpx;
			font-size: 30rpx;
			font-family: PingFang SC-Bold, PingFang SC;
			font-weight: bold;
			color: #010208;
		}

		.details {
			width: 632rpx;
			height: 200rpx;
			margin: 33rpx auto 0;
			padding-bottom: 33rpx;
			border-bottom: 1px solid #ddd;

			.deta_left {
				float: left;
				width: 230rpx;
				height: 100%;

				image {
					width: 100%;
					height: 100%;
					border-radius: 10rpx;
				}
			}

			.deta_right {
				float: right;
				width: 360rpx;
				height: 100%;

				.club {
					width: 100%;
					height: 42rpx;
					margin-bottom: 23rpx;

					.club_left {
						float: left;
						width: 150rpx;
						height: 100%;
						font-size: 30rpx;
						font-family: PingFang SC-Medium, PingFang SC;
						font-weight: 500;
						color: #010208;
					}

					.club_right {
						float: right;
						width: 122rpx;
						height: 100%;
						font-size: 26rpx;
						font-family: PingFang SC-Medium, PingFang SC;
						font-weight: 500;
						color: #010208;

						text {
							font-size: 26rpx;
							font-family: OPPOSans-bold, OPPOSans;
							font-weight: bold;
						}
					}
				}

				.duration {
					width: 100%;
					height: 33rpx;
					margin-bottom: 12rpx;
					.durat_left {
						float: left;
						width: 96rpx;
						height: 100%;
						font-size: 24rpx;
						font-family: PingFang SC-Medium, PingFang SC;
						font-weight: 500;
						color: #010208;
					}

					.durat_right {
						float: right;
						height: 100%;
						font-size: 24rpx;
						font-family: PingFang SC-Medium, PingFang SC;
						font-weight: 500;
						color: #010208;
					}
				}
			}
		}

		.jointly {
			width: 632rpx;
			height: 34rpx;
			margin: 40rpx auto 0;

			.join {
				float: left;
				height: 100%;
				font-size: 26rpx;
				font-family: PingFang SC-Regular, PingFang SC;
				font-weight: 400;
				color: #010208;
			}

			.mutual {
				float: right;
				height: 100%;
				font-size: 26rpx;
			}
		}

		.figure {
			.figure_right {
				font-family: OPPOSans-bold, OPPOSans;
				font-weight: bold;
				color: #010208;
			}
		}

		.reduced {
			.reduced_right {
				font-family: OPPOSans-bold, OPPOSans;
				font-weight: bold;
				color: #FF1E21;

				image {
					width: 6.99rpx;
					height: 12.51rpx;
					margin-left: 5rpx;
				}
			}
		}

		.remark {
			.remark_right {
				font-family: PingFangSC-Regular-, PingFangSC-Regular;
				font-weight: normal;
				color: #010208;
			}
		}

	}
	.bottom-box{
		width: 750rpx;
		height: 156rpx;
		background-color: #ffffff;
		position: fixed;
		bottom: 0;
		z-index: 99;
		.purchase{
			width: 100%;
			height: 98rpx;
			display: flex;
			align-items: center;
			background-color: #FFFFFF;
			.purchase_left{
				width: 210rpx;
				height: 100%;
				margin-left: 29rpx;
				float: left;
				display: flex;
				align-items: center;
				justify-content: center;
				text{
					font-size: 26rpx;
					font-family: PingFang SC-Bold, PingFang SC;
					font-weight: bold;
					color: #010208;
				}
				.buy{
					font-size: 32rpx;
					font-family: OPPOSans-Heavy, OPPOSans;
					font-weight: 800;
					color: #FF1E21;
				}
			}
			.purchase_right{
				float: right;
				width: 318rpx;
				height: 84rpx;
				background: #FF1E21;
				border-radius: 20rpx;
				margin-left: 164rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 30rpx;
				font-family: PingFang SC-Medium, PingFang SC;
				font-weight: 500;
				color: #FFFFFF;
			}
		}
		.leaveOrder{
			width: 690rpx;
			height: 88rpx;
			margin: 0 auto;
			background: #FF1E21;
			border-radius: 20rpx 20rpx 20rpx 20rpx;
			font-size: 34rpx;
			font-family: PingFang SC-Medium, PingFang SC;
			font-weight: 500;
			color: #FFFFFF;
			text-align: center;
			line-height: 88rpx;
		}
	}

</style>