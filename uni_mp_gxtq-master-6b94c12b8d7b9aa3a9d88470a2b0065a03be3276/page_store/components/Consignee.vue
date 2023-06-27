<template>
	<view class="consignee">
		<view class="topbar">
			<TopBar title="提货人" :blackShow="true" :isShowReturn="true"></TopBar>
		</view>
		<view class="consignee-content">
			  <u-radio-group
			    v-model="radioId"
			    placement="column"
				activeColor="#461A5F"
				iconSize="16px"
				size="21px"
			    @change="groupChange">
			  		<view class="consignee-item" v-for="item in radioList"
			  				  :key="item.id">
			  			<view class="radio">
			  				<u-radio
			  				  :customStyle="{marginBottom: '8px'}"
			  				  :name="item.id"
			  				  @change="radioChange">
			  				</u-radio>
			  			</view>
			  			<view class="userInfo">
			  				<view class="username-box">
			  					<text class="username">{{item.name}}</text>
			  					<text class="usernameEdit" @click="toEditAddress(item.id)">{{item.edit}}</text>
			  				</view>
			  				<view class="userPhone">{{item.phone}}</view>
			  			</view>
			  		</view>
	
			  </u-radio-group>

		</view>
		<view class="addUser-box">
			<view class="addUser" @click="toAddAddress">
				<text>添加提货人</text>
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
				     // 地址单选框列表
				          radioList: [
							  {
								id: 1,
								disabled: false,
								name:'张大大',
								phone:'187****1234',
								edit:'编辑'
							  },
				              {
				                id: 2,
				                disabled: false,
								name:'李大大',
								phone:'188****1234',
								edit:'编辑'
				              },
				            {
				              id: 3,
				              disabled: false,
							  name:'王大大',
							  phone:'189****1234',
							  edit:'编辑'
				            }, 
							{
				              id: 4,
				              disabled: false,
							  name:'刘大大',
							  phone:'190****1234',
							  edit:'编辑'
				            },
							{
							  id: 5,
							  disabled: false,
							  name:'邱大大',
							  phone:'190****1234',
							  edit:'编辑'
							},
							{
							  id: 6,
							  disabled: false,
							  name:'史大大',
							  phone:'190****1234',
							  edit:'编辑'
							},
							{
							  id: 7,
							  disabled: false,
							  name:'董大大',
							  phone:'190****1234',
							  edit:'编辑'
							},
							{
							  id: 8,
							  disabled: false,
							  name:'宋大大',
							  phone:'190****1234',
							  edit:'编辑'
							}
				          ],
				          // 选中的地址id
				          radioId: 1,
			}
		},
		methods: {
			   groupChange(n) {
				   //改变选中的用户信息并存储
			        this.radioId = n
					this.radioList.forEach(item => {
						if(item.id === n){
							uni.setStorageSync('user',JSON.stringify(item))
						}
					})
					
			      },
			      radioChange(n) {
			        console.log('radioChange', n);
			      },
				  //去编辑地址
				  toEditAddress(addressId){
					  if(addressId === this.radioId){
						  this.$Router.push({
							  path:'/pages/TabBar/Stores/components/EditConsignee',
							  query:{address:JSON.parse(uni.getStorageSync('user')),title:'编辑提货人'}
						  })
					  }else{
						  this.$ui.showToast({ title: '请选择后在编辑', icon: 'success' }).then(res => {
						  		return;			 
						   })
					  }
					  
				  },
				  //去添加地址
				  toAddAddress(){
					  this.$Router.push({
						  path:'/pages/TabBar/Stores/components/EditConsignee',
						  query:{title:'添加提货人'}
					  })
				  }
		},
		onShow() {
			//页面展示的时候先从本地拿到用户数据
			if(uni.getStorageSync('radioList')){
				this.radioList = JSON.parse(uni.getStorageSync('radioList'))
			}
			
			if(uni.getStorageSync('user')){
				this.radioId = JSON.parse(uni.getStorageSync('user')).id
			}
			
			//接收删除的用户id并删除
			if(this.$Route.query.userId){
				console.log(this.$Route.query.userId,'userId')
				this.radioList.map(item=>{
							console.log(item.id)
					if(item.id == this.$Route.query.userId){
						console.log('1111111')
						console.log(this.radioList.indexOf(item),'itemIndex')
						this.radioList.splice(this.radioList.indexOf(item),1)
					}
				})
				//删除之后的数据刷新会初始化，要把它存储在本地
				uni.setStorageSync('radioList',JSON.stringify(this.radioList))
			}
			
			//接收用户修改的数据
			if(this.$Route.query.username){			
				this.radioList.map(item=>{
					if(item.id == this.radioId){
						item.name = this.$Route.query.username;
						item.phone = this.$Route.query.phone;
					}
				})
				//保存之后的数据刷新会初始化，要把它存储在本地
				uni.setStorageSync('radioList',JSON.stringify(this.radioList))
			}
		}
	}
</script>

<style lang="scss" scoped>
.consignee{
	width: 750rpx;
	height: 1346rpx;
	background: #F6F7FE;
	.topbar{
		width: 750rpx;
		height: 209rpx;
		position: fixed;
		top: 0;
		background: #F6F7FE;
	}
	.consignee-content{
		height: 1273rpx;
		width: 750rpx;
		overflow: auto;
		margin-top: 209rpx;
		.consignee-item{
			width: 690rpx;
			height: 194rpx;
			background: #FFFFFF;
			border-radius: 30rpx 30rpx 30rpx 30rpx;
			margin: 20rpx auto;
			display: flex;
			align-items: center;
			padding: 0 37rpx;
			.userInfo{
				margin-left: 31rpx;
				.username-box{
					font-size: 32rpx;
					font-family: PingFang SC-Bold, PingFang SC;
					font-weight: bold;
					color: #010208;
					-webkit-background-clip: text;
					.username{
						height: 45rpx;
					}
					.usernameEdit{
						width: 64rpx;
						height: 45rpx;
						opacity: .3;
						display: inline-block;
						margin-left: 388rpx;
					}
				}
				.userPhone{
					width: 426rpx;
					height: 42rpx;
					font-size: 30rpx;
					font-family: PingFang SC-Regular, PingFang SC;
					font-weight: 400;
					color: #010208;
					line-height: 20rpx;
					-webkit-background-clip: text;
					margin-top: 30rpx;
				}
			}
		}
	}
	.addUser-box{
		width: 690rpx;
		height: 158rpx;
		background-color: #ffffff;
		z-index: 999;
		position: fixed;
		bottom: 0rpx;
		.addUser{
			width: 690rpx;
			height: 88rpx;
			background: #461A5F;
			border-radius: 20rpx 20rpx 20rpx 20rpx;
			text-align: center;
			line-height: 88rpx;
			margin-left: 30rpx;
			text{
				width: 170rpx;
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
/deep/.u-radio__icon-wrap{
	background-color: #461A5F !important;
}
</style>
