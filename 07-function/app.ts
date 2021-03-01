// basic function
let greet = (name: string, age: number): void => {
  let msg: string = `hello ${name}, you are ${age} years old`;
  console.log(msg);
};
greet("gyamzo", 25);

// function with return type
let calNumber = (a: number, b: number): number => {
  let result: number = a + b + 2 * a + 2 * b;
  return result;
};
let value: number = calNumber(2, 5);
console.log(`the result is : ${value}`);

//function with an object as a parameter
interface Mobile {
  brand: string;
  color: string;
  price: number;
}
let mobileSpec = (mobile: Mobile) => {
  let spec: string = `brand: ${mobile.brand}
                        price : ${mobile.price}
                        color: ${mobile.color}`;
  console.log(spec);
};
let mobile: Mobile = {
  brand: "apple",
  color: "red",
  price: 55000,
};
mobileSpec(mobile);

// function with an array as a parameter
let printArray = (array:string[]):void =>{
    console.table(array);
};
let colors : string[]=['white', 'black','silver','red','blue'];
printArray(colors);
let courses:string[]=['html','css','js','react'];
printArray(courses);