const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: "localhost", // 或者使用 '0.0.0.0'
    port: 8080,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:5000", //'https://testhand.liuweiqing.top',//https://testhand.liuweiqing.top/http://127.0.0.1:5000
        changeOrigin: true,
      },
    },
  },
  pages: {
    index: {
      // entry for the page
      entry: "src/main.js",
      // the source template
      template: "public/index.html",
      // output as dist/index.html
      filename: "index.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "handwrite 手写文字生成",
    },
  },
  filenameHashing: process.env.NODE_ENV === "production",
});
