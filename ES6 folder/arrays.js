var mul=[[1,2],[3,15]];
console.log(mul[0][0]);
console.log(mul[0][1]);
console.log(mul[1][0]);
console.log(mul[1][1]);

//passing array to function
var color=new Array('white','black','blue');
function sample(color){
    for(var i=0;i<color.length;i++){
        console.log(color[i]);
    }
}sample(color)

//return array from function
function arr(){
    return new Array('red','black');
}var color=arr();
for(var i in color){
    console.log(color[i]);
}