<template>
	<view class='all'>
		<!-- 顶部导航栏 -->
		<view class="tap">

		</view>
		<view class="body">
			<!-- 管理 -->
			<view class='manage'>
				<view @click='manag'>
					<image src="@/static/images/30管理@2x.png" mode=""></image>
					<text>管理</text>
				</view>
			</view>
			<!-- 购物车列表 -->
			<view class='goods'>
				<u-checkbox-group v-model="checkboxValue1" @change="checkboxChange">

					<view class="good" v-for="(item, index) in checkboxList1" :key="index">
						<view class="g_left">
							<!-- 复选框 -->
							<u-checkbox size="30rpx" shape="circle" :name="item.id" activeColor='#461A5F'>
							</u-checkbox>
						</view>
						<view class="g_center">
							<image :src="item.goodImg" mode=""></image>
						</view>
						<view class="g_right">
							<view class="gr_top">{{item.name}}</view>
							<view class="gr_center">
								<text>{{item.weight}}g </text>
								<text>|</text>
								<text> {{item.baozhuang}}</text>
							</view>
							<view class="gr_bottom">
								<view class="paice">
									<text>￥</text><text>{{item.price}}</text>
								</view>
								<view class="num">
									<!-- <view @click="reduce">-</view>
									<text>{{item.num}}</text>
									<view @click="push">+</view> -->
									<u-number-box v-model="value" @change="valChange"></u-number-box>
								</view>
							</view>
						</view>
					</view>

				</u-checkbox-group>
			</view>
		</view>
		<!-- 提交 -->
		<view class="settlement">
			<view class='s_left'>
				<image src="" mode=""></image>
				<text>全选</text>
			</view>
			<view class='s_center'>
				￥ {{allPrice}}
			</view>
			<view class='s_right'>
				去结算
			</view>
		</view>
	</view>
</template>

<script setup>
	import {onLoad} from '@dcloudio/uni-app'
	import {ref} from "vue";
	import goodImg from "@/static/images/30cartimg.png"
	// 选中的商品id
	const checkboxValue1 = ref([])
	// 总价
	const allPrice = ref(0)
	// 基本案列数据
	const checkboxList1 = ref([
		{
			id: 1,
			disabled: false ,//是否禁用
			name: '易果蓝莓大颗易果蓝莓大颗当季水果',
			goodImg,
			weight:'85',
			baozhuang:'有包装',
			price:30,
			num:1,
		},
		{
			id: 2,
			disabled: false ,//是否禁用
			name: '易果蓝莓大颗易果蓝莓大颗当季水果',
			goodImg,
			weight:'85',
			baozhuang:'无包装',
			price:20,
			num:1,
		},
	])

	onLoad(() => {
		initCheckedList()
	})

	//选中的商品
	const initCheckedList = () => {
		checkboxList1.value.forEach((item) => {
			checkboxValue1.value.push(item.id)
		})
	}

	//选中状态改变触发
	const checkboxChange = (e) => {
		console.log(e);
	}
	
	// 购买数量改变
	const valChange=(e)=>{
		console.log('当前值为: ' + e.value)
	}
	
	// 购买数量--
	const reduce=()=>{
		checkboxList1.value.forEach((item) => {
			item.num+=1;
		})
	}
	
	// 购买数量++
	const push=()=>{
		
	}
</script>

<style>
	.all {
		width: 100%;
		height: 100%;
		background-color: #D1D3EC;
		position: relative;
	}

	.tap {
		height: 132rpx;
	}

	.body {
		padding: 0 30rpx 0 30rpx;
	}

	.manage {
		width: 690rpx;
		height: 45rpx;
		border: 1px solid red;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.manage>view {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.manage>view>image {
		width: 30rpx;
		height: 30rpx;
		color: #010208;
	}

	.manage>view>text {
		font-size: 32rpx;
		font-family: PingFang SC-Bold, PingFang SC;
		font-weight: bold;
		padding-right: 29rpx;
	}

	/* 商品列表 */
	.goods {
		width: 690rpx;
		height: 1624rpx;
		border: 1px solid red;
		margin-top: 10rpx;
	}

	.good {
		margin-top: 20rpx;
		width: 690rpx;
		height: 270rpx;
		background-color: white;
		border-radius: 30rpx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.g_left {
		margin-left: 27rpx;
		margin-right: 19rpx;
	}

	.g_center>image {
		width: 200rpx;
		height: 200rpx;
		background-color: #010208;
		border-radius: 10rpx;
	}

	.g_right {
		width: 360rpx;
		height: 203rpx;
		/* background-color: #010208; */
		margin-left: 18rpx;
		text-align: left;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	.gr_top {
		width: 360rpx;
		height: 84rpx;
		white-space: normal;
	}

	.gr_center {
		margin-top: 18rpx;
		color: #99999B;
		font-size: 26rpx;
	}

	.gr_center>text:nth-child(2) {
		width: 0rpx;
		height: 22rpx;
	}

	.gr_center>text:last-child {
		font-weight: bold;
	}

	.gr_bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 21rpx;
	}

	.paice {
		font-size: 32rpx;
		color: red;
		font-weight: bold;
	}

	.num {
		width: 132rpx;
		height: 44rpx;
		border-radius: 10rpx;
		border: 1rpx solid #707070;
		/* display: flex; */
		/* justify-content: space-between; */
		/* align-items: center; */
		margin-top: 8rpx;
	}

	.num>view {
		width: 43rpx;
		height: 43rpx;
		border-radius: 10rpx 10rpx 10rpx 10rpx;
		border: 1rpx solid #707070;
		text-align: center;
	}

	.num>text {
		text-align: center;
		width: 48rpx;
	}

	/* 结算价格 */
	.settlement {
		width: 750rpx;
		height: 98rpx;
		background-color: white;
		position: fixed;
		z-index: 2;
		right: 0;
		bottom: 140rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.s_left {
		display: flex;
		align-items: center;
	}

	.s_left>image {
		width: 30rpx;
		height: 30rpx;
		border: 1px solid beige;
		margin-left: 20rpx;
		background-color: #F6F7FE;
		border-radius: 50%;
		border: 1px solid #707070;
	}

	.s_left>text {
		margin-left: 11rpx;
		font-weight: bold;
	}

	.s_center {
		width: 150rpx;
		border:1px solid rebeccapurple;
		color: red;
		font-weight: bold;
		font-size: 32rpx;
		margin-left: 37rpx;
	}

	.s_right {
		width: 318rpx;
		height: 84rpx;
		text-align: center;
		line-height: 84rpx;
		background: #FF1E21;
		border-radius: 20rpx;
		color: white;
		font-size: 30rpx;
		font-weight: 500;
		margin-right: 31rpx;
	}
</style>