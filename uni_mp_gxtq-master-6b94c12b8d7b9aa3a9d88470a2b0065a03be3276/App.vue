<script>
import appUpdate from "@/base/update"
import { locateLang, defaultObj } from "@/common/starageKeys"
import { setLocate, getLocate } from "@/common/auth"
export default {
	onLaunch: function () {
		console.log(uni.getLocale(), getLocate(), 'locale');
		if (uni.getLocale() !== getLocate()) {
			const locale = getLocate() || defaultObj[locateLang]
			console.log(locale, 'locale');
			uni.setLocale(locale)
			setLocate(locale)
			this.$i18n.locale = locale
		}
		// #ifdef APP-PLUS
		appUpdate();
		// #endif
		
		
		//隐藏原来的tabBar
		uni.hideTabBar({})
		
		
	},
	//1.增加全局参数
	globalData:{
		isIphoneXup:true,//是否iphonex以及以上的版本
	},
	onShow: function () {
		console.log('App Show')
		//隐藏原来的tabBar
		uni.hideTabBar({})
		
		//2.增加获取机型
		var that = this
		// 获取设备机型
		wx.getSystemInfo({
		success: res=>{
		let model = res.model;
		uni.setStorageSync('statusBarHeight',res.statusBarHeight)
		console.log(res.statusBarHeight)	;
		if (/iphone\sx/i.test(model) || (/iphone/i.test(model) && /unknown/.test(model))|| 
		/iphone\s11/i.test(model)|| /iPhone\s12/i.test(model)){
		// console.log("是x以上")
		that.globalData.isIphoneXup = true;
		uni.setStorageSync('isIphoneXup',this.globalData.isIphoneXup)
		}else if(model == "iPhone 14 Pro Max"){
			that.globalData.isIphoneXup = true;
			uni.setStorageSync('isIphoneXup',this.globalData.isIphoneXup)
		}
		else{
		// console.log("不是x以上")
		that.globalData.isIphoneXup = false;
		uni.setStorageSync('isIphoneXup',this.globalData.isIphoneXup)
		}
	}
});

		
	},
	onHide: function () {
		console.log('App Hide')
	},
	methods: {
	}
}
</script>

<style lang="scss">
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
@import "uview-ui/index.scss";

</style>

