<template>
	<view class="top">
		<view class="openVip">
				<TopBar title='报修填写'  :blackShow="true" :isShowReturn="true"></TopBar>
		</view>
		<view class="box">
			<!-- 报修填写 -->
			<view class="address">
				<view class="address-selectStor">选择门店</view>
				<view class="address-nav">
					<image class="address-img" :src="navImg"></image>
					<text class="address-dou">{{cutAddress.name}}</text>
					<view class="address-cut" @click="toSelectAddress()">
						<text class="address-cut-font">切换</text>
						<image class="address-imgs" :src="skipsImg" mode=""></image>
					</view>
				</view>
				<view class="address-info">{{cutAddress.detail}}</view>
			</view>
			
			<view class="content">
				<view class="content-repair">报修内容</view>
				<view class="content-text">
					<textarea  v-model="inputs" class="inputs" placeholder="请输入问题详情..." id="" cols="30" rows="10"></textarea>
				</view>
				<view class="content-addImg">
					<!--自定义组件上传图片-->
					<uploadImg></uploadImg>
				</view>
			</view>
			<u-toast ref="uToast" loading></u-toast>
			<button class="content-btn" @click="showToast()" >提交</button>
			
		</view>
	</view>
</template>

<script>
	//顶部
	import TopBar from '@/components/common/TopBar.vue'
	//上传图片
	import uploadImg from '@/components/upload-img.vue'
	export default {
		components:{
			TopBar,uploadImg
		},
		data() {
			return {
				fileList5: [],
				inputs: '',
				value:'',
				cutAddress:{name:'逗逗空间光谷广场店',detail:'北京市东城区火车北站街道幸福花园'},
				navImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/51定位@2x.png',
				skipsImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/25跳转@2x.png'	,				
			}
		},
		onReady(){
			
		},
		methods: {
			go(){
				let pages = getCurrentPages() 
			},
	
			//提货地址
			toSelectAddress(){
				uni.$ui.showLoading({ title: '加载中', icon: 'success' })
				this.$Router.push('/pages/TabBar/Stores/components/SelectAddress')
				uni.$ui.hideLoading()
				
				
			},
			//提交
			showToast() {
				console.log('1111');
				this.$ui.showToast({ title: '提交成功', icon: 'success' }).then(res => {
					//把当前的地址存储在本地
					// uni.setStorageSync('cutAddress',this.cutAddress)	 
					// uni.setStorageSync('inputs',this.inputs)	
					 this.$Router.push({path:'/pages/TabBar/Mine/components/Repairs'})
				 })
			},
			
			
		},
		onShow() {
			// console.log(uni.getStorageSync('currentAddress'),'@@@@@@');
			//获取选择后的地址
			if(uni.getStorageSync('currentAddress')){
				this.cutAddress = JSON.parse(uni.getStorageSync('currentAddress'))
				console.log(this.cutAddress,'3333333')
			}
		},
	}
</script>

<style lang="scss" scoped>
.top{
	width: 750rpx;
	height: 1624rpx;
	background: #F6F7FE;
	border-radius: 0rpx 0rpx 0rpx 0rpx;
	.openVip{
		width: 750rpx;
		height: 160rpx;
		font-weight: bold;
		color: #010208;
		background-color: #F6F7FE;
		position: fixed;
		top: 0;
		z-index: 11;
	}
	.box{
		padding-top: 200rpx;
		.address{
			width: 690rpx;
			height: 225rpx;
			background: #FFFFFF;
			border-radius: 30rpx 30rpx 30rpx 30rpx;
			opacity: 1;
			margin: 0 30rpx 20rpx 30rpx;
			display: flex;
			flex-direction: column;
			.address-selectStor{
				margin: 44rpx 531rpx 9rpx 31rpx;
				font-size: 32rpx;
				font-family: PingFang SC-Bold, PingFang SC;
				font-weight: bold;
				color: #010208;
				line-height: 0rpx;
			}
			.address-nav{
				margin: 42rpx 0 14rpx 0;
				height: 40rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;		
				.address-img{
					width: 36rpx;
					height: 40rpx;
					margin-left: 30rpx;
				}
				.address-dou{
					margin-right: 199rpx;
					font-size: 32rpx;
					font-family: PingFang SC-Bold, PingFang SC;
					font-weight: bold;
					color: #010208;
					line-height: 6rpx;
				}
				.address-cut{
					font-size: 24rpx;
					font-family: PingFang SC-Regular, PingFang SC;
					font-weight: 400;
					color: #010208;
					line-height: 0rpx;
					margin-right: 46rpx;
					.address-cut-font{
						padding-right: 14rpx;
					}
					.address-imgs{
						width: 8rpx;
						height: 14rpx;
						opacity: 1;
					}
				}			
			}
			.address-info{
				margin-left: 78rpx;
				font-size: 26rpx;
				font-family: PingFang SC-Regular, PingFang SC;
				font-weight: 400;
				color: #010208;
				line-height: 20rpx;
			}
		}
		.content{
			margin-left: 30rpx;
			width: 690rpx;
			height: 667rpx;
			background: #FFFFFF;
			border-radius: 30rpx 30rpx 30rpx 30rpx;
			opacity: 1;
			display: flex;
			flex-direction: column;
			.content-repair{
				margin: 26rpx 0 22rpx 26rpx;
				height: 34rpx;
				font-size: 26rpx;
				font-family: PingFang SC-Regular, PingFang SC;
				font-weight: 400;
				color: #010208;
				line-height: 34rpx;
			}
			.content-text{
				margin:0 20rpx 20rpx 20rpx;
				width: 650rpx;
				height: 388rpx;
				background: #F6F7FE;
				line-height: 90rpx;
				border-radius: 30rpx 30rpx 30rpx 30rpx;
				opacity: 1;
				.inputs{
					width: 600rpx;
					height: 349rpx;
					font-size: 30rpx;
					font-family: PingFang SC-Regular, PingFang SC;
					font-weight: 400;
					color: #010208;
					margin: 39rpx 0 0 29rpx;
					line-height: 0;
				}
			}
		
		}
	}
}

.content-btn{
	margin-top: 364rpx;
	width: 690rpx;
	height: 88rpx;
	background: #461A5F;
	border-radius: 20rpx 20rpx 20rpx 20rpx;
	opacity: 1;
	font-size: 34rpx;
	font-family: PingFang SC-Medium, PingFang SC;
	font-weight: 500;
	color: #FFFFFF;
}

/deep/.u-textarea--radius{
	margin-left: -14px;
	border: none
}
/deep/.u-upload__button{
	margin: 2rpx !important;
	background: none;
	content: '添加图片';
}
</style>
