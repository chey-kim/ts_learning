// 접근 제어자 (access modifier)
// public, private, protected

class Employee {
    private _name: string;
    private _age: number;
    protected _position: string;

    constructor(name: string, age: number, position: string) {
        this._name = name;
        this._age = age;
        this._position = position;
    }

    work() {
        console.log('work');
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
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
        this._position = position;
    }
}