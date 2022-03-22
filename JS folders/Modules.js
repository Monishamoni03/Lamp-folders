function Sum(){    //module name: sum
    var a,m;
    function calc(x,y){
        a=x;
        m=y;
    }
    function sumCalc(){
        return (a+m);
    }
    var module={
        calc:calc,
        sumCalc:sumCalc
    };                    //new instance is created
    return module;
}
var total=Sum();     //creating sum module instance
total.calc(15,3);
console.log("SUM= " +total.sumCalc());