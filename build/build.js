const webpack = require("webpack")
const webpackConf = require('./webpack.conf')
const chalk = require('chalk')
const ora = require('ora')

process.env.NODE_ENV = 'production'

const spinner = ora('building for production...')
spinner.start()

webpack(webpackConf, function(err, stats) {
  spinner.stop()
  if (err) throw err

  process.stdout.write(stats.toString() + '\n\n')

  console.log(chalk.cyan('  Build complete.\n'))
})
