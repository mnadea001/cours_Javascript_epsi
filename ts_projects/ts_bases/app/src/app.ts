console.log("Hello world !");

function add(n1: number, n2: number) {
    return n1 + n2
}

const number1 = 5
const number2 = 2.8

const result = add(number1, number2)
// test erreur
console.log(result);

// ---- Objets ----

const person = {
    firstname: "Geoffroy",
    age: 20
}

console.log(person.age);

// Un tableau de tâches
let tasks = ["TS", "c++", "Python"]

for (const el of tasks) {
    console.log(el); 
}

type Viennoiserie = "Pain au chocolat" | "Chocolatine"
let saisie_utilisateur: Viennoiserie

// ----

type User = {firstname: string, age: number}

function greet(user: User) {
    console.log(`Hi ! ${user.firstname}`);  
}

// ----

let userInput: unknown
let userName: string

userInput = "Max"
userInput = 5
// userName = userInput
if (typeof userInput === "string") {
    userName = userInput
}

// ----

const input = document.getElementById("user-input")! as HTMLInputElement

// const input = <HTMLInputElement>document.getElementById("user-input")!


if (input) {
    input.value = "Hello World !"
}

// ---- POO

