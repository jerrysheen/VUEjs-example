module.exports = {
    devServer:{
        port: 8888,
        host: "localhost",
        https: false,
        open: true,   // turn on broswer automaticly
        proxy:  {// dev-env configuration
            [process.env.VUE_APP_BASE_API] :{
                target: process.env.VUE_APP_SERVER_URL,
                changeOrigin: true,
                pathRewrite: {
                    ['^'+process.env.VUE_APP_BASE_API]: '',
                }
            }
        }
    },

    lintOnSave: false,      //格式检查
    productionSourceMap: false,   // disabled .map file
}