"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(initialBalance = 0) {
        this.balance = initialBalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: $${amount}`);
        }
        else {
            console.log("Deposit amount must be positive.");
        }
    }
    // Method to withdraw money
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdrawal amount must be positive.");
        }
        else if (amount > this.balance) {
            console.log("Insufficient funds.");
        }
        else {
            this.balance -= amount;
            console.log(`Withdrew: $${amount}`);
        }
    }
    // Optional: Show current balance
    getBalance() {
        return this.balance;
    }
}
exports.BankAccount = BankAccount;
