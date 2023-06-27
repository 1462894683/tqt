const fs = require('fs')
const path = require('path')
const jsonFile = fs.readFileSync(path.resolve(global.i18n.cacheDir, './zh.json'), 'utf-8')
const json = JSON.parse(jsonFile)

module.exports = {
  appid: '20210430000808825',
  key: 'EpQOj1c6BXKMG2RAMp0X',
  translate: false,
  // 语种 https://api.fanyi.baidu.com/doc/21
  // from : 'zh',
  from: 'zh',
  to: ['en'],
  ignoreDirs: [,
    '.hbuilderx', 'node_modules', 'uni_modules', 'unpackage', '.git', 'dist', 'static'
  ],
  ignoreExts: [".woff2", '.jpg', '.png', '.pdf', '.keystore', '.p12', '.mobileprovision'],
  reg: new RegExp(/\$t\(('|"|`|%)(.*?)('|"|`|%)\)/g),
  prefix: 'i18n_',
  // 收集函数
  handlerResult: (allText, nextKey, [_, $1, $2, $3]) => {
    allText[nextKey] = $2;
    return allText
  },
  // 替换函数
  handlerTemlpate: (allText, nextKey, [_, $1, $2, $3]) => {
    // 替换成key
    return `$t(${$1}${nextKey}${$3})`
  },
  // 还原函数
  backHandler: (allText, nextKey, [_, $1, $2, $3]) => {
    return `$t(${$1}${json[nextKey] ? json[nextKey] : ''}${$3})`
  }
}
