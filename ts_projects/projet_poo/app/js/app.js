"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department: ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployees() {
        console.log(`Employees nb: ${this.employees.length}`);
        console.log(`Employees: ${this.employees}`);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.id = id;
        this.admins = admins;
        for (const admin of admins) {
            this.addEmployee(admin);
        }
    }
    printEmployees() {
        super.printEmployees();
        console.log(`Admins: ${this.admins}`);
    }
    countEmployees() {
        console.log(`Employees nb: ${this.employees}`);
    }
    get adminsList() {
        return this.admins;
    }
    set adminsList(admin) {
        console.log("Vérification des droits d'accès ---- ok");
        this.admins = admin;
    }
}
const dept1 = new ITDepartment("00A", ["Max"]);
console.log(dept1);
dept1.describe();
dept1.addEmployee("Helen");
dept1.printEmployees();
dept1.adminsList = ["Carol", "Tom"];
dept1.printEmployees();
//# sourceMappingURL=app.js.map