<template>
	<view class="all">
		<view class="top">
			<image class="imageTop" src="@/static/tabbar/openTop.png" mode=""></image>
			<view class="openVip"><TopBar title="开通会员" :whiteShow="true" :isShowReturn="true"></TopBar></view>
			<!-- 开通vip会员 -->
			<view class="vip">
				<image class="vipImg" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/openVipBackground.png" mode=""></image>
				<view class="message">
					<view class="clickopen">开通VIP会员</view>
					<view class="timer">有效期:<text class="time">2022.11.17至2023.12.30</text></view>
				</view>
			</view>
		</view>
		<!-- 开通会员专属及以下内容 -->
		<view class="content">
			<view class="contentTitle1">开通专属会员</view>
			<view class="content1">
				<view class="left" v-for="item in vipList" :key="item.id" @click="changeCombo(item.id)">
					<image class="taocan_xuanzhong" :src="item.imgUrl" mode=""></image>
					<view class="taocan_xuanzhong-title">
						<view class="taocan_xuanzhong-title-top">
							<text class="titleYear tocantitle1">{{item.name}}</text>
							<text class="tocantitle2">{{item.detailToast}}</text>
						</view>
						<view class="taocan_xuanzhong-title-bottom">
							<text class="tocantitle2">{{item.priceTitle}}</text>
							<text class="tocantitle3">{{item.price}}</text>
						</view>
					</view>
				</view>
			</view>
			<!-- 会员说明 -->
			<view class="vipSpeaking">
				<view class="vipSpeaking-title">
					<text class="vipSpeaking-titleBig">会员说明</text>
					<text class="vipSpeaking-titleSmall">
						升级群功能后将享受超多专属权益
					</text>
				</view>
				<view class="vipSpeaking-content">
					这个说明这个说明这个说明这个说明这个说明这个说明这个说明
					这个说明这个说明这个说明这个说明这个说明这个说明这个说明
					这个说明这个说明这个说明这个说明这个说明这个说明这个说明
					这个说明这个说明这个说明这个说明这个说明这个说明这个说明
					这个说明这个说明这个说明这个说明这个说明这个说明这个说明
					这个说明这个说明这个说明这个说明这个说明这个说明这个说明
					这个说明这个说明这个说明这个说明这个说明这个说明这个说明
					这个说明这个说明这个说明这个说明这个说明这个说明这个说明
					这个说明这个说明这个说明这个说明这个说明这个说明这个说明
					这个说明这个说明这个说明这个说明这个说明这个说明这个说明
					这个说明这个说明这个说明这个说明这个说明这个说明这个说明
					这个说明这个说明这个说明这个说明这个说明这个说明这个说明
					这个说明这个说明这个说明这个说明这个说明这个说明这个说明
					这个说明这个说明这个说明这个说明这个说明这个说明这个说明
					这个说明这个说明这个说明这个说明这个说明这个说明这个说明
					这个说明这个说明这个说明这个说明这个说明这个说明这个说明
					这个说明这个说明这个说明这个说明这个说明这个说明这个说明
					这个说明这个说明这个说明这个说明这个说明这个说明这个说明
					这个说明这个说明这个说明这个说明这个说明这个说明这个说明

				</view>
			</view>
			<!-- 底部价格 -->
			<view class="bottom-box">
				<view class="bottom">
					<text class="bottom-left">实付</text>
					<text class="bottom-price">￥3000.00</text>
					<view class="bottom-btn" @tap="goBuy">
						<text class="bottom-btn-text">立即购买</text>
					</view>
				</view>
			</view>
			<PayPop v-if="isPay" @isClosePop="isClosePop" @clickPay="clickPay" :isPay="isPay"></PayPop>
			<VipOpenSuccess v-if="paySuccess" :isShow="paySuccess" @closePay="closePay"></VipOpenSuccess>
		</view>
	</view>
</template>

<script>
	//顶部
	import TopBar from '@/components/common/TopBar.vue'
	//支付弹框
	import PayPop from '@/components/common/PayPop.vue'
	//开通会员成功
	import VipOpenSuccess from '@/pages/TabBar/Mine/components/VipOpenSuccess.vue'
	export default {
		components:{
			TopBar,PayPop,VipOpenSuccess
		},
		data() {
			return {
				isPay:false,
				paySuccess:false,
				vipList:[
					{
						id:1,
						name:'VIP年卡',
						detailToast:'享受超多专享权益',
						priceTitle:'金额 (元)',
						price:'3000.00',
						imgUrl:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/19taocan_xuanzhong@2x.png'
					},
					{
						id:2,
						name:'VIP年卡',
						detailToast:'享受超多专享权益',
						priceTitle:'金额 (元)',
						price:'3000.00',
						imgUrl:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/19taocan@2x.png'
					}
				]
			}
		},
		methods: {
			//弹出支付框
			goBuy(){
				this.isPay = true
			},
			//关闭支付弹出框
			isClosePop(isClse){
				this.isPay = isClse
				console.log(isClse)
			},
			//点击支付
			clickPay(isShow){
				this.$ui.showToast({ title: '支付成功', icon: 'success' }).then(res => {
				  // 逻辑代码
				 this.paySuccess = isShow
				 })
			},
			//关闭支付
			closePay(isshow){
				this.paySuccess = isshow
			},
			//选择套餐
			changeCombo(id){
				this.vipList.map(item=>{
					if(item.id === id){
						item.imgUrl = 'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/19taocan_xuanzhong@2x.png'
					}else{
						item.imgUrl = 'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/19taocan@2x.png'
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.all{
		display: flex;
		flex-direction: column;
		width: 750rpx;
		height: 1624rpx;
	}
.top{
	position: relative;
	width: 750rpx;
	height: 388rpx;
	// background: linear-gradient(124deg, #83DFCD 0%, #48A28C 100%);
	.imageTop{
		width: 100%;
		height: 388rpx;
	}
}
.vip{
	position: absolute;
	bottom: -10rpx;
	width: 750rpx;
	.vipImg{
		display: block;
		margin: 0 auto;
		width: 744rpx;
		height: 234rpx;
	}
	.message{
		position: absolute;
		bottom: 20rpx;
		margin-left: 58rpx;
		width: 100%;
		height: 78rpx;
		// border:  1px solid red;
		.clickopen{
			width: 196rpx;
			height: 48rpx;
			font-size: 34rpx;
			font-family: PingFang SC-Heavy, PingFang SC;
			font-weight: 800;
			color: #111111;
			-webkit-background-clip: text;
		}
		.timer{
			font-size: 22rpx;
			font-family: PingFang SC-Regular, PingFang SC;
			font-weight: 400;
			color: #111111;
			-webkit-background-clip: text;
			.time{
				margin-left: 28rpx;
			}
		}
	}
}
.content{
	width: 100%;
	flex-grow: 1;
	height: 1235rpx;
	background: #F6F7FE;
	.contentTitle1{
		margin-left: 28rpx;
		height: 111rpx;
		line-height: 111rpx;
		font-size: 30rpx;
		font-family: PingFang SC-Bold, PingFang SC;
		font-weight: bold;
		color: #111111;
	}
	.content1{
			display: flex;
			.left{
				position: relative;
				margin-left: 35rpx;
				width: 326rpx;
				height: 330rpx;
				.taocan_xuanzhong{
					width: 326rpx;
					height: 330rpx;
				}
				.taocan_xuanzhong-title{
					width: 326rpx;
					height: 226rpx;
					position: absolute;
					top: 45rpx;
					left: 33rpx;
					.taocan_xuanzhong-title-bottom{
						margin-bottom: 59rpx;
						width: 205rpx;
						height: 86rpx;
						display: flex;
						flex-direction: column;
						margin-top: 34rpx;
					}
					.taocan_xuanzhong-title-top{
						display: flex;
						flex-direction: column;
					}
				}
			}
			.tocantitle1{
				height: 44rpx;
				font-size: 33rpx;
				font-family: OPPOSans-bold, OPPOSans;
				font-weight: bold;
				color: #010208;
			}
			.tocantitle2{
				// width: 168rpx;
				height: 28rpx;
				font-size: 21rpx;
				font-family: OPPOSans-Medium, OPPOSans;
				font-weight: 500;
				color: #010208;
				opacity: .5;
				margin-top: 10rpx;
			}
			.tocantitle3{
				// width: 205rpx;
				height: 62rpx;
				font-size: 47rpx;
				font-family: OPPOSans-Heavy, OPPOSans;
				font-weight: 800;
				color: #010208;
				margin-top: 10rpx;
			}
	}
	/*会员说明*/
	.vipSpeaking{
		padding: 0 30rpx;
		.vipSpeaking-title{
			height: 41rpx;
			margin-top: 56rpx;
			.vipSpeaking-titleBig{
				width: 116rpx;
				height: 41rpx;
				font-size: 29rpx;
				font-family: PingFang SC-Medium, PingFang SC;
				font-weight: 700;
				color: #111111;
			}
			.vipSpeaking-titleSmall{
				width: 345rpx;
				height: 32rpx;
				font-size: 23rpx;
				font-family: PingFang SC-Medium, PingFang SC;
				font-weight: 500;
				color: #111111;
				margin-left: 20rpx;
				opacity: .3;
			}
		}
		.vipSpeaking-content{
			margin-top: 32rpx;
			width: 690rpx;
			height: 363rpx;
			overflow: auto;
			font-size: 18rpx;/*胡哥让改的*/
			line-height: 30rpx;
			font-family: PingFang SC-Regular, PingFang SC;
			font-weight: 400;
			color: #111111;
			opacity: .7;
			 margin-bottom: 138rpx;
			
		}
	}
	/*底部*/
	.bottom-box{
		position: fixed;
		bottom: 0;
		width: 750rpx;
		height: 166rpx;
		background-color: #FFFFFF;
		z-index: 99;
		.bottom{
				 width: 750rpx;
				 height: 98rpx;
				 display: flex;
				 align-items: center;
				 padding: 0 30rpx 0 29rpx;
				 background: #FFFFFF;
				 box-shadow: 0rpx -2rpx 4rpx 1rpx rgba(225,225,225,0.3);
				 .bottom-left{
					 width: 52rpx;
					 height: 37rpx;
					 font-size: 26rpx;
					 font-family: PingFang SC-Bold, PingFang SC;
					 font-weight: bold;
					 color: #010208;
				 }
				 .bottom-price{
				 	width: 172rpx;
				 	height: 42rpx;
				 	font-size: 32rpx;
				 	font-family: OPPOSans-Heavy, OPPOSans;
				 	font-weight: 800;
				 	color: #FF1E21; 
					margin-left: 4rpx;
				 }
				 .bottom-btn{
				 	width: 318rpx;
				 	height: 84rpx;
				 	background: #FF1E21;
				 	border-radius: 20rpx 20rpx 20rpx 20rpx;	 
					margin-left: 144rpx;
					.bottom-btn-text{
						width: 120rpx;
						height: 42rpx;
						font-size: 30rpx;
						font-family: PingFang SC-Medium, PingFang SC;
						font-weight: 500;
						color: #FFFFFF;
						line-height: 82rpx;
						padding-left: 96rpx;
					}
				 }
		}
	}
}
</style>
