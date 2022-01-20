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
      .set('assets', path.resolve('src/assets'))
      .set('components', path.resolve('src/components'))
      .set('app', path.resolve('src/app'))
      .set('util', path.resolve('src/util'))
  },
}
