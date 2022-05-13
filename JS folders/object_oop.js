//object literal
var employee={
    name:"Moni",
    id:19,
};
console.log(employee.name,employee.id);

//object constructor
function details(names,ids){
    this.names=names;
    this.ids=ids;
}
var employee=details("Sai ram",100);
console.log(names,ids);

//new keyword
var student=new Object();
student.place="Chennai";
student.age=20;
console.log(student.place,student.age);