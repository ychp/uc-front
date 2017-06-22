const config = require('../config.js')

const fetchApi = async (ctx) => {
  const url = ctx.url
  const method = ctx.request.method
  let sreq
  if(method === "GET") {
    sreq = fetchGet(url)
  }
  if(method === "POST") {
    sreq = fetchPost(ctx, url)
  }
  if(method === 'PUT') {
    sreq = fetchPut(ctx, url)
  }
  if(method === 'DELETE') {
    sreq = fetchDelete(ctx, url)
  }
  
  let response = {}
  await sreq.then((res) => {
    response.body = res.body
    response.status = res.status
  }).catch((err) => {
    response.message = err.message
    response.stack = err.stack
    response.status = err.status
  })
  return response
}

const fetchGet = (url) => {
  const superagent = require('superagent')
  console.log(`GET ${url}, route[ ${config.backendUrl}${url} ]`)
  return superagent.get(`${config.backendUrl}${url}`)
}

const fetchPost = (ctx, url) => {
  const superagent = require('superagent')
  const request = ctx.request
  const contentType = request.headers.contenttype
  let sreq

  if(contentType === "application/json") {
    console.log(`POST ${url}, route[ ${config.backendUrl}${url} ], data[ ${JSON.stringify(request.body)} ]`)
    sreq = superagent.post(`${config.backendUrl}${url}`)
    .set('Content-Type', 'application/json')
    .send(JSON.stringify(request.body))
  } else {
    // todo
    console.log(`POST ${url}, route[ ${config.backendUrl}${url} ], data[ ${JSON.stringify(request.body)} ]`)
    sreq = superagent.post(`${config.backendUrl}${url}`)
    .send(JSON.stringify(request.body))
  }

  return sreq
}

const fetchPut = (ctx, url) => {
  const superagent = require('superagent')
  const request = ctx.request
  const contentType = request.headers.contenttype
  let sreq

  if(contentType === "application/json") {
    console.log(`PUT ${url}, route[ ${config.backendUrl}${url} ], data[ ${JSON.stringify(request.body)} ]`)
    sreq = superagent.put(`${config.backendUrl}${url}`)
    .set('Content-Type', 'application/json')
    .send(JSON.stringify(request.body))
  } else {
    // todo
    console.log(`PUT ${url}, route[ ${config.backendUrl}${url} ], data[ ${JSON.stringify(request.body)} ]`)
    sreq = superagent.put(`${config.backendUrl}${url}`)
    .send(JSON.stringify(request.body))
  }

  return sreq
}

const fetchDelete = (ctx, url) => {
  const superagent = require('superagent')
  console.log(`DELETE ${url}, route[ ${config.backendUrl}${url} ]`)
  return superagent.delete(`${config.backendUrl}${url}`)
}

const sendGet = async (url) => {
  const sreq = fetchGet(url)
  let response = {}
  await sreq.then((res) => {
    response.body = res.body
    response.status = res.status
  }).catch((err) => {
    response.message = err.message
    response.stack = err.stack
    response.status = err.status
  })
  return response
}

module.exports = {
  fetchApi: fetchApi,
  sendGet: sendGet
}