```
.
├── App.vue
├── README.md
├── api
│   ├── common.js
│   ├── community.js
│   ├── index.js
│   ├── login.js
│   └── mine.js
├── common
│   ├── intercept
│   ├── keys.js
│   ├── loading.js
│   ├── login.js
│   ├── mixins
│   ├── request.js
│   ├── token.js
│   └── upload.js
├── components
│   ├── commet-item.vue
│   ├── community-item.vue
│   ├── share.vue
│   ├── sliderVerify
│   ├── tabbar.vue
│   └── vericode.vue
├── config
│   ├── development.js
│   ├── index.js
│   └── production.js
├── filter
│   ├── filter.js
│   └── index.js
├── index.html
├── main.js
├── manifest.json
├── package.json
├── pages
│   ├── community
│   ├── index
│   ├── login
│   └── mine
├── pages.json
├── static
│   ├── icons
│   ├── images
│   ├── logo.png
│   └── tabbar
├── store
│   ├── $u.mixin.js.js
│   └── index.js
├── uni.scss
├── unpackage
│   └── dist
├── vue.config.js
└── yarn.lock
```

#### 路由

- 使用： uni-simple-router
- 插件地址： https://ext.dcloud.net.cn/plugin?id=578
- 文档地址： https://www.hhyang.cn/v2/start/cross/params.html#%E9%9D%9E%E6%B7%B1%E5%BA%A6%E5%AF%B9%E8%B1%A1%E4%BC%A0%E9%80%92

项目中的 路由跳转尽量使用 该 api

#### store

- 采用 uview-ui 中的 minxin， created 写法
- 设置 vuex： this.$vuex('key', value)
- 获取： this.key

#### 交互

**loading**
```
// loading
uni.$ui.showLoading()
// 取消loading
uni.$ui.hideLoading()
```

**toast**

```
async () => {
  await this.$ui.showToast({ title: '错误提示', icon: 'error' })
  // 逻辑代码
}
// 或

 this.$ui.showToast({ title: '错误提示', icon: 'error' }).then(res => {
  // 逻辑代码
 })

```

**confirm**

```
async () => {
 const confirm = await this.$ui.showModal({ content: '是否确认？' })
 if (!confirm) {
  // 取消逻辑
  return
 }

  // 确认逻辑
}

// 或

this.$ui.showModal({ content: '是否确认？' }).then(confirm => {
 if (!confirm) {
  // 取消逻辑
  return
 }

  // 确认逻辑
})
```


#### 列表

- 插件地址  https://ext.dcloud.net.cn/plugin?id=3935
- 文档地址 https://z-paging.zxlee.cn/
- 示例代码  https://github.com/SmileZXLee/uni-z-paging/blob/main/z-paging/pages/common-demo/common-demo.vue
- 示例效果 https://demo.z-paging.zxlee.cn/#/pages/common-demo/common-demo
