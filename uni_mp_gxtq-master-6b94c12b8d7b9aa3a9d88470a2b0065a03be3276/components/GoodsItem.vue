<template>
	<view>
		<view class="goods-item" v-for="item in goods" :key="item.id">
			<image class="goods-img" :src="item.imgUrl" mode=""@click="goGoodDetail"></image>
			<view class="goods-content">
				<view class="goods-content-title u-line-2">{{item.title}}</view>
				<view class="goods-content-bottom">
					<text class="goods-content-price">{{item.price}}</text>
					<image class="goods-content-cart" :src="item.cartImg" mode="" @click="addCart(item.id)"></image>
					
				</view>
			</view>
			<view class="goods-item-discount-box" v-if="item.discount">
				<text class="goods-item-discount">{{item.discount}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'GoodsItem',
		props:{
			goods:{
				type:Array,
				default:{}
			}
		},
		data(){
			return{
		
			}
		},
		methods:{		
			goGoodDetail(){
				this.$Router.push({
					path:'/page_store/components/Details'
				})
			},
			//添加购物车
			addCart(cartId){
				this.$Router.push({path:'/page_store/components/Details'})
				//请求添加购物车的接口
				// this.$ui.showToast({ title: '添加成功', icon: 'success' }).then(res => {
					
				// })
			}
		}
	}
</script>

<style lang="scss" scoped>
	.goods-item{
		position: relative;
		width: 337rpx;
		height: 504rpx;
		background: #FFFFFF;
		margin-left: 25rpx;
		box-sizing: border-box;
		border-radius: 23rpx 23rpx 23rpx 23rpx;
		opacity: 1;
		float: left;
		margin-bottom: 40rpx;
		.goods-img{
			width: 337rpx;
			height: 336rpx;
			background: #FFFFFF;
			border-radius: 20rpx 20rpx 0rpx 0rpx;
		}
		.goods-content{
			padding: 0 16rpx;
			.goods-content-title{
				width: 312rpx;
				height: 74rpx;
				font-size: 26rpx;
				font-weight: 500;
				color: #141514;
				line-height: 38rpx;
				margin-top: 10rpx;
			}
			.goods-content-bottom{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.goods-content-price{
					width: 74rpx;
					height: 37rpx;
					font-size: 28rpx;
					font-family: OPPOSans-bold, OPPOSans;
					font-weight: bold;
					color: #E70D0D;
					line-height: 27rpx;
					margin-top: 12rpx;
					-webkit-background-clip: text;
				}
				.goods-content-cart{
					width: 44rpx;
					height: 34.89rpx;
				}
			}
		}
		.goods-item-discount-box{
			position: absolute;
			top: 0;
			width: 96rpx;
			height: 44rpx;
			background: linear-gradient(132deg, #EF4241 0%, #EF7463 100%);
			border-radius: 23rpx 0rpx 138rpx 0rpx;
			opacity: 1;
			.goods-item-discount{
				width: 55rpx;
				height: 32rpx;
				font-size: 23rpx;
				margin-left: 14rpx;
				font-family: PingFangSC-Regular-, PingFangSC-Regular;
				font-weight: normal;
				color: #FFFFFF;
				line-height: 23rpx;
			}
		}
	}
</style>