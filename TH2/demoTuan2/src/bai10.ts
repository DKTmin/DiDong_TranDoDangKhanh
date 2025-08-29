export function printRepose(success: boolean): Promise<string>{ 
    return new Promise((resolve, reject) =>{ 
        setTimeout(() => { 
            if (success){ 
                
                resolve("Promise thanh cong")
            }
            else { 
                reject("Promise that bai")
            }
        }, 1000); 
    })
}