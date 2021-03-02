/*
    private => for access only inside a class
    protected => for access insiude a class & its child class
    public => for access any where

    this => refer current class object
    super => refer parent class object
*/

class Mobile{
    //properties of class
    private brand :string;
    private price:number;
    private color: string;

    //constructor
    constructor(brand:string, price: number, color: string){
        this.brand = brand;
        this.price=price;
        this.color=color;
    }
    //getters and setters

    //getters => public
    public getBrand(){
        return this.brand;
    }
    //setters => change the value
    public setBrand(brand:string):void{
        this.brand = brand;
    }
    public getPrice():number{
        return this.price;
    }
    public setPrice(price:number):void{
        this.price=price;
    }
    public getColor():string{
        return this.color;
    }
    public setColor(color:string):void{
        this.color=color;
    }

    //specification
    public getAll():void{
        let spec:string = `${this.getBrand()} \n price : ${this.getPrice()} \n color: ${this.getColor(

        )}`;
        console.log(spec);
    }
}
let mobile = new Mobile('apple',89000,'red');
//console.log(mobile);
console.log(mobile.getBrand()); //can access even if private value due to get()

//mobile.setBrand('samsung'); // change the value due to set()
//console.log(mobile);

console.log(mobile.getPrice());
console.log(mobile.getColor());

mobile.getAll();