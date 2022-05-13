function* gen(){
    yield 100;
    yield;
    yield 3;
}
var myGen=gen();
console.log(myGen.next().value);
console.log(myGen.next().value);
console.log(myGen.next().value);

//next() method
function* sample(){
    yield 07;
}var gen=sample();
console.log(gen.next());

//for of loop
'use strict';
function* vowels(){
    yield 'a';
    yield 'e';
    yield 'i';
    yield 'o';
    yield 'u';
}
for(let alpha of vowels()){
    console.log(alpha);
}