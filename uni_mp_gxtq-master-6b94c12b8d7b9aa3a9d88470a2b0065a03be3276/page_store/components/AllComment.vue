<template>
	<view class="content">
		<view class="topbar">
			<TopBar title="全部评论" :blackShow="true" :isShowReturn="true"></TopBar>
		</view>
		<view class="goods-comment">
			<view class="goods-comment-item" v-for="item in 20">
				<view class="userInfo">
					<view class="user-avatar">
						<u-avatar :src="userAvatarUrl"></u-avatar>
					</view>
					<view class="userNameAndCreateTime">
						<text class="username">微信用户130****0001</text>
						<text class="content-time">2021年7月12日 16:31:23</text>
					</view>
				</view>
				<view class="userRate">
					<u-rate size="20"
					 active-color="#F2CB51" 
					 inactive-color="#F2CB51" 
					 :count="count" 
					 v-model="value"
					 @change="change"
					 gutter="6">
					 </u-rate>
				</view>
				<view class="comment-content">用户评价用户评价用户评价用户评价用户评价用户评价</view>
			</view>
		</view>
	</view>
</template>

<script>
	//顶部
	import TopBar from '@/components/common/TopBar.vue'
	export default{
		name:'AllComment',
		components:{TopBar},
		data(){
			return{
				//用户头像
				userAvatarUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202106%2F23%2F20210623175340_03f0d.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1687013973&t=a525e8ce0031a25b013c11967d1a0244',
				count: 5,//总共可选择的图标
				value: 2//选中星星的数量
			}
		},
		methods:{
			change(){
				// console.log('评分改变')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		width: 750rpx;
		height: 1624rpx;
		background: #F6F7FE;
		.topbar{
			height: 210rpx;
			width: 750rpx;
			position: fixed;
			top: 0;
			z-index: 100;
			background: #F6F7FE;
		}
		.goods-comment{
			width: 750rpx;
			height: 1366rpx;
			overflow: auto;
			background: #ffffff;
			margin: 210rpx 0 238rpx 0;
			.goods-comment-item{
				font-family: PingFang SC-Medium, PingFang SC;
				font-weight: 500;
				color: #000000;
				width: 750rpx;
				height: 294rpx;
				.userInfo{
					display: flex;
					align-items: center;
					.user-avatar{
						margin-left: 29rpx;
					}
					.userNameAndCreateTime{
						margin-left: 19rpx;
						display: flex;
						flex-direction: column;
						align-items: center;
						.username{
							margin-top: 7rpx;
							width: 266rpx;
							height: 37rpx;
							font-size: 26rpx;
						}
						.content-time{
							width: 280rpx;
							height: 33rpx;
							font-size: 24rpx;
							opacity: .5;	
						}
					}
				}
				.userRate{
					margin-left: 129rpx;
					margin-top: 22rpx;
					margin-bottom: 22rpx;
				}
				.comment-content{
					width: 591rpx;
					height: 80rpx;
					font-size: 28rpx;
					padding-left: 128rpx;
				}
			}
		}
	}

</style>