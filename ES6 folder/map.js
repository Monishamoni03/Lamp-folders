var map=new Map();
map.set('name','age');
map.set('id','branch');
console.log(map.size);

//weakmap
"use strict"
let weakMap=new WeakMap();
let obj={};
console.log(weakMap.set(obj,"Hello"));
console.log(weakMap.has(obj));

//for of loop
"use strict"
var colors=new Map([
    ['1','Black'],
    ['2','Blue']
]);
for(let color of colors.values()){
    console.log(color);
}console.log(" ");
 for(let color of colors.entries())
  console.log(color[0]);
