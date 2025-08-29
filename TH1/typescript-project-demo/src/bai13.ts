abstract class Shape {
    abstract area(): number;
}


export class Square extends Shape {

    private chieuRong: number;
    private chieuDai: number;

    constructor(chieuRong: number, chieuDai: number) {
        super();
        this.chieuRong = chieuRong;
        this.chieuDai = chieuDai;
    }

    public area(): number {
        return this.chieuRong * this.chieuDai;
    }

}



export class Circle extends Shape {

    private banKinh: number;

    constructor(banKinh: number) {
        super();
        this.banKinh = banKinh;
    }

    public area(): number {
        return Math.PI * this.banKinh * this.banKinh;
    }

}