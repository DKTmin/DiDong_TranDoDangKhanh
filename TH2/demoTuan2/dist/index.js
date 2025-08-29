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
const bai11_1 = require("./bai11");
//bai01 
// myPromiseBai01.then((message) => {
//   console.log("Kết quả:", message);
// });
// bai02
// myPromiseBai02.then((message) => {
//   console.log("Kết quả:", message);
// });
// bai03
// rejectAfterOneSecond()
//   .then(() => {
//     console.log("Nó không chạy");
//   })
//   .catch((error) => {
//     console.error("Cảnh báo lỗi:", error.message);
//   });
// bai04
// randomNumber()
// .then((num) => { 
//     console.log("So ngau nhien: ",num); 
// })
// .catch((err) => { 
//     console.error("Loi phat sinh nhau nhien so", err.message); 
// })
// bai05
// simulateTask(1000).then((mess => { 
//     console.log(mess)
// }))
// bai06
// const task1 = simulateTaskBai6(1000); 
// const task2 = simulateTaskBai6(2000); 
// const task3 = simulateTaskBai6(1500);
// Promise.all([task1, task2, task3])
//     .then((results) => {
//         console.log("Tat Ca Hoan Thanh")
//         results.forEach((result, index) => {
//             console.log(`Task ${index + 1}: ${result}`);
//         });
//     })
//     .catch((error) => {
//         console.error("One of the tasks failed:", error);
//     });
// bai07
// const task1 = simulateTaskBai6(5000); 
// const task2 = simulateTaskBai6(1000); 
// const task3 = simulateTaskBai6(1500);
// Promise.race([task1, task2, task3])
//     .then((results) => {
//         console.log("Tat Ca Hoan Thanh", results)
//     })
//     .catch((error) => {
//         console.error("One of the tasks failed:", error);
//     });
// bai08
// promiseChain(2).then(console.log)
// bai09
// fillterArrayAfter1Second([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
//     .then(evenNum => {
//         console.log("EvenNumber: ", evenNum);
//     })
// bai10
// printRepose(true)
// .then(result => console.log("Ket qua", result))
// .catch(error => console.error("Loi", error))
// .then(() => console.log("Done")); 
// bai11
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, bai11_1.myPromiseBai11)();
        console.log(result);
    });
}
test();
// bai12
// bai13
// bai14
// bai15
// bai16
// bai17
// bai18
// bai19
// bai20
// bai21
// bai22
// bai23
// bai24
// bai25
// bai26
// bai27
// bai28
// bai29
// bai30
