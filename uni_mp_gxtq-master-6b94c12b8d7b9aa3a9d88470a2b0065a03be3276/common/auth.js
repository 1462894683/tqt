import { tokenKey, userInfoKey, locateLang, defaultObj } from "./starageKeys"
import { getApp } from "@/base/app"

// 设置token
export const setToken = (token = '') => {
  getApp().$vuex(tokenKey, token)
}
// 清除token
export const removeToken = () => {
  getApp().$vuex(tokenKey, '')
}
// token
export const getToken = () => {
  return getApp().$store.state[tokenKey] || defaultObj[tokenKey]
}


export const setUser = (data = {}) => {
  getApp().$vuex(userInfoKey, data)
}
export const removeUser = () => {
  getApp().$vuex(userInfoKey)
}
export const getUser = () => {
  return getApp().$store.state[userInfoKey] || defaultObj[userInfoKey]
}

// 清除token
export const removeAll = () => {
  getApp().$vuex(tokenKey, '')
  getApp().$vuex(userInfoKey, {})
}


// 退出登录
export const logout = async () => {
  removeAll()
  const app = getApp()
  // await app.$ui.showToast({ title: app.$t('i18n_22') })
  app.$Router.replaceAll({ path: '/pages/login/index' })
}

// 登录
export const loginHandler = async (token) => {
  const app = getApp()
  setToken(token);
  app.$Router.replaceAll({ path: '/pages/index/index' });
}


// 设置语言 store
export const setLocate = (data = {}) => {
  getApp().$vuex(locateLang, data)
}
// 获取语言 store
export const getLocate = () => {
  return getApp().$store.state[locateLang] || defaultObj[locateLang]
}
