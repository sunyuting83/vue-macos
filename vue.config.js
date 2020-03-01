module.exports = {
  configureWebpack: config => {
    config.externals = {
      marked: "marked"
    }
  },
  chainWebpack: config => {
    const cdn = {
      js: [
        "//cdn.staticfile.org/marked/0.8.0/marked.min.js"
      ]
    }
    // 如果使用多页面打包，使用vue inspect --plugins查看html是否在结果数组中
    config.plugin("html").tap(args => {
      // html中添加cdn
      args[0].cdn = cdn;
      return args;
    })
  },
  productionSourceMap:false
}