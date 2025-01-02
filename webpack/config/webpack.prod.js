const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common');

/**
 * 發布用
 * @summary 合併通用配置
 */
module.exports = merge(common, {
    //
    mode: 'production',

    // 使用插件
    plugins: [
        // 產包前先清除舊包
        new CleanWebpackPlugin(),
    ],
  });