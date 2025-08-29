"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
}
exports.Product = Product;
var product = new Product("Book", 50);
var product1 = new Product("Phone", 300);
var product2 = new Product("Laptop", 1200);
var product3 = new Product("Pen", 20);
var product4 = new Product("Headphone", 150);
const products = [];
products.push(product);
products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);
products.forEach(element => {
    console.log(`Name: ${element.getName()}, Price: ${element.getPrice()}`);
});
