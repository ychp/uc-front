const fileServer = (dir) => {
  return async (ctx, next) => {
    const fs = require('mz/fs')
    const mime = require('mime')
    const filePath = `${dir}/index.html`
    if(await fs.exists(filePath)){
      ctx.response.type = await mime.lookup(filePath)
      ctx.response.body = fs.readFileSync(filePath, 'utf8')
    } else {
      ctx.response.status = 404
    }
  }
}

module.exports = fileServer