if("hello") console.log("string true");
if(10) console.log("number true");
if({}) console.log("object true");
if([]) console.log("array true");

if(undefined) console.log("undefined true");
if(null) console.log("null true");
if(0) console.log("0 true");
if(NaN) console.log("NaN true");
if("") console.log("empty string true");

let name= undefined;
if(name){
    console.log("Name is defined");
}
else{
    console.log("Name is not defined");
}


let username="testuser";
let password="testpass";
let isloggedin=true;
if(isloggedin){
    if(username=="testuser" && password=="testpass"){
        console.log("Login successful");
    }
    else{
        console.log("Invalid credentials");
    }
    
}
else{
        console.log("Please log in to access resources");
    }
