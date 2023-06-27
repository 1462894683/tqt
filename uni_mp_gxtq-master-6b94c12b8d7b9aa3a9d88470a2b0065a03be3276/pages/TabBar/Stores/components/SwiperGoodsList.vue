<template>
 <view class="content">
        <z-paging ref="paging" v-model="goodsList" @query="queryList" :fixed="false" :auto="false" :paging-style="{height: '500px'}">
           <GoodsItem :goods="goodsList"></GoodsItem>
        </z-paging>
    </view>
</template>

<script>
	//单个商品
	import GoodsItem from '@/components/GoodsItem.vue'
	export default {
		components:{GoodsItem},
		name:"swiper-list-item",
		data() {
			return {
				//这个变量不要自己赋值
				dataList:[],
				firstLoaded:false,
				//商品列表
				goodsList:[]
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
			queryList(pageNo,pageSize){
				//组件加载时会自动触发此方法，因此默认页面加载时会自动触发，无需手动调用
				//这里的pageNO，pageSize会自动计算好，直接传给服务器即可
				//模拟请求服务器获取分页数据，清替换成自己的网络请求		
					this.$refs.paging.complete(	
					[
							{
								id:1,
								imgUrl:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/goods1.png',
								title:'夏季儿童短袖运动套装婴儿衣服幼儿小童1岁3宝宝...',
								price:'￥238',
								cartImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/21addCart@2x.png',
								discount:'5.0折'
							},
							{
								id:2,
								imgUrl:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/goods2.png',
								title:'夏季儿童短袖运动套装婴儿衣服幼儿小童1岁3宝宝...',
								price:'￥298',
								cartImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/21addCart@2x.png'
							},
							{
								id:3,
								imgUrl:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/goods1.png',
								title:'夏季儿童短袖运动套装婴儿衣服幼儿小童1岁3宝宝...',
								price:'￥238',
								cartImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/21addCart@2x.png',
								discount:'5.0折'
							},
							{
								id:4,
								imgUrl:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/goods2.png',
								title:'夏季儿童短袖运动套装婴儿衣服幼儿小童1岁3宝宝...',
								price:'￥298',
								cartImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/21addCart@2x.png'
							},
							{
								id:5,
								imgUrl:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/goods2.png',
								title:'夏季儿童短袖运动套装婴儿衣服幼儿小童1岁3宝宝...',
								price:'￥298',
								cartImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/21addCart@2x.png'
							},
							{
								id:6,
								imgUrl:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/goods2.png',
								title:'夏季儿童短袖运动套装婴儿衣服幼儿小童1岁3宝宝...',
								price:'￥298',
								cartImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/21addCart@2x.png'
							},
							{
								id:7,
								imgUrl:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/goods2.png',
								title:'夏季儿童短袖运动套装婴儿衣服幼儿小童1岁3宝宝...',
								price:'￥298',
								cartImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/21addCart@2x.png'
							},
							{
								id:8,
								imgUrl:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/goods2.png',
								title:'夏季儿童短袖运动套装婴儿衣服幼儿小童1岁3宝宝...',
								price:'￥298',
								cartImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/21addCart@2x.png'
							},
							{
								id:9,
								imgUrl:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/goods2.png',
								title:'夏季儿童短袖运动套装婴儿衣服幼儿小童1岁3宝宝...',
								price:'￥298',
								cartImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/21addCart@2x.png'
							},
							{
								id:10,
								imgUrl:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/goods2.png',
								title:'夏季儿童短袖运动套装婴儿衣服幼儿小童1岁3宝宝...',
								price:'￥298',
								cartImg:'https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/21addCart@2x.png'
							}
						]);
				// this.$request.queryList(params).then(res => {
				// 	//将请求的结果数组传递给z-paging
				// 	this.$refs.paging.complete(res.data.list);
				// 	// console.log(res,'res'))
				// 	this.firstLoaded = true;
				// }).catch(res => {
				// 	//如果请求失败写this.$refs.paging.complete(false);
				// 	//注意，每次都需要在catch中写这句话很麻烦，z-paging提供了方法可以全局统一处理
				// 	//在底层的网络请求中抛出异常时，写uni.$emit('z-paging-error-emit'即可)
				// 	this.$refs.paging.complete(false);
				// })
			},
			itemClick(item){
				console.log('点击了',item.title);
			}
		}
		
	}
</script>

<style>
.content{
	width: 750rpx;
	height: 1000rpx;
}

</style>
