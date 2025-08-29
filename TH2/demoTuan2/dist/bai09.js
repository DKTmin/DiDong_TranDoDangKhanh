"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fillterArrayAfter1Second = fillterArrayAfter1Second;
function fillterArrayAfter1Second(arr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evenNumbers = arr.filter(num => num % 2 === 0);
            resolve(evenNumbers);
        }, 1000);
    });
}
