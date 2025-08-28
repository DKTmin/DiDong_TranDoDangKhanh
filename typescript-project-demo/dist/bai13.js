"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = exports.Square = void 0;
class Shape {
}
class Square extends Shape {
    constructor(chieuRong, chieuDai) {
        super();
        this.chieuRong = chieuRong;
        this.chieuDai = chieuDai;
    }
    area() {
        return this.chieuRong * this.chieuDai;
    }
}
exports.Square = Square;
class Circle extends Shape {
    constructor(banKinh) {
        super();
        this.banKinh = banKinh;
    }
    area() {
        return Math.PI * this.banKinh * this.banKinh;
    }
}
exports.Circle = Circle;
