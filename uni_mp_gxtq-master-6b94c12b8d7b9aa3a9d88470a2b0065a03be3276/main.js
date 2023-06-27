import App from './App'

import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'

// i18n 配置
import messages from "@/locale"
import { locateLang, defaultObj } from "@/common/starageKeys"

const i18nConfig = {
  locale: defaultObj[locateLang],
  messages,
  silentTranslationWarn: true // 关闭控制台提示
}
import VueI18n from 'vue-i18n'// v8.x
Vue.use(VueI18n)
const i18n = new VueI18n(i18nConfig)

// uview
import uView from "uview-ui";
Vue.use(uView);

// #ifdef MP-WEIXIN
Vue.mixin({
    methods:{
        setTabBarIndex(index) {
            if (typeof this.$mp.page.getTabBar === 'function' &&
            this.$mp.page.getTabBar()) {
                this.$mp.page.getTabBar().setData({
                    selected: index
                })
            }
        }
    }
})
// #endif

// store
import store from '@/store'

// vue Router
import { router, RouterMount } from '@/router'
Vue.use(router)


const app = new Vue({
  store,
  i18n,
  ...App,
  beforeCreate() {
  	Vue.prototype.$bus = this//安装全局事件总线
  }
})

// 临时存储 vue 实例
import { setApp } from "@/base/app"
setApp(app)

// ################################ 下面放公共代码 ####################################

// import 会导致引入前置， 用require 引入
//混入vuex 使用this.xx 访问vuex store数据
const vuexStore = require("@/common/store")
Vue.mixin(vuexStore)

// 交互
import promptUi from "@/base/prompt-ui"
Vue.use(promptUi)

//引入全局filter
import filters from '@/filter'
Vue.use(filters)

import request from "@/base/request"
Vue.use(request)

// 路由守卫
import "@/common/permission.js"

import Mylink from 'uni-simple-router/dist/link.vue'
Vue.component('router-link', Mylink)

// ################################ 要放在最后 ####################################

//v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// #ifdef H5
RouterMount(app, router, '#app')
// #endif

// #ifndef H5
app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif
