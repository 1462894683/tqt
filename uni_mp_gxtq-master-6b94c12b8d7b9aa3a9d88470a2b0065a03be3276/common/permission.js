import { router } from "@/router"
import { getToken, logout, getLocate } from "@/common/auth"
import { getApp } from "@/base/app"

const loginList = [
  '/pages/example/register'
]
const whiteList = [
  ...loginList,
  '/pages/example/list',
  '/pages/example/language'
]


//全局路由前置守卫
router.beforeEach((to, from, next) => {
	if(to.path==='/pages/TabBar/Mine/Mine' || to.path==='/pages/TabBar/Shopping/Shopping' || to.path==='/pages/TabBar/Order/Order'){
		if(!uni.getStorageSync('getUserProfile')){
			uni.showToast({ title: '请登录', icon: 'success' })
		}
	}else{
		next()
	}
	// console.log(to,'1111111111111111111111')
  // 登录
  const hasToken = getToken();
  // 设置多语言
  const app = getApp()
  app.$i18n.locale = getLocate()


  return next();



  // TODO 临时删除
  if (hasToken) {
    // 已登录 去登录页面 跳转回首页
    if (loginList.indexOf(to.path) !== -1) {
      return next('/pages/example/register');
    }

    return next();
  }

  // 白名单
  if (whiteList.indexOf(to.path) !== -1) {
    return next();
  }

  logout();
  next(false);
});
// 全局路由后置守卫
router.afterEach((to, from) => {
  console.log('跳转结束')
})
