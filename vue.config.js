const webpack = require("webpack")
module.exports = {
    // 配置插件参数
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default']
            })
        ]
    },
    devServer: {
        disableHostCheck: false,
        port: 7888,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                /* 设置对象路径 */
                target: "http://localhost:8081",
                /* 开启跨域 */
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    },
};