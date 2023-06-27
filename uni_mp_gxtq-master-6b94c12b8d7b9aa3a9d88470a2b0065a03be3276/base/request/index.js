import Request from 'luch-request'
import config from "@/config"
const { BASE_URL } = config
import { requestInterceptors, responseInterceptors, responseInterceptorsReject } from "@/common/request"

const install = (Vue) => {
  Vue.prototype.$http = new Request({
    baseURL: BASE_URL,
    originalData: true,
    header: {
      'content-type': 'application/json;charset=UTF-8',
    },
    validateStatus: (statusCode) => { // statusCode 必存在。此处示例为全局默认配置
      // return statusCode >= 200 && statusCode < 300
      return true
    }
  })

  // 请求拦截部分
  Vue.prototype.$http.interceptors.request.use((config) => {
    return requestInterceptors(config)
  })

  // 响应拦截
  Vue.prototype.$http.interceptors.response.use((response) => {
    return responseInterceptors(response)
  }, responseInterceptorsReject)

  // 挂载到 uni上
  uni.$http = Vue.prototype.$http
}

export default {
  install
}
