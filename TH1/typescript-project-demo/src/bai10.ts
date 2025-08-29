export class Account{
    private  soTaiKhoan: string; 
    private soDu: number; 
    private matKhau: string; 
    public tenChuTaiKhoan: string; 
    public tenNganHang: string; 


    constructor(soTaiKhoan: string, soDu: number,matKhau: string ,tenChuTaiKhoan: string ,tenNganHang: string){ 
        this.soTaiKhoan = soTaiKhoan; 
        this.soDu = soDu;  
        this.matKhau = matKhau; 
        this.tenChuTaiKhoan = tenChuTaiKhoan; 
        this.tenNganHang = tenNganHang; 
    }
    
    
}