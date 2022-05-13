class Student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    addLocation(insert){
        this.insert=insert;
    }
    getInfo(){
        console.log("Name:"+(this.name),",","Age:"+(this.age));
    }
}
var student1=new Student("Madhu",21);
student1.addLocation("Pollachi");
student1.getInfo();