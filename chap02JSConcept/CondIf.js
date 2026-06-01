let age=20;
if (age>18){
    console.log("Can vote");
}
    else{
        console.log("Cannot vote");
    }


    function grade(perc){
        if(perc>=90){
            console.log("Grade A");
        }
        else if(perc<90 && perc>=80) {
            console.log("Grade B");
        }   
        else if(perc<80&&perc>=70){
            console.log("Grade C");
        }
        else{
            console.log("Grade D");
        }
    }
    grade(95);


    let isloggedin = false;
    let user_role="editor";

if(isloggedin){
    if(user_role==="admin"){
        console.log("Admin can access all resources");
    }
    else if(user_role==="editor"){
        console.log("Editor can access limited resources");
    }
    else if(user_role==="viewer"){
        console.log("Viewer can access only view resources");
    }
    else{
        console.log("Invalid user role");
    }
}
else{
    console.log("Please log in to access resources");
}

function checkstatus(status){
//let status=404
if(status===200){
    console.log("OK");
}
else if(status===404){
    console.log("Not Found");
}else{
    console.log("Other status");
}
}
checkstatus(501);