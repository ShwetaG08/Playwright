console.log(0=="");
console.log(0=="0");
console.log(""==0);

console.log(0==false);//0 is considered as false in JavaScript. So, it returns true.
console.log(0=="false");//"false" is a string and not 0. So, it returns false.
console.log(null==0);//null is considered as 0 in JavaScript. So, it returns true.
console.log(0==null);//null is considered as 0 in JavaScript. So, it returns true.
console.log(null===0);//strict equality operator checks both value and data type. So, it returns false.
console.log(null==undefined);//null and undefined are considered equal in JavaScript. So, it returns true.  
