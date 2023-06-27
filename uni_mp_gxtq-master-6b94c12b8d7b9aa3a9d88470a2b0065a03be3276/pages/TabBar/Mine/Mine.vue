<template>
	<view>
		<view class="top">
			<view class="box-one">
				<image :src="banchgoundImg" />
				<view class="message">
					<!--头像-->
					<view class="photo" @click="huoQUser()">
						<image class="photo-img" :src="phtotImg" />
					</view>
					<view v-show="!cloudID" class="message-xinxi"  @click="goLigin()">
						<view class="xinxi-deng">{{notMessage.pleaseLogin}}</view>
						<view class="xinxi-ID">ID{{notMessage.Message}}</view>
					</view>

					<view v-show="cloudID" class="message-xinxis">
						<view class="xinxi-dengs">{{message.pleaseLogin}}</view>
						<view class="xinxi-IDs">ID：{{message.Message}}</view>
					</view>

				</view>
				<!--未开通会员-->
				<view v-show="!isMembers" class="memberMan" @click="toMember">
					<image :src='notMember.MemberImg'></image>
					<view class="memberMan-posttion">
						<view class="memberMan-left">
							<text class="Not-open">{{notMember.notMem}}</text>
							<image :src='notMember.sVipImg'></image>
							<text class="member">{{notMember.member}}</text>
						</view>
						<view class="memberMan-right">
							<text class="atOnce-open">{{notMember.atOnceMember}} </text>
							<image :src="notMember.cutImg"></image>
						</view>
					</view>
				</view>
			</view>
			<!--列表 -->
			<view class="box-two">
				<u-list > 
				    <u-list-item >
						<!--:url="'/'+item.url"-->
						<navigator v-for="(item,index) in cellUrls" :key="index"  @click="notLogin(item.id)">
							<u-cell  :title='item.name' :isLink="true" arrow-direction="right"
								rightIconStyle='width: 10rpx;height:17rpx; font-size:10px; color:#111111;padding-right: 5rpx;'>
								<image class="imgTu" slot="icon" :src="item.img" ></image>
							</u-cell>
						</navigator>
						<u-cell title='退出登录' :isLink="true" arrow-direction="right" url='' @click="goLogin"
							rightIconStyle='width: 10rpx;height:17rpx; font-size:10px; color:#111111;padding-right: 5rpx;'>
							<image class="imgTu" slot="icon" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/50退出@2x.png" ></image>
						</u-cell>
						
				    </u-list-item>
				</u-list> 
				
			</view>
			<!--会员已开通-->
			<view v-show="isMembers" class="memberMans" @click="toTest">
				<image :src='superMrmber.MemberImg'></image>
				<view class="memberMan-posttions">
					<view class="memberMan-lefts">
						<image :src='superMrmber.sVipImg'></image>
						<text class="members">{{superMrmber.superMember}}</text>
					</view>
					<view class="memberMan-rights">
						<text class="atOnce-opens">{{superMrmber.MemberResidue}} </text>
						<image class="renewImg" :src="superMrmber.renewImg"></image>
						<image class="memCutImg" :src="superMrmber.memCutImg"></image>
					</view>
				</view>
			</view>
			
			<!-- 底部tabBar -->
			<!-- #ifndef MP-WEIXIN -->
			<view>
				<tabbar :current="selected"></tabbar>
			</view>
			<!-- #endif -->

		</view>
		<!-- :isLogin ="isLogin" :notLogin='notLog' -->
		<register :show="show"  @change="change" @codeID="codeID"  ></register>

	</view>

</template>

<script>
	import { loginHandler } from '@/common/auth'
	
	//顶部
	import TopBar from '@/components/common/TopBar.vue'
	import register from '@/components/register.vue'
	export default {
		components: {
			TopBar,
			register
		},
		data() {
			return {
				cloudID: '',
				color: '#D1D1D1',
				popup: false,
				show: false,
				isLogin: false,
				isMembers: false,
				//选中的底部tabBar
				selected: 4,
				phtotImg: 'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/50默认头像@2x.png',
				banchgoundImg: 'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/50bac@2x.png',
				notMessage:{ pleaseLogin:'请登录',Message:'信息'},
				message:{ pleaseLogin:'微信用户123*****123',Message:'12515827'},
				notMember:{
					MemberImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/50ka_bac@2x.png',
					notMem:'暂未开通',
					sVipImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/svip@2x.png',
					member:'会员',
					atOnceMember:'立即开通会员权益',
					cutImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/01首页-会员@2x.png',			
				},
				superMrmber:{
					MemberImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/50ka_bac@2x.png',
					sVipImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/50svip@2x.png',
					superMember:'超级会员',
					MemberResidue:'会员还剩300天',
					renewImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/50续费@2x.png',	
					memCutImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/50会员跳转@2x.png',	
				},
				cellUrls: [{
						id: 1,
						name: '我要报修',
						img: 'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/50报修@2x.png',
						url: 'pages/TabBar/Mine/components/Repairs'
					},
					{
						id: 2,
						name: '问题反馈',
						img: 'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/50反馈@2x.png',
						url: 'pages/TabBar/Mine/components/Feedback'
					},
					{
						id: 3,
						name: '优惠券',
						img: 'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/50优惠券@2x.png',
						url: 'pages/TabBar/Mine/components/Coupon'
					},
					{
						id: 4,
						name: '联系我们',
						img: 'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/50联系@2x.png',
						url:''
					},

				]
			}
		},
		methods: {
			//点击请登录切换状态
			goLigin() {
				if(this.cloudID != ''){
					this.setStorageSync('login',this.isLogin)
					this.isLogin = true	
					this.isMembers = true
				}else if(this.cloudID === ''){
					this.show = true
					// console.log('******');
				}
			},
			//点击列表切换登录状态
			notLogin(id){
				if(this.cloudID != ''){
					this.isLogin = true	
					this.isMembers = true
					console.log(id,1111)
					this.$Router.push({path:'/'+this.cellUrls[id-1].url})
				}else if(this.cloudID === ''){
					this.show = true
				}
			},
			// outLogin() {
			// 	this.isLogin = false
			// 	this.isMembers = false
			// },
			//获取cloudID
			codeID(ID) {
				this.cloudID = ID
			},
			change(a) {
				this.show = a
			},
			//跳转到开通会员
			toMember(){
				this.$Router.push({
					path:'/pages/TabBar/Mine/components/Member'
				})
			}
			
		
		},
		onShow() {
			// #ifdef MP-WEIXIN
			this.setTabBarIndex(4);
			// #endif
			
			//获取登录态
			// this.cloudID = uni.getStorageSync('getUserProfile').cloudID
			// console.log(this.cloudID,'00000000000')
		},
	}
</script>

<style lang="scss" scoped>
	.top {
		width: 750rpx;
		height: 1624rpx;
		// height: 1736rpx;
		background: #D1D3EC;
		position: fixed;
		border-radius: 0rpx 0rpx 0rpx 0rpx;

		.box {
			width: 750rpx;
			height: 140rpx;
		}

		.box-one {
			padding: 20rpx auto;
			height: 353rpx;

			image {
				width: 751.5rpx;
				height: 500rpx;
			}

			// 头像信息
			.message {
				display: flex;
				margin-top: -570rpx;

				.photo {
					width: 142rpx;
					height: 142rpx;
					margin: 260rpx 0 0 40rpx;

					.photo-img {
						width: 142rpx;
						height: 142rpx;
						border-radius: 97rpx;
						// border: 1px dashed gray;
					}
				}

				.message-xinxi {
					margin: 285rpx 0 0 20rpx;
					z-index: 11111;

					.xinxi-deng {
						font-size: 42rpx;
						font-family: PingFang SC-Bold, PingFang SC;
						font-weight: bold;
						color: #010208;
						margin-bottom: 10rpx;
					}

					.xinxi-ID {
						font-size: 24rpx;
						font-family: PingFang SC-Medium, PingFang SC;
						font-weight: 500;
						color: #010208;
					}

				}

			}

			//未开通会员
			.memberMan {
				margin: 55rpx 0 0 31rpx;
				width: 690rpx;
				height: 90rpx;
				background: linear-gradient(158deg, #F5F0E1 0%, #F7D4BB 100%);
				box-shadow: 0rpx -20rpx 20rpx 1rpx rgba(0, 41, 101, 0.2);
				border-radius: 20rpx 20rpx 20rpx 20rpx;
				opacity: 1;
				position: relative;

				image {
					width: 690rpx;
					height: 90rpx;
				}

				.memberMan-posttion {
					position: absolute;
					top: 0;

					.memberMan-left {
						width: 350rpx;
						height: 90rpx;
						float: left;
						display: flex;
						align-items: center;
						margin-top: -2rpx;

						.Not-open {
							width: 120rpx;
							height: 42rpx;
							font-size: 30rpx;
							font-family: PingFang SC-Heavy, PingFang SC;
							font-weight: 800;
							color: #B5B5B5;
							margin-left: 23rpx;
						}

						image {
							width: 90rpx;
							height: 30rpx;
							margin: 0px 15rpx 0 14rpx;
						}

						.member {
							width: 60rpx;
							height: 42rpx;
							font-size: 30rpx;
							font-family: PingFang SC-Heavy, PingFang SC;
							font-weight: 800;
							color: #B5B5B5;
						}
					}

					.memberMan-right {
						width: 340rpx;
						height: 90rpx;
						text-align: center;
						display: flex;
						align-items: center;

						.atOnce-open {
							width: 192rpx;
							height: 33rpx;
							font-size: 24rpx;
							font-family: PingFang SC-Heavy, PingFang SC;
							font-weight: 800;
							color: #FFD397;
							margin: 0 14rpx 0 104rpx;
						}

						image {
							width: 6.27rpx;
							height: 12.2rpx;
						}
					}
				}

			}
		}

		.box-two {
			width: 690rpx;
			height: 599rpx;
			background: #D6D9EF;
			box-shadow: 0rpx 8rpx 16rpx 1rpx rgba(117, 141, 229, 0.43);
			border-radius: 30rpx 30rpx 30rpx 30rpx;
			opacity: 1;
			margin: 150rpx 0 0 30rpx;

			.box-two-group {
				width: 690rpx;
				height: 100rpx;
				padding-top: 6rpx;
				font-size: 30rpx;
				font-family: PingFang SC-Bold, PingFang SC;
				font-weight: bold;
				color: #010208;
				display: flex;
				justify-content: space-between;

				image {
					width: 38rpx;
					height: 38rpx;
					margin-left: 36rpx;
					margin-top: 65rpx;
				}

				.box-ListItem {
					margin-right: 382rpx;
					margin-top: 63rpx;
					width: 120rpx;
					height: 42rpx;
					font-size: 30rpx;
					font-family: PingFang SC-Bold, PingFang SC;
					font-weight: bold;
					color: #010208;
					-webkit-background-clip: text;
				}

				.box-ListCell {
					margin-right: 33rpx;
					margin-top: 80rpx;
					width: 10rpx;
					height: 17rpx;
					opacity: 1;
				}
			}
		}
	}

	.message-xinxis {
		margin: 285rpx 0 0 20rpx;

		.xinxi-dengs {
			font-size: 42rpx;
			font-family: PingFang SC-Bold, PingFang SC;
			font-weight: bold;
			color: #010208;
			margin-bottom: 10rpx;
		}

		.xinxi-IDs {
			font-size: 24rpx;
			font-family: PingFang SC-Medium, PingFang SC;
			font-weight: 500;
			color: #010208;
		}
	}


	//会员已开通开通
	.memberMans {
		margin: 55rpx 0 0 31rpx;
		width: 690rpx;
		height: 90rpx;
		background: linear-gradient(158deg, #F5F0E1 0%, #F7D4BB 100%);
		box-shadow: 0rpx -20rpx 20rpx 1rpx rgba(0, 41, 101, 0.2);
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		opacity: 1;
		position: relative;
		top: -760rpx;

		image {
			width: 690rpx;
			height: 90rpx;
		}

		.memberMan-posttions {
			position: absolute;
			top: 0;

			.memberMan-lefts {
				width: 350rpx;
				height: 90rpx;
				float: left;
				display: flex;
				align-items: center;

				image {
					width: 90rpx;
					height: 30rpx;
					float: left;
					margin: 2rpx 16rpx 0 23rpx;
				}

				.members {
					width: 120rpx;
					height: 42rpx;
					font-size: 30rpx;
					font-family: PingFang SC-Heavy, PingFang SC;
					font-weight: 800;
					color: #FFD397;
				}
			}

			.memberMan-rights {
				width: 340rpx;
				height: 90rpx;
				float: left;
				text-align: center;
				display: flex;
				align-items: center;

				.atOnce-opens {
					width: 192rpx;
					height: 33rpx;
					font-size: 24rpx;
					font-family: PingFang SC-Heavy, PingFang SC;
					font-weight: 800;
					color: #FFD397;
					margin: 0 6rpx 0 30rpx;
				}

				.renewImg {
					width: 80rpx;
					height: 46rpx;
					margin-right: 9rpx;
				}
				.memCutImg{
					width: 6.27rpx;
					height: 12.2rpx;
				}
			}

		}
	}


	.imgTu{
		 width: 40rpx ;
		 height:40rpx;
		 margin: -6rpx 11rpx -6rpx 0;
		 padding: 20rpx 0;
	}
	
	/deep/.u-cell__title-text{
		font-size: 31rpx !important;
		color: #111111 !important;
	}
	/deep/.u-list-item {
		padding-top: 28rpx;
	}
	.photo-ImgB {
		left: 17px;
		top: 524px;
		width: 35px;
		height: 35px;
		border-radius: 25px;
	}
	/deep/.u-popup__content{
		border-radius: 30rpx 30rpx 0rpx 0rpx;
	}
</style>