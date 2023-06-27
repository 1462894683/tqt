import { getApp } from "@/base/app"

let loadingCount = 0;
let timer = null; // 避免多次loading

// 开启loading
export const showLoading = () => {
  const app = getApp()
  // 设置加载动画区域
  if (loadingCount === 0 && !timer) {
    // TODO locale
    uni.showLoading({ title: app.$t('i18n_1') })
  }
  if (timer) clearTimeout(timer);
  loadingCount++;
};

// 隐藏loading
export const hideLoading = () => {
  if (loadingCount <= 0) return;
  loadingCount--;
  if (loadingCount === 0) {
    timer = setTimeout(() => {
      uni.hideLoading()
      timer = null;
    }, 500);
  }
};

// 清空loading
export const clearLoading = () => {
  loadingCount = 0;
  uni.hideLoading()
};

// 提示
export const showToast = ({
  duration = 1500, ...params
}) => {
  uni.hideToast()
  return new Promise((resolve, reject) => {
    uni.showToast({
      fail(res) { reject(res) },
      duration,
      ...params
    });
    setTimeout(() => {
      resolve()
    }, duration)
  })
}

// 模态框
export const showModal = ({
  ...params
}) => {
  return new Promise((resolve, reject) => {
    uni.showModal({
      success(res) {
        if (res.confirm)
          return resolve(true)
        resolve(false)
      },
      fail(res) { reject(res) },
      ...params
    });

  })
}

// 模态框
export const showActionSheet = ({
  ...params
}) => {
  return new Promise((resolve, reject) => {
    uni.showActionSheet({
      success(res) {
        resolve(res.tapIndex)
      },
      fail(res) { reject(res) },
      ...params
    });

  })
}

const install = (Vue) => {
  Vue.prototype.$ui = {
    showLoading,
    hideLoading,
    clearLoading,
    showToast,
    showModal,
    showActionSheet
  }

  // 挂载到 uni上
  uni.$ui = Vue.prototype.$ui
}

export default {
  install
}
