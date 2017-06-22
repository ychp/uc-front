var config = require("./webpack.hot.conf.js");
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')

var ora = require('ora')
var spinner = ora('building for production...')
spinner.start()

var chalk = require('chalk')

var compiler = webpack(config, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
        '  Tip: built files are meant to be served over an HTTP server.\n' +
        '  Opening index.html over file:// won\'t work.\n'
    ))
})

var server = new WebpackDevServer(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
})
server.listen(9900)