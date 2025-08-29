abstract class Employee {
    private name: string;
    private phone: string;
    protected salary: number;

    constructor(name: string, phone: string, salary: number) {
        this.name = name;
        this.phone = phone;
        this.salary = salary;
    }

    abstract tienLuong(): number;
}

export class Manager extends Employee {

    tienLuong(): number {
        return this.salary * 3;
    }

}

export class Developer extends Employee {
    tienLuong(): number {
        return this.salary * 2;
    }

}