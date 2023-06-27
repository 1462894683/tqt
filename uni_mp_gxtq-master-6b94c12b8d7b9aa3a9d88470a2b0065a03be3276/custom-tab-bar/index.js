const app = getApp();
Component({
  data: {
	  isIphoneXup:false,
    selected: 0,
    color: "#B4A9EA",
    selectedColor: "#342752",
    list: [
			{
				"pagePath": "/pages/TabBar/Home/Home",
				"iconPath": "https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/home.png",
				"selectedIconPath": "https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/homeSeleted.png",
				"text": "首页"
			},
			{
				"pagePath": "/pages/TabBar/Stores/Stores",
				"iconPath": "https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/shop.png",
				"selectedIconPath": "https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/shopSeleted.png",
				"text": "商城"
			},
			{
				"pagePath": "/pages/TabBar/Shopping/Shopping",
				"iconPath": "https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/cart.png",
				"selectedIconPath": "https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/cartSeleted.png",
				"text": "购物车"
			},
			{
				"pagePath": "/pages/TabBar/Order/Order",
				"iconPath": "https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/order.png",
				"selectedIconPath": "https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/orderSeleted.png",
				"text": "订单"
			},
			{
				"pagePath": "/pages/TabBar/Mine/Mine",
				"iconPath": "https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/my.png",
				"selectedIconPath": "https://gitee.com/qiuyuqiuyu/picgo/raw/master/images/mySeleted.png",
				"text": "我的"
			}
		],
  },
  attached() {
  },
  ready() {
		  this.setData({
		  		  isIphoneXup:wx.getStorageSync('isIphoneXup'),
				  statusBarHeight:wx.getStorageSync('statusBarHeight'),
		  })
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
  
})