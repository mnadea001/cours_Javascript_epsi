"use strict";
console.log("Hello world !");
function add(n1, n2) {
    return n1 + n2;
}
const number1 = 5;
const number2 = 2.8;
const result = add(number1, number2);
console.log(result);
const person = {
    firstname: "Geoffroy",
    age: 20
};
console.log(person.age);
let tasks = ["TS", "c++", "Python"];
for (const el of tasks) {
    console.log(el);
}
let saisie_utilisateur;
function greet(user) {
    console.log(`Hi ! ${user.firstname}`);
}
let userInput;
let userName;
userInput = "Max";
userInput = 5;
if (typeof userInput === "string") {
    userName = userInput;
}
const input = document.getElementById("user-input");
if (input) {
    input.value = "Hello World !";
}
//# sourceMappingURL=app.js.map