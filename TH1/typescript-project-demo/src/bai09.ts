export interface Animal {
    name: string;
    soud(): void;
}

export class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    soud(): void {
        console.log(`${this.name} keu: Gau gau gau`);
    }
}


export class Cat implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    soud(): void {
        console.log(`${this.name} keu: meo meo meo`);
    }
}