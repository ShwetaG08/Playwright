let day =6;
switch(day){
case 1:
    console.log("Monday");
    break;
case 2:
    console.log("Tuesday"); 
    break;
case 3:
    console.log("Wednesday");   
    break;
case 4:
    console.log("Thursday");   
    break;  
case 5:
    console.log("Friday");   
    break;
default:
    console.log("Invalid day");
}

//switch group
let browser="firefox";
switch(browser){
    case "chrome":
    case "edge":
        console.log("Supported browser");
        break;

    case "firefox":
        console.log("mozilla browser");
        break;

    case "safari":
        console.log("Apple browser");
        break;

        default:
        console.log("Unsupported browser");
    }