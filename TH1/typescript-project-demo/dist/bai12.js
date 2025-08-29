"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fish = exports.Bird = void 0;
class Bird {
    constructor(name) {
        this.name = name;
    }
    soud() {
        console.log("et et et");
    }
}
exports.Bird = Bird;
class Fish {
    constructor(name, area) {
        this.name = name;
        this.area = area;
    }
    howToSwim() {
        console.log("boi bang vay");
    }
}
exports.Fish = Fish;
