var http=require("http");
var fs=require("fs");
http.createServer(function(req,res)
{
    fs.stat('newFile.txt',function(err,status)
    {
      if(err)
      {
         return console.log.error(err);
      }
      console.log(status);
      res.write("Whether it is a file? " + status.isFile());
      res.write("\nWhether it is a directory? " + status.isDirectory());
      res.end();
    });
}).listen(8080);