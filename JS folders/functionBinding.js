//binding this keyword
let employee={
  name:"Moni"
};
function func(details){
  console.log(details+ ', '+this.name);       //Hai, Moni
}
let user=func.bind(employee);    //employee--> parameter
user("Hai");


var sum=function(x,y){
    return x+y;
};
var add=sum.bind(null,3);
console.log(add(7));       //10
