/**
 * Created by madhan on 7/10/17.
 */
var Greetings = (function () {
    function Greetings() {
    }
    Greetings.prototype.greet = function () {
        console.log("HelloWorld");
    };
    return Greetings;
}());
var obj = new Greetings();
obj.greet();
//# sourceMappingURL=ClassExample.js.map