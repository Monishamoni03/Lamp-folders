//function scope
function show(){
    console.log('value of x here: ',x)
    {
      var x=10;
      x=x+5;
    }
    console.log('value of x after for block: ',x)
  }
show()

//block scope
var fruit="mango"
if(fruit==="mango"){
  var fruit="apple"
  console.log(fruit)
}
console.log(fruit)
