<template>
	<view class="complete">
		<TopBar :whiteShow="true" :isShowReturn="true" title='计费规则'></TopBar>
		<view class="rule">
			<image src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/18bac@2x.png" mode=""></image>
			<view class="irregulars">
				<view class="matter">
					<view class="definite" v-for="item in equity" :key="item.id">
						<text class="def_left">{{item.title}}</text>
						<text class="def_right">{{item.details}}</text>
					</view>
					<view class="substance">
						大家在使用本场所时,能够遵守以上规定,做到文明使用， 爰护设施，保障自己和他人的安全。
					</view>
				</view>
			</view>
			<view class="store">逗逗空间使用规则</view>
		</view>
	</view>
</template>

<script>
	import TopBar from '@/components/common/TopBar.vue'
	export default {
		components: {
			TopBar
		},
		data() {
			return {
				equity:[
					{
						id:1,
						title:'计时计费：',
						details:'本场所以人吴进入后计时计费.计费方式为每分钟计费。'
					},
					{
						id:2,
						title:'免费使用时间：',
						details:'进入本场炉每人每天有10分钟的免费使凭时间，超出免费使用时间后开始计费。'
					},
					{
						id:3,
						title:'计费标准：',
						details:'进入本场历技每分件进行计费，计费标准为X元/分绅，价格根据场所发布的市场价格为准。'
					},
					{
						id:4,
						title:'设施使用：',
						details:'进入本场所，场所内所有设施梯可使用.使用完后诘归还原位，爱警公物。'
					},
					{
						id:5,
						title:'监控设备：',
						details:'本场所为24小时监控场所，为了保证大家的安全，请勿私自抿坏或破坏主控设备。'
					},
					{
						id:6,
						title:'会员制度：',
						details:'本场所设有月卡会员、季卡会员和年卡会员。月卡，季卡，年卡购买成功后立即生效，可抵扣当日消费，会员可以享受更优惠的计费价格为其他福利待遇。'
					},
					{
						id:7,
						title:'会员期限：',
						details:'会员月卡，李卡，年卡期限分别为月卡31天;李卡93天；年卡372天。'
					},
					{
						id:8,
						title:'封顶金额：',
						details:'使年本场房消费每日封及1Q0元，每月封顶700元，（不合在场为愍物全察）。如果您的消费金缴运过封顶金翻，该时段则不再收取额外的消费费用。（以24小时计算，月以公历日历月计算）'
					},
					
				]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.complete {
		width: 750rpx;
		height: 1624rpx;
		background: #461A5F;
		overflow: hidden;
		.rule {
			width: 690rpx;
			height: 1252rpx;
			margin: 208rpx auto 0;
			position: relative;
			image {
				width: 100%;
				height: 100%;
			}
			.irregulars{
				top: 0;
				left: 0;
				position: absolute;
				width: 690rpx;
				height: 1252rpx;
				.matter{
					margin: 56rpx auto 0;
					.definite{
						width: 631rpx;
						margin: 19rpx auto ;
						font-size: 26rpx;
						font-family: PingFang SC-Regular, PingFang SC;
						font-weight: 400;
						color: #010208;
						line-height: 40rpx;
						.def_left{
							font-weight: bold;
						}
					}
				}
				.substance{
					margin: 120rpx auto 0;
					width: 638rpx;
					height: 75rpx;
					font-size: 26rpx;
					font-family: PingFang SC-Regular, PingFang SC;
					font-weight: 400;
					color: #010208;
				}
			}
			.store{
				bottom: -25rpx;
				left: 39rpx;
				position: absolute;
				width: 288rpx;
				height: 50rpx;
				font-size: 36rpx;
				font-family: PingFang SC-Bold, PingFang SC;
				font-weight: bold;
				color: #FFFFFF;
			}
		}
	}
</style>