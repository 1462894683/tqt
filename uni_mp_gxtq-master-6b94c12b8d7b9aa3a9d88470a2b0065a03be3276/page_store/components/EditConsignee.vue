<template>
	<view class="edit-consignee">
			<view class="topbar">
				<TopBar :title="title" :blackShow="true" :isShowReturn="true"></TopBar>
			</view>
			<view class="edit-userInfo">
				<view class="username-box">
						<text>提货人</text>
						<input type="text" v-model="username">
						<image src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/27删除@2x.png" mode=""></image>
				</view>
				<view class="edituser-border"></view>
				<view class="phone-box">
					<text>联系方式</text>
					<input type="text"  v-model="phone">
					<image src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/27删除@2x.png" mode=""></image>
				</view>
			</view>
			<view class="default-address">
				<text>设为默认提货人</text>
				<view class="switch"><u-switch v-model="isDefaultAddress" activeColor="#f56c6c"></u-switch></view>
			</view>
			<view v-if="title==='编辑提货人'" class="delete-user" @click="deleteUser">
				<image src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/27删除2@2x.png" mode=""></image>
				<text>删除此提货人</text>
			</view>
			<view class="confirm-box">
				<view class="confirm" @click="saveUser">
					<text>保存</text>
				</view>
			</view>
	</view>
</template>

<script>
	//顶部
	import TopBar from '@/components/common/TopBar.vue'
	export default {
		components:{TopBar},
		data() {
			return {
				//是否是默认地址
				isDefaultAddress:true,
				//用户名
				username:'张大大',
				//手机号
				phone:'18702445678',
				userId:1,
				//顶部标题
				title:'编辑提货人'
			}
		},
		onShow() {
			//如果是编辑地址就在输入框填写要编辑的地址
			if(this.$Route.query.address){
				this.username = this.$Route.query.address.name;
				this.phone = this.$Route.query.address.phone;
				this.userId = this.$Route.query.address.id;
			}else{
				this.username = '';
				this.phone = '';
				this.userId = 0;
			}
			//判断从添加或者编辑跳转过来的标题显示
			if(this.$Route.query.title){
				this.title = this.$Route.query.title;
			}
			
		},
		methods: {
			//保存修改的用户信息
			saveUser(){
				this.$ui.showToast({ title: '保存成功', icon: 'success' }).then(res => {
						this.$Router.push({
							path:'/pages/TabBar/Stores/components/Consignee',
							query:{username:this.username,phone:this.phone,userSaveId:this.userId}
						})		 
				 })
			},
			//删除该条用户信息
			deleteUser(){
				this.$ui.showToast({ title: '删除成功', icon: 'success' }).then(res => {
						this.$Router.push({
							path:'/pages/TabBar/Stores/components/Consignee',
							query:{userId:this.userId}
						})		 
				 })
			}
		}
	}
</script>

<style lang="scss" scoped>
	.edit-consignee{
		width: 750rpx;
		height: 1346rpx;
		background: #F6F7FE;
		.topbar{
			width: 750rpx;
			height: 209rpx;
			position: fixed;
			top: 0;
			background: #F6F7FE;
			z-index: 999;
		}
		.edit-userInfo{
			width: 690rpx;
			height: 186rpx;
			background: #FFFFFF;
			border-radius: 30rpx 30rpx 30rpx 30rpx;
			margin: 0 auto;
			margin-top: 209rpx;
			.username-box{
				display: flex;
				align-items: center;
				padding: 0 38rpx 0 31rpx;
				height: 90rpx;
				image{
					width: 26rpx;
					height: 26rpx;
				}
				input{
					padding-left: 88rpx;
				}
			}
			.phone-box{
				display: flex;
				align-items: center;
				padding: 0 38rpx 0 31rpx;
				height: 90rpx;
				image{
					width: 26rpx;
					height: 26rpx;
				}
				input{
					padding-left: 62rpx;
				}
			}
			.edituser-border{
				width: 614rpx;
				height: 0rpx;
				margin-left: 31rpx;
				border: 1rpx solid #F2F2F2;
			}
			text{
				height: 42rpx;
				font-size: 30rpx;
				font-family: PingFang SC-Regular, PingFang SC;
				font-weight: 400;
				color: #010208;
				-webkit-background-clip: text;
				opacity: .5;
				
			}
			input{
				height: 45rpx;
				font-size: 32rpx;
				font-family: PingFang SC-Bold, PingFang SC;
				font-weight: bold;
				color: #010208;
				-webkit-background-clip: text;
			
			}

		}
		.default-address{
			width: 690rpx;
			height: 100rpx;
			background: #FFFFFF;
			border-radius: 30rpx 30rpx 30rpx 30rpx;
			margin: 20rpx auto 27rpx auto;
			display: flex;
			align-items: center;
			text{
				width: 210rpx;
				height: 42rpx;
				font-size: 30rpx;
				font-family: PingFang SC-Regular, PingFang SC;
				font-weight: 400;
				color: #010208;
				-webkit-background-clip: text;
				opacity: .5;
				margin-left: 31rpx;
			}
			.switch{
				margin-left: 300rpx;
			}
		}
		.delete-user{
			width: 690rpx;
			height: 42rpx;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: center;
			image{
				width: 26.54rpx;
				height: 30.33rpx;
			}
			text{
				width: 180rpx;
				height: 42rpx;
				font-size: 30rpx;
				font-family: PingFang SC-Regular, PingFang SC;
				font-weight: 400;
				color: #FF1E21;
				-webkit-background-clip: text;
				margin-left: 7rpx;
			}
		}
		.confirm-box{
			width: 690rpx;
			height: 156rpx;
			position: fixed;
			bottom: 0rpx;
			background-color: #ffffff;
			z-index: 99;
			.confirm{
				width: 690rpx;
				height: 88rpx;
				background: #461A5F;
				border-radius: 20rpx 20rpx 20rpx 20rpx;
				text-align: center;
				line-height: 88rpx;
				margin-left: 30rpx;
				text{
					width: 68rpx;
					height: 48rpx;
					font-size: 34rpx;
					font-family: PingFang SC-Medium, PingFang SC;
					font-weight: 500;
					color: #FFFFFF;
					-webkit-background-clip: text;	
				}
			}
		}
	}
	

</style>
