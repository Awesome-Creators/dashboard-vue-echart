const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  productionSourceMap: false,
  configureWebpack: (config) => {
    //生产环境取消 console.log
    if (process.env.NODE_ENV === "production") {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@$", resolve("src"))
      .set("@api", resolve("src/api"))
      .set("@assets", resolve("src/assets"))
      .set("@comp", resolve("src/components"))
      .set("@views", resolve("src/views"))
      .set("@layout", resolve("src/layout"))
      .set("@static", resolve("src/static"))
      .set("@mobile", resolve("src/modules/mobile"));

    //生产环境，开启js\css压缩
    if (process.env.NODE_ENV === "production") {
      config.plugin("compressionPlugin").use(
        new CompressionPlugin({
          test: /\.(js|css|less)$/, // 匹配文件名
          threshold: 10240, // 对超过10k的数据压缩
          deleteOriginalAssets: false, // 不删除源文件
        })
      );
    }
  },

  css: {
    loaderOptions: {
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.sass` 这个文件
        // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
        additionalData: `@import "~@/scss/my-variables.scss"`,
      },
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `prependData` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      scss: {
        additionalData: `@import "~@/scss/my-variables.scss";`,
      },
    },
  },
  lintOnSave: false,
  devServer: {
    port: 3000,
    overlay: {
      warning: false,
      errors: false,
    },
    // proxy: {
    /* '/api': {
        target: 'https://mock.ihx.me/mock/5baf3052f7da7e07e04a5116/antd-pro', //mock API接口系统
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '/jeecg-boot': ''  //默认所有请求都加了jeecg-boot前缀，需要去掉
        }
      },*/
    //   "/jeecg-boot": {
    //     target: "http://localhost:8080", //请求本地 需要jeecg-boot后台项目
    //     ws: false,
    //     changeOrigin: true,
    //   },
    // },
  },
};
