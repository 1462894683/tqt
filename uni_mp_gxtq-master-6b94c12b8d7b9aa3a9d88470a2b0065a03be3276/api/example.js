// 请求
export function examplePost(data) {
  return uni.$http.post('/example/post', data)
}

// 下载
export async function exampleDownload(data) {
  try {
    const res = await uni.$http.post('/example/download', data)
    // #ifdef APP-PLUS
    plus.runtime.openURL(res.data.downUrl, (e) => {
      throw new Error(e)
    });
    // #endif
    // #ifndef APP-PLUS
    window.open(res.data.downUrl)
    // #endif
  } catch (e) {
    console.error(e);
  }
}

export async function mockApi() {
  try {
    const data = await getPage()
    return {
      data,
      msg: '操作成功'
    }
  } catch (e) {
    console.error(e);
  }
}

// mock 页面
export const getPage = (param) => {
  uni.$ui.showLoading()

  let { limit, page } = param || {}
  if (!limit) limit = 10
  if (!page) page = 0
  const arr = [
    { value: 0, name: "无数据" },
    { value: limit, name: "加载" },
    { value: limit - 1, name: "无更多数据" },
  ];
  const obj = arr[Math.floor(Math.random() * (arr.length - 1 - 0 + 1)) + 0];
  const num = obj.value;
  let result = new Array(num).fill().map(v => ({}));
  console.log({ num, result, obj, page });
  return new Promise((resolve, reject) => {
    return setTimeout(() => {

      uni.$ui.hideLoading()
      resolve(result);
    }, 1000 * 1);
  });
};
