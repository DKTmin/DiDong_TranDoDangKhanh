"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    addUser(user) {
        this.users.push(user);
    }
    listBooks() {
        console.log("Books in library:");
        this.books.forEach(b => console.log(`- ${b.title} by ${b.author}`));
    }
}
exports.Library = Library;
