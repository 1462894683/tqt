import { getApp } from "@/base/app"
import { getToken, logout, getLocate } from "./auth"



// 请求拦截
export const requestInterceptors = (config) => {
  const app = getApp()
  if (getToken()) {
    if (!config.header) config.header = {}
    config.header.Authorization = 'Bearer ' + getToken()
  }

  // loading
  app.$ui.showLoading()
  return config
}

// 响应拦截
export const responseInterceptors = async (response) => {
  const app = getApp()
  // loading
  app.$ui.hideLoading()

  // 1. 处理http状态码
  // http 状态码 不是200
  if (Number(response.statusCode) !== 200) {
    await app.$ui.showToast({ title: response.data.msg || app.$t('i18n_23'), icon: 'error' })
    return Promise.reject(response)
  }

  // 下载
  if (response.config.method === "DOWNLOAD") {
    return response
  }

  // 2. 处理业务状态码
  // 处理异常
  if ([-1].includes(Number(response.data.code))) {
    await app.$ui.showToast({ title: response.data.msg || app.$t('i18n_24'), icon: 'error' })
    return Promise.reject(response)
  }

  // 需要退出登录
  if ([401].includes(Number(response.data.code))) {
    // TODO 后续和后端协商 code
    await app.$ui.showToast({ title: response.data.msg || app.$t('i18n_25'), icon: 'error' })
    await logout()

    return Promise.reject(response)
  }

  return response.data
}

// 异常
export const responseInterceptorsReject = async (response) => {
  const app = getApp()
  // loading
  app.$ui.hideLoading()

  await app.$ui.showToast({ title: app.$t('i18n_26'), icon: 'error' })
  return Promise.reject(response)
}
