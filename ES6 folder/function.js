//function
function color(){
    return "Black";
}
var newColor=color();
console.log(newColor);

//parameterized function
function sub(x,y){
    console.log(x-y);
}
sub(15,5);

//default function parameters - allows initialization with default values
function sample(a1,a2=50){
    console.log(a1,a2);
}
sample(100);
