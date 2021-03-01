// string, number, boolean, object, array, enum, void, any

//string
let employeeName:string='gyamzo';
console.log(`employee name : ${employeeName}`);

//number
let employeeAge : number = 27;
console.log(`employee name : ${employeeAge}`);

//boolean
let isManager:boolean = true;
console.log(`is manager : ${isManager}`);

//object
let mobile:object = {
    brand: 'apple',
    color: 'silver',
    price: 54000
};
console.log(mobile);

//array
let colors:string[]=['white', 'black','blue'];
console.log(colors);

//enum -> collection of const values
enum month{
    jan='hello',
    feb='world'
};
console.log(month.jan +  month.feb);   

//void: is a function with no return type
let greet = (name:string):void =>{ //no return statement, we use void 
    console.log(`hello ${name}`);
};
//greet(name: 'dangae');

//any: rarely or never used
let a:any =10; //we can assign array,string,number,etc
