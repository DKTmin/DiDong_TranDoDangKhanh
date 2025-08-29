interface Flyable {
    name: string;
    soud(): void;
}

interface Swimmable {
    name: string;
    area: string;
    howToSwim(): void;
}

export class Bird implements Flyable {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    soud(): void {
        console.log("et et et")
    }

}

export class Fish implements Swimmable {
    name: string;
    area: string;

    constructor(name: string, area: string) {
        this.name = name;
        this.area = area;
    }

    howToSwim(): void {
        console.log("boi bang vay")
    }

}