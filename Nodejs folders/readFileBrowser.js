var http=require("http");  //to print in the website page
var fs=require("fs");
http.createServer(function(req,res)
{
    fs.readFile('sample.txt',function(err,data)
    {
      if(err)
      {
         return console.log.error(err);
      }
      console.log("Asyn data: "+data.toString());
      res.write(data);
      res.end();
    });
}).listen(8080);
