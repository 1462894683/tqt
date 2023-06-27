<template>
	<view class="goodsCommentContent">
		<z-paging ref="paging" v-model="dataList" @query="queryList" :fixed="false" :auto="false"
			:paging-style="{height: '500px'}">
			<view class="goods-comment">
				<view class="goods-comment-item" v-for="item in dataList" :key="item.id">
					<view class="userInfo">
						<view class="user-avatar">
							<u-avatar :src="item.userAvatar"></u-avatar>
						</view>
						<view class="userNameAndCreateTime">
							<text class="username">{{item.username}}</text>
							<text class="content-time">{{item.commentDate}}</text>
						</view>
					</view>
					<view class="comment-content">{{item.conmentContent}}</view>
				</view>
				<view class="allComment" @click="$Router.push('/page_store/components/AllComment')">
					全部评价
				</view>
				<image class="detail-kefu" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/22客服@2x.png"
					mode=""></image>
			</view>
		</z-paging>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//这个变量不要自己赋值
				dataList: [{
						id: 1,
						userAvatar: 'https://img.zcool.cn/community/01a6095f110b9fa8012066219b67d4.png@1280w_1l_2o_100sh.png',
						username: '微信用户130****0001',
						commentDate: '2021年7月12日 16:31',
						conmentContent: '用户评价用户评价用户评价用户评价用户评价用户评价'
					},
					{
						id: 2,
						userAvatar: 'https://img.zcool.cn/community/014f685f110b9fa801215aa096689e.png@1280w_1l_2o_100sh.png',
						username: '微信用户130****0001',
						commentDate: '2021年7月12日 16:31',
						conmentContent: '用户评价用户评价用户评价用户评价用户评价用户评价'
					},
					{
						id: 3,
						userAvatar: 'https://img.zcool.cn/community/0143395f110b9fa801215aa060a140.png@1280w_1l_2o_100sh.png',
						username: '微信用户130****0001',
						commentDate: '2021年7月12日 16:31',
						conmentContent: '用户评价用户评价用户评价用户评价用户评价用户评价'
					},
					{
						id: 4,
						userAvatar: 'https://img.zcool.cn/community/016a2e5f110b9fa801215aa097202c.png@1280w_1l_2o_100sh.png',
						username: '微信用户130****0001',
						commentDate: '2021年7月12日 16:31',
						conmentContent: '用户评价用户评价用户评价用户评价用户评价用户评价'
					},
					{
						id: 5,
						userAvatar: 'https://img.zcool.cn/community/015ac85f110b9fa801206621387957.png@1280w_1l_2o_100sh.png',
						username: '微信用户130****0001',
						commentDate: '2021年7月12日 16:31',
						conmentContent: '用户评价用户评价用户评价用户评价用户评价用户评价'
					},
					{
						id: 6,
						userAvatar: 'https://ts1.cn.mm.bing.net/th/id/R-C.98d902a18d16aabbf0c46bbb766f9326?rik=S8HidBYL6W6bLw&riu=http%3a%2f%2fwww.sucaijishi.com%2fuploadfile%2f2018%2f0508%2f20180508023738286.png&ehk=oANsBmaenfwuKNXMUirkm6%2bWkHjYyXDQhoG%2fttjpKpQ%3d&risl=&pid=ImgRaw&r=0',
						username: '微信用户130****0001',
						commentDate: '2021年7月12日 16:31',
						conmentContent: '用户评价用户评价用户评价用户评价用户评价用户评价'
					},
					{
						id: 7,
						userAvatar: 'https://ts1.cn.mm.bing.net/th/id/R-C.d71f1364f192a38c5c9181f265612f46?rik=ggNbKYuXYZ%2bt3A&riu=http%3a%2f%2fbpic.588ku.com%2felement_pic%2f18%2f07%2f21%2f3548e5b5b45d865f177818816715f376.jpg&ehk=JXWNSvcagLEhCdOm4MmWhxyS28%2bXE4NgED%2fLsjG6l94%3d&risl=&pid=ImgRaw&r=0',
						username: '微信用户130****0001',
						commentDate: '2021年7月12日 16:31',
						conmentContent: '用户评价用户评价用户评价用户评价用户评价用户评价'
					},
					{
						id: 8,
						userAvatar: 'https://ts1.cn.mm.bing.net/th/id/R-C.9d0206ac82d68e66d768c29c16fd637c?rik=Mh8sJ%2bv6piTn3g&riu=http%3a%2f%2fbpic.588ku.com%2felement_pic%2f19%2f04%2f09%2f819ab3874dc28e0c1bb9ddcc624ca59a.jpg&ehk=aobANdyg8h%2bvUZ56I3AQ9gSLorMOjALOTEYl1ykf2cs%3d&risl=&pid=ImgRaw&r=0',
						username: '微信用户130****0001',
						commentDate: '2021年7月12日 16:31',
						conmentContent: '用户评价用户评价用户评价用户评价用户评价用户评价'
					},
					{
						id: 9,
						userAvatar: 'https://img.zcool.cn/community/01a6095f110b9fa8012066219b67d4.png@1280w_1l_2o_100sh.png',
						username: '微信用户130****0001',
						commentDate: '2021年7月12日 16:31',
						conmentContent: '用户评价用户评价用户评价用户评价用户评价用户评价'
					},
					{
						id: 10,
						userAvatar: 'https://img.zcool.cn/community/016a2e5f110b9fa801215aa097202c.png@1280w_1l_2o_100sh.png',
						username: '微信用户130****0001',
						commentDate: '2021年7月12日 16:31',
						conmentContent: '用户评价用户评价用户评价用户评价用户评价用户评价'
					}
				],
			};
		},
		methods: {
			queryList(pageNo, pageSize) {
				console.log(pageNo, pageSize)
				this.$refs.paging.complete([{
						id: 1,
						userAvatar: 'https://img.zcool.cn/community/01a6095f110b9fa8012066219b67d4.png@1280w_1l_2o_100sh.png',
						username: '微信用户130****0001',
						commentDate: '2021年7月12日 16:31',
						conmentContent: '用户评价用户评价用户评价用户评价用户评价用户评价'
					},
					{
						id: 2,
						userAvatar: 'https://img.zcool.cn/community/014f685f110b9fa801215aa096689e.png@1280w_1l_2o_100sh.png',
						username: '微信用户130****0001',
						commentDate: '2021年7月12日 16:31',
						conmentContent: '用户评价用户评价用户评价用户评价用户评价用户评价'
					},
					{
						id: 3,
						userAvatar: 'https://img.zcool.cn/community/0143395f110b9fa801215aa060a140.png@1280w_1l_2o_100sh.png',
						username: '微信用户130****0001',
						commentDate: '2021年7月12日 16:31',
						conmentContent: '用户评价用户评价用户评价用户评价用户评价用户评价'
					},
					{
						id: 4,
						userAvatar: 'https://img.zcool.cn/community/016a2e5f110b9fa801215aa097202c.png@1280w_1l_2o_100sh.png',
						username: '微信用户130****0001',
						commentDate: '2021年7月12日 16:31',
						conmentContent: '用户评价用户评价用户评价用户评价用户评价用户评价'
					},
					{
						id: 5,
						userAvatar: 'https://img.zcool.cn/community/015ac85f110b9fa801206621387957.png@1280w_1l_2o_100sh.png',
						username: '微信用户130****0001',
						commentDate: '2021年7月12日 16:31',
						conmentContent: '用户评价用户评价用户评价用户评价用户评价用户评价'
					},
					{
						id: 6,
						userAvatar: 'https://ts1.cn.mm.bing.net/th/id/R-C.98d902a18d16aabbf0c46bbb766f9326?rik=S8HidBYL6W6bLw&riu=http%3a%2f%2fwww.sucaijishi.com%2fuploadfile%2f2018%2f0508%2f20180508023738286.png&ehk=oANsBmaenfwuKNXMUirkm6%2bWkHjYyXDQhoG%2fttjpKpQ%3d&risl=&pid=ImgRaw&r=0',
						username: '微信用户130****0001',
						commentDate: '2021年7月12日 16:31',
						conmentContent: '用户评价用户评价用户评价用户评价用户评价用户评价'
					},
					{
						id: 7,
						userAvatar: 'https://ts1.cn.mm.bing.net/th/id/R-C.d71f1364f192a38c5c9181f265612f46?rik=ggNbKYuXYZ%2bt3A&riu=http%3a%2f%2fbpic.588ku.com%2felement_pic%2f18%2f07%2f21%2f3548e5b5b45d865f177818816715f376.jpg&ehk=JXWNSvcagLEhCdOm4MmWhxyS28%2bXE4NgED%2fLsjG6l94%3d&risl=&pid=ImgRaw&r=0',
						username: '微信用户130****0001',
						commentDate: '2021年7月12日 16:31',
						conmentContent: '用户评价用户评价用户评价用户评价用户评价用户评价'
					},
					{
						id: 8,
						userAvatar: 'https://ts1.cn.mm.bing.net/th/id/R-C.9d0206ac82d68e66d768c29c16fd637c?rik=Mh8sJ%2bv6piTn3g&riu=http%3a%2f%2fbpic.588ku.com%2felement_pic%2f19%2f04%2f09%2f819ab3874dc28e0c1bb9ddcc624ca59a.jpg&ehk=aobANdyg8h%2bvUZ56I3AQ9gSLorMOjALOTEYl1ykf2cs%3d&risl=&pid=ImgRaw&r=0',
						username: '微信用户130****0001',
						commentDate: '2021年7月12日 16:31',
						conmentContent: '用户评价用户评价用户评价用户评价用户评价用户评价'
					},
					{
						id: 9,
						userAvatar: 'https://img.zcool.cn/community/01a6095f110b9fa8012066219b67d4.png@1280w_1l_2o_100sh.png',
						username: '微信用户130****0001',
						commentDate: '2021年7月12日 16:31',
						conmentContent: '用户评价用户评价用户评价用户评价用户评价用户评价'
					},
					{
						id: 10,
						userAvatar: 'https://img.zcool.cn/community/016a2e5f110b9fa801215aa097202c.png@1280w_1l_2o_100sh.png',
						username: '微信用户130****0001',
						commentDate: '2021年7月12日 16:31',
						conmentContent: '用户评价用户评价用户评价用户评价用户评价用户评价'
					}
				]);
			},
		}

	}
</script>

<style lang="scss" scoped>
	.goods-comment {
		width: 750rpx;
		height: 500rpx;
		margin-top: 30rpx;
		overflow: auto;

		.goods-comment-item {
			font-family: PingFang SC-Medium, PingFang SC;
			font-weight: 500;
			color: #000000;
			-webkit-text-stroke: 1px rgba(0, 0, 0, 0);
			text-stroke: 1px rgba(0, 0, 0, 0);
			-webkit-background-clip: text;

			.userInfo {
				display: flex;
				align-items: center;

				.user-avatar {
					margin-left: 29rpx;
				}

				.userNameAndCreateTime {
					margin-left: 19rpx;
					display: flex;
					flex-direction: column;
					align-items: center;

					.username {
						width: 266rpx;
						height: 37rpx;
						font-size: 26rpx;
						width: 266rpx;
						height: 37rpx;
						font-size: 26rpx;
						font-family: PingFang SC-Medium, PingFang SC;
						font-weight: 500;
						color: #000000;
						-webkit-text-stroke: 1px rgba(0, 0, 0, 0);
						text-stroke: 1px rgba(0, 0, 0, 0);
						-webkit-background-clip: text;
					}

					.content-time {
						opacity: .5;
						width: 280rpx;
						height: 33rpx;
						font-size: 24rpx;
						font-family: PingFang SC-Medium, PingFang SC;
						font-weight: 500;
						color: #000000;
						-webkit-text-stroke: 1px rgba(0, 0, 0, 0);
						text-stroke: 1px rgba(0, 0, 0, 0);
						-webkit-background-clip: text;
					}
				}
			}

			.comment-content {
				padding-left: 128rpx;
				width: 591rpx;
				height: 80rpx;
				// font-size: 26rpx;
				font-size: 22rpx;
				/*胡哥让改*/
				font-family: PingFang SC-Medium, PingFang SC;
				font-weight: 500;
				color: #000000;
				-webkit-text-stroke: 1px rgba(0, 0, 0, 0);
				text-stroke: 1px rgba(0, 0, 0, 0);
				-webkit-background-clip: text;
			}
		}

		.allComment {
			width: 591rpx;
			height: 80rpx;
			font-size: 28rpx;
			font-family: PingFang SC-Medium, PingFang SC;
			font-weight: 500;
			color: #000000;
			margin-bottom: 100rpx;
			margin-left: 29rpx;
			cursor: pointer;
		}

		.detail-kefu {
			width: 96rpx;
			height: 96rpx;
			position: fixed;
			top: 297rpx;
			right: 31rpx;
		}
	}
</style>