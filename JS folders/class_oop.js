class Student{
    constructor(name){
        this.name=name;
    }
    getInfo(){
        return this.name;
    }
}
let student1=new Student("Pathma");
console.log(student1.name);