export class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    // set value
    setValue(value: T): void {
        this.value = value;
    }

    // get value
    getValue(): T {
        return this.value;
    }
}