module.exports = {
    devServer:{
        port: 8888,
        host: "localhost",
        https: false,
        open: true,   // turn on broswer automaticly
        proxy:  {// dev-env configuration
            '/dev-api':{
                target: 'http://localhost:8001',
                changeOrigin: true,
                pathRewrite: {
                    '/dev-api': '',
                }
            }
        }
    },

    lintOnSave: false,      //格式检查
    productionSourceMap: false,   // disabled .map file
}