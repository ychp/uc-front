
const index = async (ctx, next) => {
  ctx.render('index.html')
}

module.exports = {
  'GET /': index
}