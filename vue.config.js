const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? "/database/" : '/',
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
  },
}
