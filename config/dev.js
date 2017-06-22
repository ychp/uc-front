var merge = require('webpack-merge')
var prod = require('./prod')

module.exports = merge(prod, {
  env: {
    NODE_ENV: '"development"'
  },
  backendUrl: "http://center-dev.yingchengpeng.com",
  server: {
    port: 8091
  },
  port: 8080,
  autoOpenBrowser: true,
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  proxyTable: {},
  cssSourceMap: false
})
