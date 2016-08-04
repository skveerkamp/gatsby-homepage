var CompressionPlugin = require("compression-webpack-plugin");

exports.modifyWebpackConfig = function(config, env) {
  if (env !== 'develop') {
    config.plugin('compression-plugin', CompressionPlugin, [{
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.html$|\.css$/,
      threshold: 2048,
      minRatio: 0
    }])
  }
  return config
}
