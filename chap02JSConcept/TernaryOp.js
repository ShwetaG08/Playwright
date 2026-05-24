// Ternary operator examples
let age=18;
let isAdult=(age>=18)?"Yes":"No";
console.log(isAdult);

let env="stage";
let url= (env==="production")?"prod url":"stage url";
console.log(url);

let isCI=true;
let log= isCI?"headless":"Browser";
console.log(log);

let isExp=200;
let isAct=200;
let res=(isExp===isAct)?"Pass":"Fail";
console.log(res);

let rsptime=120;
let sla=100;
let res1=(rsptime<=sla)?"with in SLA":"beyond SLA";
console.log(`Response: ${rsptime} ms is ${res1}`);


let age1=16;
let enjoy= (age1>18)?
((age1>=26)?"Drink and Enjoy":"Goa"):"No Goa";
console.log(enjoy);

//Max of 2 using ternary operator
function max2(numb3,numb4){
let max2=(numb3===numb4)?(`Both numbers are equal`):
((numb3>numb4)?`${numb3} is large`:`${numb4} is large`);
console.log(`${max2}`);
return max2;
}
max2(20,2);

//Max of 3 using ternary operator 8   5  7

function max3(numb7,numb8,numb9){
  
    let maximum =
        (numb7 === numb8 && numb8 === numb9)
            ? "All numbers are equal"
            : (numb7 > numb8)
                ? ((numb7 > numb9)
                    ? `${numb7} is large`
                    : `${numb9} is large`)
                : ((numb8 > numb9)
                    ? `${numb8} is large`
                    : `${numb9} is large`);

    console.log(maximum);
}
   max3(8,15,7);