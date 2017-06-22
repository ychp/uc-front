var path = require('path')
module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  index: path.resolve(__dirname, '../public/index.html'),
  assetsRoot: path.resolve(__dirname, '../public'),
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  productionSourceMap: true,
  productionGzip: false,
  productionGzipExtensions: ['js', 'css'],
  bundleAnalyzerReport: process.env.npm_config_report
}
