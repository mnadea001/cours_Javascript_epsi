class Department {
    // private name: string
    protected employees: string[] = []

    constructor(protected readonly id: string, protected name: string) {
        // this.name = name
    }

    describe () {
        console.log(`Department: ${this.name}`);
    }

    addEmployee(employee: string) {
        // Gestion des droits
        this.employees.push(employee)
    }
    
    printEmployees() {
        // Gestion des droits
        console.log(`Employees nb: ${this.employees.length}`)
        console.log(`Employees: ${this.employees}`)
    }
}

class ITDepartment extends Department {
    // superAdmin: string
        // 1er admin de la liste
        // Accesseur & mutateurs

    constructor(protected id: string, private admins: string[]) {
        super(id, "IT")
        for (const admin of admins) {
            this.addEmployee(admin)
        }
    }

    printEmployees() {
        super.printEmployees()
        console.log(`Admins: ${this.admins}`);
    }

    countEmployees() {
        console.log(`Employees nb: ${this.employees}`);
        
    }

    get adminsList() {
        // Gestion des droits d'accès
        return this.admins
    }

    set adminsList(admin: string[]) {
        console.log("Vérification des droits d'accès ---- ok");
        
        this.admins = admin
    }
}

const dept1 = new ITDepartment("00A", ["Max"])
console.log(dept1);
dept1.describe()

// dept1.addEmployee("Max")
dept1.addEmployee("Helen")

dept1.printEmployees()

dept1.adminsList = ["Carol", "Tom"]
dept1.printEmployees()