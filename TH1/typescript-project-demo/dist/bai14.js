"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developer = exports.Manager = void 0;
class Employee {
    constructor(name, phone, salary) {
        this.name = name;
        this.phone = phone;
        this.salary = salary;
    }
}
class Manager extends Employee {
    tienLuong() {
        return this.salary * 3;
    }
}
exports.Manager = Manager;
class Developer extends Employee {
    tienLuong() {
        return this.salary * 2;
    }
}
exports.Developer = Developer;
