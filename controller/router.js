var file=require('../model/file.js')

exports.shoeIndex=function(req,res){
    file.getAllalbum(function(allAlbum){
        res.render('index',{
            name:allAlbum
        })
    })
}

//相册页

exports.showAlbum=function(req,res){
    var albumname=req.params.albumname;
    file.getAllImagesByAlbum(albumname,function(err,allImage){
        if(err){
            res.render('err')
        }
        res.render('album',{
            'albumname':albumname,
            'images':allImage
        })
    })
};


exports.showUp=function(req,res){
    res.render("up")
}