// 접근 제어자 (access modifier)
// public, private, protected

class Employee {
    private name: string;
    private age: number;
    protected position: string;

    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    work() {
        console.log('work');
    }

    public getName(): string {
        return this.name;
    }

    public setName(value: string) {
        this.name = value;
    }
}

const employee = new Employee('chey', 20, 'developer');

class ExecutiveOfficer extends Employee {
    department: string;

    constructor(name: string, age: number, position: string, department: string) {
        super(name, age, position);
        this.department = department;
    }

    public setPosition(position: string) {
        this.position = position;
    }
}