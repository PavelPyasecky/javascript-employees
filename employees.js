class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = 0;
        this.taxPercents = 13;
    }

    getSalary() {
        return this.salary * (100 - this.taxPercents) / 100;
    }
}


class Manager extends Employee {
    constructor(firstName, lastName, salary) {
        super(firstName, lastName);
        this.salary = salary;
    }
}


class Agent extends Employee {
    constructor(firstName, lastName, moneyPerEmployee) {
        super(firstName, lastName);
        this.moneyPerEmployee = moneyPerEmployee;
    }

    set amountOfEmployees(value) {
        if (value < 0) throw new Error('Negative number of employees!');
        this._amountOfEmployees = value;
        this.salary = this._amountOfEmployees * this.moneyPerEmployee;
    }
}

class Workman extends Employee {
    constructor(firstName, lastName, moneyPerHour) {
        super(firstName, lastName);
        this.moneyPerHour = moneyPerHour;
    }

    set workingHours(value) {
        if (value < 0) throw new Error('Negative number of hours!')
        this._workingHours = value;
        this.salary = this._workingHours * this.moneyPerHour;
    }
}

function showSalary(employee) {
    console.log(`${employee.firstName} ${employee.lastName} has salary: \$${employee.getSalary()}`)
}

let sam = new Manager('Sam', 'Winchester', 1600);
let din = new Agent('Din', 'Winchester', 110);
let bob = new Workman('Bob', 'Singer',  6)

din.amountOfEmployees = 8;
bob.workingHours = 174;

showSalary(sam);
showSalary(din);
showSalary(bob);
