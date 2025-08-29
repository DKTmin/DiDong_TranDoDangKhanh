export class Rectangle{
    width: number; 
    height: number;

    constructor(width: number, height: number){ 
        this.width = width; 
        this.height = height;
    }
    
    showInfo(): void{ 
        console.log(`Brand: ${this.width}`); 
        console.log(`Model: ${this.height}`); 
    }

    tinhDienTich(): number {
        return this.width * this.height;
    }
    tinhChuVi(): number {
        return 2 * (this.width + this.height);
    }
}
