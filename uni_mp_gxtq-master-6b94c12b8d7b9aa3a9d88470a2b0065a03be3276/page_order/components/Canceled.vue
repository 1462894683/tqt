<template>
	<view class="orderconfirm">
		<view class="topbar">
			<TopBar title="已取消" :blackShow="true" :isShowReturn="true"></TopBar>
		</view>
		
		<OrderDetails>
				<view slot="bottomNav">
					<view class="goods-nav">
						<view class="goods-nav-pay">
							 <view class="goods-nav-btn" >删除订单</view>
						</view>
					</view>
					
				</view>
		</OrderDetails>
		
	</view>
</template>

<script>
	//顶部
	import TopBar from '@/components/common/TopBar.vue'
	import OrderDetails from '@/components/order/OrderDetails.vue'
	export default {
		components:{TopBar,OrderDetails},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.orderconfirm{
	width: 750rpx;
	background: #F6F7FE;

	.topbar{
		width: 750rpx;
		height: 209rpx;
		position: fixed;
		top: 0;
		background: #F6F7FE;	
		z-index: 100;
	}
	
	.goods-nav{
		width: 750rpx;
		height: 160rpx;
		background: #F6F7FE;
		box-shadow: 0rpx -2rpx 4rpx 1rpx rgba(225,225,225,0.3);
		position:fixed;
		bottom: 0rpx;
		text-align: center;
		z-index: 99;
		.goods-nav-pay{
			height: 98rpx;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			background: #FFFFFF;
			.goods-nav-btn{
				width: 196rpx;
				height: 84rpx;
				background: #FF1E21;
				border-radius: 20rpx 20rpx 20rpx 20rpx;
				opacity: 1;
				line-height: 84rpx;
				font-size: 30rpx;
				font-family: PingFang SC-Medium, PingFang SC;
				font-weight: 500;
				color: #FFFFFF;
				margin-left: 44rpx;
				margin-right: 32rpx;
			}
		}
		
	}
}
</style>
