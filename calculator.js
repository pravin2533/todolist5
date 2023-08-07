const express=require("express");
const bodyParser=require("body-parser")
const app=express();
app.use(bodyParser.urlencoded({extended:true}))
app.get("/",function(req,res)
{
  res.sendFile(__dirname +"/index.html");
})
function logert(req,res,next)
{
  console.log(req.method);
  console.log(req.url);
  next();
}
app.use(logert);
app.listen(3000,function(){
  console.log("statring 3000 port");
});

app.post("/",function(req,res)
{
  var num1=Number(req.body.num1);
  var num2=Number(req.body.num2);
  var resu=num1+num2;
  res.send("the result is "+resu);
  console.log(req.body);

})

//app.put allow us to update the entire File
//app.patch allow us to update only specefic value
//app.delete allow us to delete the entire the route


// line ni 5 is for sending the file as response
//__dirname give the location of current directory

/*
with the help of body parser we can pass the http request
and also these allow us to go any route requst
*/
//urlencoded is used when data is passed from html form

//extended:true allo us to post nexted object
