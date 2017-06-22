const addMapping = function(router, mappings) {
  for(let url in mappings) {
    if(url.startsWith('GET')) {
      var path = url.split(' ')[1]
      router.get(path, mappings[url])
      console.log(`register url [${url}]`)
    }
    if(url.startsWith('POST')) {
      var path = url.split(' ')[1]
      router.post(path, mappings[url])
      console.log(`register url [${url}]`)
    }
  }
}

const addControllers = function(router, dirname){
  console.log(`=========================`)
  console.log(`======= front api =======`)
  const fs = require('fs')
  const files = fs.readdirSync(dirname)
  const js_files = files.filter((f) => {
    return f.endsWith('.js')
  })

  for(let fileName of js_files) {
    let filePath = `${dirname}/${fileName}`
    let mappings = require(filePath)
    addMapping(router, mappings)
  }
  console.log(`=========================`)
  return router.routes()
}

module.exports = (dirname) => {
  const controllerDir = dirname || '../app/controller'
  // 使用koa-router 定义每个url所需要做的事
  const router = require('koa-router')()
  return addControllers(router, controllerDir)
}
