import { mathX3Num } from "./bai14";

export async function runtask_Bai16() {
    const result = await Promise.all([
        mathX3Num(2),
        mathX3Num(3),
        mathX3Num(4),
    ])

    console.log("Ket qua", result)
}