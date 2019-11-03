module.exports = {
    devServer:{
        port: 8888,
        host: "localhost",
        https: false,
        open: true,   // turn on broswer automaticly
    },

    lintOnSave: false,      //格式检查
    productionSourceMap: false,   // disabled .map file
}