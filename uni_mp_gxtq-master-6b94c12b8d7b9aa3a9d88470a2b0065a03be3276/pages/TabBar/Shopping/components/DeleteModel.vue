<template>
	<view>
		<!-- 模态框 -->
		<u-popup :show="isDeleteCartShow" :round="10" mode="center" @close="$emit('closeDeleteModel',false)">
			<view class="popup">
				<view class="warn-title">{{title}}</view>
				<!-- 删除确定按钮 -->
				<view class="notice" v-if="isDeleteCartShow">
					<view class="cancel-btn" @click="$emit('closeDeleteModel',false)">
						<text>取消</text>
					</view>
					<view class="confirm-btn" @click="$emit('confirmDeleteCart',false)">
						<text>确定</text>
					</view>
				</view>
			</view>
		</u-popup>
		<u-popup :show="isDeleteSuccess" :round="10" mode="center" @close="$emit('deleteSuccessConfirm',false)">
			<view class="popup">
				<view class="warn-title">删除成功</view>
				<!-- 删除成功确定按钮 -->
				<view class="notice">
					<view class="delete-confirm-btn" @click="$emit('deleteSuccessConfirm',false)">
						<text>确定</text>
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default{
		props:{
			//删除弹框提示
			isDeleteCartShow:{
				type:Boolean,
				default:false
			},
			// 删除成功提示
			isDeleteSuccess:{
				type:Boolean,
				default:false
			},
			//
			title:{
				type:String,
				default:''
			}
		},
		mounted() {
			console.log('deleteModel',this.isDeleteSuccess)
		}
	}
</script>

<style lang="scss" scoped>
	/*模态框*/
	.popup {
		width: 612rpx;
		height: 394rpx;
		background: #FFFFFF;
		border-radius: 30rpx 30rpx 30rpx 30rpx;
		.warn-title{
			width: 612rpx;
			height: 287rpx;
			font-size: 34rpx;
			font-family: PingFang SC-Medium, PingFang SC;
			font-weight: 500;
			color: #010208;
			text-align: center;
			line-height: 287rpx;
			border-bottom: 1rpx solid #F5F5F5;
		}
		.notice{
			width: 612rpx;
			height: 107rpx;
			font-size: 34rpx;
			font-family: PingFang SC-Heavy, PingFang SC;
			font-weight: 800;
			display: flex;
			align-items: center;
			justify-content: space-around;
			.cancel-btn{
				height: 48rpx;
				line-height: 48rpx;
				text{
					color: #010208;
				}
			}
			.confirm-btn{
				color: #461A5F;
			}
		}
	}
</style>