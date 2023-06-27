<template>
	<view class="orderconfirm">
		<view class="topbar">
			<TopBar title="订单确认" :blackShow="true" :isShowReturn="true"></TopBar>
		</view>
		<!-- 公共组件 -->
		<OrderDetails>
			<view class="goods-nav-box" slot="bottomNav">
				<view class="goods-nav">
					<view class="goods-nav-title">实付</view>
					<view class="goods-nav-price">￥240.80</view>
					<view class="goods-nav-btn" @click="goBuy">立即购买</view>
				</view>
			</view>
		</OrderDetails>
	</view>
</template>

<script>
	//顶部
	import TopBar from '@/components/common/TopBar.vue'
	// 订单公共组件
	import OrderDetails from '@/components/order/OrderDetails.vue'
	export default {
		components:{TopBar,OrderDetails},
		data() {
			return {
			}
		},
		methods: {

		},
		onShow() {

		}
	}
</script>

<style lang="scss" scoped>
.orderconfirm{
	width: 750rpx;
	height: 1624rpx;
	background: #F6F7FE;
	.topbar{
		width: 750rpx;
		height: 209rpx;
		position: fixed;
		top: 0;
		background: #F6F7FE;	
		z-index: 100;
	}
	.goods-nav-box{
		width: 750rpx;
		height: 166rpx;
		position:fixed;
		bottom: 0;
		background-color: #FFFFFF;
		z-index: 200;
		.goods-nav{
			width: 750rpx;
			height: 98rpx;
			background: #FFFFFF;
			box-shadow: 0rpx -2rpx 4rpx 1rpx rgba(225,225,225,0.3);
			display: flex;
			align-items: center;
			z-index: 99;
			.goods-nav-title{
				width: 100rpx;
				height: 37rpx;
				font-size: 26rpx;
				font-family: PingFang SC-Bold, PingFang SC;
				font-weight: bold;
				color: #010208;
				-webkit-background-clip: text;
				margin-left: 29rpx;
			}
			.goods-nav-price{
				width: 270rpx;
				font-size: 32rpx;
				font-family: OPPOSans-Heavy, OPPOSans;
				font-weight: 800;
				color: #FF1E21;
				-webkit-background-clip: text;
				margin-left: -42rpx;
			}
			.goods-nav-btn{
				width: 318rpx;
				height: 84rpx;
				background: #FF1E21;
				border-radius: 20rpx 20rpx 20rpx 20rpx;
				text-align: center;
				line-height: 84rpx;
				font-size: 30rpx;
				font-family: PingFang SC-Medium, PingFang SC;
				font-weight: 500;
				color: #FFFFFF;
				margin-left: 44rpx;
			}
		}
	}
}
</style>
