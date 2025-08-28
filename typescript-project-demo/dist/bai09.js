"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = exports.Dog = void 0;
class Dog {
    constructor(name) {
        this.name = name;
    }
    soud() {
        console.log(`${this.name} keu: Gau gau gau`);
    }
}
exports.Dog = Dog;
class Cat {
    constructor(name) {
        this.name = name;
    }
    soud() {
        console.log(`${this.name} keu: meo meo meo`);
    }
}
exports.Cat = Cat;
