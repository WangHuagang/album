var express=require('express');
var app=express();
var router=require('./controller')//引入入口文件时可以省略不写

//引入ejs模板
app.set('view engine','ejs');

//设置静态文件入口
app.use(express.static('./public'));
app.use(express.static('./uploads'));

//首页
app.get('/',router.shoeIndex);
app.get('/:albumname',router.showAlbum);
app.get('/up',router.showUp);

//404
app.use(function(req,res){
    res.render('err')
})

app.listen(3000);