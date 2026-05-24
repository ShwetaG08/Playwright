//Assignment operator
let x=10;
x=20;
console.log(x);

//Arithmetic operator
let a=10;
let b=5;
let sum=(a+b);
console.log(sum);

function multiply(a,b){
    
    let mul=(a*b);
    return mul
        }
console.log(multiply(10,30));

function divide(a,b){
    let div=(a/b);
    return div
}
console.log("quotient is"+divide(10,3));

function modulus(a,b){
    let mod=(a%b);
    return mod
}
console.log("remainder is"+modulus(10,3));

//Exponentiation operator
let num= 4
function power(num,exp){
    let res= (num**exp);
    console.log(res);
    return res;
}
power(num,8);

//compund assignment operator
let num2= 6;
num2+=4;
console.log(num2);

let num3= 3;
num3-=4;
console.log(num3);


//Comparison operator
let num4= 10;
let num5= 20;
console.log(num4>num5);
console.log(num4<num5);
console.log(num4>=num5); //4>5 or 4===5
console.log(num4<=num5); //4<5 or 4===5

console.log(5==4.9999);
console.log(5=="5"); //== operator checks only value which is 5 and not data type. So, it returns true.
console.log(5==="5"); //"5" is a string and not integer.operator checks both value and data type. So, it returns false.