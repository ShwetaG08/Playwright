/*let count=0;
count=count+1;
console.log(count);

let count=5"*/

let a=10;//global variable
a=20;
console.log(a);//20

let testcase= "pending";
if(testcase==="pending"){
    let executiontime=1200;
    console.log("inside block",executiontime);
}
console.log(executiontime);//block scope variable not accessible outside the block