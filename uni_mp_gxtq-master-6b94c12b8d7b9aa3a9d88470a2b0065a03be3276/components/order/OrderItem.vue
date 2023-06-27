<template>
	<view>
		<!--共享订单编号1-->		
		<view class="orderNum" v-if="shareOrder">
			<view class="numMessage">
				<view class="orderNumes">{{orderItem.title}}</view>
				<view class="orderShou" :style="{backgroundColor:colors,color:fontColors}" @click="goOrderBtn()">{{orderItem.shareOrderStatus}}</view>
			</view>
			<view class="orderDetails">
				<image :src='orderItem.goodImg' class="orderImg"></image>
				<view class="orderTilteS">
					<view class="orderTilte">
						<view class="order-Tilte">{{orderItem.orderTitle}}</view>
						<view class="orderTime">
							<text class="orderTime1">{{orderItem.orderTime1}}</text>
							<text class="orderTime2">{{orderItem.orderTime2}}</text>
						</view>
					</view>				
					<view class="orderStardTelit">
						<view class="orderTilteTime">{{orderItem.startTimeTitle}}</view>
						<view class="orderTimeS">{{orderItem.startTime}}</view>
					</view>
					<view class="orderStardTelit">
						<view class="orderTilteTime">{{orderItem.endTimeTitle}}</view>
						<view class="orderTimeS">{{orderItem.endTime}}</view>
					</view>
					<view class="orderStardTelit">
						<view class="orderTilteTime">{{orderItem.freeTimeTitle}}</view>
						<view class="orderTimeS">{{orderItem.freeTime}}</view>
					</view>
					<view class="orderStardTelit totalprice">
						<view class="orderTilteTime">{{orderItem.totalPriceTitle}}</view>
						<view class="orderTimeS-color">
							<text class="orderTimeS-color-icon">￥</text>
							<text class="orderTimeS-color-num">{{orderItem.totalPrice}}</text>
						</view>
					</view>
		
				</view>
			</view>
			<view class="orderXian"></view>
			<view class="orderPayments" v-if="orderItem.shareOrderStatus==='待付款'">
				<view class="goToPay":style="{backgroundColor:bColor}" @click="LeaveBtn">{{orderItem.leaveBtn}}</view>
			</view>
			<view class="orderPayments" v-if="orderItem.shareOrderStatus==='交易完成'">
				<view class="orderCheckDetails" @click="goLeaveCodeBtn()">{{orderItem.leaveCodeBtn}}</view>
				<view class="goToPay" @click="$emit('deleteModelShow',orderItem.id)">{{orderItem.deleteBtn}}</view>
			</view>
			<view class="orderPayments" v-if="orderItem.shareOrderStatus==='已免除'">
				<view class="goToPay" @click="$emit('deleteModelShow',orderItem.id)">{{orderItem.deleteBtn}}</view>
			</view>
		</view>
		
		<!--商城订单编号2-->
		<view class="orderNum" v-if="shopOrder">
			<view class="numMessage">
				<view class="orderNumes">{{orderItem.title}}</view>
				<view class="orderShou" :style="{backgroundColor:colors,color:fontColors}" @click="goOrderBtn()">{{orderItem.storesOrderStatus}}</view>
			</view>
			<view class="orderDetails">
				<image :src='orderItem.goodImg' class="orderImg"></image>
				<view class="orderTilteS">
					<view class="orderTilte">
						<view class="order-Tilte">{{orderItem.orderTitle}}</view>
						<view class="orderTime">
							<text class="orderTime1">{{orderItem.orderTime1}}</text>
							<text class="orderTime2">{{orderItem.orderTime2}}</text>
						</view>
					</view>				
					<view class="orderStardTelit">
						<view class="orderTilteTime">{{orderItem.startTimeTitle}}</view>
						<view class="orderTimeS">{{orderItem.startTime}}</view>
					</view>
					<view class="orderStardTelit">
						<view class="orderTilteTime">{{orderItem.endTimeTitle}}</view>
						<view class="orderTimeS">{{orderItem.endTime}}</view>
					</view>
					<view class="orderStardTelit">
						<view class="orderTilteTime">{{orderItem.freeTimeTitle}}</view>
						<view class="orderTimeS">{{orderItem.freeTime}}</view>
					</view>
					<view class="orderStardTelit totalprice">
						<view class="orderTilteTime">{{orderItem.totalPriceTitle}}</view>
						<view class="orderTimeS-color">
							<text class="orderTimeS-color-icon">￥</text>
							<text class="orderTimeS-color-num">{{orderItem.totalPrice}}</text>
						</view>
					</view>
					
				</view>
			</view>
			<view class="orderXian"></view>
			<view class="orderPayments" v-if="orderItem.storesOrderStatus==='待付款'">
				<view class="orderCheckDetails" @click="NopayBtn()">{{orderItem.lookDetailBtn}}</view>
				<view class="goToPay" @click="goPayBtn()">{{orderItem.goPayBtn}}</view>
			</view>
			<view class="orderPayments" v-if="orderItem.storesOrderStatus==='待自提'">
				<view class="orderCheckDetails"  @click="NoTakeTheirBtn()">{{orderItem.lookDetailBtn}}</view>
				<view class="goToTakeTheir" @click="$emit('deleteModelShow',orderItem.id)">{{orderItem.ownPickBtn}}</view>
			</view>
			<view class="orderPayments" v-if="orderItem.storesOrderStatus==='已自提'">
				<view class="goToPay"  @click="EvaluateBtn()">{{orderItem.commentBtn}}</view>
			</view>
			<view class="orderPayments" v-if="orderItem.storesOrderStatus==='退款中'">
				<view class="orderCheckDetails"  @click="UnderRefundBtn()">{{orderItem.lookDetailBtn}}</view>
				<view class="goToPay">{{orderItem.revocationPayBtn}}</view>
			</view>
			<view class="orderPayments" v-if="orderItem.storesOrderStatus==='已退款'">
				<view class="orderCheckDetails"  @click="RefundBtn()">{{orderItem.lookDetailBtn}}</view>
				<view class="goToPay">{{orderItem.deleteRecord}}</view>
			</view>
		
		</view>
		
		

	</view>
	
	
	
</template>

<script>
	export default {

		props: {
			shareOrder:{
				type:Boolean,
				default: false
			},
			shopOrder:{
				type:Boolean,
				default: false
			},
			orderItem:{//单个订单数据
				type:Object,
				default:{}
			}

		},
		data() {
			return {
				show:false,
				colors:'',
				fontColors:'',
				bColor:'#461A5F',
				
			}
		},
		mounted() {
			this.init()
		},
		methods:{
			goQueDing(){
				this.$emit([show], "你好父组件，我是子组件");
				show=true
			},
			showModal() {
				this.show = true;
			},
			confirm() {
				setTimeout(() => {
					// 3秒后自动关闭
					this.show = false;
				}, 3000)
			},
			init(){
				if(this.orderItem.shareOrderStatus 	 === '待付款'){
					this.colors = '#EB7241';
				}else if(this.orderItem.shareOrderStatus === '交易完成'){
					this.colors = '#D1D3EC';
					this.fontColors ='#010208';
				}else if(this.orderItem.shareOrderStatus === '已免除'){
					this.colors = '#D1D3EC';
					this.fontColors ='#010208';
				}else if(this.orderItem.storesOrderStatus === '待付款'){
					this.colors = '#EB7241';
				}else if(this.orderItem.storesOrderStatus === '待自提'){
					this.colors = '#0ABC64';
				}else if(this.orderItem.storesOrderStatus === '已自提'){
					this.colors = '#D1D3EC';
					this.fontColors ='#010208';
				}else if(this.orderItem.storesOrderStatus === '退款中'){
					this.colors = '#FF1E21';
				}else if(this.orderItem.storesOrderStatus === '已退款'){
					this.colors = '#D1D3EC';
					this.fontColors ='#010208';
				}
			},
			//共享订单内容
			goOrderBtn(){
				if(this.orderItem.shareOrderStatus === '待付款'){
					this.$Router.push({
						path:'/pages/TabBar/Home/components/Leave',
						query:{isShowLeave:true}
					})				
				}else if(this.orderItem.shareOrderStatus === '交易完成'){
					this.$Router.push({
						path:'/pages/TabBar/Home/components/Leave',
						query:{isShowDelete:true}
					})	
				}else if(this.orderItem.shareOrderStatus === '已免除'){
					this.$Router.push({
						path:'/pages/TabBar/Home/components/Leave',
						query:{isShowDelete:true}
					})	
				}else if(this.orderItem.storesOrderStatus === '待付款'){
					this.$Router.push({path:'/page_order/components/noPayDetails'})
				}else if(this.orderItem.storesOrderStatus === '已自提'){
					this.$Router.push({path:'/page_order/components/pickUp'})
				}
			},
			//跳转到离开二维码
			goLeaveCodeBtn(){
				
			},
			//跳转到离开按钮页面
			LeaveBtn(){
				this.$Router.push({
					path:'/pages/TabBar/Home/components/Leave',
					query:{isShowLeaveBtn:true}
				})
			},
			//跳转到待付款详情页
			NopayBtn(){
				this.$Router.push({
					path:'/pages/TabBar/Order/components/noPayDetails'
				})
				
			},
			//跳转到订单确认页面
			goPayBtn(){
				this.$Router.push({
					path:'/pages/TabBar/Home/components/Leave',
					query:{isShowLeaveBtn:true}
				})
			},
			//跳转到待自提详情页
			NoTakeTheirBtn(){
				this.$Router.push({path:'/page_order/components/noPickUp'})
			},
			//跳转到评价页面
			EvaluateBtn(){
				this.$Router.push({path:'/page_order/components/Evaluate'})
			},
			//跳转到退款中页
			UnderRefundBtn(){
				this.$Router.push({path:'/page_order/components/RefundDetails'})
			},
			//跳转到已退款页
			RefundBtn(){
				this.$Router.push({path:'/page_order/components/Refunded'})
			},
			
		}
	}
</script>

<style lang="scss" scoped>
	.orderNum {
		width: 690rpx;
		height: 444rpx;
		background: #FFFFFF;
		border-radius: 30rpx 30rpx 30rpx 30rpx;
		opacity: 1;
		margin: 20rpx 30rpx 20rpx 30rpx;
		display: flex;
		flex-direction: column;

		.numMessage {
			width: 690rpx;
			height: 42rpx;
			display: flex;
			text-align: center;
			justify-content: space-around;
			margin: 37rpx 0 41rpx 0;
			font-family: PingFang SC-Bold, PingFang SC;
			font-weight: bold;
			-webkit-background-clip: text;

			.orderNumes {
				font-size: 30rpx;
				color: #010208;
			}

			.orderShou {
				// width: 113rpx;
				height: 49rpx;
				font-size: 24rpx;
				color: #FFFFFF;
				line-height: 49rpx;
				background: #EB7241;
				border-radius: 40rpx 40rpx 40rpx 40rpx;
				opacity: 1;
				padding: 0 21rpx;
			}
		}

		.orderDetails {
			width: 690rpx;
			height: 200rpx;
			display: flex;
			text-align: center;
			justify-content: space-around;
			margin-bottom: 53rpx;

			.orderImg {
				width: 230rpx;
				height: 200rpx;
				background: #EFEFEF;
				border-radius: 10rpx 10rpx 10rpx 10rpx;
				margin: 0 42rpx 0 29rpx;
				opacity: 1;
			}

			.orderTilteS {
				width: 349rpx;
				height: 200rpx;
				margin-right: 36rpx;
				.orderTilte {
					margin-bottom: 9rpx;
					line-height: 20rpx;

					.order-Tilte {
						width: 150rpx;
						height: 42rpx;
						font-size: 30rpx;
						color: #010208;
					}

					.orderTime {
						flex: 1;
						height: 37rpx;
						font-size: 26rpx;
						color: #FF1E21;
						text-align: right;
						
						.orderTime1{
							width: 34rpx;
							height: 34rpx;
							font-size: 26rpx;
							font-family: OPPOSans-bold, OPPOSans;
							font-weight: bold;
						}
						.orderTime2{
							width: 91rpx;
							height: 37rpx;
							font-size: 26rpx;
							font-family: PingFang SC-Medium, PingFang SC;
							font-weight: 500;
							margin-left: 2rpx;
						}
					}

					.order-Tilte,
					.orderTime {
						font-family: PingFang SC-Medium, PingFang SC;
						font-weight: 500;
						-webkit-background-clip: text;
					}
				}

				.orderStardTelit {
					margin-bottom: 7rpx;

					.orderTilteTime {
						width: 96rpx;
						display: block;
						font-family: PingFang SC-Medium, PingFang SC;
						font-weight: 500;
						color: #010208;
						text-align: left;

					}

					.orderTimeS {
						width: 212rpx;
						font-family: PingFang SC-Bold, PingFang SC;
						font-weight: bold;
						color: #010208;
						text-align: right;
					}

					.orderTimeS-color {
						width: 212rpx;
						height: 33rpx;
						font-size: 24rpx;
						font-family: PingFang SC-Bold, PingFang SC;
						color: #FF1E21;
						text-align: right;
						.orderTimeS-color-icon{
							width: 24rpx;
							height: 32rpx;
							font-size: 24rpx;
							font-weight: 500;
						}
						.orderTimeS-color-num{
							width: 59rpx;
							height: 34rpx;
							font-size: 26rpx;
							font-weight: bold;
						}
					}
				}

				.orderTilte,
				.orderStardTelit {
					width: 349rpx;
					display: flex;
					justify-content: space-between;
				}
				.totalprice{
					margin-top: 15rpx;
				}

				.orderTilteTime,
				.orderTimeS {
					height: 33rpx;
					opacity: 60%;
					font-size: 24rpx;
					-webkit-background-clip: text;
				}

			}

		}

		.orderXian {
			width: 614rpx;
			height: 0rpx;
			opacity: 1;
			border: 1rpx solid #F2F2F2;
			margin: -20rpx 0 20rpx 29rpx;
		}

		//
		.orderPayments {
			width: 614rpx;
			height: 49rpx;
			display: flex;
			text-align: center;
			justify-content: flex-end;
			margin: 0 0 53rpx 34rpx;
			line-height: 46rpx;
			
			font-family: PingFang SC-Bold, PingFang SC;
			opacity: 1;
			font-size: 24rpx;
			font-weight: bold;
			color: #FFFFFF;
			.orderCheckDetails {
				// width: 130rpx;
				height: 49rpx;
				background: #461A5F;
				margin-right: 40rpx;
				opacity: 1;
				border-radius: 40rpx 40rpx 40rpx 40rpx;
				padding: 0 21rpx;
			}

			.goToPay {
				// width: 107rpx;
				height: 49rpx;
				background: #FF1E21;
				opacity: 1;
				border-radius: 40rpx 40rpx 40rpx 40rpx;
				padding: 0 24rpx;
			}


		}

	}


	//待自提
	.orderShou-background {
		width: 113rpx;
		height: 49rpx;
		background: #0ABC64;
		color: #FFFFFF;
	}

	// .到店自提
	.goToTakeTheir {
		width: 130rpx;
		height: 49rpx;
		background: #0ABC64;
		color: #FFFFFF;
	}

	//已自提
	.orderYi-banchground {
		width: 113rpx;
		height: 49rpx;
		background: #D1D3EC;
		color: #010208;
	}

	//评价
	.order-evaluate {
		width: 107rpx;
		height: 49rpx;
		background: #FF1E21;
		color: #FFFFFF;
	}

	.orderShou-background,
	.goToTakeTheir,
	.orderYi-banchground,
	.order-evaluate {
		border-radius: 40rpx 40rpx 40rpx 40rpx;
		opacity: 1;
		font-size: 24rpx;
		font-family: PingFang SC-Bold, PingFang SC;
		font-weight: bold;
		line-height: 46rpx;
	}


	//离开
	.order-Leave {
		width: 113rpx;
		height: 49rpx;
		background: #461A5F;
		border-radius: 40rpx 40rpx 40rpx 40rpx;
		opacity: 1;
		font-size: 24rpx;
		font-family: PingFang SC-Bold, PingFang SC;
		font-weight: bold;
		color: #FFFFFF;
		line-height: 46rpx;
	}

	//离开二维码
	.order-LeaveQrCode {
		width: 130rpx;
		height: 49rpx;
		background: #461A5F;
		margin-right: 40rpx;
		font-size: 24rpx;
		font-family: PingFang SC-Bold, PingFang SC;
		font-weight: bold;
		color: #FFFFFF;
		line-height: 46rpx;
	}
	
	
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
	
	
</style>