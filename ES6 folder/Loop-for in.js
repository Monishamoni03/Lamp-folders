function Mobile(model_no){
    this.Model=model_no;
    this.color='white';
}
var Honor=new Mobile("9Lite");
for(var adv in Honor){
    console.log(adv+":"+Honor[adv]);      //Model:9Lite
}                                         //color:white