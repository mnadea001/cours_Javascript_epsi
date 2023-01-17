const list = document.getElementById("list");
const input = document.getElementById("input");
const add = document.getElementById("add");
const clear = document.getElementById("clear");
const url = document.getElementById("url");
const load = document.getElementById("load");

const task = ["Coder en Python", "Coder en c++", "Coder TypeScript"];
load.style.background = "blue";

for (let i = 0; i < task.length; i++) {
    if (typeof task[i] == "string" && task[i]) {
        const li = document.createElement("li")
        const remove = document.createElement("button")

        li.textContent = task[i]
        remove.textContent = "REMOVE"

        li.append(remove)
        list.append(li)
    }
}

// function hello() {
//     console.log("Hello !");
// }

// setInterval(hello, 2000)

// setInterval(function hello() {
//     console.log("Hello !");
// }, 2000)

// setInterval(function() {
//     console.log("Hello !");
// }, 2000)

// setInterval(() => {
//     console.log("Hello !");
// }, 2000)

// setInterval( name => console.log("Hello"), 2000)

task.forEach(tache => console.log(tache))