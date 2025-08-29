import { Book } from "./bai06";
import { User } from "./bai07";

export class Library {
    private books: Book[] = [];
    private users: User[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    addUser(user: User): void {
        this.users.push(user);
    }


    listBooks(): void {
        console.log("Books in library:");
        this.books.forEach(b => console.log(`- ${b.title} by ${b.author}`));
    }
}


