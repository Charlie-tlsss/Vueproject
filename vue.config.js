const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false, //关闭语法检查

  //开启代理服务器方式一
  // devServer:{
  //   proxy:'http://localhost:5005'
  // }
})
