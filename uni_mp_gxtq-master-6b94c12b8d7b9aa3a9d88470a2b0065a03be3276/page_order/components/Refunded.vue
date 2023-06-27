<template>
	<view class="orderconfirm">
		<view class="topbar">
			<TopBar title="已退款" :blackShow="true" :isShowReturn="true"></TopBar>
		</view>
		
		<view class="Refund-box">
			<view class="UnderRefund">
				<view class="UnderRefund-Title">
					<image src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/48确认@2x.png"></image>
					<text class="UnderRefund-name">已退款</text>
				</view>		
				<text class="UnderRefund-Time">2023.04.22 12: 00: 00</text>
			</view>
			<view class="RefundAmount">
				<text class="TotalRefund">退款总金额</text>
				<text class="RefundAmountMoney">￥50.00</text>
			</view>
			<view class="RefundInfo">
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
				
				<view class="RefundBorder"></view>
				
				<view class="RefundDetail">
					<view class="RefundDetail-text">
						<view class="Refund-Jin">退款金额</view>
						<view class="Refund-Money">￥50.00</view>
					</view>
					<view class="RefundDetail-text">
						<view class="Refund-Jin">退款原因</view>
						<view class="Refund-Moneys">原因说明原因说明原因说明原因</view>
					</view>
					<view class="RefundDetail-text">
						<view class="Refund-Jin">申请时间</view>
						<view class="Refund-Moneys-S">2023.04.22 12: 00: 00</view>
					</view>
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	//顶部
	import TopBar from '@/components/common/TopBar.vue'
	export default {
		components:{TopBar},
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
	
	.Refund-box{
		padding-top: 150rpx;
		.UnderRefund{
			width: 690rpx;
			height: 180rpx;
			background: #FFFFFF;
			border-radius: 30rpx 30rpx 30rpx 30rpx;
			opacity: 1;
			margin:0 0 20rpx 30rpx;
			display: flex;
			flex-direction: column;
			.UnderRefund-Title{
				width: 690rpx;
				height: 45rpx;
				display: flex;
				margin: 46rpx 0 10rpx 29rpx;
				image{
					width: 40rpx;
					height: 40rpx;
					margin-right: 9rpx;
				}
				.UnderRefund-name{
					width: 96rpx;
					height: 45rpx;
					font-size: 32rpx;
					font-family: PingFang SC-Bold, PingFang SC;
					font-weight: bold;
					color: #461A5F;
					margin-top: -1rpx;
				}
			}
			.UnderRefund-Time{
				margin-left: 78rpx;
				font-size: 26rpx;
				font-family: PingFang SC-Regular, PingFang SC;
				font-weight: 400;
				color: #010208;
			}
		}
		.RefundAmount{
			width: 690rpx;
			height: 100rpx;
			background: #FFFFFF;
			border-radius: 30rpx 30rpx 30rpx 30rpx;
			opacity: 1;
			margin:0 0 20rpx 30rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.TotalRefund{
				font-size: 30rpx;
				font-family: PingFang SC-Regular, PingFang SC;
				font-weight: 400;
				color: #010208;
				opacity: 50.00%;
				margin-left: 31rpx;
			}
			.RefundAmountMoney{
				font-size: 32rpx;
				font-family: PingFang SC-Bold, PingFang SC;
				font-weight: bold;
				color: #FF1E21;
				margin-right: 34rpx;
			}
		}
		.RefundInfo{
			width: 690rpx;
			height: 547rpx;
			background: #FFFFFF;
			border-radius: 30rpx 30rpx 30rpx 30rpx;
			opacity: 1;
			margin-left: 30rpx;
			display: flex;
			flex-direction: column;
			.Evaluate{
				width: 690rpx;
				height: 269rpx;
				background: #FFFFFF;
				border-radius: 30rpx 30rpx 30rpx 30rpx;
				opacity: 1;
				// margin-bottom: 37rpx ;
				display: flex;
				align-items: center;
				justify-content: space-between;
				image{
					width: 230rpx;
					height: 200rpx;
					background: #EFEFEF;
					border-radius: 10rpx 10rpx 10rpx 10rpx;
					opacity: 1;
					margin: 32rpx 0 37rpx 29rpx;
				}
				.Evaluate-text{
					width: 360rpx;
					height: 200rpx;
					border-radius: 30rpx 30rpx 30rpx 30rpx;
					opacity: 1;
					margin: 31rpx 29rpx 0 0;
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
			
			.RefundBorder{
				width: 630rpx;
				height: 0rpx;
				opacity: 1;
				border: 1rpx solid #DDDDDD;
				margin:0 0 42rpx 31rpx;
			}
			
			.RefundDetail{
				width:  690rpx;
				display: flex;
				flex-direction: column;
				.RefundDetail-text{
					width:  690rpx;
					height: 37rpx;
					display: flex;
					justify-content: space-between;
					margin-bottom: 34rpx;
					.Refund-Jin{
						margin-left: 26rpx;
						font-size: 26rpx;
						font-family: PingFang SC-Regular, PingFang SC;
						font-weight: 400;
						color: #010208;
						opacity: 80.00%;
					}
					.Refund-Money{
						margin-right: 32rpx;
						font-size: 26rpx;
						font-family: OPPOSans-bold, OPPOSans;
						font-weight: bold;
						color: #010208;
					}
					.Refund-Moneys{
						margin-right: 32rpx;
						font-size: 26rpx;
						font-family: OPPOSans-bold, OPPOSans;
						font-weight: 400;
						color: #010208;
					}
					.Refund-Moneys-S{
						margin-right: 32rpx;
						font-size: 26rpx;
						font-family: OPPOSans-bold, OPPOSans;
						font-weight: 500;
						color: #010208;
					}
				}
				
			}
			
			
		
		}
		
		
		
	}
	
}
</style>
