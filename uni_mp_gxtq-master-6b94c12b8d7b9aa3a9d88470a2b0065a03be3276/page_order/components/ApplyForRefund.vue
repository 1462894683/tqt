<template>
	<view class="orderconfirm">
		<view class="topbar">
			<TopBar title="申请退款" :blackShow="true" :isShowReturn="true"></TopBar>
		</view>

		<view class="ApplyForRefund-box">
			<view class="ApplyForRefund">
				<view class="ApplyForRefund-Title">退款商品</view>
				<view class="Evaluate">
					<image :src="list.img"></image>
					<view class="Evaluate-text">
						<view class="EvaluateTitle">{{list.text}}</view>
						<view class="EvaluateInfo">
							<text class="EvaluateNum">{{list.num}}</text>
							<text class="EvaluateXian"></text>
							<text class="EvaluatWrapped">{{list.text2}}</text>
							<text class="EvaluateNumS">{{list.num2}}</text>
						</view>
					</view>
				</view>
				<view class="ApplyForRefund-Xian"></view>
				<view class="ApplyRefundAmount">	
					<text class="ApplyRefund-name">{{list.amount}}</text>
					<text class="ApplyRefund-Money">￥{{list.money}}</text>
				</view>
				<view class="ApplyForRefund-cause">退款原因</view>
				<view class="ApplyForRefund-Input">
					<textarea class="inputs" placeholder="请输入您的评价..." id="" cols="30" rows="10"></textarea>
				</view>
				<view class="ApplyForRefund-addImg">
					<!--自定义组件上传图片-->
					<uploadImg></uploadImg>
				</view>
				
			</view>
			
			<button  class="ApplyForRefund-Btn">提交申请</button>
		
		</view>

	</view>
</template>

<script>
	//顶部
	import TopBar from '@/components/common/TopBar.vue'
	//上传图片
	import uploadImg from '@/components/upload-img.vue'
	export default {
		components: {
			TopBar,uploadImg
		},
		data() {
			return {
				list:{
						img:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/bg.png',
						num:'85g',
						num2:'X2',
						text:'易果蓝莓大颗易果蓝莓大颗 当季水果',
						text2:'有包装',
						amount:'退款金额',
						money:'50.00',
				},
				
			}
		},
		methods: {
			//读取后的处理函数
			afterRead(file,lists, name){
				this.fileList5 = lists
				console.log(file, lists, name,'after');
			},
			//删除图片	
			deletePic(index ){
				
			},
		}
	}
</script>

<style lang="scss" scoped>
	.orderconfirm {
		width: 750rpx;
		height: 1624rpx;
		background: #F6F7FE;
		border-radius: 0rpx 0rpx 0rpx 0rpx;

		.topbar {
			width: 750rpx;
			height: 148rpx;
			position: fixed;
			top: 0;
			background: #F6F7FE;
			z-index: 100;
		}

		.ApplyForRefund-box {
			padding-top: 150rpx;

			.ApplyForRefund {
				width: 690rpx;
				height: 1072rpx;
				background: #FFFFFF;
				border-radius: 30rpx 30rpx 30rpx 30rpx;
				opacity: 1;
				margin-left: 30rpx;
				display: flex;
				flex-direction: column;
				margin-bottom: 186rpx;
				// 退款商品
				.ApplyForRefund-Title{
					width: 447rpx;
					height: 42rpx;
					font-size: 30rpx;
					font-family: PingFang SC-Bold, PingFang SC;
					font-weight: bold;
					color: #010208;
					margin: 41rpx 0 23rpx 29rpx;
				}
				//商品信息
				.Evaluate {
					width: 690rpx;
					height: 269rpx;
					background: #FFFFFF;
					border-radius: 30rpx 30rpx 30rpx 30rpx;
					opacity: 1;
					display: flex;
					justify-content: space-between;

					image {
						width: 230rpx;
						height: 200rpx;
						background: #EFEFEF;
						border-radius: 10rpx 10rpx 10rpx 10rpx;
						opacity: 1;
						margin: 0 0 37rpx 29rpx;
					}

					.Evaluate-text {
						width: 360rpx;
						height: 200rpx;
						border-radius: 30rpx 30rpx 30rpx 30rpx;
						opacity: 1;
						margin: 31rpx 29rpx 0 0;
						display: flex;
						align-items: center;
						flex-direction: column;

						.EvaluateTitle {
							width: 360rpx;
							height: 84rpx;
							font-size: 30rpx;
							font-family: PingFang SC-Medium, PingFang SC;
							font-weight: 500;
							color: #010208;
							margin-bottom: 18rpx;
							-webkit-background-clip: text;
						}

						.EvaluateInfo {
							width: 360rpx;
							height: 37rpx;
							display: flex;
							opacity: 60.00%;
							align-items: center;
							justify-content: space-between;

							.EvaluateNum {
								font-family: PingFang SC-Medium, PingFang SC;
								font-weight: 500;
							}

							.EvaluateXian {
								width: 0rpx;
								height: 22rpx;
								opacity: 1;
								border: 1rpx solid #707070;
								margin-left: -133rpx;
							}

							.EvaluatWrapped {
								font-family: PingFang SC-Bold, PingFang SC;
								font-weight: bold;
								margin-left: -122rpx;
							}

							.EvaluateNumS {
								font-family: PingFang SC-Bold, PingFang SC;
								font-weight: bold;
							}

							.EvaluateNum,
							.EvaluatWrapped,
							.EvaluateNumS {
								font-size: 26rpx;
								-webkit-background-clip: text;
								color: #010208;
							}
						}


					}
				}
			
				.ApplyForRefund-Xian{
					width: 630rpx;
					height: 0rpx;
					opacity: 1;
					border: 1rpx solid #DDDDDD;
					margin:-33rpx 0 42rpx 31rpx;			
				}
				//退款金额
				.ApplyRefundAmount{
					margin-left: 26rpx;
					width: 630rpx;
					height: 37rpx;
					display: flex;
					justify-content: space-between;
					margin-bottom: 34rpx;
					.ApplyRefund-name{
						font-size: 26rpx;
						font-family: PingFang SC-Regular, PingFang SC;
						font-weight: 400;
						color: #010208;
						opacity: 80.00%;
					}
					.ApplyRefund-Money{
						font-size: 26rpx;
						font-family: OPPOSans-bold, OPPOSans;
						font-weight: bold;
						color: #010208;
					}
				}
				//退款原因
				.ApplyForRefund-cause{
					width: 104rpx;
					height: 37rpx;
					font-size: 26rpx;
					font-family: PingFang SC-Regular, PingFang SC;
					font-weight: 400;
					color: #010208;
					margin:0 0 23rpx 26rpx;
					opacity: 80.00%;
				}
				//输入退款原因
				.ApplyForRefund-Input{
					width: 650rpx;
					height: 388rpx;
					background: #F6F7FE;
					border-radius: 30rpx 30rpx 30rpx 30rpx;
					opacity: 1;
					margin:0 0 20rpx 20rpx;
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
			//提交申请
			.ApplyForRefund-Btn{
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
			
			
		}


	}
	
</style>