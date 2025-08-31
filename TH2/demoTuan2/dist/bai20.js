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
exports.runTask_Bai20 = runTask_Bai20;
function fetchUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    id,
                    nameUser: `User ${id}`,
                });
            }, 2000);
        });
    });
}
function fetchUserWithTimeout(id_1) {
    return __awaiter(this, arguments, void 0, function* (id, timeout = 2000) {
        return Promise.race([
            fetchUser(id),
            new Promise((_, reject) => {
                setTimeout(() => reject(new Error("Quá thời gian đợi")), timeout);
            })
        ]);
    });
}
function runTask_Bai20() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield fetchUserWithTimeout(101);
            console.log("Fetched user: ", user);
        }
        catch (error) {
            console.error("Lỗi: ", error);
        }
    });
}
