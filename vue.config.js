const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
    chainWebpack: config => {
//        config.module.rules.delete('eslint');
    }
}