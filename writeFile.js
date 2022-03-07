var http=require("http");
var fs=require("fs");
http.createServer(function(req,res)
{
    fs.writeFile('sample.txt',"Changed file",function(err)
    {
      if(err)
      {
         return console.log.error(err);
      }
      res.write("Success");
      res.end();
    });
}).listen(8080);