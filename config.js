
const opts = {
  backendUrl: "http://center-dev.yingchengpeng.com",
  server: {
    port: 8091
  },
  autoescape: true,
  noCache: process.env.NODE_ENV !== 'prod',
  mysql: {
    host: "127.0.0.1",
    port: 3306,
    database: "blog",
    username: "root",
    password: "anywhere"
  }
}

module.exports = opts