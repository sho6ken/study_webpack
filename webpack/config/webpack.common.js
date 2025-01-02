const path = require('path');

/**
 * 
 */
module.exports = {
    // 文件入口
    entry: path.join(__dirname, '../src/index.ts'),

    // 輸出配置
    output: {
        // 輸出檔名
        filename: 'plugin.js',

        // 輸出路徑
        path: path.join(__dirname, '../dist'),
    },

    // 解析配置
    resolve: {
        // 解析順序
        extensions: ['.ts', '.tsx', '.js'],
    },

    // 模塊處理
    module: {
        // 規則
        rules: [{
            //
            test: /\.ts(x?)$/,

            //
            use: [{
                //
                loader: 'ts-loader',
            }],
        }],
    }
};