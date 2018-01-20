const path = require('path')

module.exports = {
  LIB_NAME: 'name',

  ENTRY: path.resolve(__dirname, '../src/main.js'),

  ROOT_PATH: path.resolve(__dirname, '../'),
  OUTPUT_PATH: path.resolve(__dirname, '../dist')
}