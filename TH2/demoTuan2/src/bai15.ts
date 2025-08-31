import { mathX3Num } from "./bai14";

export async function runTask_Bai15() {
    const numResovle = await mathX3Num(2);
    console.log(`ket qua 1: = ${numResovle}`);

    const numResovle1 = await mathX3Num(3);
    console.log(`ket qua 1: = ${numResovle1}`);

    const numResovle2 = await mathX3Num(4);
    console.log(`ket qua 2: = ${numResovle2}`);

}