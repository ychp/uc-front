var merge = require('webpack-merge')
var dev = require('./dev')

module.exports = merge(dev, {
  env: {
    NODE_ENV: '"testing"'
  }
})
