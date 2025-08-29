"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulateTaskBai7 = simulateTaskBai7;
function simulateTaskBai7(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task done in ${time}ms`);
        }, time);
    });
}
