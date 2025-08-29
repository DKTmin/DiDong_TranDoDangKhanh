"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promiseChain = promiseChain;
function promiseChain(num) {
    return Promise.resolve(num)
        .then(n => n * n)
        .then(n => n * 2)
        .then(n => n + 5)
        .then(result => {
        return `Result: ${result}`;
    });
}
