<template>
	<view class="order">
		<view class="topBar">
			<TopBar title='订单' :blackShow="true"></TopBar>
		</view>
		<view class="top" :class="{iphonexUp:isIphoneXup===true,noIphonexUp:isIphoneXup!==true}">
			<view class="shareOrder" 
				 @click="showContent = 'shareOrder'" :class="showContent==='shareOrder'?'active':'inactive'">{{title}}</view>
			<view  class="shopOrder" ref="shopOrder"
				 @click="showContent = 'shopOrder'" :class="showContent==='shopOrder'?'active':'inactive'">{{title2}}</view>
		</view>
		<view class="orderContent">
			<!-- 共享订单 -->
			<view class="Share">
				<ShareOrder   v-if="showContent === 'shareOrder'" :list="shareList" @deleteModelShow3="isDeleteOrderShow=true"></ShareOrder>
			</view>
			<!-- 商城订单 -->
			<view class="Store">
				<StoreOrder v-if="showContent === 'shopOrder'" :list="list" @deleteModelShow3="isDeleteOrderShow=true"></StoreOrder>
			</view>
		</view>
		
		<!-- 删除订单模态框 -->
		<DeleteModel :isDeleteCartShow="isDeleteOrderShow" 
		@closeDeleteModel="isDeleteOrderShow=false"
		@confirmDeleteCart="confirmDeleteCart" title="是否确定删除"
		></DeleteModel>
		
		<!-- 到店自提订单模态框 -->
		<DeleteModel :isDeleteCartShow="isDeleteOrderShow" 
		@closeDeleteModel="isDeleteOrderShow=false"
		@confirmDeleteCart="confirmDeleteCart" title="请确认是否提到了货？"
		></DeleteModel>
	


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
	import StoreOrder from '@/components/order/StoreOrder.vue'
	import ShareOrder from '@/components/order/ShareOrder.vue'
	import OrderItem from '@/components/order/OrderItem.vue'
	import {loginHandler} from '../../../common/auth';
	import DeleteModel from '@/pages/TabBar/Shopping/components/DeleteModel.vue'
	export default {
		components: {
			TopBar,
			StoreOrder,OrderItem,ShareOrder,DeleteModel
		},
		data() {
			return {
				isIphoneXup:false,
				//删除模态框展示
				isDeleteOrderShow:false,
				isDeleteOrderShow3:false,
				shows:'',
				showContent: 'shareOrder' ,// 默认选中第一个菜单项
				title:'共享订单',
				title2:'商城订单',
				selected: 3,//tabbar的下标三
				list: [{
						name: '全部订单',
					},
					{
						name: '待付款',
					},
					{
						name: '待自提',
					},
					{
						name: '已自提',
					},
					{
						name: '已取消',
					},
					{
						name: '退款',
					},
				],
				shareList: [{
						name: "全部订单",
					},
					{
						name: "待付款",
					},
					{
						name: "交易完成",
					},
					{
						name: "已免除",
					},
				]


			}
		},
		methods: {
			toTest() {
				uni.navigateTo({
					url: 'pages/TabBar/Order/components/Details'
				})
			},
			toTest1() {
				uni.navigateTo({
					url: 'pages/TabBar/Order/components/Affirm'
				})
			},
			confirmDeleteCart(){
				this.isDeleteOrderShow=false
				//删除订单
				this.$ui.showToast({ title: '删除成功', icon: 'success' }).then(res => {
				})
			},
			confirmDeleteCart2(){
				this.isDeleteOrderShow=false
				//删除订单
				// this.$ui.showToast({ title: '删除成功', icon: 'success' }).then(res => {
				// })
			},
			
			
		},
		onShow() {	
			// #ifdef MP-WEIXIN
			this.setTabBarIndex(3);
			// #endif
			//判断是不是苹果x以上机型
			if(uni.getStorageSync('isIphoneXup')){
				this.isIphoneXup = uni.getStorageSync('isIphoneXup')
			}
		},
		 mounted() {
			 
			// this.init()
		}
	}
</script>

<style lang="scss" scoped>
	.order{
		width: 750rpx;
		height: 1624rpx;
		// height: 1924rpx;
		background: #D1D3EC;
		overflow: hidden;
		.top{
			width: 690rpx;
			height: 88rpx;
			background: rgba(255, 255, 255, .3);
			border-radius: 20rpx 20rpx 20rpx 20rpx;
			margin: 0 auto;
			display: flex;
			align-items: center;	
			font-size: 30rpx;
			font-family: PingFang SC-Medium, PingFang SC;
			font-weight: 500;
			color: #010208;
			text-align: center;
			line-height: 88rpx;
			margin-top: 150rpx;
			.shareOrder{
				width: 344rpx;
				height: 88rpx;
				
			}
			.shopOrder{
				width: 344rpx;
				height: 88rpx;
			}
		}
		.noIphonexUp{
			margin-top: 150rpx;
		}
		.iphonexUp{
			margin-top: 200rpx;
		}
		.orderContent{
			width: 750rpx;
			.Share{
				/deep/.u-tabs__wrapper__nav__item{
				    padding: 0 !important;
					width: 25%;
					// background-color: green;
				}
				::v-deep .u-tabs__wrapper__nav__line{
						left: -8rpx;
						bottom: 12rpx;
						border-radius: 0;
						width: 52rpx !important;
						height: 14rpx !important;
					}
			}
			.Store{
				width: 750rpx;
				padding-bottom: 188rpx;
				/deep/.u-tabs__wrapper__nav__item{
				    padding: 0 16rpx !important;
				}
				::v-deep .u-tabs__wrapper__nav__line{
						left: -12rpx;
						bottom: 12rpx;
						border-radius: 0;
						width: 52rpx !important;
						height: 14rpx !important;
					}
			}
		}

	}
	.active{
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		font-family: PingFang SC-Bold, PingFang SC;
		font-weight: bold;
	}
	.inactive{
		font-family: PingFang SC-Medium, PingFang SC;
		font-weight: 500;
		opacity: .5;
	}
</style>