async function fetchUser(id: number): Promise<{ id: number; nameUser: string }> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id,
                nameUser: `User ${id}`,
            })
        }, 2000)
    })

}


async function fetchUserWithTimeout(id: number, timeout = 2000) {
    return Promise.race([
        fetchUser(id),
        new Promise((_, reject) => {
            setTimeout(() => reject(new Error("Quá thời gian đợi")), timeout)
        })
    ])

}

export async function runTask_Bai20() {
    try {
        const user = await fetchUserWithTimeout(101);
        console.log("Fetched user: ", user);

    } catch (error) {
        console.error("Lỗi: ", error)

    }
}