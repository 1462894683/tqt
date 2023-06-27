const TransformPages = require('uni-read-pages')
const { webpack } = new TransformPages()

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        ROUTES: webpack.DefinePlugin.runtimeValue(() => {
          const tfPages = new TransformPages({
            includes: ['path', 'name', 'meta', 'aliasPath']
          });
          return JSON.stringify(tfPages.routes)
        }, true)
      })
    ]
  },
  chainWebpack: config => {
    // config.resolve.alias
    // .set('lodash$', 'lodash/lodash.min.js')
    // .set('fs$', resolve(__dirname, 'src/utils/dummyFs.js'));
  },
  transpileDependencies: ['z-paging'],
  
    devServer: {
      proxy: {
        '/api': {
          target: 'http://tgskapi.wsj.xinzhidi.cn/',
          ws: true,
          changeOrigin: true,
		   pathRewrite:{
						  '^/api':''
		             }
        },
      }
    }
  
}
