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
exports.runtask_Bai16 = runtask_Bai16;
const bai14_1 = require("./bai14");
function runtask_Bai16() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield Promise.all([
            (0, bai14_1.mathX3Num)(2),
            (0, bai14_1.mathX3Num)(3),
            (0, bai14_1.mathX3Num)(4),
        ]);
        console.log("Ket qua", result);
    });
}
