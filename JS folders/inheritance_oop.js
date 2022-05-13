class student{
    constructor(name){
        this.name=name;
    }
    details(){
        return this.name;
    }
}
class info extends student{
    constructor(name,place){
        super(name);
        this.place=place;
    }
    details(){
        return super.details();
    }
}
var information=new info("Athulai","Madurai");
console.log(information.details());