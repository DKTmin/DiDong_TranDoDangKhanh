export class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

}

export class Dog11 extends Animal {
    bark(): void {
        console.log(`${this.name} keu: Gau gau gau`);
    }
}

export class Cat11 extends Animal {
    meow(): void {
        console.log(`${this.name} keu: Meo meo meo`);
    }
}