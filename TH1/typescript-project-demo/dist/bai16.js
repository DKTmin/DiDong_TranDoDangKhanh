"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
class Box {
    constructor(value) {
        this.value = value;
    }
    // set value
    setValue(value) {
        this.value = value;
    }
    // get value
    getValue() {
        return this.value;
    }
}
exports.Box = Box;
