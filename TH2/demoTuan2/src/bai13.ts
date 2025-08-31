function simulateTask_Bai13(ms: number, testFail = false): Promise<string>{ 
    return new Promise((resolve, reject) => { 
        setTimeout(() => { 
            if(testFail){ 
                resolve(`Task finish ${ms} ms`)
            }else { 
                reject("Task fail")
            }
        }, ms)
    })
}

export async function runTask_Bai13() {
    try {
        const result = await simulateTask_Bai13(2000, true); 
        console.log(result); 
    } catch (error) {
        console.log("Caught error", error);
    }
   
}