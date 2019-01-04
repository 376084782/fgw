const CompressionWebpackPlugin = require("compression-webpack-plugin");

module.exports = {
  configureWebpack: {
    externals: {
      // axios: 'axios',
      // jquery: 'jquery'
    }
  },
  productionSourceMap: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 生产环境
      return {
        plugins: [
          new CompressionWebpackPlugin({
            test: /\.js$|\.html$|\.css/,
            threshold: 10240
          })
        ]
      };
    } else {
      // 开发环境
    }
  },
  chainWebpack: config => {
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");
    if (process.env.NODE_ENV === "production") {
      config
        .plugin("webpack-bundle-analyzer")
        .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
    }
  },
  css: {
    sourceMap: false,
    loaderOptions: {
      sass: {
        data: `
          @import "@/element-variables.scss";
        `
      }
    }
  },

  lintOnSave: false
};
