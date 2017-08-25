var fs=require('fs');

exports.getAllalbum=function(callback){
    fs.readdir('./uploads',function(err,files){
        if(err){
            res.send('出错了');
            return;
        }
         var allAlbum=[];
        (function iter(i){
            if(i==files.length){
                callback(allAlbum)//将结果放在回调函数中传递
                return;
            }
            fs.stat('./uploads/'+files[i],function(err,stats){
                if(stats.isDirectory){
                    allAlbum.push(files[i])//如果是文件夹，则向allAlbum中添加
                }
            iter(i+1)//函数进行迭代，解决异步执行的问题
        })
        })(0)//i的初始值为0
       
       
    })
   
}

exports.getAllImagesByAlbum=function(albumname,callback){
    fs.readdir('./uploads/'+albumname,function(err,files){
        if(err){
            return;
        }
        var allImage=[];
        (function iter(i){
            if(i==files.length){
                callback(err,allImage)//将结果放在回调函数中传递
                return;
            }
            fs.stat('./uploads/'+albumname+'/'+files[i],function(err,stats){
                 if(err){
                    return;
                }
                if(stats.isFile()){
                   allImage.push(files[i])//如果是文件夹，则向allAlbum中添加
                }
            iter(i+1)//函数进行迭代，解决异步执行的问题
        })
        })(0)//i的初始值为0
       
       
    })
}