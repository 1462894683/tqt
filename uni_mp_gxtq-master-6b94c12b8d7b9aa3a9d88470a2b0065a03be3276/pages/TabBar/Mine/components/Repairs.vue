<template>
	<!-- 报修 -->
	<view class="top">
		<view class="openVip">
				<TopBar title='报修'  :blackShow="true" :isShowReturn="true" ></TopBar>
		</view>
	
		<view class="box">
			<!--1.-->
			<view class="box-one"  v-for="item in boxOne" :key="item.id">
				<view class="time">
					<image :src="item.awaitImg"></image>
					<text class="repairs">报修时间 {{item.repairsTime}}</text>
					<text class=" processed" :style="{background: item.val == true ? '#EB7241':'#D1D3EC',color: item.val == true ? '#FFFFFF':'#010208'}">{{item.pocessed}}</text>
				</view>
				<view class="condition">
					<view class="condition-text">
						{{item.repairsText}}
					</view>
				</view>
				<view class="picture">
					<image class="picture-img" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/bg.png"></image>
					<image class="picture-img" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/bg.png"></image>
					<image class="picture-img" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/bg.png"></image>
					<image class="picture-img" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/bg.png"></image>				
				</view>
				<!-- <view class="picture" v-for="item in repairsImgs">
					<image class="picture-img" :src="item.img"></image>
				</view> -->
				<view class="address">
					<image :src="item.locationImg"></image>
					<text class="info">{{item.addressInfo}}</text>
				</view>
			</view>
			<!--2.-->
			<!-- <view class="box-two">
				<view class="time">
					<image src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/51等待@2x.png"></image>
					<text class="repairs">报修时间 2023.05.01</text>
					<text class=" processeds">已理中</text>
				</view>
				<view class="condition">
					<view class="condition-text">
						进门左边，13号台球桌的球杆坏了，桌子有些不平......
					</view>
				</view>
				<view class="picture">
					<image class="picture-img" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/bg.png"></image>
					<image class="picture-img" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/bg.png"></image>
					<image class="picture-img" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/bg.png"></image>
					<image class="picture-img" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/bg.png"></image>				
				</view>
				<view class="address">
					<image src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/51定位@2x.png"></image>
					<text class="info">豆豆空间东城店（东城区火车站接到幸福花园）</text>
				</view>
			</view>
			 -->
		<button class="btn" @click="toTest()">我要报修</button>
		</view>
	</view>
</template>

<script>
	//顶部
	import TopBar from '@/components/common/TopBar.vue'
	export default {
		components:{
			TopBar
		},
		
		data() {
			return {
				colors:'',
				fontColors:'',
				repairsImgs:[
					{
						img:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/bg.png',
					},
					{
						img:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/bg.png',
					},
					{
						img:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/bg.png',
					},
					{
						img:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/bg.png',
					},
				],
				boxOne:[
					{
						id:1,
						awaitImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/51等待@2x.png',
						repairsTime:'2023.05.01',
						pocessed:'处理中',
						repairsText:'进门左边，13号台球桌的球杆坏了，桌子有些不平......',
						locationImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/51定位@2x.png',
						addressInfo:'豆豆空间东城店（东城区火车站接到幸福花园）',
						val:true
					},
					{
						id:2,
						awaitImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/51等待@2x.png',
						repairsTime:'2023.05.01',
						pocessed:'已处理',
						repairsText:'进门左边，13号台球桌的球杆坏了，桌子有些不平......',
						locationImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/51定位@2x.png',
						addressInfo:'豆豆空间东城店（东城区火车站接到幸福花园）',
						val:false
					},
					
				],
			}
		},
		mounted() {
			this.init()
		},
		methods: {
			//跳转到报修填写
			toTest(){
				this.$Router.push({path:'/pages/TabBar/Mine/components/FllOutRepairs'})
			},
			//
			init(){
				if(this.boxOne[0].pocessed === '处理中'){
					this.colors = '#EB7241';
				}else if(this.boxOne[1].pocessed === '已处理'){
					this.colors = '#D1D3EC';
					this.fontColors ='#010208';
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.top{
	width: 750rpx;
	height: 1624rpx;
	background: #D1D3EC;
	border-radius: 0rpx 0rpx 0rpx 0rpx;
	.openVip{
		width: 750rpx;
		height: 160rpx;
		font-weight: bold;
		color: #010208;
		background-color: #D1D3EC;
		position: fixed;
		top: 0;
		z-index: 11;
	}
	.box{
		padding-top: 200rpx;
		//第一个盒子
		.box-one{
			width: 690rpx;
			height: 541rpx;
			background: #FFFFFF;
			border-radius: 30rpx 30rpx 30rpx 30rpx;
			opacity: 1;
			margin-left: 30rpx;
			// margin-top: 100rpx;
			margin-bottom: 20rpx;
			display: flex;
			flex-direction: column;
			z-index: -111;
			
		}
		.time{
			height: 40rpx;
			margin-top: 37rpx;
			display: flex;
			justify-content: space-between;		
			image{
				width: 34rpx;
				height: 34rpx;
				margin:0 10rpx 0 29rpx;
			}
			.repairs{
				margin-right: 160rpx;
				width: 310rpx;
				height: 37rpx;
				font-size: 26rpx;
				font-family: PingFang SC-Medium, PingFang SC;
				font-weight: 500;
				color: #010208;
				line-height: 36rpx;
			}
			.processed{
				margin-right: 40rpx;
				width: 113rpx;
				height: 49rpx;
				font-size: 24rpx;
				text-align: center;
				font-family: PingFang SC-Bold, PingFang SC;
				font-weight: bold;
				color: #FFFFFF;
				border-radius: 40rpx 40rpx 40rpx 40rpx;
				opacity: 1;
				line-height: 46rpx;			
			}
		}
		.condition{
			margin: 36rpx 0 0 20rpx;
			width: 650rpx;
			height: 167rpx;
			background: #F6F7FE;
			border-radius: 30rpx 30rpx 30rpx 30rpx;
			opacity: 1;
			.condition-text{
				margin: 27rpx 22rpx 56rpx 22rpx;
				width: 606rpx;
				height: 84rpx;
				font-size: 30rpx;
				font-family: PingFang SC-Medium, PingFang SC;
				font-weight: 500;
				color: #010208;
				line-height: 44rpx;
			}
		}
		.picture{
			margin: 20rpx auto;
			width: 650rpx;
			height: 154rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.picture-img{
				width: 154rpx;
				height: 154rpx;
				background: #F6F7FE;
				border-radius: 30rpx 30rpx 30rpx 30rpx;
				opacity: 1;
			}
		}
		.address{
			margin-top: 6.5rpx;
			height: 40rpx;
			display: flex;	
			image{
				width: 30rpx;
				height: 33.4rpx;
				margin:0 10rpx 0 31rpx;	
			}
			.info{
				width: 587rpx;
				height: 37rpx;
				font-size: 26rpx;
				font-family: PingFang SC-Regular, PingFang SC;
				font-weight: 400;
				color: #010208;
				line-height: 36rpx;
			}
		}
		//第二个盒子
		.box-two{
			width: 690rpx;
			height: 541rpx;
			background: #FFFFFF;
			border-radius: 30rpx 30rpx 30rpx 30rpx;
			opacity: 1;
			margin:20rpx 0 0 30rpx;
			display: flex;
			flex-direction: column;
			.processeds{	
				margin-right: 40rpx;
				width: 113rpx;
				height: 49rpx;
				background: #D1D3EC;
				font-size: 24rpx;
				text-align: center;
				font-family: PingFang SC-Bold, PingFang SC;
				font-weight: bold;
				color: #010208;
				border-radius: 40rpx 40rpx 40rpx 40rpx;
				opacity: 1;
				line-height: 46rpx;			
			}
		}
		
		.btn{
			margin-top: 190rpx;
			width: 690rpx;
			height: 88rpx;
			background: #461A5F;
			border-radius: 20rpx 20rpx 20rpx 20rpx;
			opacity: 1;
			font-size: 34rpx;
			font-family: PingFang SC-Medium, PingFang SC;
			font-weight: 500;
			color: #FFFFFF;
	}
	}
}


</style>
