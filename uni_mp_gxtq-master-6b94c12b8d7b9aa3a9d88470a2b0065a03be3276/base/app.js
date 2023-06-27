// 临时存储 app对象
let app

export const setApp = (vm) => {
  app = vm
}

export const getApp = () => {
  if (app) return app
  throw new Error('确保引入代码在 setApp 后')
}
