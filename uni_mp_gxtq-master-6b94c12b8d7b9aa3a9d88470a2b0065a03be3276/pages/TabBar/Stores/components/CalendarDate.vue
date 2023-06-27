<template>
	<u-calendar 
		showLunar
		:showTitle="false"
        :maxDate="maxDate"
        :show="selectDateShow" 
		:closeOnClickOverlay="true"
        @confirm="confirm"
		@close="close">
	</u-calendar>
</template>

<script>
	const d = new Date()
	const year = d.getFullYear()
	let month = d.getMonth() + 1
	month = month < 10 ? `0${month}` : month
	const date = d.getDate()
	export default {
		props:{
			  selectDateShow:{
				  type:Boolean,
				  default:false
			  }
		},
		data() {
			return {
				maxDate: `${year}-${month}-${date + 6}`,//可选天数范围
				selectDate:''//选择的具体时间
			}
		},
		methods: {
			confirm(e) {
				this.selectDate = e[0]
				 this.$emit('closeDataSelect',{show:false,detailTime:this.selectDate})
			},
			// 关闭日历执行函数
			close() {
				  //选择事件弹窗关闭的时候传递选择的事件并且关闭弹出框
				  this.$emit('closeDataSelect',{show:false})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.title{
		color: $u-primary;
		text-align: center;
		padding: 20rpx 0 0 0;
	}
</style>