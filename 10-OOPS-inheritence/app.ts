class BasicCalc{
    public result:number;

    constructor(){
        this.result = 0;
    }
    public calSum(a:number,b:number):void{
        this.result = a+b;
        console.log(this.result);
    }
    public calSub(a:number,b:number):void{
        this.result = a-b;
        console.log(this.result);
    }
}
class AdvCalc extends BasicCalc{
    constructor(){
        super(); //executes the parent class constructor
    }
    public calMul(a:number,b:number):void{
        this.result = a*b;
        console.log(this.result);
    }
    public calDiv(a:number,b:number):void{
        this.result = a/b;
        console.log(this.result);
    }
}
let advCalc = new AdvCalc();
advCalc.calSum(10,5);
advCalc.calSub(9,7);
advCalc.calMul(9,7);
advCalc.calDiv(9,3);