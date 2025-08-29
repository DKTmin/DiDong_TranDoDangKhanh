export class BankAccount {
    balance: number;

    constructor(initialBalance: number = 0) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: $${amount}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    // Method to withdraw money
    withdraw(amount: number): void {
        if (amount <= 0) {
            console.log("Withdrawal amount must be positive.");
        } else if (amount > this.balance) {
            console.log("Insufficient funds.");
        } else {
            this.balance -= amount;
            console.log(`Withdrew: $${amount}`);
        }
    }

    // Optional: Show current balance
    getBalance(): number {
        return this.balance;
    }
}
