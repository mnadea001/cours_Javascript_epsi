const list = document.getElementById("list");
const input = document.getElementById("input");
const add = document.getElementById("add");
const clear = document.getElementById("clear");
const url = document.getElementById("url");
const load = document.getElementById("load");


load.style.background = "blue";

function taskToDom(task) {
    if (typeof task == "string" && task) {
        const li = document.createElement("li")
        const remove = document.createElement("button")

        li.textContent = task
        remove.textContent = "REMOVE"

        li.append(remove)
        list.append(li)
    }
}

const task = ["Coder en Python", "Coder en c++", "Coder TypeScript"];

for (let i = 0; i < task.length; i++) {
    taskToDom(task[i])
}

taskToDom("Nouvelle tâche");

// taskToDom()
    // Affichage de tâches - chargement
    // Ajout de l'ajout

// taskToDom("Nouvelle tâche")

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

// setInterval(() => console.log("Hello"), 2000)

// task.forEach((tache) => console.log(tache))