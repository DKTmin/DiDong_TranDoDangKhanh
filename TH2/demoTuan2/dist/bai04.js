"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomNumber = randomNumber;
function randomNumber() {
    return new Promise((resolve, reject) => {
        const random = Math.floor(Math.random() * 100) + 1;
        if (random == null) {
            reject(new Error("Random number too low!"));
        }
        else {
            resolve(random);
        }
    });
}
