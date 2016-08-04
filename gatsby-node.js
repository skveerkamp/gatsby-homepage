var CompressionPlugin = require('compression-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

exports.modifyWebpackConfig = function(config, env) {
  if (env !== 'develop') {
    config.plugin('compression-plugin', CompressionPlugin, [{
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.html$|\.css$/,
      threshold: 2048,
      minRatio: 0
    }])
    config.plugin('additional-copy-plugin', CopyWebpackPlugin, [[
      { from: path.join(__dirname, 'additional_assets') }
    ]])
  }
  return config
}
