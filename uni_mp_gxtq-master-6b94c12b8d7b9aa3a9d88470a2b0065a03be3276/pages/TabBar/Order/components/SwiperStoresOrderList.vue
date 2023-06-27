<template>
 <view class="content">
        <z-paging ref="paging" v-model="orderList" @query="queryList" :fixed="false" :auto="false" :paging-style="{height: '1072rpx'}">
			<!-- <OrderItem v-for="item in orderList" :key="item.id" :orderItem="item" :shopOrder="true" v-if="currentIndex === item.id"></OrderItem> -->
			<OrderItem v-for="item in orderList" :key="item.id"  :orderItem="item" :shopOrder="true" v-if="currentIndex === 0"
			 @deleteModelShow="deleteModelShow"></OrderItem>
			<OrderItem :orderItem="orderList[0]" :shopOrder="true" v-if="currentIndex === 1"></OrderItem>
			<OrderItem :orderItem="orderList[1]" :shopOrder="true" v-if="currentIndex === 2"  @deleteModelShow="deleteModelShow"></OrderItem>
			<OrderItem :orderItem="orderList[2]" :shopOrder="true" v-if="currentIndex === 3"></OrderItem>
			<view v-if="currentIndex === 5">
				<OrderItem :orderItem="orderList[3]" :shopOrder="true" ></OrderItem>
				<OrderItem :orderItem="orderList[4]" :shopOrder="true" ></OrderItem>
			</view>
			
			
        </z-paging>
    </view>
</template>

<script>
	//单个订单
	import OrderItem from '@/components/order/OrderItem.vue'
	export default {
		components:{OrderItem},
		name:"swiper-list-item",
		data() {
			return {
				firstLoaded:false,
				//订单列表
				orderList:[
					{
						id:1,
						title:'订单编号：2021071714171234',
						goodImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/bg.png',
						orderTitle:'台球俱乐部',
						orderTime1:'20',
						orderTime2:'元/小时',
						startTimeTitle:'开始时间',
						startTime:'2022.08.20 10:00',
						endTimeTitle:'结束时间',
						endTime:'2022.08.20 14:00',
						freeTimeTitle:'免费时长',
						freeTime:'30min',
						totalPriceTitle:'合计',
						totalPrice:'39.9',
						lookDetailBtn:'查看详情',
						goPayBtn:'去付款',
						ownPickBtn:'到店自提',
						commentBtn:'评价',
						storesOrderStatus:'待付款',
					},
					{
						id:2,
						title:'订单编号：2021071714171234',
						goodImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/bg.png',
						orderTitle:'台球俱乐部',
						orderTime1:'20',
						orderTime2:'元/小时',
						startTimeTitle:'开始时间',
						startTime:'2022.08.20 10:00',
						endTimeTitle:'结束时间',
						endTime:'2022.08.20 14:00',
						freeTimeTitle:'免费时长',
						freeTime:'30min',
						totalPriceTitle:'合计',
						totalPrice:'39.9',
						lookDetailBtn:'查看详情',
						goPayBtn:'去付款',
						ownPickBtn:'到店自提',
						commentBtn:'评价',
						storesOrderStatus:'待自提',
						
					},					
					{
						id:3,
						title:'订单编号：2021071714171234',
						goodImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/bg.png',
						orderTitle:'台球俱乐部',
						orderTime1:'20',
						orderTime2:'元/小时',
						startTimeTitle:'开始时间',
						startTime:'2022.08.20 10:00',
						endTimeTitle:'结束时间',
						endTime:'2022.08.20 14:00',
						freeTimeTitle:'免费时长',
						freeTime:'30min',
						totalPriceTitle:'合计',
						totalPrice:'39.9',
						lookDetailBtn:'查看详情',
						goPayBtn:'去付款',
						ownPickBtn:'到店自提',
						commentBtn:'评价',
						storesOrderStatus:'已自提',
					},
					{
						id:4,
						title:'订单编号：2021071714171234',
						goodImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/bg.png',
						orderTitle:'台球俱乐部',
						orderTime1:'20',
						orderTime2:'元/小时',
						startTimeTitle:'开始时间',
						startTime:'2022.08.20 10:00',
						endTimeTitle:'结束时间',
						endTime:'2022.08.20 14:00',
						freeTimeTitle:'免费时长',
						freeTime:'30min',
						totalPriceTitle:'合计',
						totalPrice:'39.9',
						lookDetailBtn:'查看详情',
						goPayBtn:'去付款',
						ownPickBtn:'到店自提',
						commentBtn:'评价',
						revocationPayBtn:'撤销退款',
						storesOrderStatus:'退款中',
						
					},					
					{
						id:5,
						title:'订单编号：2021071714171234',
						goodImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/bg.png',
						orderTitle:'台球俱乐部',
						orderTime1:'20',
						orderTime2:'元/小时',
						startTimeTitle:'开始时间',
						startTime:'2022.08.20 10:00',
						endTimeTitle:'结束时间',
						endTime:'2022.08.20 14:00',
						freeTimeTitle:'免费时长',
						freeTime:'30min',
						totalPriceTitle:'合计',
						totalPrice:'39.9',
						lookDetailBtn:'查看详情',
						goPayBtn:'去付款',
						ownPickBtn:'到店自提',
						commentBtn:'评价',
						deleteRecord:'删除记录',
						storesOrderStatus:'已退款',
					},
				],
				
				
			};
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
			},
			
		},
		methods:{
			deleteModelShow(value){
				
				this.$emit('deleteModelShow2',value)
				// this.orderList = this.orderList.filter(item=>item.id!==value)
			},
			queryList(pageNo,pageSize){
				console.log(pageNo,pageSize)
				//组件加载时会自动触发此方法，因此默认页面加载时会自动触发，无需手动调用
				//这里的pageNO，pageSize会自动计算好，直接传给服务器即可
				//模拟请求服务器获取分页数据，清替换成自己的网络请求	type:this.tabIndex + 1
				
					this.$refs.paging.complete([
						{
							id:1,
							title:'订单编号：2021071714171234',
							goodImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/bg.png',
							orderTitle:'台球俱乐部',
							orderTime1:'20',
							orderTime2:'元/小时',
							startTimeTitle:'开始时间',
							startTime:'2022.08.20 10:00',
							endTimeTitle:'结束时间',
							endTime:'2022.08.20 14:00',
							freeTimeTitle:'免费时长',
							freeTime:'30min',
							totalPriceTitle:'合计',
							totalPrice:'39.9',
							lookDetailBtn:'查看详情',
							goPayBtn:'去付款',
							ownPickBtn:'到店自提',
							commentBtn:'评价',
							storesOrderStatus:'待付款',
						},
						{
							id:2,
							title:'订单编号：2021071714171234',
							goodImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/bg.png',
							orderTitle:'台球俱乐部',
							orderTime1:'20',
							orderTime2:'元/小时',
							startTimeTitle:'开始时间',
							startTime:'2022.08.20 10:00',
							endTimeTitle:'结束时间',
							endTime:'2022.08.20 14:00',
							freeTimeTitle:'免费时长',
							freeTime:'30min',
							totalPriceTitle:'合计',
							totalPrice:'39.9',
							lookDetailBtn:'查看详情',
							goPayBtn:'去付款',
							ownPickBtn:'到店自提',
							commentBtn:'评价',
							storesOrderStatus:'待自提',
							
						},					
						{
							id:3,
							title:'订单编号：2021071714171234',
							goodImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/bg.png',
							orderTitle:'台球俱乐部',
							orderTime1:'20',
							orderTime2:'元/小时',
							startTimeTitle:'开始时间',
							startTime:'2022.08.20 10:00',
							endTimeTitle:'结束时间',
							endTime:'2022.08.20 14:00',
							freeTimeTitle:'免费时长',
							freeTime:'30min',
							totalPriceTitle:'合计',
							totalPrice:'39.9',
							lookDetailBtn:'查看详情',
							goPayBtn:'去付款',
							ownPickBtn:'到店自提',
							commentBtn:'评价',
							storesOrderStatus:'已自提',
						},
						{
							id:4,
							title:'订单编号：2021071714171234',
							goodImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/bg.png',
							orderTitle:'台球俱乐部',
							orderTime1:'20',
							orderTime2:'元/小时',
							startTimeTitle:'开始时间',
							startTime:'2022.08.20 10:00',
							endTimeTitle:'结束时间',
							endTime:'2022.08.20 14:00',
							freeTimeTitle:'免费时长',
							freeTime:'30min',
							totalPriceTitle:'合计',
							totalPrice:'39.9',
							lookDetailBtn:'查看详情',
							goPayBtn:'去付款',
							ownPickBtn:'到店自提',
							commentBtn:'评价',
							revocationPayBtn:'撤销退款',
							storesOrderStatus:'退款中',
							
						},					
						{
							id:5,
							title:'订单编号：2021071714171234',
							goodImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/bg.png',
							orderTitle:'台球俱乐部',
							orderTime1:'20',
							orderTime2:'元/小时',
							startTimeTitle:'开始时间',
							startTime:'2022.08.20 10:00',
							endTimeTitle:'结束时间',
							endTime:'2022.08.20 14:00',
							freeTimeTitle:'免费时长',
							freeTime:'30min',
							totalPriceTitle:'合计',
							totalPrice:'39.9',
							lookDetailBtn:'查看详情',
							goPayBtn:'去付款',
							ownPickBtn:'到店自提',
							commentBtn:'评价',
							deleteRecord:'删除记录',
							storesOrderStatus:'已退款',
						},
						
						
						
					]);
				
			},
			itemClick(item){
				console.log('点击了',item.title);
			}
		},
		mounted() {
			// const hasThree =this.orderList.some(num => num >= num[1]);
			// console.log(hasThree,'@@@@@@');
			// console.log(this.orderList,'3333333')
		},
		
	}
</script>

<style>
.content{
	width: 750rpx;
	padding-bottom: 188rpx;
}

</style>

