<template>
	<view class="cart">
		<view class="Top">
			<TopBar title="购物车" :blackShow="true" :isShowReturn="true"></TopBar>
			<!-- 购物车管理 -->
			<view class="editCartBox" v-if="!isEditCart" @click="toEditCart">
				<image class="editCartBox-img" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/30管理@2x.png" mode=""></image>
				<view class="editCartBox-editText">管理</view>
			</view>
				<!-- 购物车编辑 -->
			<view class="escCartBox" v-if="isEditCart" @click="toCart">
				<image class="editCartBox-img" src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/31取消@2x.png" mode=""></image>
				<view class="editCartBox-editText">取消</view>
			</view>
		</view>
		<!-- 购物车 -->
		<view class="cartContent">
			<z-paging ref="paging" v-model="cartList" @query="queryList">
			<u-checkbox-group
			    v-model="checkboxValue"
			    placement="column"
			    @change="checkboxChange"
			>
			<!-- 单个购物车 -->
				<view class="cartItem" v-for="item in cartList" :key="item.id">
					<view class="checkbox">
						<u-checkbox
						    :customStyle="{textAlign:'center'}"
						    :name="item.id"
							shape="circle"
							size="15"
							inactiveColor="#F6F7FE"
							activeColor="#461A5F"
							iconSize="15"
						>
						</u-checkbox>
					</view>
					<view class="cartItem-content">
						<image class="cartItem-img" :src="item.goodImg" mode=""></image>
						<view class="cartItem-content-detail-box">
							<view class="cartItem-content-detail-title u-line-2">{{item.name}}
							</view>
							<view class="cartItem-content-descript-box">
								<view class="cartItem-content-descript-weight">{{item.weight}}</view>
								<view class="cartItem-content-descript-border"></view>
								<view class="cartItem-content-descript-baozhaung">{{item.baozhuang}}</view>
							</view>
							<view class="cartItem-content-detail-price-num">
								<view class="cartItem-content-detail-price-box">
									<view class="cartItem-content-detail-price-icon">￥</view>
									<view class="cartItem-content-detail-price u-line-1">{{item.price}}</view>
								</view>
								<view class="buyNum-box">
									<u-number-box class="buyNum" :v-model="item.num" :name="item.id" @change="goodsNumChange">
									      <view slot="minus" class="minus buyNumFize">-</view>
									      <text
									          slot="input"
									          style="width: 50px;text-align: center;"
									          class="input buyNumFize"
									      >{{item.num}}</text>
									      <view slot="plus" class="plus buyNumFize">+</view>
									  </u-number-box>
								</view>
							</view>
						</view>
					</view>
				</view>
			   
			   
			</u-checkbox-group>
			</z-paging>
		</view>
		
		<!-- 底部导航去结算 -->
		<view class="cartBottom-box">
			<view class="cartBottom" v-if="!isEditCart">
				<u-checkbox-group
				style="padding-bottom: 242rpx;"
				    v-model="checkAll"
				    @change="allCheckboxChange"
					class="cartBottom-content">
				<view class="allCheckbox">
					<u-checkbox
					    :customStyle="{textAlign:'center'}"
					    name="全选"
						shape="circle"
						size="15"
						inactiveColor="#F6F7FE"
						activeColor="#461A5F"
						iconSize="15">
					</u-checkbox>
					<view class="checkbox-label">全选</view>
				</view>
				<view class="totalPrice-box">
					<view class="totalPrice-icon">￥</view>
					<view class="totalPrice-num">{{total}}</view>
				</view>
				<view class="buy-btn" @click="toPay"><text class="buy-btn-text">去结算</text></view>
				</u-checkbox-group>
			</view>
			<!-- 底部导航删除购物车 -->
			<view class="cartBottom" v-if="isEditCart">
				<u-checkbox-group
				    v-model="checkAll"
				    @change="allCheckboxChange"
					class="cartBottom-content">
				<view class="checkbox">
					<u-checkbox
					    :customStyle="{textAlign:'center'}"
					    name="全选"
						shape="circle"
						size="15"
						inactiveColor="#F6F7FE"
						activeColor="#461A5F"
						iconSize="15">
					</u-checkbox>
					<view class="checkbox-label" @click="allCheckboxChange">全选</view>
				</view>
				<view class="buy-btn" @click="goDeleteCart"><text class="buy-btn-text">删除</text></view>
				</u-checkbox-group>
			</view>
		</view>

		<!-- 确认删除模态框 -->
		<DeleteModel v-if="isDeleteCartShow" :isDeleteCartShow="isDeleteCartShow" @closeDeleteModel="closeDeleteModel" 
			@confirmDeleteCart="confirmDeleteCart" title="是否确定删除">
		</DeleteModel>
		<!-- 删除成功模态框 -->
		<DeleteModel v-if="isDeleteSuccess" :isDeleteSuccess="isDeleteSuccess" @deleteSuccessConfirm="isDeleteSuccess=false" >
		</DeleteModel>
		<!-- #ifndef MP-WEIXIN -->
		<view class="tabBackground">
			<tabbar :current="selected"></tabbar>
		</view>
		<!-- #endif -->
		<!-- <register :register="register"></register> -->
	</view>
</template>

<script>
	//顶部
	import TopBar from '@/components/common/TopBar.vue'
	import register from "@/components/register.vue"
	//模态框
	import DeleteModel from "@/pages/TabBar/Shopping/components/DeleteModel.vue"
	export default {
		components:{register,TopBar,DeleteModel},
		data() {
			return {
				selected: 2,//底部tabbar索引
				register: false,
			    checkboxValue:[],//选中的购物车id
				// 购物车列表
				cartList: [
					{
						id:1,
						name: '易果蓝莓大颗易果蓝莓大颗当季水果',
						goodImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/30cartimg.png',
						weight:'85g',
						baozhuang:'有包装',
						price:39.9,
						num:1,
						isChecked:true
					},
					{
						id:2,
						name: '易果蓝莓大颗易果蓝莓大颗当季水果2',
						goodImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/30cartimg.png',
						weight:'95g',
						baozhuang:'有包装',
						price:49.9,
						num:1,
						isChecked:true
					},
					{
						id:3,
						name: '易果蓝莓大颗易果蓝莓大颗当季水果3',
						goodImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/30cartimg.png',
						weight:'100g',
						baozhuang:'无包装',
						price:59.9,
						num:1,
						isChecked:false
					},
					{
						id:4,
						name: '易果蓝莓大颗易果蓝莓大颗当季水果3',
						goodImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/30cartimg.png',
						weight:'120g',
						baozhuang:'无包装',
						price:69.9,
						num:1,
						isChecked:false
					},
					{
						id:5,
						name: '易果蓝莓大颗易果蓝莓大颗当季水果3',
						goodImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/30cartimg.png',
						weight:'155g',
						baozhuang:'无包装',
						price:79.9,
						num:1,
						isChecked:false
					},
					{
						id:6,
						name: '易果蓝莓大颗易果蓝莓大颗当季水果3',
						goodImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/30cartimg.png',
						weight:'185g',
						baozhuang:'无包装',
						price:89.9,
						num:1,
						isChecked:false
					},
					{
						id:7,
						name: '易果蓝莓大颗易果蓝莓大颗当季水果3',
						goodImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/30cartimg.png',
						weight:'185g',
						baozhuang:'无包装',
						price:89.9,
						num:1,
						isChecked:false
					},
					{
						id:8,
						name: '易果蓝莓大颗易果蓝莓大颗当季水果3',
						goodImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/30cartimg.png',
						weight:'185g',
						baozhuang:'无包装',
						price:89.9,
						num:1,
						isChecked:false
					},
					{
						id:9,
						name: '易果蓝莓大颗易果蓝莓大颗当季水果3',
						goodImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/30cartimg.png',
						weight:'185g',
						baozhuang:'无包装',
						price:89.9,
						num:1,
						isChecked:false
					}
				],
				checkAll:[],//全选框的value
				isEditCart:false,
				isDeleteCartShow:false,//删除购物车模态框
				isDeleteSuccess:false,//模态框是否删除成功
			}
		},
		methods: {
			//复选框改变事件
		   checkboxChange(n) {
			   //请求接口改变商品的选中状态
			   //这里直接修改的数组
			   //如果复选框都是选中状态，让全选框也为选中状态，否者全选框不是选中状态
			   this.checkboxValue = n
			   this.checkAll = this.checkboxValue.length === this.cartList.length ? ['全选'] : []
			},
			//全选框改变事件
			allCheckboxChange(n){
				console.log(n,'nnnnnnnnnnnnnnnnnnn')
				if(n.length){//如果是全选
					this.checkboxValue = this.cartList.map(item=>item.id)//拿到所有商品的id放在选中的数组
					this.checkAll = ['全选']//如果不是全选就变成全选
				}else {//如果不是全选
						this.checkboxValue = []//清空商品id
						this.checkAll = []//变成不全选
					}
			},
			//点击编辑购物车
			toEditCart(){
				this.isEditCart = true
			},
			//点击回到购物车
			toCart(){
				this.isEditCart = false
			},
			//确定删除购物车
			confirmDeleteCart(show){
				//筛选删除后的购物车列表
				this.cartList = this.cartList.filter(item=>!this.checkboxValue.includes(item.id))
				this.isDeleteCartShow = show//删除提示框关闭
				this.checkboxValue = []//删除成功后清空选中的购物车数组id
				let timer = setTimeout(()=>{
					this.isDeleteSuccess = true//成功删除框打开
					console.log(this.checkboxValue,'checkboxValue')
				},500)

			},
			//关闭模态框
			closeDeleteModel(show){
				this.isDeleteCartShow = show
			},
			queryList(pageNo, pageSize) {
				console.log(pageNo,pageSize)
				setTimeout(()=>{
					  this.$refs.paging.complete([
						{
							id:1,
							name: '易果蓝莓大颗易果蓝莓大颗当季水果',
							goodImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/30cartimg.png',
							weight:'85g',
							baozhuang:'有包装',
							price:39.9,
							num:1,
							isChecked:true
						},
						{
							id:2,
							name: '易果蓝莓大颗易果蓝莓大颗当季水果2',
							goodImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/30cartimg.png',
							weight:'95g',
							baozhuang:'有包装',
							price:49.9,
							num:1,
							isChecked:true
						},
						{
							id:3,
							name: '易果蓝莓大颗易果蓝莓大颗当季水果3',
							goodImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/30cartimg.png',
							weight:'100g',
							baozhuang:'无包装',
							price:59.9,
							num:1,
							isChecked:false
						},
						{
							id:4,
							name: '易果蓝莓大颗易果蓝莓大颗当季水果3',
							goodImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/30cartimg.png',
							weight:'120g',
							baozhuang:'无包装',
							price:69.9,
							num:1,
							isChecked:false
						},
						{
							id:5,
							name: '易果蓝莓大颗易果蓝莓大颗当季水果3',
							goodImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/30cartimg.png',
							weight:'155g',
							baozhuang:'无包装',
							price:79.9,
							num:1,
							isChecked:false
						},
						{
							id:6,
							name: '易果蓝莓大颗易果蓝莓大颗当季水果3',
							goodImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/30cartimg.png',
							weight:'185g',
							baozhuang:'无包装',
							price:89.9,
							num:1,
							isChecked:false
						},
						{
							id:7,
							name: '易果蓝莓大颗易果蓝莓大颗当季水果3',
							goodImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/30cartimg.png',
							weight:'185g',
							baozhuang:'无包装',
							price:89.9,
							num:1,
							isChecked:false
						},
						{
							id:8,
							name: '易果蓝莓大颗易果蓝莓大颗当季水果3',
							goodImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/30cartimg.png',
							weight:'185g',
							baozhuang:'无包装',
							price:89.9,
							num:1,
							isChecked:false
						},
						{
							id:9,
							name: '易果蓝莓大颗易果蓝莓大颗当季水果3',
							goodImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/30cartimg.png',
							weight:'185g',
							baozhuang:'无包装',
							price:89.9,
							num:1,
							isChecked:false
						}
				]);
				},500)
			},
			//商品数量改变
			goodsNumChange(n){
				//请求接口改变商品数组
				//这里直接修改购物车里面的商品数量
				this.$ui.showToast({ title: '修改成功', icon: 'success' }).then(res => {
				 this.cartList.filter(item=>item.id===n.name).map(item=>item.num=n.value)
				})
			},
			//删除购物车
			goDeleteCart(){
				if(!this.checkboxValue.length){//如果没有选中的商品提示需要选中
					this.$ui.showToast({ title: '请选择商品', icon: 'success' })
				}else{
					this.isDeleteCartShow=true//如果有选中的商品提示是否删除
				}
			},
			//跳转到去付款页面
			toPay(){
				if(!this.checkboxValue.length){//如果没有选中的商品提示需要选中
					this.$ui.showToast({ title: '请选择商品', icon: 'success' })
				}else{
					this.$Router.push({//跳转到结算并且带着总价
						path:'/pages/TabBar/Home/components/Leave',
						query:{totalPrice:this.total,settlement:true}
						})
				}
			}
		},
		onShow() {
			// #ifdef MP-WEIXIN
			this.setTabBarIndex(2);
			// #endif
		},
		onLoad() {
			//购物车中选中商品的id
			this.checkboxValue = this.cartList.filter(item=>item.isChecked===true).map(item=>item.id)
		},
		computed: {
			total() {
				let sum = 0
				this.cartList.filter(item=>this.checkboxValue.includes(item.id))
				.map(item => sum+= parseInt(item.num) * parseFloat(item.price))
				return sum.toFixed(2)
			}		
		},
	}
</script>

<style lang="scss" scoped>
.cart{
	width: 750rpx;
	height: 1624rpx;
	background: #D1D3EC;
	.Top{
		width: 750rpx;
		height: 288rpx;
		position: fixed;
		top: 0;
		z-index: 100;
		background: #D1D3EC;
		.editCartBox,.escCartBox{
			position: absolute;
			bottom: 30rpx;
			width: 750rpx;
			height: 45rpx;
			display: flex;
			align-items: center;
			padding-right: 59rpx;
			z-index: 100;
			.editCartBox-img{
				width: 30rpx;
				height: 30rpx;
				margin-left: 592rpx;
			}
			.editCartBox-editText{
				width: 64rpx;
				height: 45rpx;
				font-size: 32rpx;
				font-family: PingFang SC-Bold, PingFang SC;
				font-weight: bold;
				color: #010208;
				-webkit-background-clip: text;
				margin-left: 5rpx;
			}
		}
	}
	
	.cartContent{
		width: 750rpx;
		height: 1000rpx;
		background-color: red;
		margin-top: 257rpx;
		padding-top: 30rpx;
		background: #D1D3EC;
		/deep/ .u-checkbox-group{
			padding-bottom: 246rpx;
		}
		.cartItem{
			width: 690rpx;
			height: 270rpx;
			background: #FFFFFF;
			border-radius: 30rpx 30rpx 30rpx 30rpx;
			margin: 10rpx auto  10rpx auto;
			display: flex;
			align-items: center;
			.checkbox{
				width: 83rpx;
				display: flex;
				justify-content: center;
			}
			.cartItem-content{
				flex: 1;
				height: 270rpx;
				display: flex;
				align-items: center;
				.cartItem-img{
					width: 200rpx;
					height: 200rpx;
					background: #EFEFEF;
					border-radius: 10rpx 10rpx 10rpx 10rpx;
				}
				.cartItem-content-detail-box{
					height: 200rpx;
					width: 360rpx;
					padding: 0 18rpx;
					
					.cartItem-content-detail-title{
						width: 360rpx;
						height: 84rpx;
						font-size: 30rpx;
						font-family: PingFang SC-Medium, PingFang SC;
						font-weight: 500;
						color: #010208;
					}
					.cartItem-content-descript-box{
						display: flex;
						align-items: center;
						margin-top: 18rpx;
						width: 360rpx;
						height: 37rpx;
						.cartItem-content-descript-weight{
							// width: 75rpx;
							font-size: 26rpx;
							font-family: PingFang SC-Medium, PingFang SC;
							font-weight: 500;
							color: #010208;
							opacity: .6;
						}
						.cartItem-content-descript-border{
							width: 0rpx;
							height: 22rpx;
							border: 1rpx solid #707070;
							margin-left: 18rpx;
						}
						.cartItem-content-descript-baozhaung{
							width: 78rpx;
							height: 37rpx;
							font-size: 26rpx;
							font-family: PingFang SC-Bold, PingFang SC;
							font-weight: bold;
							color: #010208;
							opacity: .6;
							margin-left: 23rpx;
						}
					}
					.cartItem-content-detail-price-num{
						display: flex;
						align-items: center;
						justify-content: space-between;
						margin-top: 21rpx;
						.cartItem-content-detail-price-box{
							display: flex;
							align-items: center;
							.cartItem-content-detail-price-icon{
								width: 26rpx;
								height: 34rpx;
								font-size: 26rpx;
								font-family: OPPOSans-bold, OPPOSans;
								font-weight: bold;
								color: #FF1E21;
								line-height: 34rpx;
							}
							.cartItem-content-detail-price{
								width: 200rpx;
								height: 42rpx;
								font-size: 32rpx;
								font-family: OPPOSans-bold, OPPOSans;
								font-weight: bold;
								color: #FF1E21;
							}
						}
						.buyNum-box{
							width: 131rpx;
							height: 44rpx;
							display: flex;
							align-items: center;
							border: 1px solid rgba(112, 112, 112, .5);
							border-radius: 10rpx 10rpx 10rpx 10rpx;
							/deep/.u-number-box{
								width: 131rpx;
								height: 44rpx;
							}
							/*计数器样式*/
								.minus {
									width: 43rpx;
									height: 43rpx;
									border-radius: 10rpx 10rpx 10rpx 10rpx;
									border: 1rpx solid rgb(112, 112, 112);
								}
								.input {

								}
								.plus {
									width: 43rpx;
									height: 43rpx;
									border-radius: 10rpx 10rpx 10rpx 10rpx;
									border: 1rpx solid rgb(112, 112, 112);
								}
								.buyNumFize{
									font-size: 20rpx;
									font-family: PingFang SC-Bold, PingFang SC;
									font-weight: bold;
									color: #010208;
									text-align: center;
									line-height: 43rpx;
								}
						}
					}
				}
			}
		}
	}
	.cartBottom-box{
		width: 750rpx;
		height: 209rpx;
		position: fixed;
		bottom: 102rpx;
		background-color: #D1D3EC;
		z-index: 99;
		.cartBottom{
			width: 750rpx;
			height: 84rpx;
			background: #FFFFFF;
			box-shadow: 0rpx -2rpx 4rpx 1rpx rgba(225,225,225,0.3);
			padding: 7rpx 31rpx 7rpx 20rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.allCheckbox,.checkbox{
				display: flex;
				align-items: center;
				.checkbox-label{
					width: 52rpx;
					height: 37rpx;
					line-height: 37rpx;
					font-size: 26rpx;
					font-family: PingFang SC-Bold, PingFang SC;
					font-weight: bold;
					color: #010208;
					margin-left: 11rpx;
				}
			}
				.totalPrice-box{
					display: flex !important;
					align-items: center;
					font-family: OPPOSans-Heavy, OPPOSans;
					font-weight: 800;
					color: #FF1E21;
					margin-left: 37rpx;
					.totalPrice-icon{
						font-size: 28rpx;
					}
					.totalPrice-num{
						width: 200rpx;
						height: 42rpx;
						font-size: 32rpx;
						 white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
						word-break: break-all;
					}
				}
				.buy-btn{
					width: 318rpx;
					height: 84rpx;
					background: #FF1E21;
					border-radius: 20rpx 20rpx 20rpx 20rpx;
					text-align: center;
					line-height: 84rpx;
					position: absolute;
					top: 7rpx;
					right: 82rpx;
					.buy-btn-text{
						width: 90rpx;
						height: 42rpx;
						font-size: 30rpx;
						font-family: PingFang SC-Medium, PingFang SC;
						font-weight: 500;
						color: #FFFFFF;
					}
				}
		}
	}

}

/deep/.u-checkbox__icon-wrap{
	    border-color: #707070 !important;
		margin: 0 !important;
		background-color: #F6F7FE; 
}

</style>