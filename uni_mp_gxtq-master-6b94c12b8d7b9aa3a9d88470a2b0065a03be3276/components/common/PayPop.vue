<template>
	<u-popup :show="show" :round="10" mode="bottom" @close="$emit('isClosePop',false)" @open="open">
		<view class="pop">
            <view class="payPrice">
				<text class="payPrice-icon">￥</text>
				<text class="payPrice-num">3000.00</text>
			</view>
			<view class="payType">
				<image src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/20wxpay@2x.png" mode=""></image>
				<text>微信支付</text>
			</view>
			<view class="payBtn" @click="clickPay"><text>立即支付</text></view>
		</view>
	</u-popup>
</template>
<script>
  export default {
	  props:{
		  isPay:{
			  type:Boolean,
			  default:false
		  }
	  },
    data() {
      return {
        show: this.isPay
      }
    },
    methods: {
      open() {
        // console.log('open');
      },
      close() {
        this.show = false
        // console.log('close');
      },
	  clickPay(){
		 this.$emit('isClosePop',false)
		  this.$emit('clickPay',true)
		  
	  }
    }
  }
</script>

<style lang="scss" scoped>
	.pop{
		width: 750rpx;
		height: 500rpx;
		background: #FFFFFF;
		border-radius: 30rpx 30rpx 0rpx 0rpx;
		display: flex;
		flex-direction: column;
		.payPrice{
			margin-top: 85rpx;
			.payPrice-icon{
				width: 39rpx;
				height: 51rpx;
				font-size: 39rpx;
				font-family: OPPOSans-Heavy, OPPOSans;
				font-weight: 800;
				color: #E82010;
				line-height: 0rpx;
				-webkit-background-clip: text;
				margin-left: 230rpx;
			}
			.payPrice-num{
				width: 246rpx;
				height: 77rpx;
				font-size: 58rpx;
				font-family: OPPOSans-bold, OPPOSans;
				font-weight: bold;
				color: #E82010;
				line-height: 0rpx;
				-webkit-background-clip: text;
			}
		}
		.payType{
			width: 212rpx;
			height: 60rpx;
			margin: 0 auto;
			margin-top: 61rpx;
			display: flex;
			align-items: center;
			image{
				width: 72rpx;
				height: 60rpx;
			}
			text{
				width: 120rpx;
				height: 42rpx;
				font-size: 30rpx;
				font-family: PingFang SC-Bold, PingFang SC;
				font-weight: bold;
				color: #010208;
				margin-left: 20rpx;
			}
		}
		.payBtn{
			width: 690rpx;
			height: 88rpx;
			background: #0ABC64;
			border-radius: 20rpx 20rpx 20rpx 20rpx;
			margin: 0 auto;
			margin-top: 52rpx;
			text{
				display: block;
				width: 104rpx;
				height: 37rpx;
				font-size: 26rpx;
				font-family: PingFang SC-Medium, PingFang SC;
				font-weight: 500;
				color: #FFFFFF;
				margin: 0 auto;
				line-height: 86rpx;
			}
		}
	}
</style>