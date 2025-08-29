export async function myPromiseBai11(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("hello async");
        }, 2000);
    });
}

