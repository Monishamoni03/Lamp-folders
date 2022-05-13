let set = new Set([1,4,5,2,2,2]);
set.add("hi");
set.add({"5": 'kilo', 'gm': 90});
set.add(5);// duplicate is ignored
console.log(set); //  { 1, 4, 5, 2, 'hi', { '5': 'kilo', gm: 90 } }
console.log(set.has('hi'));//true
set.delete(1);
console.log(set);//{ 4, 5, 2, 'hi', '5' }

//weaksets
let key1={},
    key2={ '90': 'ninety' }, // only objects are allowed in weaksets,can’t accept primitive values
    weakSet = new WeakSet([key1,key2]);
console.log(weakSet.has(key1));     // true
console.log(weakSet.has(key2));   //true

'use strict'
let wk=new WeakSet();
let obj={msg:"Bye"};
wk.add(obj);
console.log(wk.has(obj));  //true
wk.delete(obj);
console.log(wk.has(obj));   //false

