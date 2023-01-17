"use strict"

const list = document.getElementById("list");
const input = document.getElementById("input");
const add = document.getElementById("add");
const clear = document.getElementById("clear");
const url = document.getElementById("url");
const load = document.getElementById("load");

load.style.background = "blue";

function taskToDom(task) {
    if (typeof task == "string" && task) {
        const li = document.createElement("li");
        const remove = document.createElement("button");

        li.textContent = task;
        remove.textContent = "REMOVE";

        remove.addEventListener("click", e => remove.parentNode.remove())
            
        li.append(remove);
        list.append(li);
    }
}

const task = ["Coder en Python", "Coder en c++", "Coder TypeScript"];

// for (let i = 0; i < task.length; i++) {
//     taskToDom(task[i]);
// }

// for (let t of task) {
//     taskToDom(t)
// }

// task.forEach(t => {
//     taskToDom(t)
// })

task.forEach(t => taskToDom(t));

taskToDom("Nouvelle tâche");

function newTask() {
    input.focus();
    taskToDom(input.value);
    input.value = "";
}

add.addEventListener("click", e => {
    newTask();
})

input.addEventListener("keydown", e => {
    if (e.key == "Enter") {
        newTask()
    }
})

clear.addEventListener("click", e => {
    list.innerHTML = ""
})

// Fonction newTask()
    // Elle donne le focus au champ "INPUT"
    // Ajoute une tâche "Lorem ipsum"

// Elle est appelée
    // Quand on clique sur le bouton "ADD"
    // Quand on appuie sur la touche entrée du champ "INPUT"

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
