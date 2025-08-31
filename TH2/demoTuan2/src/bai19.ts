async function fetchUser(id: number): Promise<{ id: number; nameUser: string }> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id,
                nameUser: `User ${id}`,
            })
        }, 1000)
    })

}


async function fetchUsers(ids: number[]): Promise<{ id: number; nameUser: string }[]> {
    return Promise.all(ids.map((id) => fetchUser(id)));

}

export async function runTask_Bai19() {
    const users = await fetchUsers([1, 2, 3, 4, 5]);
    console.log("fectch user: ", users)
}