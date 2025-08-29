"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat11 = exports.Dog11 = exports.Animal = void 0;
class Animal {
    constructor(name) {
        this.name = name;
    }
}
exports.Animal = Animal;
class Dog11 extends Animal {
    bark() {
        console.log(`${this.name} keu: Gau gau gau`);
    }
}
exports.Dog11 = Dog11;
class Cat11 extends Animal {
    meow() {
        console.log(`${this.name} keu: Meo meo meo`);
    }
}
exports.Cat11 = Cat11;
