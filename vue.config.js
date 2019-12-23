const path = require('path')

module.exports = {
  lintOnSave: false,

  devServer: {
    proxy: {
      '/api': {
        target: 'https://livedev.skillbox.ru/', // target host
        changeOrigin: true // needed for virtual hosted sites,
      }
    },
  },

};