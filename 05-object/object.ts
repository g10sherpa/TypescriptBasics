//custom type
interface Mobile{
    brand:string;
    color: string;
    price: number;
}

let mobile:Mobile = {
    brand: 'apple',
    color: 'black',
    price: 35000
};
console.log(mobile);

//complex object
interface Address{
    city:string;
    pincode:number;
}
interface Student{
    name: string;
    age: number;
    address :Address;
}
let student:Student={
    name:"gyamzo",
    age: 25,
    address:{
        city: "ktm",
        pincode: 999 
    }
}
console.log(student);