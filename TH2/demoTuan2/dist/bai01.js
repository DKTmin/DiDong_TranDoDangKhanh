"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myPromiseBai01 = void 0;
exports.myPromiseBai01 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello Async");
    }, 2000);
});
