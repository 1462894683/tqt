// 安卓添加一下权限
// <uses-permission android:name=\"android.permission.INSTALL_PACKAGES\"/>
// <uses-permission android:name=\"android.permission.REQUEST_INSTALL_PACKAGES\"/>

/**** 此文件说明请看注释 *****/
// 可以用自己项目的请求方法
// 请求配置说明：https://ext.dcloud.net.cn/plugin?id=822
import Request from 'luch-request'
import { getApp } from "@/base/app"
const baseURL = 'https://publish.three.xinzhidi.cn/';
const request = new Request({
  baseURL,
  originalData: true,
  header: {
    'content-type': 'application/json;charset=UTF-8',
  },
  validateStatus: (statusCode) => { // statusCode 必存在。此处示例为全局默认配置
    // return statusCode >= 200 && statusCode < 300
    return true
  }
})
/**** 结束 *****/
const platform = uni.getSystemInfoSync().platform;
export default {
  // 发起ajax请求获取服务端版本号
  getServerNo: async (version, isPrompt = false, callback) => {
    try {
      const app = getApp()
      const teamId = '64295bc445f920001c6cec8a' // 团队id 在 https://publish.three.xinzhidi.cn/members 中获取
      const bundleID = "com.tgyy.www" // 打包的包名
      const res = await request.get(`/api/app/checkupdate/${teamId}/${platform}/${bundleID}/${version.versionCode}`).then(res => res.data)

      const returnRes = {
        versionCode: '', // int 版本号
        versionName: '', // String 版本名称
        versionInfo: '', // String 版本信息
        updateType: '', // String forcibly = 强制更新, solicit = 弹窗确认更新, silent = 静默更新
        downloadUrl: '' // String 版本下载链接（IOS安装包更新请放跳转store应用商店链接,安卓apk和wgt文件放文件下载链接）
      };

      if (!res || !res.success) {
        // 不提示
        if (!isPrompt) return
        // 提示
        await app.$ui.showToast({
          title: app.$t("i18n_27"),
          icon: "none"
        })
        return;
      }

      // 更新模式
      const updateMode2Type = {
        force: 'forcibly',
        normal: 'solicit',
        silent: 'silent'
      }
      const versionData = res.data.version

      returnRes.versionCode = Number(versionData.versionCode)
      returnRes.versionName = versionData.versionStr
      returnRes.versionInfo = versionData.changelog || ''
      returnRes.updateType = updateMode2Type[versionData.updateMode] ? updateMode2Type[versionData.updateMode] : 'solicit'
      returnRes.downloadUrl = versionData.installUrl
      console.log(returnRes);

      // 兼容之前的版本
      return callback && callback(returnRes);

    } catch (e) {
      console.log(e);
      console.error(e);
      return;
    }
    /****************以上是示例*******************/
  },
  // 弹窗主颜色（不填默认粉色）
  appUpdateColor: "f00",
  // 弹窗图标（不填显示默认图标，链接配置示例如： '/static/demo/ic_attention.png'）
  appUpdateIcon: '@/static/icons/ic_ar.png'
}
