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
exports.runTask_Bai15 = runTask_Bai15;
const bai14_1 = require("./bai14");
function runTask_Bai15() {
    return __awaiter(this, void 0, void 0, function* () {
        const numResovle = yield (0, bai14_1.mathX3Num)(2);
        console.log(`ket qua 1: = ${numResovle}`);
        const numResovle1 = yield (0, bai14_1.mathX3Num)(3);
        console.log(`ket qua 1: = ${numResovle1}`);
        const numResovle2 = yield (0, bai14_1.mathX3Num)(4);
        console.log(`ket qua 2: = ${numResovle2}`);
    });
}
