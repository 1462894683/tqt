<template>
	<view class="top">
		<view class="openVip">
				<TopBar title='优惠券' :blackShow="true" :isShowReturn="true"></TopBar>
		</view>
		
		<view class="box">
			<z-paging-swiper :safe-area-inset-bottom="true" :swiper-style="{position: 'absolute',top:'202rpx',width:'750rpx',height:'600rpx'}">
				<!-- tab切换 -->
				<view class="box-tab">
					 <u-tabs
						:scrollable="true"
						lineHeight="8"
						ref="tabs"
						@change="changeTabs"
						:list="list"
						:current="currentIndex" 
						:lineColor="`url(${lineBg}) 100% 100%`"
						inactive-color="#141514"
						:activeStyle="{
							color: '#303133',
							fontWeight: 'bold',
							fontFamily: 'PingFang SC-Bold, PingFang SC'
						}"
					    >
					    </u-tabs>
				</view>
				
				<swiper class="swiperScroll" :current="currentIndex" @transition="transition" @animationfinish="animationfinish">
					<swiper-item  v-for="(item, index) in list" :key="index">
						<SwiperCoupon :tabIndex="index" :currentIndex="currentIndex"></SwiperCoupon>
					</swiper-item>
				</swiper>								
			</z-paging-swiper>
			
			
			
			
		</view>
	
		
	</view>
</template>

<script>
	//顶部
	import TopBar from '@/components/common/TopBar.vue'
	import { loginHandler } from '@/common/auth';
	import SwiperCoupon from '@/pages/TabBar/Mine/components/SwiperCoupon.vue'

	export default {
		components:{
			TopBar,SwiperCoupon
		},
		data() {
			return {
				tabIndex:0,
				lineBg : 'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/21选择@2x.png',
				//点击的tab索引
				currentIndex: 0,
				list: [
							{
								name: '未使用3'
							}, 
							{
								name: '已使用2',
							}, 
							{
								name: '已过期2',
							},
					],
			
			}
		},
		mounted() {
		},
		methods: {
			//tab改变事件
			changeTabs(index) {
				this.currentIndex = index.index	
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
		onShow() {
			 // #ifdef MP-WEIXIN
				this.setTabBarIndex(1);
				// #endif
		},
	}
</script>

<style lang="scss" scoped>
	.swiperScroll{
		width: 750rpx;
		height:1624rpx;
		margin-top: 30rpx;
		border-radius: 0rpx 0rpx 30rpx 30rpx;
	}
	/deep/.zp-custom-refresher-view {
		margin-top: -64rpx;
	}
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
		background: #F6F7FE;
		position: fixed;
		top: 0;
		z-index: 999;
	}
	.box{
		padding-top: 200rpx;
	}
		.box-tab{
			font-size: 30rpx;
			width: 750rpx;
			height: 88rpx;
			background: #FFFFFF;
			border-radius: 0rpx 0rpx 0rpx 0rpx;
			opacity: 1;
		}
		

}


/deep/.u-tabs__wrapper__nav__item{
	padding: 0 70rpx !important;
}
/deep/ .u-tabs__wrapper__nav__line {
		left: -20rpx !important;
		width: 64rpx !important;
		bottom:6rpx !important;

	}
/deep/.u-badge--error{
	display: none !important;
}

</style>
