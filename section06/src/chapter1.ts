// type scripts class

const employee = {
    name: 'chey',
    age: 20,
    position: 'developer',
    work() {
        console.log('work');
    },
}

class Employee {
    name: string;
    age: number;
    position: string;

    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    work() {
        console.log('work');
    }
}

const employee2 = new Employee('chey', 20, 'developer');

const employee3: Employee = {
    name: 'chey',
    age: 20,
    position: 'developer',
    work() {
        console.log('work');
    },
}

class ExecutiveOfficer extends Employee {
    department: string;

    constructor(name: string, age: number, position: string, department: string) {
        super(name, age, position);
        this.department = department;
    }
}