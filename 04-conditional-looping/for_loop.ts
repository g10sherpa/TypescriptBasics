/* 
for loop
for(initilization; condition; incr/decr){
    statements
}
*/

// print from 0-10 with diff 1
let result:string = '';
for (let i:number=0; i<=10; i++){
    result += `${i} `;
}
console.log(result);

//print from 20-0 with difference is 2
result = '';
for(let i:number=20; i>=0; i-=2){
    result += `${i} `;
}
console.log(result);

//print 5 stars
result = '';
let count : number = 5;
for(let i:number=1; i<=count; i++){
    for(let j =1; j<=i;j++){
        result += ' * ';
    }
    result += '\n';
}
console.log(result);