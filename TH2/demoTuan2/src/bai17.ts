import { mathX3Num } from "./bai14";

export async function runTask_Bai17(){
     const promise = [
        mathX3Num(2),
        mathX3Num(3),
        mathX3Num(4),
    ]
    for await (const result of promise){ 
        console.log("Ket qua: ", result)
    }

}