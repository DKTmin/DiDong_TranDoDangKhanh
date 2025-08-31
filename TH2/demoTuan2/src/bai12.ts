function simulateTask(ms: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task finished after ${ms} ms`);
        }, ms)
    })
}

export async function runTask() {
    try {
        const result = await simulateTask(5000);
        console.log(result);
        const result1 = await simulateTask(3000);
        console.log(result1);
    } catch (error) {
        console.log("Error: ", error);
    }
}