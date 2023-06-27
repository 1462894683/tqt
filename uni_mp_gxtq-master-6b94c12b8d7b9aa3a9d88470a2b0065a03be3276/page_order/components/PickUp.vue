<template>
	<view class="orderconfirm">
		<view class="topbar">
			<TopBar title="已自提" :blackShow="true" :isShowReturn="true"></TopBar>
		</view>
		
		<OrderDetails>
				<view slot="bottomNav">
					<view class="goods-nav">
						<view class="goods-nav-pay">
							<view class="goods-nav-cancel" @click="ApplyForRefund">申请退款</view>
							 <view class="goods-nav-btn" @click="goEvaluate">评价</view>
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
			//评价
			goEvaluate(){
				this.$Router.push({path:'/pages/TabBar/Order/components/Evaluate'})
			},
			//申请退款
			ApplyForRefund(){
				this.$Router.push({path:'/pages/TabBar/Order/components/ApplyForRefund'})
			},
			
		},
		onShow() {
			
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
			background: #FFFFFF;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			.goods-nav-cancel{
				width: 196rpx;
				height: 84rpx;
				border-radius: 20rpx 20rpx 20rpx 20rpx;
				opacity: 1;
				border: 1rpx solid #707070;
				font-size: 30rpx;
				font-family: PingFang SC-Medium, PingFang SC;
				font-weight: 500;
				color: #010208;			
				line-height: 84rpx;
			}
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

