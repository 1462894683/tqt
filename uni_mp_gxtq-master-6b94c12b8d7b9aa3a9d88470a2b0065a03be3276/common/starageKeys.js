/**
 * 持久化数据
 */

// token
export const tokenKey = 'token';
// 用户信息
export const userInfoKey = 'userInfo';
// 语言信息
export const locateLang = 'locateLang';

// 默认数据， store使用defaultData 之后， main.js 里面就获取不到defaulData
export const defaultObj = {
  [tokenKey]: '',
  [userInfoKey]: {},
  [locateLang]: 'zh-Hans'
};

// 默认数据
export const defaultData = {
  [tokenKey]: '',
  [userInfoKey]: {},
  [locateLang]: 'zh-Hans'
}

