/**
 * Created by madhan on 7/10/17.
 */
function display_details(id, name, mail_id) {
    console.log("Id:", id);
    console.log("Name", name);
    if (mail_id != undefined)
        console.log("Email id", mail_id);
}
display_details(123, "John");
display_details(111, "mary", "mary@123.com");
function restFunction() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }
    console.log("sumof the array is", sum);
}
restFunction(1, 3, 45, 5);
restFunction(1, 5, 2, 8, 5, 9, 245);
function defaultParameters(price, percentage) {
    if (percentage === void 0) { percentage = 0.3; }
    var discount = price * percentage;
    console.log("The rate is:", discount);
}
defaultParameters(1000);
defaultParameters(1000, .5);
var arrowFunction = function (x, b) {
    var y = x + b;
    console.log(y);
};
arrowFunction(4, 6);
//# sourceMappingURL=functionExamples.js.map