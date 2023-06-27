<template>
	<view class="StoreOrder">
		<z-paging-swiper :safe-area-inset-bottom="true" :swiper-style="{position: 'absolute',top,width:'750rpx',height:'600rpx'}">
			<view class="storeTabs">
				<u-tabs
					ref="tabs"
					@change="switchContent" 
					:list="list" 
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
					>
				</u-tabs>
			</view>
			<swiper class="swiperScroll" :current="currentIndex" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item" v-for="(item, index) in list" :key="index">
					<!-- 自定义组件-->
							<view class="StoreOrderContent">
								<!-- 自定义组件-->
								<SwiperStoresOrderList :tabIndex="index" :currentIndex="currentIndex" @deleteModelShow2="$emit('deleteModelShow3')"></SwiperStoresOrderList>
							</view>
				</swiper-item>
			</swiper>
			</z-paging-swiper>

	</view>
</template>

<script>
	import OrderItem from '@/components/order/OrderItem.vue'
	import SwiperStoresOrderList from '@/pages/TabBar/Order/components/SwiperStoresOrderList.vue'
	export default {
		components: {
			OrderItem,
			SwiperStoresOrderList
		},
		props: {
			list: {
				type: Array,
				default: []
			},
			boxTab: {
				type: Boolean,
				default: false
			},
			boxTabS: {
				type: Boolean,
				default: false
			},
		},
		data() {
			return {
				current:0,
				//点击的tab索引
				currentIndex: 0,
				lineBg: 'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/21选择@2x.png',
				orderList:[],
				firstLoaded:false,
				top:'232rpx',
				isIphoneXup:false
			}
		},
		mounted() {
			//判断是不是苹果x以上机型
			if(uni.getStorageSync('isIphoneXup')){
				this.isIphoneXup = uni.getStorageSync('isIphoneXup')
				this.top = this.isIphoneXup===true ? '282rpx' : '232rpx'
			}
		},

		methods: {
			//tab改变事件
			switchContent(index) {
				this.currentIndex = index.index;
				},
			//swiper滑动结束
			animationfinish(e) {
				let current = e.detail.current;
				this.currentIndex = current		
			},
			//单个滑块滑动一次
			transition(e){
			}

		}
	}
</script>

<style lang="scss" scoped>
	.swiperScroll{
		width: 750rpx;
		height: 1064rpx;
	}
	.StoreOrder{
		width: 750rpx;
		height: 1624rpx;
		.storeTabs{
			padding: 0 22rpx;
			margin: 14rpx 0;
		}
		.StoreOrderContent{
			width: 750rpx;
			height: 1119rpx;
			overflow: auto;
		}
	}
</style>