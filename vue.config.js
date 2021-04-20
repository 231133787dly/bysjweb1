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
        port: 8081,
        https: false,
        hotOnly: false,
        proxy: null
    },
};