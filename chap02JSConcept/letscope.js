let a= 10;
console.log(a); // Output: 10
function print() {
    console.log("test function scope");
    let a= 20;
    console.log(a); // Output: 20
    if(true){
        let a= 30;
        console.log(a); // Output: 30
    }
    console.log("F-->",a); // Output: 20
}
console.log("G-->",a); // Output: 10
print();
