"use strict";

const Person = {
    name: "Geoffroy",
    email: "geoffroy@gl-conseil.dev",
    isAdmin: true,
    info: function () {
        return `Name: ${this.name} - email: ${this.email}`;
    },
};

console.log(Person.info());

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    info() {
        setInterval(() => {
            console.log(`name: ${this.name} email: ${this.email}`);
        }, 1000)
    }
}

const George = new User("George", "george@example.com");
const Bernard = new User("Bernard", "bernard@example.com");

console.log(George);
console.log(Bernard);
George.info();