<template>
	<view class="address">
		<view class="topbar">
			<TopBar title="选择自提点" :blackShow="true" :isShowReturn="true"></TopBar>
		</view>
		<view class="address-content">
			<view class="current-address-box">
				<view class="current-address-title">当前自提点</view>
				<view class="current-address">
					<view class="top">
						<image class="current-address-icon" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/25定位.png" mode=""></image>
						<view class="current-address-name">{{currentAddress.name}}</view>
					</view>
					<view class="bottom">
						<view class="current-address-detail">{{currentAddress.detail}}</view>
						<view class="current-address-meters">{{currentAddress.meters}}</view>
					</view>
				</view>
			</view>
			<view class="otherAddress">
				<view class="current-address-title">附近自提点</view>
				  <u-radio-group
				    v-model="radiovalue"
				    placement="column"
					activeColor="#461A5F"
				    @change="groupChange"
				  >
				  <view class="other-address-item" v-for="item in radiolist"
						  :key="item.id">
				  	<view class="top">
				  		<image class="current-address-icon" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/25定位.png" mode=""></image>
				  		<view class="current-address-name">{{item.name}}</view>
						<view class="radio">
							<u-radio
							  :customStyle="{marginBottom: '8px'}"
							  :name="item.id"
							  @change="radioChange"
							>
							</u-radio>
						</view>
				  	</view>
				  	<view class="bottom">
				  		<view class="current-address-detail">{{item.detail}}</view>
				  		<view class="current-address-meters">{{item.meters}}</view>
				  	</view>
				  </view>
				  </u-radio-group>
			</view>
		</view>
		<view class="confirm-box">
			<view class="confirm" @click="saveAddress">
				<text>保存</text>
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
				//当前自提点
				currentAddress:{
					id:1,
					name: '逗逗空间光谷广场店',
					disabled: false,
					meters:'28M',
					detail:'东城区火车北站街道幸福花园'
				},
	          // 自提点列表
	          radiolist: [
				  {
					id:1,
					name: '逗逗空间光谷广场店1',
					disabled: false,
					meters:'48M',
					detail:'北京市东城区火车北站街道幸福花园'
				  },
				   {
					id:2,
					name: '逗逗空间光谷广场店2',
					disabled: false,
					meters:'2KM',
					detail:'北京市东城区火车北站街道幸福花园'
				   },
				   {
					id:3,
					name: '逗逗空间光谷广场店3',
					disabled: false,
					meters:'2.8M',
					detail:'北京市东城区火车北站街道幸福花园'
				   }
	          ],
	          // u-radio-group的v-model绑定的值如果设置为某个radio的id，就会被默认选中
	          radiovalue: 1,
			};
		},
		methods: {
	      groupChange(n) {
		    this.currentAddress = this.radiolist[n-1]
	        // console.log('groupChange', n);
	      },
	      radioChange(n) {
	        // console.log('radioChange', n);
	      },
		  //保存地址
		  saveAddress(){
			  this.$ui.showToast({ title: '保存成功', icon: 'success' }).then(res => {
			  		//把当前的地址存储在本地
			  		uni.setStorageSync('currentAddress',JSON.stringify(this.currentAddress))	 
					this.$Router.push('/pages/TabBar/Stores/components/ConfirmOrder')
			   })
			
		  }
		},
		onShow() {
			//页面显示默认选中的地址是本地存储的地址
			//获取选择后的地址
			if(uni.getStorageSync('currentAddress')){
				this.currentAddress = JSON.parse(uni.getStorageSync('currentAddress'))
				this.radiovalue = this.currentAddress.id
			}
		}
	}
</script>

<style lang="scss" scoped>
.address{
	width: 750rpx;
	height: 1624rpx;
	background: #F6F7FE;
	.topbar{
		width: 750rpx;
		height: 209rpx;
		position: fixed;
		top: 0;
		background: #F6F7FE;
		z-index: 999;
	}
	.address-content{
		width: 750rpx;
		height: 1259;
		margin-top: 209rpx;
		font-family: PingFang SC-Bold, PingFang SC;
		-webkit-background-clip: text;
		.current-address-box{
			width: 690rpx;
			height: 225rpx;
			border-radius: 30rpx 30rpx 30rpx 30rpx;
			margin: 0 auto;
			border: 4rpx solid #461A5F;
			background-color: #ffffff;
				.current-address-title{
					width: 160rpx;
					font-size: 32rpx;
					font-weight: bold;
					color: #010208;
					margin-top: 28rpx;
					margin-left: 31rpx;
				}
			.current-address{
				.top{
					display: flex;
					align-items: center;
					margin-top: 22rpx;
					margin-left: 30rpx;
					.current-address-icon{
						
					}
				}
				.bottom{
					display: flex;
					align-items: center;
					margin-top: 2rpx;
					margin-left: 78rpx;
					margin-top: 12rpx;
				}
			}
			
		}
		.otherAddress{
			width: 690rpx;
			background: #FFFFFF;
			border-radius: 30rpx 30rpx 30rpx 30rpx;
			margin: 0 auto;
			padding: 28rpx 0 48rpx 0;
			margin-top: 30rpx;
			overflow: auto;
			.current-address-title{
				width: 160rpx;
				font-size: 32rpx;
				font-weight: bold;
				color: #010208;
				margin-left: 31rpx;
			}
			.other-address-item{
				margin-top: 22rpx;
				.top{
					display: flex;
					align-items: center;
					margin-top: 22rpx;
					margin-left: 30rpx;
					.radio{
						margin-left: 208rpx;
					}
				}
				.bottom{
					display: flex;
					align-items: center;
					margin-left: 78rpx;
					margin-top: 12rpx;
					.current-address-meters{
						
					}
				}
			}
			
		}
		.current-address-icon{
			width: 40rpx;
			height: 40rpx;

		}
		.current-address-name{
			width: 320rpx;
			font-size: 32rpx;
			font-weight: bold;
			color: #010208;
			margin-left: 12rpx;
		}
		.current-address-detail{
			width: 426rpx;
			font-size: 26rpx;
			font-weight: 400;
			color: #010208;
			line-height: 20rpx;
		}
		.current-address-meters{
			width: 60rpx;
			font-size: 26rpx;
			font-weight: bold;
			color: #461A5F;
			line-height: 20rpx;
			margin-left: 30rpx;
		}
	}
	.confirm-box{
		width: 690rpx;
		height: 156rpx;
		position: fixed;
		bottom: 0rpx;
		background-color: #ffffff;
		z-index: 99;
	}
	.confirm{
		width: 690rpx;
		height: 88rpx;
		background: #461A5F;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		text-align: center;
		line-height: 88rpx;
		margin-left: 30rpx;
		text{
			width: 68rpx;
			height: 48rpx;
			font-size: 34rpx;
			font-family: PingFang SC-Medium, PingFang SC;
			font-weight: 500;
			color: #FFFFFF;
			-webkit-background-clip: text;	
		}
	}
}
/deep/.u-radio__icon-wrap{
	background-color: #707070 !important;
}
</style>
