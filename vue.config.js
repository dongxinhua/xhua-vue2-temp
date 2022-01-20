const path = require('path')

module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/api': {
        target: 'https://ip:port',
        changOrigin: true,
      },
    },
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve('src'))
      .set('assets', path.resolve('src/common/assets'))
      .set('components', path.resolve('src/common/components'))
      .set('apps', path.resolve('src/common/apps'))
      .set('utils', path.resolve('src/common/utils'))
  },
}
