const apiFetch = require('./api_fetch.js')

const getAllView = (dirname, views) => {
  const fs = require('mz/fs')
  const files = fs.readdirSync(dirname)

  for(let fileName of files) {
    let filePath = `${dirname}/${fileName}`
    let state = fs.statSync(filePath)
    if(state.isFile()){
      views.push(filePath)
    }
    if(state.isDirectory()){
      getAllView(filePath, views)
    }
  }
}

const factoryFunc = (view, services) => {
  return async (ctx, next) => {
    const model = await fetchApi(ctx, services)
    ctx.type = 'text/html'
    ctx.render(view, model)
  }
}

const fetchApi = async (ctx, services) => {
  let model = {}
  const query = ctx.query 
  if(services !== undefined) {
    if(services.length === 1) {
      model["_DATA_"] = await fetchService(services[0], query)
    }
    for(let service of services) {
      model[service.key] = await fetchService(service, query)
    }
  }
  return model
}

const fetchService = async (service, query) => {
  const url = getUrl(service, query)
  const response = await apiFetch.sendGet(url)
  if(response.status === 200) {
    console.log(`GET ${url}, httpStatus: ${response.status}, response[ ${JSON.stringify(response.body)} ]`)
    return response.body
  } else {
    console.error(`GET ${url}, httpStatus: ${response.status}, message[ ${response.body} ], case ${response.stack}`)
  }
  return 
}

const getUrl = (service, query) => {
  let url = `${service.url}?` 
  let key
  for(let param of service.queries) {
    key = param.key
    if(query[key] !== undefined) {
      url += `${key}=${encodeURI(query[key])}&`
    }
  }
  return url.substring(0, url.length - 1)
}

const addControllers = (router, dirname, viewBinddings) => {
  console.log(`=========================`)
  console.log(`======== views ==========`)
  const views = []
  getAllView(dirname, views)

  for(let view of views) {
    let url = view.replace(dirname, '').replace('.html', '')
    console.log(`register view [${url}]`)
    const services = getBindding(viewBinddings, url)
    router.get(url, factoryFunc(view, services))
  }
  console.log(`=========================`)
  return router.routes()
}

const getBindding = (binddings, url) => {
  const bindding = binddings[url]
  if(bindding === undefined) {
    return []
  }

  const services = []
  if(bindding.service !== undefined) {
    services.push(bindding.service) 
  }
  if(bindding.services !== undefined) {
    services.push(bindding.services) 
  }
  return services
}

module.exports = (dirname, viewBinddings) => {
  const controllerDir = dirname || './controller'
  // 使用koa-router 定义每个url所需要做的事
  const router = require('koa-router')()
  return addControllers(router, controllerDir, viewBinddings)
}
