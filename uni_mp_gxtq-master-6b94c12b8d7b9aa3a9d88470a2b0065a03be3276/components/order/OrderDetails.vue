<template>
	<view class="orderconfirm">
		<view class="orderconfirm-content">
			<view class="selectAddress">
				<view class="selectAddress-title">选择自提点</view>
				<view class="selectAddress-content">
					<view class="selectAddress-content-top">
						<image class="selectAddress-icon" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/25定位.png" mode=""></image>
						<view class="selectAddress-name">{{userAddress.name}}</view>
						<view class="selectAddress-change" @click="toSelectAddress">
							<text class="selectAddress-change-title">切换</text>
							<image class="selectAddress-change-icon" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/25跳转@2x.png" mode=""></image>
						</view>
					</view>
					<view class="selectAddress-detailAddress">{{userAddress.detail}}</view>
				</view>
			</view>
			<view class="selectPhone">
				<view class="user-box">
					<text class="user-title">提货人</text>
					<view class="username-box" @click="toSelectUser">
						<view class="username">{{currentUserInfo.name}}</view>
						<image class="username-select" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/25跳转@2x.png" mode=""></image>
					</view>
				</view>
				<view class="border-bottom"></view>
				<view class="phoneInfo-box">
					<text class="phoneInfo-title">联系方式</text>
					<view class="phone-box" @click="toSelectUserPhone">
						<view class="phone">{{currentUserInfo.phone}}</view>
						<image class="phone-select" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/25跳转@2x.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="getGoodsTime">
				<text class="getGoodsTime-title">提货时间</text>
				<view class="getGoodsTime-select">
					<view class="getGoodsTime-select-name" v-if="SlectDetailTime===''" @click="toSelectDate">请选择到店提货时间</view>
					<view class="getGoodsTime-select-name" v-if="SlectDetailTime!==''" @click="toSelectDate">{{SlectDetailTime}}</view>
					<image class="getGoodsTime-select-icon" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/25跳转@2x.png" mode=""></image>
				</view>
			</view>
			<view class="goodsInfo">
				<view class="goodsInfo-top">
					<image src="@/static/images/25购买商品.png" mode=""></image>
					<view class="goodsInfo-decript">
						<text class="goodsInfo-decript-title">易果蓝莓大颗易果蓝莓大颗当季水果</text>
						<view class="goodsInfo-decript-other">
							<text class="goodsInfo-decript-other-weigth">85g</text>
							<view class="goodsInfo-decript-other-border"></view>
							<text class="goodsInfo-decript-other-baozhaung">有包装</text>
							<text class="goodsInfo-decript-other-num">X2</text>
						</view>
					</view>
				</view>
				<view class="goodsInfo-border"></view>
				<view class="goodsInfo-bottom">
					<view class="goodsInfo-price-box">
						<text class="goodsInfo-price-title">金额</text>
						<text class="goodsInfo-price">￥260.80</text>
					</view>
					<view class="goodsInfo-discount-box">
						<text class="goodsInfo-price-title">优惠券</text>
						<text class="goodsInfo-discount">无</text>
						<image src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/25跳转@2x.png" mode=""></image>
					</view>
					<view class="goodsInfo-discount-box">
						<text class="goodsInfo-price-title">合计</text>
						<view class="goodsInfo-price">￥240.80</view>
					</view>
					<view class="goodsInfo-discount-box">
						<text class="goodsInfo-price-title">备注</text>
						<input class="goodsInfo-input-btn" placeholder="请输入"/>
					</view>
				</view>
			</view>
		</view>
		<!--底部-->
		<slot name="bottomNav"></slot>
		
		<!-- 提货时间 -->
		<CalendarDate v-if="selectDateShow" :selectDateShow="selectDateShow" @closeDataSelect="closeDataSelect"></CalendarDate>
	</view>
</template>

<script>
	//顶部
	import TopBar from '@/components/common/TopBar.vue'
	//选择时间弹框
	import CalendarDate from '@/pages/TabBar/Stores/components/CalendarDate.vue'
	export default {
		components:{TopBar,CalendarDate},
		data() {
			return {
				currentUserInfo:{name:'张大大',phone:'18702445678'},
				userAddress:{
					name: '逗逗空间光谷广场店',
					detail:'东城区火车北站街道幸福花园'
				},
				//选择时间弹出框
				selectDateShow:false,
				SlectDetailTime:'',//判断用户选择的时间
			}
		},
		methods: {
			//购买商品
			goBuy(){
				
			},
			//选择提货人
			toSelectUser(){
				this.$Router.push('/page_store/components/Consignee')
			},
			//选择提货人电话
			toSelectUserPhone(){
				this.$Router.push('/page_store/components/Consignee')
			},
			toSelectAddress(){
				this.$Router.push('/page_store/components/SelectAddress')
			},
			//选择提货时间
			toSelectDate(){
				this.selectDateShow = true
			},
			closeDataSelect(obj){
				//接收选择时间子组件传递的数据关闭弹出框并且获取选择的时间信息
				this.selectDateShow = obj.show
				this.SlectDetailTime = obj.detailTime
			},
			//跳转到优惠券页面
			toCoupons(){
				this.$Router.push('/pages/TabBar/Mine/components/Coupon')
			}
		},
		onShow() {
			if(uni.getStorageSync('user')){
				this.currentUserInfo = JSON.parse(uni.getStorageSync('user'))
			}
			
			//获取选择后的地址
			if(uni.getStorageSync('currentAddress')){
				this.userAddress = JSON.parse(uni.getStorageSync('currentAddress'))
			}
		}
	}
</script>

<style lang="scss" scoped>
.orderconfirm{
	width: 750rpx;
	background: #F6F7FE;
	.orderconfirm-content{
		width: 750rpx;
		height: 1352rpx;
		.selectAddress{
			width: 690rpx;
			height: 225rpx;
			background: #FFFFFF;
			border-radius: 30rpx 30rpx 30rpx 30rpx;
			margin: 0 auto;
			margin-top: 209rpx;
			.selectAddress-title{
				width: 630rpx;
				height: 45rpx;
				font-size: 32rpx;
				font-family: PingFang SC-Bold, PingFang SC;
				font-weight: bold;
				color: #010208;
				-webkit-background-clip: text;
				margin-left: 31rpx;
				padding-top: 28rpx;
				word-wrap: break-word; //设置文本自动换行
			}
			.selectAddress-content{
				margin-top: 22rpx;
				.selectAddress-content-top{
					display: flex;
					align-items: center;
					margin-left: 30rpx;
					.selectAddress-icon{
						width: 36rpx;
						height: 40rpx;
					}
					.selectAddress-name{
						word-wrap: break-word; //设置文本自动换行
						word-break: normal;
						width: 350.67rpx;
						font-size: 32rpx;
						font-family: PingFang SC-Bold, PingFang SC;
						font-weight: bold;
						color: #010208;
						-webkit-background-clip: text;
						margin-left: 12rpx;
						flex: 1;
					}
					.selectAddress-change{
						margin-right: 46rpx;
						.selectAddress-change-title{
							width: 48rpx;
							height: 33rpx;
							font-size: 24rpx;
							font-family: PingFang SC-Regular, PingFang SC;
							font-weight: 400;
							color: #010208;
							-webkit-background-clip: text;
						}
						.selectAddress-change-icon{
							width: 8rpx;
							height: 14.31rpx;
							margin-left: 12rpx;
						}
					}
				}
				.selectAddress-detailAddress{
					width: 426rpx;
					font-size: 26rpx;
					font-family: PingFang SC-Regular, PingFang SC;
					font-weight: 400;
					color: #010208;
					line-height: 28rpx;
					-webkit-background-clip: text;
					margin-left: 78rpx;
					margin-top: 8rpx;
					word-wrap: break-word; //设置文本自动换行
				}
			}
		}
		.selectPhone{
			width: 690rpx;
			height: 186rpx;
			background: #FFFFFF;
			border-radius: 30rpx 30rpx 30rpx 30rpx;
			margin: 20rpx auto;
			.user-box{
				display: flex;
				align-items: center;
				width: 690rpx;
				height: 93rpx;
				.username-box{
					display: flex;
					align-items: center;
					flex: 1;
					.username-select{
						margin-left: 12rpx;
					}
				}
			}
			.phoneInfo-box{
				width: 690rpx;
				height: 93rpx;
				display: flex;
				align-items: center;
				.phone-box{
					display: flex;
					align-items: center;
					flex: 1;
					.phone-select{
						margin-left: 12rpx;
					}
				}
			}
			.border-bottom{
				width: 614rpx;
				border: 1rpx solid #F2F2F2;
				height: 0rpx;
				margin-left: 31rpx;
			}
		}
		.user-title,.phoneInfo-title{
			width: 120rpx;
			height: 42rpx;
			font-size: 30rpx;
			font-family: PingFang SC-Regular, PingFang SC;
			font-weight: 400;
			color: #010208;
			-webkit-background-clip: text;
			margin-left: 31rpx;
			opacity: .5;
		}
		.username,.phone{
			width: 472rpx;
			text-align: right;
			word-wrap: break-word; //设置文本自动换行
			font-size: 32rpx;
			font-family: PingFang SC-Bold, PingFang SC;
			font-weight: bold;
			color: #010208;
			-webkit-background-clip: text;
		}
		.username-select,.phone-select{
			width: 8rpx;
			height: 14.31rpx;
		}
		.user-box,.phoneInfo-box{
			display: flex;
			align-items: center;
		}
		
		.getGoodsTime{
			width: 690rpx;
			height: 100rpx;
			background: #FFFFFF;
			border-radius: 30rpx 30rpx 30rpx 30rpx;
			margin: 0 auto;
			display: flex;
			align-items: center;
			.getGoodsTime-title{
				width: 120rpx;
				height: 42rpx;
				font-size: 30rpx;
				font-family: PingFang SC-Regular, PingFang SC;
				font-weight: 400;
				color: #010208;
				-webkit-background-clip: text;
				margin-left: 31rpx;
				opacity: .5;
			}
			.getGoodsTime-select{
				display: flex;
				align-items: center;
				.getGoodsTime-select-name{
					width: 288rpx;
					font-size: 32rpx;
					font-family: PingFang SC-Bold, PingFang SC;
					font-weight: bold;
					color: #010208;
					-webkit-background-clip: text;
					margin-left: 187rpx;
					opacity: .2;
					text-align: right;
				}
				.getGoodsTime-select-icon{
					width: 8rpx;
					height: 14.31rpx;
					margin-left: 12rpx;
				}
			}
		}
		
		.goodsInfo{
			width: 690rpx;
			height: 642rpx;
			background: #FFFFFF;
			border-radius: 30rpx 30rpx 30rpx 30rpx;
			margin: 20rpx auto;
			.goodsInfo-top{
				display: flex;
				// align-items: center;s
				image{
					width: 230rpx;
					height: 200rpx;
					border-radius: 10rpx 10rpx 10rpx 10rpx;
					margin-top: 31rpx;
					margin-left: 29rpx;
				}
				.goodsInfo-decript{
					margin-left: 42rpx;
					margin-right: 29rpx;
					.goodsInfo-decript-title{
						width: 360rpx;
						height: 84rpx;
						font-size: 30rpx;
						font-family: PingFang SC-Medium, PingFang SC;
						font-weight: 500;
						color: #010208;
						margin-top: 31rpx;
						display: block;
					}
					.goodsInfo-decript-other{
						display: flex;
						align-items: center;
						margin-top: 18rpx;
						.goodsInfo-decript-other-weigth{
							width: 47rpx;
							height: 37rpx;
							font-size: 26rpx;
							font-family: PingFang SC-Medium, PingFang SC;
							font-weight: 500;
							color: #010208;
							-webkit-background-clip: text;
							opacity: .6;
						}
						.goodsInfo-decript-other-border{
							width: 0rpx;
							height: 22rpx;
							border: 1rpx solid #707070;
							opacity: 1;
							margin-left: 19rpx;
						}
						.goodsInfo-decript-other-baozhaung{
							width: 78rpx;
							height: 37rpx;
							font-size: 26rpx;
							font-family: PingFang SC-Bold, PingFang SC;
							font-weight: bold;
							color: #010208;
							-webkit-background-clip: text;
							margin-left: 23rpx;
							opacity: .6;
						}
						.goodsInfo-decript-other-num{
							width: 33rpx;
							height: 37rpx;
							font-size: 26rpx;
							font-family: PingFang SC-Bold, PingFang SC;
							font-weight: bold;
							color: #010208;
							-webkit-background-clip: text;
							margin-left: 153rpx;
							opacity: .6;
						}
					}
				}
			}
			.goodsInfo-border{
				width: 630rpx;
				height: 0rpx;
				border: 1rpx solid #DDDDDD;
				margin-left: 31rpx;
				margin-top: 37rpx;
			}
			.goodsInfo-bottom{
				margin-top: 42rpx;
				.goodsInfo-price-box{
					margin-top: 34rpx;
					display: flex;
					align-items: center;
				}
				.goodsInfo-discount-box{
					display: flex;
					align-items: center;
					margin-top: 34rpx;
					image{
						width: 8rpx;
						height: 14.31rpx;
						margin-left: 12rpx;
					}
					.goodsInfo-input-btn{
						width: 500rpx;
						font-size: 26rpx;
						font-family: PingFangSC-Regular-, PingFangSC-Regular;
						font-weight: normal;
						color: #461A5F;
						-webkit-background-clip: text;
						background-color: red;
						word-wrap: break-word; //设置文本自动换行
						margin-left: 66rpx;
						text-align: right;
						
					}
					.goodsInfo-discount{
						margin-left: 490rpx;
						font-size: 26rpx;
						font-family: OPPOSans-bold, OPPOSans;
						font-weight: bold;
						color: #FF1E21;
						-webkit-background-clip: text;
					}
				}
			}
		
		.goodsInfo-price-title{
			// width: 78rpx;
			height: 37rpx;
			font-size: 26rpx;
			font-family: PingFang SC-Regular, PingFang SC;
			font-weight: 400;
			color: #010208;
			-webkit-background-clip: text;
			opacity: .8;
			margin-left: 26rpx;
		}
		.goodsInfo-price{
			width: 500rpx;
			height: 34rpx;
			font-size: 26rpx;
			font-family: OPPOSans-bold, OPPOSans;
			font-weight: bold;
			color: #010208;
			-webkit-background-clip: text;
			text-align: right;
			margin-left: 66rpx;
			word-wrap: break-word; //设置文本自动换行
		}
		
		}
	}
	
	.goods-nav{
		width: 750rpx;
		height: 98rpx;
		// background: #FFFFFF;
		background: saddlebrown;
		box-shadow: 0rpx -2rpx 4rpx 1rpx rgba(225,225,225,0.3);
		position:fixed;
		bottom: 0;
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
</style>
