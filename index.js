// 引入模块
var express = require('express');

// 初始化服务
var index_web = express();

// 引入fs
var fs = require('fs');
// 设置跨域访问
index_web.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
// 设置路由
index_web.get('/cityone',(req, res) => {
    res.sendFile(__dirname + '/json/city1.json');
});


// 图片1
index_web.get('/picone',(req, res) => {
    res.sendFile(__dirname + '/json/pic1.json');
});


// 图片2
index_web.get('/pictwo',(req, res) => {
    res.sendFile(__dirname + '/json/pic2.json');
});

// mdn
index_web.get('/mdn', (req, res) => {
    res.sendFile(__dirname + '/json/mdn.json');
});

// esj
index_web.get('/esj', (req, res) => {
    res.sendFile(__dirname + '/json/esj.json');
});

// 修手机
index_web.get('/xsj', (req, res) => {
    res.sendFile(__dirname + '/json/xsj.json');
});

// 修电脑
index_web.get('/xdn', (req, res) => {
    res.sendFile(__dirname + '/json/xdn.json');
});

// 到店维修
index_web.get('/ddwx', (req, res) => {
    res.sendFile(__dirname + '/json/ddwx.json');
});
// 监听端口号
index_web.listen(8999, () => {
    console.log('服务器启动成功！');
})
