<template>
	<view>
		<TopBar :blackShow="true" :isShowReturn="true" title='开灯'></TopBar>
		<view class="complete">
			<image src="https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/deng.png" mode=""></image>
			<view class="light">
				<view class="details" v-for="item in serial" :key="item.id">
					<view class="serial">{{item.num}}</view>
					<view class="billiard">{{item.name}}</view>
					<view class="switch">
						<u-switch v-model="item.state" activeColor="#5ac725" inactiveColor="#B2B2B2"
							@click.native="handleClick(item.id)" @change="change()" :disabled="seles" ref="switches">
						</u-switch>

					</view>
				</view>
			</view>
		</view>
		<u-toast ref="uToast"></u-toast>
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
				serial: [{
						id: 1,
						num: '01',
						name: '台球桌',
						state: false,
						value: '1'
					},
					{
						id: 2,
						num: '02',
						name: '台球桌',
						state: false,
						value: '2'
					},
					{
						id: 3,
						num: '03',
						name: '台球桌',
						state: false,
						value: '3'
					},
					{
						id: 4,
						num: '04',
						name: '台球桌',
						state: false,
						value: '4'
					},
					{
						id: 5,
						num: '05',
						name: '台球桌',
						state: false,
						value: '5'
					},
					{
						id: 6,
						num: '06',
						name: '台球桌',
						state: false,
						value: '6'
					},
					{
						id: 7,
						num: '07',
						name: '台球桌',
						state: false,
						value: '7'
					},
					{
						id: 8,
						num: '08',
						name: '台球桌',
						state: false,
						value: '8'
					},
					{
						id: 9,
						num: '09',
						name: '台球桌',
						state: false,
						value: '9'
					},
				],
				selected: '',
				seles: false,
				nums: 0,
			}
		},
		methods: {
			handleClick(value) {
				this.nums = value
				const switches = this.$refs.switches;
				console.log(switches)
				for (const item of switches) {
					if (this.selected === item.value) {
						item.disabled = false
					} else if (this.selected != item.value) {
						item.disabled = true
					}
				}
				if (switches[value-1].disabled === true) {
					this.$refs.uToast.show({
						type: "default",
						message: "请先关灯!"
					});
				}
				uni.setStorageSync('classify', this.nums)
			},
			change(e) {
				this.selected = e
				uni.setStorageSync('light', this.selected)
			}
		},
		onShow() {
			this.state = uni.getStorageSync('light')
			this.nums = uni.getStorageSync('classify')
			this.serial.map((item) => {
				if (item.id == this.nums) {
					item.state = this.state
				}
			})

		},
		onLoad() {

		}
	}
</script>

<style scoped lang="scss">
	.complete {
		width: 750rpx;
		height: 1624rpx;
		background: #D0D2EC;
		position: relative;

		image {
			float: right;
			margin-top: 39rpx;
			width: 438rpx;
			height: 1284rpx;
			z-index: 1;
		}

		.light {
			position: absolute;
			top: 394rpx;
			left: 31rpx;
			width: 688rpx;
			height: 838rpx;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;

			.details {
				width: 216rpx;
				height: 266rpx;
				border-radius: 20rpx;
				text-align: center;
				background-color: #DBDEF1;
				box-shadow: 0rpx 8rpx 16rpx 1rpx #758DE5;

				.serial {
					margin-top: 26rpx;
					font-size: 48rpx;
					font-family: OPPOSans-bold, OPPOSans;
					font-weight: bold;
					color: #041158;
				}

				.billiard {
					margin-top: 13rpx;
					font-size: 30rpx;
					font-family: PingFang SC-Medium, PingFang SC;
					font-weight: 500;
					color: #010208;
				}

				.switch {
					width: 104rpx;
					margin: 31rpx auto 0;
				}
			}
		}
	}
</style>