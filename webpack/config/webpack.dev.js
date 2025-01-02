const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common');

/**
 * 開發用
 * @summary 合併通用配置, 不加密
 */
module.exports = merge(common, {
    //
    mode: 'development',

    // 使用插件
    plugins: [
        // 產包前先清除舊包
        new CleanWebpackPlugin(),
    ],
  });