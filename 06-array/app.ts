//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

interface Employee{
    name: string;
    age: number;
    location: string;
}
let employees:Employee[] = [
    {
        name: "gyamzo",
        age: 26,
        location:"ktm"
    },
    {
        name: "gyamso",
        age: 24,
        location:"ggktm"
    }
];
console.log(employees);

// print only names
// normal for-loop, for-in, for-of, for-each, arrow function
let result :string ='';
for(let i:number=0;i<employees.length;i++){
    let employee:Employee = employees[i];
    result += ` ${employees[i].name} `;
}
console.log(result);

//for-in loop
result ='';
for(let index in employees){
    let employee:Employee = employees[index];
    result += ` ${employee.name} `;
}
console.log(result);

//for-of loop
result ='';
for(let employee of employees){
    result += ` ${employee.name} `;
}
console.log(result);

// for-each function
employees.forEach(function(employee:Employee){
    result += `${employee.location} `;
});
console.log(result);

//for-each function with arrow function
result ='';
employees.forEach((employee:Employee) =>{
    result += `${employee.location} `;
});
console.log(result);

//splice, slice, map, reduce, filter, find

//splice :> splice() method changes the content of an array, adding new elements while removing old elements.
var arr = ["orange", "mango", "banana", "sugar", "tea"];  
var removed = arr.splice(2, 0, "water");  
console.log("After adding 1: " + arr );  
console.log("removed is: " + removed); 
          
removed = arr.splice(3, 1);  
console.log("After removing 1: " + arr );  
console.log("removed is: " + removed);

//slice:> slice() method extracts a section of an array and returns a new array.
var arr = ["orange", "mango", "banana", "sugar", "tea"]; 
console.log("arr.slice( 1, 2) : " + arr.slice( 1, 2) );  
console.log("arr.slice( 1, 3) : " + arr.slice( 1, 3) );
