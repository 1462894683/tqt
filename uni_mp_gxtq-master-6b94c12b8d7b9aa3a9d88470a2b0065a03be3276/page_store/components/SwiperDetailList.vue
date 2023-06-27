<template>
	<view class="goodsDetailContent">
		<z-paging ref="paging" v-model="dataList" @query="queryList" :fixed="false" :auto="false" :paging-style="{height: '500px'}">
		<view class="detailtabs">
			<image class="detail-image" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/22商品详情.png" mode=""></image>
			<image class="detail-kefu" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/22客服@2x.png" mode=""></image>
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
			};
		},
		methods:{
			queryList(pageNo,pageSize){
				this.$refs.paging.complete([])
			},
		}
		
	}
</script>

<style lang="scss" scoped>
	.detailtabs{
		margin-top: 10rpx;
		.detail-image{
			width: 750rpx;
			height: 450rpx;
		}
		.detail-kefu{
			width: 96rpx;
			height: 96rpx;
			position: fixed;
			top: 297rpx;
			right: 31rpx;
		}
	}
</style>