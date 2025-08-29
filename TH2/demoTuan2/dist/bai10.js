"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printRepose = printRepose;
function printRepose(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("Promise thanh cong");
            }
            else {
                reject("Promise that bai");
            }
        }, 1000);
    });
}
