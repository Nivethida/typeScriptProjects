/**
 * Created by madhan on 7/10/17.
 */
function display_details(id:number,name:string,mail_id ?:string){
console.log("Id:",id);
console.log("Name",name);
if(mail_id !=undefined)
    console.log("Email id",mail_id);
}
display_details(123,"John");
display_details(111,"mary","mary@123.com");

function restFunction(...num: number[]){
    var i:number;
    var sum:number = 0;
    for(i = 0;i<num.length;i++){
        sum = sum+num[i];
    }
    console.log("sumof the array is",sum);
}
restFunction(1,3,45,5);
restFunction(1,5,2,8,5,9,245);

function defaultParameters(price:number,percentage:number = 0.3){
    var discount = price * percentage;
    console.log("The rate is:",discount);
}
defaultParameters(1000);
defaultParameters(1000,.5);

var arrowFunction = (x:number,b:number)=> {
    var y: number = x + b;
    console.log(y);
}
arrowFunction(4,6);

