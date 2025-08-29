"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulateTaskBai6 = simulateTaskBai6;
function simulateTaskBai6(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task done in ${time}ms`);
        }, time);
    });
}
