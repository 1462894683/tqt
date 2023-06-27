<template>
	<view>
		<view class="stores">
			<!-- 顶部背景及搜索 -->
 			<view class="top">
					<view class="topBar"><TopBar title="商城" :whiteShow="true"></TopBar></view>
					<swiper class="swiper" circular :autoplay="true" :interval="2000"
								:duration="500">
								<swiper-item class="swiper-item" v-for="(item,index) in swiperList" :key="index" @click="click">
									<image class="swiper-img" :src="item.swiperImg" mode=""></image>
								</swiper-item>
					</swiper>
					<view class="search">
						<input class="search-input" type="text">
						<view class="search-click">
							<image class="search-icon" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/21search@2x.png" mode=""></image>
							<input class="search-title" value="搜索商品"/>
						</view>
				</view>
			</view> 
			<!-- 商品分类 -->
			<view class="category">
				<view class="category-item" v-for="item in goodCategoryList">
					<image class="category-item-img" :src="item.cateGoryImgUrl" mode=""></image>
					<view class="category-item-name">{{item.catrgoryTitle}}</view>
				</view>
			</view> 
			
			<!-- tabs及商品列表 -->
			<z-paging-swiper :safe-area-inset-bottom="true" :swiper-style="{position: 'absolute',top:'732rpx',width:'750rpx',height:'600rpx'}">
				<!-- tab切换 -->
				<view class="tab">
					<u-tabs 
					:scrollable="true"
					ref="tabs"
					:list="tabList" 
					:current="currentIndex" 
					:lineColor="`url(${lineBg}) 100% 100%`"
					:inactiveStyle="{
						fontSize: '28rpx',
						fontFamily: 'PingFang SC-Bold, PingFang SC',
						fontWeight: 'bold',
						color: '#010208',
						opacity:0.5
					}"	
					:activeStyle="{
					            color:'#010208',
								fontSize: '32rpx',
					            fontWeight: 'bold',
					            fontFamily: 'PingFang SC-Bold, PingFang SC'
					        }"
					@change="changeTabs">
					</u-tabs>
				</view>
				<swiper class="swiperScroll" :current="currentIndex" @transition="transition" @animationfinish="animationfinish">
					<swiper-item class="swiper-item" v-for="(item, index) in tabList" :key="index">
						<!-- 自定义组件-->
								<SwiperGoodsList :tabIndex="index" :currentIndex="currentIndex"></SwiperGoodsList>
					</swiper-item>
				</swiper>
			</z-paging-swiper>
		
		</view>
		
		
		<!-- 底部tabBar -->
		<!-- #ifndef MP-WEIXIN -->
		<view class="tabBackground">
			<tabbar :current="selected"></tabbar>
		</view>
			<!-- #endif -->
	</view>
		
		
		


</template>

<script>
	//顶部
	import TopBar from '@/components/common/TopBar.vue'
	//商品列表
	import SwiperGoodsList from '@/pages/TabBar/Stores/components/SwiperGoodsList.vue'
	export default {
		name:'Stores',
		components:{TopBar,SwiperGoodsList},
		 options: {
		        styleIsolation: 'shared' // 解除样式隔离
		    },
		
		data() {
			return {
					//选中的底部tabBar
					selected:1,
					//轮播图列表
					  swiperList: [
								{
									swiperImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/21banner@2x.png',
								},
								{
									swiperImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/21banner@2x.png',
								},
								{
									swiperImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/21banner@2x.png',
								}
					        ],
					//tabs背景
					lineBg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/21选择@2x.png',
					//tab列表
					tabList: [
							{
								name: '全部'
							}, 
							{
								name: '衣服'
							}, 
							{
								name: '家具'
							},
							{
								name: '家用电器'
							},
							{
								name: '零食'
							}
						],
					//点击的tab索引
					currentIndex: 0,
					//商品分类列表
					goodCategoryList:[
						{id:1,cateGoryImgUrl:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/21商城icon1@2x.png',catrgoryTitle:'商品分类'},
						{id:2,cateGoryImgUrl:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/21商城icon2@2x.png',catrgoryTitle:'商品分类'},
						{id:3,cateGoryImgUrl:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/21商城icon3@2x.png',catrgoryTitle:'商品分类'},
						{id:4,cateGoryImgUrl:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/21商城icon4@2x.png',catrgoryTitle:'商品分类'}
					]
			}
		},
		methods: {
			//tab改变事件
			changeTabs(index) {
				this.currentIndex = index.index;
			},
			//swiper滑动结束
			animationfinish(e) {
				let current = e.detail.current;
				this.currentIndex = current		
				// console.log(e,'animationfinish')
			},
			//单个滑块滑动一次
			transition(e){
			}
		},
		onShow() {
			//千万不能删除
			 // #ifdef MP-WEIXIN
				this.setTabBarIndex(1);
				// #endif
		}
}
</script>

<style lang="scss" scoped>
	.swiperScroll{
		width: 750rpx;
		height: 100%;
		margin-top: 14rpx;
		border-radius: 0rpx 0rpx 30rpx 30rpx;
	}
.stores{
		font-family: PingFang SC-Medium, PingFang SC;
		width: 100%;
		height: 1624rpx;
		background: #D1D3EC;
		margin-bottom: 30rpx;
		.top{
			position: relative;
			width: 750rpx;
			// height: 550rpx;
			.topBar{
				position: absolute;
				z-index: 100;
			}
			.swiper{
				width: 750rpx;
				height: 550rpx;
				.swiper-item{
					width: 750rpx;
					height: 550rpx;
					.swiper-img{
						width: 750rpx;
						height: 550rpx;
					}
				}
			}
			
			.search{
				position: absolute;
				top:196rpx;
				left: 30rpx;
				right: 30rpx;
				width: 690rpx;
				height: 80rpx;
				.search-input{
						background: #FFFFFF;
						width: 690rpx;
						height: 80rpx;
						border-radius: 40rpx 40rpx 40rpx 40rpx;
						opacity: 0.2;
				}
			}
			.search-click{
				position: absolute;
				top: 0;
				left:272rpx;
				width: 690rpx;
				height: 80rpx;
				display: flex;
				align-items: center;
				opacity: .8;
				.search-icon{
					width: 32rpx;
					height: 33.02rpx;
				}
				.search-title{
					margin-left: 10rpx;
					font-size: 26rpx;
					font-weight: 500;
					color: #FFFFFF;;
				}
			}
		}
		.category{
			height: 150rpx;
			width: 630rpx;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			margin-top: 52rpx;
			align-items: center;
			.category-item{
				box-sizing: border-box;
				width: 100rpx;
				height: 150rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				.category-item-img{
					width: 100rpx;
					height: 100rpx;
				}
				.category-item-name{
					width: 104rpx;
					height: 37rpx;
					font-size: 26rpx;
					font-weight: normal;
					color: #141514;
					margin-top: 13rpx;
		
				}
			}		
		}
		//商品
		.goods{
			width: 750rpx;
			height: 572rpx;
			margin-top: 14rpx;
			overflow: auto;
			display: flex;
			flex-wrap: wrap;
		}
		
		.tab{
			width: 750rpx;
			margin-top: 34rpx;
		}
	}
/deep/.u-tabs__wrapper__nav__item{
    padding: 0 !important;
	width: 20%;
}
/deep/ .u-tabs__wrapper__nav__line {
		left: -8rpx;
		bottom: 12rpx;
		border-radius: 0;
		width: 52rpx !important;
		height: 14rpx !important;
	}
</style>
