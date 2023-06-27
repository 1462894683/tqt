<template>
	<view class="detail">
		<view class="top">
			<view class="topBar"><TopBar title="商城" :whiteShow="true" :isShowReturn="true"></TopBar></view>
			<swiper class="swiper" circular :autoplay="true" :interval="2000"
						:duration="500" @change="swiperChange" @click="swiperClick">
						<swiper-item class="swiper-item" v-for="(item,index) in goodsDetailSwiperList" :key="index">
							<image class="swiper-img" :src="item.swiperImg" mode=""></image>
						</swiper-item>
			</swiper>
			<view class="top-gradient"></view>
		</view>
		<view class="goodInfo">
			<view class="good-price-black">
				<text class="good-price-black-icon">￥</text>
				<text class="good-price-black-num">{{goodsInfo.goodsPrice}}</text>
			</view>
			<view class="good-title">{{goodsInfo.title}}</view>
			<view class="good-use">{{goodsInfo.decript}}</view>
			<view class="good-sales">
				<text class="good-sales-express">{{goodsInfo.express}}</text>
				<text class="good-sales-num u-line-1">{{goodsInfo.goodsSales}}</text>
				<text class="good-sales-address u-line-1">{{goodsInfo.goodsAddress}}</text>
			</view>
		</view>
		<view class="goodsDetailContent">
			<z-paging-swiper :safe-area-inset-bottom="true" :swiper-style="{position: 'absolute',top:'1100rpx',width:'750rpx',height:'616rpx'}">
			<view class="tabs">
				<u-tabs
				:list="list" 
				ref="tabs"
				:current="currentIndex" 
				:lineColor="`url(${lineBg}) 100% 100%`"
				lineHeight="9"
				:inactiveStyle="{
					fontSize: '32rpx',
					fontFamily: 'PingFang SC-Bold, PingFang SC',
					fontWeight: 'bold',
					color: '#333333',
					lineHeight: '36rpx',
					opacity:0.5
				}"	
				:activeStyle="{
				            color:'#333333',
							fontSize: '32rpx',
							lineHeight:'36rpx',
				            fontWeight: 'bold',
				            fontFamily: 'PingFang SC-Bold, PingFang SC',
				        }"
				@change="tabsChange"
				@click="clickTabs"
				>
				</u-tabs>
			</view>
			<swiper class="swiperScroll" :current="currentIndex" @transition="transition" @animationfinish="animationfinish">
					<swiper-item class="swiper-item">
						<!-- 商品详情 -->
						<SwiperDetailList v-if="currentIndex===0"></SwiperDetailList>
					</swiper-item>
					<swiper-item class="swiper-item">
						<!-- 商品评论 -->
						<SwiperCommentList v-if="currentIndex===1"></SwiperCommentList>
					</swiper-item>
		
				</swiper>
			</z-paging-swiper>
		</view>
		<!-- 底部导航 -->
		<view class="bottomBox">
			<view class="goods-nav">
				<view class="goods-price-red">
						<text class="goods-price-red-icon">￥</text>
						<text class="goods-price-red-num">210.00</text>
				</view>
				<view @click="addCart" class="goods-addCart"><text>加入购物车</text></view>
				<view class="goods-buy" @click="goBuyPage"><text>立即购买</text></view>
			</view>
		</view>

		
		<!-- 添加购物车弹出框 -->
		<u-popup :show="showAddCart" :round="10" mode="bottom" @close="close" @open="open">
				<view class="addCartPop">
					<view class="addCartPopContent">
						<image class="closePop" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/24叉@2x.png" @click="closeAddCart"></image>
						<view class="changeSize">
							<text class="changeSize-title">选规格</text>
							<view class="changeSize-content">
								<image class="goods-img" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/24goodsSmall.png"></image>
								<view class="changeSize-content-right">
									<view class="goods-price-box">
										<text class="price-icon">￥</text>
										<text class="goods-price">210</text>
									</view>
									<view class="goods-title">易果蓝莓大颗易果蓝莓大颗</view>
								</view>
							</view>
						</view>
						<view class="goodsWeight">
							<text class="goodsWeight-title">重量</text>
							<view class="goodsWeight-select">
								<view class="goodsWeight-one" v-for="(item,index) in weightArr"  :key="item.id"
								:class="{'active':selectWeightIndex===index}" @click="selectWeight(index)">{{item.name}}</view>
							</view>
						</view>
						<view class="baozhuang"> 
							<text class="selectBaozhuang-title">包装</text>
							<view class="selectBaozhuang-select">
								<view class="selectBaozhuang" v-for="(item,index) in baozhuangArr"  :key="item.id"
								:class="{'active':selectBaozhuangIndex===index}" @click="selectBaozhuang(index)">{{item.name}}</view>
							</view>
						</view>
						<view class="buyNum-box" >
							<view class="buyNum-title">购买数量</view>
							<!-- 计数器 -->
								  <view class="buyNum-border">
									  <u-number-box class="buyNum" v-model="goodsNum" @change="goodsNumChange">
									        <view slot="minus" class="minus">-</view>
									        <text
									            slot="input"
									            style="width: 50px;text-align: center;"
									            class="input"
									        >{{goodsNum}}</text>
									        <view slot="plus" class="plus">+</view>
									    </u-number-box>
							</view>
						</view>
						<view class="btn" @click="confirmAddCart">
							<text>确定</text>
						</view>
					</view>
				</view>
		</u-popup>
	</view>
</template>


<script>
	import TopBar from '@/components/common/TopBar.vue'
	import SwiperDetailList from '@/page_store/components/SwiperDetailList.vue'
	import SwiperCommentList from '@/page_store/components/SwiperCommentList.vue'
	export default {
		components:{
			TopBar,SwiperDetailList,SwiperCommentList
		},
		data() {
			return {
				//轮播图列表
				goodsDetailSwiperList: [
								{
									swiperImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/22.商品详情.jpg',
								},
								{
									swiperImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/22.商品详情.jpg',
								},
								{
									swiperImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/22.商品详情.jpg',
								}
				      ],
				//tabs列表
				list: [
						{
							name: '商品详情'
						}, 
						{
							name: '商品评价'
						}
					],
					goodsInfo:{
						goodsPrice:'210',
						title:'易果蓝莓大颗',
						decript:'护眼神器 · 酸甜可口 · 早餐燕麦片 · 牛奶搭配蓝莓',
						express:'快递费：免费',
						goodsSales:'月销量：1869件',
						goodsAddress:'广东深圳'
					},
					//点击的tab索引
					currentIndex: 0,
					//tabs背景
					lineBg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/21选择@2x.png',
					//是否展示商品详情
					showGoodDetail:true,
					//是否展示添加购物车
					showAddCart: false,
					//选中重量
					selectWeightIndex:0,
					//选择包装
					selectBaozhuangIndex:0,
					//选中重量数组
					weightArr:[{id:1,name:'85g'},{id:2,name:'125g'},{id:3,name:'300g'}],
					//选中包装数组
					baozhuangArr:[{id:1,name:'有包装'},{id:2,name:'无包装'}],
					goodsNum:1,
					//判断是否是iphonex以上
					isIphoneXup:false
			}
		},
		methods: {
			//轮播图改变事件
			swiperChange(){
				
			},
			//轮播图点击事件
			swiperClick(){
				
			},
			//tab改变事件
			tabsChange(index) {
				this.currentIndex = index.index;
			},
			//点击tab
			clickTabs(index){
				if(index.index === 0){
					this.showGoodDetail=true
				}else{
					this.showGoodDetail=false
				}
			},
			//添加购物车
			addCart(){
				this.showAddCart = true;
			},
			//确认加入购物车
			confirmAddCart(){
				this.$ui.showToast({ title: '添加成功', icon: 'success' }).then(res => {
				  // 逻辑代码
				  this.showAddCart = false;
				 })
			},
			//添加购物车弹出框打开
		   open() {
				// console.log('open');
			  },
			  //添加购物车弹出框关闭
		   close() {
			this.showAddCart = false
		    },
			//取消添加购物车
			closeAddCart(){
				this.showAddCart = false;
			},
			//选择重量
			selectWeight(index){
				this.selectWeightIndex = index
			},
			//选择包装
			selectBaozhuang(index){
				this.selectBaozhuangIndex = index
			},
			//商品数量改变
			goodsNumChange(){
				console.log('商品数量改变')
			},
			//去购买页面
			goBuyPage(){
				this.$Router.push('/page_store/components/ConfirmOrder')
			},
			//swiper滑动结束
			animationfinish(e) {
				let current = e.detail.current;
				this.currentIndex = current		
			},
			//单个滑块滑动一次
			transition(e){
			}
		},
		onLoad() {
			if(uni.getStorageSync('isIphoneXup')){
				this.isIphoneXup = uni.getStorageSync('isIphoneXup')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.swiperScroll{
		width: 750rpx;
		height: 100%;
	}
.iphonexClass{
	bottom: 68rpx;
}
.noiphonexClass{
	bottom: 0rpx;
}
.detail{
	width: 750rpx;
	height: 1784rpx;
	background:#F6F7FE;
	.top{	
		position: relative;
		width: 750rpx;
		height: 792rpx;
		.topBar{
			position: absolute;
			top: 0;
			z-index: 199;
		}
		.swiper{
			width: 750rpx;
			height: 792rpx;
			.swiper-item{
				width: 750rpx;
				height: 792rpx;
				.swiper-img{
					width: 750rpx;
					height: 792rpx;
				}
			}
		}
		.top-gradient{
			width: 750rpx;
			height: 242rpx;
			z-index: 99;
			background: linear-gradient(180deg, #020E3E 0%, rgba(3,14,68,0) 100%);
			position: absolute;
			top: 0;
		}
	}
	.goodInfo{
		width: 750rpx;
		height: 271rpx;
		background: #FFFFFF;
		padding: 0 30rpx;
		overflow: hidden;
		.good-price-black{
			margin-top: 24rpx;
			display: flex;
			align-items: center;
			font-weight: bold;
			color: #010208;
			-webkit-background-clip: text;
			.good-price-black-icon{
				font-size: 26rpx;
				font-family: PingFang SC-Bold, PingFang SC;
				margin-left: -2rpx;
			}
			.good-price-black-num{
				font-size: 42rpx;
				font-family: OPPOSans-bold, OPPOSans;
			}
		}
		.good-title{
			width: 252rpx;
			height: 59rpx;
			font-size: 42rpx;
			font-family: PingFang SC-Heavy, PingFang SC;
			font-weight: 800;
			color: #010208;
			line-height: 38rpx;
			-webkit-background-clip: text;
			margin-top: 14rpx;
		}
		.good-use{
			width: 690rpx;
			height: 37rpx;
			font-size: 26rpx;
			font-family: PingFang SC-Bold, PingFang SC;
			font-weight: bold;
			color: #010208;
			line-height: 38rpx;
			-webkit-text-stroke: 1px rgba(0,0,0,0);
			text-stroke: 1px rgba(0,0,0,0);
			-webkit-background-clip: text;
			margin-top: 15rpx;
			margin-bottom: 14rpx;
		}
		.good-sales{
			opacity: .5;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 16rpx;
			height: 35rpx;
			font-size: 24rpx;
			font-family: SourceHanSansCN-Regular-, SourceHanSansCN-Regular;
			font-weight: normal;
			color: #010208;
			line-height: 29rpx;
			padding-right: 32rpx;
			width: 688rpx;
			.good-sales-express{
				width: 144rpx;
				height: 35rpx;
			}
			.good-sales-num{
				width: 200rpx;	
				height: 35rpx;
				display: block;
				margin-left: 144rpx;
			}
			.good-sales-address{
				width: 96rpx;
				height: 35rpx;
				display: block;
				margin-left: 100rpx;
			}
		}
	}
	.goodsDetailContent{
		width: 750rpx;
		height: 560rpx;
		background: #FFFFFF;	
		margin-top: 20rpx;
		margin-bottom: 168rpx;
		.tabs{
			width: 750rpx;
			height: 95rpx;
			padding-left: 35rpx;
		}
	}
	.bottomBox{
		position: fixed;
		bottom: 0;
		width: 750rpx;
		height: 166rpx;
		background:#F6F7FE;
		.goods-nav{
			width: 750rpx;
			height: 98rpx;
			background: #FFFFFF;
			box-shadow: 0rpx -2rpx 4rpx 1rpx rgba(225,225,225,0.3);
			display: flex;
			align-items: center;
			padding: 7rpx 20rpx 7rpx 29rpx;
			.goods-price-red{
				display: flex;
				align-items: center;
				font-family: OPPOSans-bold, OPPOSans;
				font-weight: bold;
				color: #FF1E21;
				-webkit-background-clip: text;
				.goods-price-red-icon{
					font-size: 28rpx;
				}
				.goods-price-red-num{
					font-size: 36rpx;
				}
			}
			.goods-addCart{
				width: 220rpx;
				height: 84rpx;
				background: #F1C870;
				border-radius: 20rpx 0rpx 0rpx 20rpx;
				margin-left: 113rpx;
				text-align: center;
				line-height: 84rpx;
				text{
					width: 150rpx;
					height: 42rpx;
					font-size: 30rpx;
					font-family: PingFang SC-Medium, PingFang SC;
					font-weight: 500;
					color: #FFFFFF;
					line-height: 36rpx;
					-webkit-background-clip: text;
				}
			}
			.goods-buy{
				width: 220rpx;
				height: 84rpx;
				background: #FF1E21;
				border-radius: 0rpx 20rpx 20rpx 0rpx;	
				text-align: center;
				line-height: 84rpx;
				text{
					width: 120rpx;
					height: 42rpx;
					font-size: 30rpx;
					font-family: PingFang SC-Medium, PingFang SC;
					font-weight: 500;
					color: #FFFFFF;
					line-height: 36rpx;
					-webkit-background-clip: text;
				}
			}
		}
	}
}
/deep/.u-tabs__wrapper__nav__item{
		padding: 0 !important;
		// height: 60rpx !important;
		width: 128rpx;
		font-family: PingFang SC-Bold, PingFang SC;
		color: #333333;
		font-weight: bold;
		padding-right: 155rpx !important;
}
/deep/.u-tabs__wrapper__nav__item__text{
	width: 128rpx;
	height: 45rpx;
	font-size: 32rpx;
	font-family: PingFang SC-Bold, PingFang SC;
	font-weight: bold;
	color: #333333;
	line-height: 36rpx;
	-webkit-background-clip: text;
	margin-top: 15rpx;
}
/deep/ .u-tabs__wrapper__nav__line {
		left: -94rpx  !important;
		background: linear-gradient(173deg, rgba(164,75,215,0) 0%, rgba(74,42,143,0.55) 53%, #000F54 100%);
		width: 56rpx !important;
		height: 16rpx !important;
		border-radius: 0;
	}
	.addCartPop{
		width: 750rpx;
		height: 952rpx;
		background: #FFFFFF;
		border-radius: 30rpx 30rpx 0rpx 0rpx;
		position: relative;
		.addCartPopContent{
			width: 750rpx;
			height: 952rpx;
			padding: 0 29rpx;
			.closePop{
					width: 24rpx;
					height: 24rpx;
					opacity: .5;
					position: absolute;
					right: 19rpx;
					top: 19rpx;
				}
				.changeSize{
					display: flex;
					flex-direction: column;
					// align-items: center;
					.changeSize-content{
						margin-top: 21rpx;
						display: flex;
						.goods-img{
							width: 180rpx;
							height: 160rpx;
							background: #E9E9E9;
							border-radius: 10rpx 10rpx 10rpx 10rpx;
						}
						.changeSize-content-right{
							display: flex;
							flex-direction: column;
							margin-left: 20rpx;
							// align-items: center;
							.goods-price-box{
								display: flex;
								align-items: center;
								.price-icon{
									width: 26rpx;
									height: 55rpx;
									font-size: 26rpx;
									font-family: PingFang SC-Bold, PingFang SC;
									font-weight: bold;
									color: #FF1E21;
									line-height: 50rpx;
									-webkit-background-clip: text;
								}
								.goods-price{
									width: 75rpx;
									height: 55rpx;
									font-size: 42rpx;
									font-family: OPPOSans-bold, OPPOSans;
									font-weight: bold;
									color: #FF1E21;
									line-height: 50rpx;
								}
							}
							.goods-title{
								width: 360rpx;
								height: 42rpx;
								font-size: 30rpx;
								font-family: PingFang SC-Heavy, PingFang SC;
								font-weight: 800;
								color: #010208;
								line-height: 38rpx;
								margin-top: 17rpx;
							}
						}
					}
					.changeSize-title{
						width: 90rpx;
						height: 42rpx;
						font-size: 30rpx;
						font-family: PingFang SC-Medium, PingFang SC;
						font-weight: 500;
						color: #010208;
						margin-top: 36rpx;
					}
				}
				.goodsWeight{
					display: flex;
					flex-direction: column;
					margin-top: 52rpx;
					.goodsWeight-title{
						width: 60rpx;
						height: 42rpx;
					}
					.goodsWeight-select{
						margin-top: 10rpx;
						display: flex;
					}
				}
				.baozhuang{
					margin-top: 9rpx;
					.selectBaozhuang-title{
						width: 60rpx;
						height: 42rpx;
					}
					.selectBaozhuang-select{
						margin-top: 10rpx;
						display: flex;
					}
			}
				.buyNum-box{
					margin-top: 39rpx;
					.buyNum-title{
						margin-bottom: 9rpx;
					}
					.buyNum-border{				
						width: 226rpx;
						height: 65rpx;
						border-radius: 10rpx 10rpx 10rpx 10rpx;
						font-size: 30rpx;
						font-family: PingFang SC-Bold, PingFang SC;
						font-weight: bold;
						color: #010208;
						border: 1px solid rgba(112, 112, 112, .5);
						margin-top: 14rpx;
						.buyNum{
							.minus{
								font-size: 30rpx;
								font-family: PingFang SC-Bold, PingFang SC;
								font-weight: bold;
								color: #010208;
								-webkit-background-clip: text;
							}
						}
					}
					
				}
				.btn{
					width: 690rpx;
					height: 88rpx;
					background: #FF3C3F;
					border-radius: 20rpx 20rpx 20rpx 20rpx;
					text-align: center;
					line-height: 88rpx;
					margin-top: 74rpx;
					text{
						width: 68rpx;
						height: 48rpx;
						font-size: 34rpx;
						font-family: PingFang SC-Medium, PingFang SC;
						font-weight: 500;
						color: #FFFFFF;
						
					}
				}
		}
	}
	.selectBaozhuang-title,.goodsWeight-title,.buyNum-title{
		font-size: 30rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		font-weight: 400;
		color: #010208;
		-webkit-background-clip: text;
		opacity: .5;
	}
	.goodsWeight-one,
	.selectBaozhuang{
		width: 139rpx;
		height: 60rpx;
		background: #EBEBEB;
		border-radius: 40rpx 40rpx 40rpx 40rpx;
		text-align: center;
		line-height: 60rpx;
		margin-right: 24rpx;
		font-size: 26rpx;
		font-family: PingFang SC-Bold, PingFang SC;
		font-weight: bold;
		color: #010208;
	}
	.active{
		background: #FF3C3F;
		color: #FFFFFF;
	}


/*计数器样式*/
	.minus {
		width: 65rpx;
		height: 65rpx;
		border-radius: 10rpx 10rpx 10rpx 10rpx;
		border-right: 1rpx solid rgba(112, 112, 112, .5);
		text-align: center;
		line-height: 65rpx;
		font-size: 30rpx;
		font-family: PingFang SC-Bold, PingFang SC;
		font-weight: bold;
		color: #010208;
	}

	.input {
		padding: 0 10px;
		font-size: 30rpx;
		font-family: PingFang SC-Bold, PingFang SC;
		font-weight: bold;
		color: #010208;
	}

	.plus {
		width: 65rpx;
		height: 65rpx;
		border-radius: 10rpx 10rpx 10rpx 10rpx;
		border-left: 1rpx solid rgba(112, 112, 112, .5);
		text-align: center;
		line-height: 65rpx;
		font-size: 30rpx;
		font-family: PingFang SC-Bold, PingFang SC;
		font-weight: bold;
		color: #010208;
	}
	.bottomBackground{
		height: 68rpx;
		width: 750rpx;
		background-color: #F6F7FE;
	}
</style>
