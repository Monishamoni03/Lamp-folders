function show(){
    console.log("Hello World");
}
show();

function add(a,m) {
    console.log(a+m);
}
function mul(x,y){
    console.log(x*y);
}
add(3,15);
mul(1,2);

let x = function (num) { 
    return num * num 
};
console.log(x(4));

let y = x(3);
console.log(y);