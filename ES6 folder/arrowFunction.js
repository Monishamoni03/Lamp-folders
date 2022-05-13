var fun=()=> console.log("Hello");
fun();

//with paranthesis
var show=(a,m)=>
{
    console.log(a+" "+m);
}
show(100,200);

//default parameters
var show=(a,m=500)=>
{
    console.log(a+" "+m);
}
show(10);

//overwritten
var sample=(a,m=17)=>{
    console.log(a+" "+m);
}
sample(19,5);

//without paranthesis
var demo=a=>{
    console.log(a);
}
demo("Helloo");

//with rest parameters
var value=(a,...args)=>{
    console.log(a+" "+args);
}
value(1,3,5,7);