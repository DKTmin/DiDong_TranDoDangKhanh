export class Product {
    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    public getName(): string {
        return this.name;
    }

    public getPrice(): number {
        return this.price;
    }


}

var product = new Product("Book", 50);
var product1 = new Product("Phone", 300);
var product2 = new Product("Laptop", 1200);
var product3 = new Product("Pen", 20);
var product4 = new Product("Headphone", 150);

const products: Product[] = [];
products.push(product);
products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);


products.forEach(element => {
    console.log(`Name: ${element.getName()}, Price: ${element.getPrice()}`);
});

