"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai07_1 = require("./bai07");
//bai01
// var person = new Person("Khanh" ,21);  
// console.log(person)
//bai02
// var student = new Student("Khanh", 20, "Gioi"); 
// console.log(student)
//bai03
// var car = new Car("Toyota", "Corolla", 2022);
// car.showInfo(); 
//bai04
// var rectangle = new Rectangle(4, 5); 
// console.log("Dien Tich", rectangle.tinhDienTich()) 
// console.log("Chu Vi", rectangle.tinhChuVi()) 
//bai05
// var bankaccount = new BankAccount(); 
// console.log("Tao tai khoan: ")
// console.log("So Du Hien Tai", bankaccount.getBalance())
// bankaccount.deposit(50); 
// console.log("So Du Hien Tai", bankaccount.getBalance())
// bankaccount.withdraw(30)
// console.log("So Du Hien Tai", bankaccount.getBalance())
//bai06
// var book = new Book("Giac Mo Trua", "Nhat Kim Anh", 2024)
// book.showInfo()
//bai07 
var user = new bai07_1.User("Khanh");
console.log(user.getName());
user.setName("Tuan");
console.log(user.getName());
