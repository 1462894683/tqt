<template>
	<view >
		<u-tabbar :value="current" activeColor="#342752" inactiveColor="#B4A9EA" @change="changeHandler">
			<u-tabbar-item :text="item.text" v-for="(item, i) in list" :key="i" >
				<u-image slot="active-icon" width="48rpx" height="48rpx" 
				:src="item.selectedIconPath" mode="aspectFill" :lazy-load="true"></u-image>
				<u-image slot="inactive-icon" width="48rpx" height="48rpx" :src="item.iconPath" mode="aspectFill"
					:lazy-load="true"></u-image>
			</u-tabbar-item>
		</u-tabbar>
	</view>

</template>

<script>
export default {
	name:"tab-bar",
	props: {
		current: {
			type: Number,
			default: 0 //默认第一个页面tabbar激活
		}
	},
	data() {
		return {
			list: [
				{
					iconPath: 'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/home.png',
					selectedIconPath: 'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/homeSeleted.png',
					text: '首页',
						// text: this.$t('i18n_28'),
					path: '/pages/TabBar/Home/Home'
				},
				{
					iconPath: 'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/shop.png',
					selectedIconPath: 'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/shopSeleted.png',
					text: '商城',
					// text: this.$t('i18n_29'),
					path: '/pages/TabBar/Stores/Stores'
				},
				{
					iconPath: 'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/cart.png',
					selectedIconPath: 'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/cartSeleted.png',
					text: '购物车',
						// text: this.$t('i18n_30'),
					path: '/pages/TabBar/Shopping/Shopping'
				},
				{
					iconPath: 'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/order.png',
					selectedIconPath: 'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/orderSeleted.png',
					text: '订单',
							// text: this.$t('i18n_31'),
					path: '/pages/TabBar/Order/Order'
				},
				{
					iconPath: 'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/my.png',
					selectedIconPath: 'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/mySeleted.png',
					text: '我的',
						// text: this.$t('i18n_32'),
					path: '/pages/TabBar/Mine/Mine'
				}
			],
		};
	},
	methods: {
		changeHandler(index) {
			console.log(index)
			this.$Router.pushTab(this.list[index].path)
		},
	}
};
</script>
<style scoped>
.TabBar {
	background-color: #ffffff00 !important;
	border-radius: 40rpx 40rpx 0 0;
	position: fixed;
	bottom: -2rpx;
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	z-index: 1000;
	padding-top: 18rpx;
	background-image: url('https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/tab.png') !important;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center 0;
}

.bg {
	position: fixed;
	bottom: 0rpx;
	width: 100%;
	z-index: 998;
}

.tab {
	padding: 20rpx 0 40rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
}

.imgsize {
	width: 48rpx;
	height: 48rpx;
}

.addimgsize {
	border-radius: 50%;
	width: 120rpx;
	height: 120rpx;
	bottom: 80rpx;
	position: absolute;
}

.text {
	margin-top: 10rpx;
	font-size: 20rpx;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #c7c5cc;
}

.active {
	margin-top: 10rpx;
	font-size: 20rpx;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #1b7264;
}
</style>
