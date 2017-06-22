// 读取配置
const config = require('./config')
let opts 
if(process.env.NODE_ENV === "prod") {
  opts = config.prod
} else {
  opts = config.dev
}

const Koa = require('koa')
const app = new Koa()

// 设置POST body解析
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())

// 增加请求监听
const monitor = require('./server/monitor.js')
app.use(monitor(opts))

// 增加后端接口转发
const apiRouter = require('./server/api_router.js')
app.use(apiRouter(opts))

// 静态文件拦截
const staticFilter = require('./server/static_filter.js')
app.use(staticFilter('/static/', `${__dirname}/public/static/`))

const fileServer = require('./server/file.js')
app.use(fileServer(`${__dirname}/public`))

// 启动
app.listen(opts.server.port, () => {
  console.log(`uc_front demo start at port ${opts.server.port}!`)
})