/*
    1. optional parameter
    2. spread operators
    3. Destructuring
*/

//1. optional operator
let printNumber = (start:number, end:number=49):void =>{
    let result:string='';
    for(let i:number=start; i<=end;i++){
        result += `${i} `;
    }
    console.log(result);
};
printNumber(3);

//2. spread operators:merge two objects
 let product:any={
     name: 'watch',
     price:444,
     qty:5
 }
 let newProduct: any ={
     //product,
     //name:product.name,
     ...product,
     image: "www.google.com/watches/mi/1.jpg"
 }
 console.log(newProduct);

 let arrayOne  :any[]=[10,20,30];
 let arrayTwo  :any[]=[40,50,60];
 let finalArray : any[]=[...arrayOne,...arrayTwo];
 console.log(finalArray);

 //3. De-struturing :> break down the big objects into small one
interface Address{
    city:string,
    state:string,
    country: string
}
interface College{
    location :string,
    collegeName:string,
}
 interface Student{
    name: string,
    age: number,
    course: string,
    address:Address,
    college: College
}
let student:Student={
    name: 'gyamzo',
    age:25,
    course:"bcis",
    address:{
        city:"ktm",
        state:'ts',
        country: "Nepal"
    },
    college:{
        location:"new work",
        collegeName:"new work intl"
    }
};
//console.log(student);
 //destructuring
 let{city,state,country}=student.address;
 console.log(city);
 console.log(state);
 console.log(country);