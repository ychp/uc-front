
const opts = () => {
  let opts = require('./sky-prod.js')
  if(process.env.NODE_ENV === 'prod') {
    return opts
  }
  const defaultOpts = require('./sky.js')
  for(let optKey in defaultOpts) {
    opts[optKey] = defaultOpts[optKey]
  }
  return opts
}

module.exports = opts