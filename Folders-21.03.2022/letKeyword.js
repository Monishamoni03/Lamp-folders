//function scope

function show(){
    {
        let a=15;
        a=a+3;
    } 
}
show()

//block scope

let fruit="mango"
if(fruit==="mango"){
  let fruit="apple"
  console.log(fruit)
}
console.log(fruit)
