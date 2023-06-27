<template>
	<view class="top">
		<view class="openVip">
				<TopBar title='问题反馈'  :blackShow="true" :isShowReturn="true"></TopBar>
		</view>
			
		<view class="box">
		<!-- 问题反馈 -->
			<view class="content">
				<view class="content-repair">报修内容</view>
				<view class="content-text">	
					<textarea class="inputs"  id="" cols="30" rows="10" v-model="inputValue" placeholder="请输入详细问题..."></textarea>
				</view>
				<view class="content-box">
					<view class="content-addImg">
						<view class="content-addS">
							<image class="content-aimg" :src="uploadDeteleImg"></image>
							<image class="content-aimgS" :src="uploadImage"></image>
							<text></text>
						</view>
					</view>
					<view class="content-addImg">
						<view class="content-addS">
							<image class="content-aimg" :src="uploadDeteleImg"></image>
							<image class="content-aimgS" :src="uploadImage"></image>
							<text></text>
						</view>
					</view>
					<view class="content-addImgs">
						<!--自定义组件上传图片-->
						<uploadImg></uploadImg>
					</view>
				</view>
			</view>	
		
			<button class="content-btn">提交</button>
		</view>
		
		
		
	</view>
</template>

<script>
	// 顶部
	import TopBar from '@/components/common/TopBar.vue'
	//上传图片
	import uploadImg from '@/components/upload-img.vue'
	export default {
		components:{
			TopBar,uploadImg
		},
		data() {
			return {
				inputValue: "",
				uploadDeteleImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/53删除@2x.png',
				uploadImage:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/bg.png',
			}
		},
		methods: {
			
		}
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
		// padding-top: 162rpx;
		padding-top: 200rpx;
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
					margin-top: 39rpx;
					margin-left: 29rpx;
					line-height: 0;
				}
								
			}
			.content-box{
				display: flex;
				align-items: center;
				.content-addImg{
					margin-left: 10rpx;
					width: 154rpx;
					height: 154rpx;
					border-radius: 30rpx 30rpx 30rpx 30rpx;
					opacity: 1;
					// border: 1rpx solid #979797;
					display: flex;
					align-items: center;
					flex-direction: column;
					position: relative;
					.content-addS{
						margin-right: 10rpx;
						.content-aimg{
							width: 26rpx;
							height: 26rpx;
							margin-left: 20rpx;
							position: absolute;
							top: 0;
							right: -1rpx;
							z-index: 12;
						}
						.content-aimgS{
							width: 154rpx;
							height: 154rpx;
							border-radius: 30rpx 30rpx 30rpx 30rpx;
						}
					}
					
				}	
			}
			
		}
		
	}	
}

.content-btn{
	margin-top: 591rpx;
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
</style>
