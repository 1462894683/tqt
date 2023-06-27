<template>
	<view class="upload-img">
		<view class="imgs">
			<view style="display: flex;flex-wrap: wrap;" v-if="type==1">
				<view class="item" v-for="(item,index) in dataList" :key="index">
					<image :src="item" class="itemImg" style="" mode=""></image>
					<view class="close" @click="close(index)">
						<image v-if="disabled"  name="close-circle"  class="closeImg" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/27删除@2x.png"></image>
					</view>
				</view>
			</view>
			<view v-if="type==2">
				<view class="item" v-for="(item,index) in dataList" :key="index">
					<video :src="item" style="width: 140rpx;height: 140rpx;margin-right: 10rpx;"></video>
					<view class="close" @click="close(index)">
						<u-icon v-if="disabled" name="close-circle" color="#333333" size="14"></u-icon>
					</view>
				</view>
			</view>
			<view class="uploadImgs" @click="checkHandle">
				<image v-if="disabled && limit > dataList.length" class="uploadImage" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/44照片@2x.png"  mode=""></image>
				<view class="uploadAdd">添加照片</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import uploadFile from "../config/uploadFile.js"
	export default {
		name: "upload-img",
		props: {
			value: {
				type: [String, Array, Number],
				default () {
					return [];
				},
			},
			disabled: {
				type: Boolean,
				default: true
			},
			limit: {
				type: Number,
				default () {
					return 9;
				}
			},
			type:{
				type: Number,
				default () {
					return 1;
				}
			}
		},
		watch: {
			value: {
				immediate: true,
				handler(newVal, oldVal) {
					if(this.type==1){
						this.dataList = newVal
					}else{
						this.dataList[0] = newVal
					}
				}
			}
		},
		data() {
			return {
				dataList: []
			};
		},
		methods: {
			checkHandle() {
				if (this.disabled) {
					uploadFile(1,this.type).then(res => {
						console.log(res, 'res')
						this.dataList.push(res)
						this.$emit("getFiles", this.dataList)
					})
				}
			},
			close(e) {
				this.dataList.splice(e, 1)
				this.$emit("getFiles", this.dataList)
			}
		}
	}
</script>

<style lang="less" scoped>
	.upload-img {
		.imgs {
			display: flex;
			flex-wrap: wrap;
			

			.item {
				position: relative;
				
				.itemImg{
					width: 154rpx;
					height: 154rpx;
					background: #F6F7FE;
					border-radius: 30rpx 30rpx 30rpx 30rpx;
					opacity: 1;
					margin-right: 10rpx;
				}
				
				.close {
					position: absolute;
					right: 0;
					top: -10rpx;
					right: 4rpx;
					z-index: 99999;
					
					.closeImg{
						width: 26rpx;
						height: 26rpx;
						background: #F6F7FE;
						border-radius: 30rpx 30rpx 30rpx 30rpx ;
						margin-left: 20rpx;
						z-index: 12;
					}
				}
			}
			
			.uploadImgs{
				width: 154rpx;
				height: 154rpx;
				border-radius: 30rpx 30rpx 30rpx 30rpx;
				opacity: 1;
				border: 1rpx solid #979797;
				margin-left: 10rpx;
				display: flex;
				align-items: center;
				flex-direction: column;
				.uploadImage{
					width: 36rpx;
					height: 31rpx;
					margin-right: 10rpx;
					margin: 43rpx 0 18rpx 0;
					opacity: 50.00%;
				}
				.uploadAdd{
					font-size: 20rpx;
					font-family: PingFang SC-Regular, PingFang SC;
					font-weight: 400;
					color: #010208;
					line-height: 20rpx;
					opacity: 50.00%;
				}	
			}
		}
	}
	
</style>
