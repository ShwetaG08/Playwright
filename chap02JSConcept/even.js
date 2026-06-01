function even(num){
if(num%2==0){
    console.log(num +" is even number");
}
else{
    console.log(num +" is odd number");
}
}
even (10);

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
        else if(perc<70&&perc>=60){
            console.log("Grade D");
        }
        else{
            console.log("Fail");
    }
}
    grade(95);

    function leapyear(year){
        if((year%4===0 &&year%100 !==0)||year%400===0){
            console.log(year +" is a leap year");
        }
        else{
            console.log(year +" is not a leap year");
        }
    }
leapyear(2026);

function testpass(actual,expected){
if (expected===actual){
    console.log("Test case passed");
}
else{
    console.log("Test case failed");
}
}
testpass("test success","test success");
testpass(200,401);

function severity(sev){
    if(sev===9 || sev===10){
        console.log("Critical severity");
    }
    else if(sev===7 || sev===8){
        console.log("Hight severity");
    }
    else if (sev===4 || sev===6){
        console.log("Medium severity");
    }
    else if (sev===1 || sev===3){
        console.log("Low severity");
    }
    else{
        console.log("invalid severity");
    }
}
severity(7);


function statuscode(status){
    if(status>=200&& status<300){
        console.log("Success");
    }
    else if(status>=300 && status<400){ 
        console.log("Redirection");
    }
    else if(status>=400 && status<500){
        console.log("Client error");
    }
    else if(status>=500 && status<600){
        console.log("Server error");
    }
    else{
        console.log("Invalid status code");
    }
}
statuscode(407);