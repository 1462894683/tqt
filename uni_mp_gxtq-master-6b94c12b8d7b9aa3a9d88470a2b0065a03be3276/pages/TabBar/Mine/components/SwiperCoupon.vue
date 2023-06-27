<template>
	<view class="SwiperCoupon">
		<z-paging ref="paging" v-model="goodsList" @query="queryList" :fixed="false" :auto="false" :paging-style="{height: '500px'}">		
		<!--未使用-->
		<view class="box-coupons"  v-if="currentIndex===0" >
			<view class="box-couponTop"  v-for="(item,index) in couponTop1" :key="index">
				<image class="box-couponImg" :src="item.img"></image>
				
				<view class="box-couponBox">
					<view class="box-couponLeft">
						<text class="box-couponLeft15">{{item.num}}</text>
						<text class="box-couponLeft100">{{item.conten}}</text>
					</view>
					<view  class="box-couponRight">
						<view class="box-couponLeftMan">{{item.name}}</view>
						<view class="box-couponLeftYou">{{item.time}}</view>
					</view>
					<image style="width:200rpx; height:126rpx;position: absolute;right: 8rpx; top:-8rpx;" :src="item.imgS"></image>
				</view>
					
			</view>
		</view>
		<!--优惠券已使用-->
		<view class="box-coupon"  v-if="currentIndex===1" >
			<view class="box-couponTop" v-for="(item,index) in couponTop2" :key="index" >
				<image class="box-couponImg" :src="item.img"></image>
				<view class="box-couponBox">
					<view class="box-couponLeft">
						<text class="box-couponLeft15">{{item.num}}</text>
						<text class="box-couponLeft100">{{item.conten}}</text>
					</view>
					<view  class="box-couponRight">
						<view class="box-couponLeftMan">{{item.name}}</view>
						<view class="box-couponLeftYou">{{item.time}}</view>
					</view>
				</view>
					
			</view>
		</view>
		
		<!--优惠券已过期-->
		<view class="box-coupon"  v-if="currentIndex===2" >
			<view class="box-couponTop"  v-for="(item,index) in couponTop3" :key="index">
				<image class="box-couponImg" :src="item.img"></image>
				<view class="box-couponBox">
					<view class="box-couponLeft">
						<text class="box-couponLeft15">{{item.num}}</text>
						<text class="box-couponLeft100">{{item.conten}}</text>
					</view>
					<view  class="box-couponRight">
						<view class="box-couponLeftMan">{{item.name}}</view>
						<view class="box-couponLeftYou">{{item.time}}</view>
					</view>
				</view>
					
			</view>
		</view>	
		
		</z-paging>	
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//这个变量不要自己赋值
				dataList:[],
				firstLoaded:false,
				//商品列表
				goodsList:[],
				couponTop1:[
						{
							id:1,
							num:'15',
							conten:'满100可用',
							name:'优惠券名称',
							time:'有效期：2023.01.01至2023.09.30',
							img:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/15优惠券@2x.png',				
							imgS:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/15去使用@2x.png',	
						},
						{
							id:2,
							num:'15',
							conten:'满100可用',
							name:'优惠券名称',
							time:'有效期：2023.01.01至2023.09.30',
							img:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/15优惠券@2x.png',
							imgS:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/15去使用@2x.png',	
						},
						{
							id:3,
							num:'15',
							conten:'满100可用',
							name:'优惠券名称',
							time:'有效期：2023.01.01至2023.09.30',
							img:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/15优惠券@2x.png',
							imgS:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/15去使用@2x.png',	
						}
					],
				couponTop2:[
						{
							id:1,
							num:'15',
							conten:'满100可用',
							name:'优惠券名称',
							time:'有效期：2023.01.01至2023.09.30',
							img:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/54已使用@2x.png',				
						},
						{
							id:2,
							num:'15',
							conten:'满100可用',
							name:'优惠券名称',
							time:'有效期：2023.01.01至2023.09.30',
							img:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/54已使用@2x.png',				
						},
					],
				couponTop3:[
						{
							id:1,
							num:'15',
							conten:'满100可用',
							name:'优惠券名称',
							time:'有效期：2023.01.01至2023.09.30',
							img:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/54已过期@2x.png',				
						},
						{
							id:2,
							num:'15',
							conten:'满100可用',
							name:'优惠券名称',
							time:'有效期：2023.01.01至2023.09.30',
							img:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/54已过期@2x.png',				
						},
					]

			}
		},
		props:{
			//当前组件的index，也就是当前组件是Swiper中的第几个
			tabIndex:{
				type:Number,
				default:function(){
					return 0
				}
			},
			//当前swiper切换到第几个index
			currentIndex:{
				type:Number,
				default:function(){
					return 0
				}
			},
			
		},
		watch:{
			currentIndex:{
				handler(newVal){
					if(newVal === this.tabIndex){
						//懒加载，当滑动到当前的item时，才去加载
						if(!this.firstLoaded){
							setTimeout(()=>{
								this.$refs.paging.reload();
							},5)
						}
					}
				},
				immediate:true
			}
			
		},
		methods:{
			queryList(pageNo,pageSize){
				console.log(pageNo,pageSize)
					this.$refs.paging.complete(
					[
						{
							id:1,
							num:'15',
							conten:'满100可用',
							name:'优惠券名称',
							time:'有效期：2023.01.01至2023.09.30',
							img:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/15优惠券@2x.png',				
							imgS:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/15去使用@2x.png',	
						},
						{
							id:2,
							num:'15',
							conten:'满100可用',
							name:'优惠券名称',
							time:'有效期：2023.01.01至2023.09.30',
							img:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/15优惠券@2x.png',
							imgS:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/15去使用@2x.png',	
						},
						{
							id:3,
							num:'15',
							conten:'满100可用',
							name:'优惠券名称',
							time:'有效期：2023.01.01至2023.09.30',
							img:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/15优惠券@2x.png',
							imgS:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/15去使用@2x.png',	
						},
						{
							id:4,
							num:'15',
							conten:'满100可用',
							name:'优惠券名称',
							time:'有效期：2023.01.01至2023.09.30',
							img:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/15优惠券@2x.png',
							imgS:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/15去使用@2x.png',	
						},
						{
							id:5,
							num:'15',
							conten:'满100可用',
							name:'优惠券名称',
							time:'有效期：2023.01.01至2023.09.30',
							img:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/15优惠券@2x.png',
							imgS:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/15去使用@2x.png',	
						},
						{
							id:6,
							num:'15',
							conten:'满100可用',
							name:'优惠券名称',
							time:'有效期：2023.01.01至2023.09.30',
							img:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/15优惠券@2x.png',
							imgS:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/15去使用@2x.png',	
						},
						{
							id:7,
							num:'15',
							conten:'满100可用',
							name:'优惠券名称',
							time:'有效期：2023.01.01至2023.09.30',
							img:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/15优惠券@2x.png',
							imgS:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/15去使用@2x.png',	
						},
						{
							id:8,
							num:'15',
							conten:'满100可用',
							name:'优惠券名称',
							time:'有效期：2023.01.01至2023.09.30',
							img:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/15优惠券@2x.png',
							imgS:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/15去使用@2x.png',	
						},
						{
							id:9,
							num:'15',
							conten:'满100可用',
							name:'优惠券名称',
							time:'有效期：2023.01.01至2023.09.30',
							img:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/15优惠券@2x.png',
							imgS:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/15去使用@2x.png',	
						},
						{
							id:10,
							num:'15',
							conten:'满100可用',
							name:'优惠券名称',
							time:'有效期：2023.01.01至2023.09.30',
							img:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/15优惠券@2x.png',
							imgS:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/15去使用@2x.png',	
						}
					],
					[
						{
							id:1,
							num:'15',
							conten:'满100可用',
							name:'优惠券名称',
							time:'有效期：2023.01.01至2023.09.30',
							img:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/54已使用@2x.png',				
						},
						{
							id:2,
							num:'15',
							conten:'满100可用',
							name:'优惠券名称',
							time:'有效期：2023.01.01至2023.09.30',
							img:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/54已使用@2x.png',				
						},
					],
					[
						{
							id:1,
							num:'15',
							conten:'满100可用',
							name:'优惠券名称',
							time:'有效期：2023.01.01至2023.09.30',
							img:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/54已过期@2x.png',				
						},
						{
							id:2,
							num:'15',
							conten:'满100可用',
							name:'优惠券名称',
							time:'有效期：2023.01.01至2023.09.30',
							img:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/54已过期@2x.png',				
						},
					]);
			}
		},
		// mounted() {
		// 	console.log(this.tabIndex,this.currentIndex)
		// },
		// updated() {
		// 		console.log(this.tabIndex,this.currentIndex)
		// }
		
	}
</script>

<style lang="scss" scoped >
	.SwiperCoupon{
		.box-coupon{
					margin: 49rpx 30rpx 0 29rpx;
					width: 691rpx;
					height: auto;
					display: flex;
					flex-direction: column;
					opacity: 50.00%;
				}
				.box-couponTop{
						position: relative;
					.box-couponImg{
						width: 691rpx;
						height: 196rpx;
						padding-bottom: 32rpx;
					}
					
					.box-couponBox{
						display: flex;
						position: absolute;
						top: 25rpx;
						z-index: 222;
						.box-couponLeft{
							width: 218rpx;
							height: 196rpx;
							display: flex;
							flex-direction: column;
							.box-couponLeft15{
								padding: 52rpx 0 0 39rpx;
								font-size: 80rpx;
								font-family: DIN-Bold, DIN;
								font-weight: bold;
								color: #FCEDD8;
								line-height: 0rpx;
							}
							.box-couponLeft100{
								margin-top: 50rpx;
								margin-left: 32rpx;
								font-size: 24rpx;
								font-family: PingFang SC-Medium, PingFang SC;
								font-weight: 500;
								color: #FFFFFF;
							}
						}
						
						.box-couponRight{
							width: 500rpx;
							height: 196rpx;						
							display: flex;
							flex-direction: column;
							.box-couponLeftMan{
								padding: 52rpx 0 0 0rpx;
								font-size: 34rpx;
								font-family: PingFang SC-Bold, PingFang SC;
								font-weight: bold;
								color: #010208;
								line-height: 0rpx;
							}
							.box-couponLeftYou{
								margin-top: 50rpx;
								font-size: 24rpx;
								font-family: PingFang SC-Medium, PingFang SC;
								font-weight: 500;
								color: #010208;
							}
						}
					}
						
				}
		
				.box-coupons{
					// margin: 49rpx 30rpx 0 29rpx;
					margin: 15rpx 30rpx 0 29rpx;
					width: 691rpx;
					height: auto;
					display: flex;
					flex-direction: column;
				}
	}
	
</style>