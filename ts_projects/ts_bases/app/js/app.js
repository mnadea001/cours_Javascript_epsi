"use strict";
console.log("Hello world !");
function add(n1, n2) {
    return n1 + n2;
}
var number1 = 5;
var number2 = 2.8;
var result = add(number1, number2);
console.log(result);
var person = {
    firstname: "Geoffroy",
    age: 20
};
console.log(person.age);
var tasks = ["TS", "c++", "Python"];
for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
    var el = tasks_1[_i];
    console.log(el);
}
var saisie_utilisateur;
function greet(user) {
    console.log("Hi ! ".concat(user.firstname));
}
var userInput;
var userName;
userInput = "Max";
userInput = 5;
if (typeof userInput === "string") {
    userName = userInput;
}
//# sourceMappingURL=app.js.map