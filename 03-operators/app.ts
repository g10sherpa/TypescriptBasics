/*
    1. Arithmetic operators : +,-,/,*,%
    2. short hand math operators: +=, -=, /=,*=
    3. conditional operators
    4. logical operators
    5. increment/decrement operators
*/

//1. arithmetic operators
let n1:number = 10;
let n2:number = 20;
console.log(`sum is : ${n1+n2}`);
console.log(`sub is : ${n2-n1}`);
console.log(`mul is : ${n1*n2}`);
console.log(`div is : ${n2 / n1}`);

// 2. short hand math operators
let a:number = 10;
let b:number = 20;
let add:number = 30;
//add = add + (a+b);
add +=(a*b);
console.log(add);

// 3. conditional
let age:number = 18;
let result:string = '';
if(age <= 18){
    result = 'you are not eligible to make citizenship card';
}
console.log(result);

// logical operator
let inRelation:boolean = true;
let isParentAgreed:boolean = false;
if(inRelation && isParentAgreed){
    console.log('get marry soon');
}else{
    console.log('wait until partents agreed');
}

//increment & decrement
let x:number = 10;
//x = x+1;
//x -=1;
x++;
console.log(x);