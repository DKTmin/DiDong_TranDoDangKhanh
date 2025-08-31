"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runTask_Bai13 = runTask_Bai13;
function simulateTask_Bai13(ms, testFail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (testFail) {
                resolve(`Task finish ${ms} ms`);
            }
            else {
                reject("Task fail");
            }
        }, ms);
    });
}
function runTask_Bai13() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield simulateTask_Bai13(2000, true);
            console.log(result);
        }
        catch (error) {
            console.log("Caught error", error);
        }
    });
}
