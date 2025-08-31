export async function mathX3Num(num: number): Promise <number> {
    return new Promise((resovle) => { 
        setTimeout(()=>{ 
            resovle(num*3); 
        }, 5000)
    })
}

export async function runTask_Bai14(num: number){ 
    var numResovle = await mathX3Num(num); 
    console.log(`${num} *  3 = ${numResovle}`); 
}