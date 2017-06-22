const nunjucks = require('nunjucks')

const createEnv = (path, opts) => {
  const autoescape = opts.autoescape && true,
        noCache = opts.noCache || false,
        watch = opts.watch || false,
        throwOnUndefined = opts.throwOnUndefined || false,
        env = new nunjucks.Environment(
            new nunjucks.FileSystemLoader(path, {
                noCache: noCache,
                watch: watch,
            }), {
                autoescape: autoescape,
                throwOnUndefined: throwOnUndefined
            });
    if (opts.filters) {
        for (var f in opts.filters) {
            env.addFilter(f, opts.filters[f]);
        }
    }
    return env;
}

const render = (path, opts) => {
  const env = createEnv(path, opts)
  return async (ctx, next) => {
    // 给ctx绑定render函数:
    ctx.render = function (view, model) {
      // 把render后的内容赋值给response.body:
      ctx.response.body = env.render(view, Object.assign({}, ctx.state || {}, model || {}));
      // 设置Content-Type:
      ctx.response.type = 'text/html';
    };
    await next()
  }
}

module.exports = render