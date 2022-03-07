var http=require("http");
var fs=require("fs");
http.createServer(function(req,res)
{
    fs.appendFile('sample.txt',"Done",function(err)
    {
      if(err)
      {
         return console.log.error(err);
      }
      res.write("Appended Successfully");
      res.end();
    });
}).listen(8080);