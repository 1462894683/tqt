<template>
	<view :class="isPhoneXUp===true?'TopBarIphonexUp':'TopBar'">
		<!-- 黑色 -->
		<view class="blackTopbar" v-if="blackShow">
			<image class="returnPre" v-if="isShowReturn" @click="goBack" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/返回@2x.png" mode=""></image>
			<view class="title">{{title}}</view>
		</view>
		<!-- 白色 -->
		<view class="whiteTopbar" v-if="whiteShow">
			<image class="returnPre" v-if="isShowReturn" @click="goBack" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/19angle-left.png" mode=""></image>
			<view class="title">{{title}}</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			title:{
				type:String,
				default:''
			},
			isShowReturn:{
				type:Boolean,
				default:false
			},
			blackShow:{
				type:Boolean,
				default:false
			},
			whiteShow:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return{
				isPhoneXUp:uni.getStorageSync('isIphoneXup')
			}
		},
		methods:{
			goBack(){
				uni.setStorageSync('lists', true)
				this.$Router.back(1,{
				    success:(...arg)=>{
				        console.log(arg)
				    }
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.TopBar{
		width: 750rpx;
		height: 50rpx;
		position: absolute;
		top: 66rpx;
		z-index: 999;
	}
	/*匹配iPhonex及以上*/
	.TopBarIphonexUp{
		width: 750rpx;
		height: 50rpx;
		position: absolute;
		top: 106rpx;
		z-index: 999;
	}
	.whiteTopbar,.blackTopbar{
		width: 750rpx;
		height: 50rpx;
		display: flex;
		align-items: center;
	}
	.returnPre{
		margin-left: 30rpx;
	}
	.title{
		height: 50rpx;
		font-size: 36rpx;
		font-family: PingFang SC-Bold, PingFang SC;
		font-weight: bold;;
	}
	.whiteTopbar{
		.returnPre{
			width: 30rpx;
			height: 35rpx;
		}
		.title{
			width: 200rpx;
			color: #FFFFFF;
			position: absolute;
			right: 280rpx;
			text-align: center;
		}
	}
	.blackTopbar{
		.returnPre{
			width: 19rpx;
			height: 34rpx;
		}
		.title{
			width: 200rpx;
			color: #010208;
			position: absolute;
			right: 280rpx;
			text-align: center;
		}
	}
</style>