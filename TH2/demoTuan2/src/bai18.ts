async function fetchUser(id: number): Promise<{id: number;  nameUser: string}>{
    return new Promise((resolve) => { 
        setTimeout(()=>{ 
            resolve({ 
                id, 
                nameUser:  `User ${id}`, 
            }) 
        }, 1000)
    })

 }



 export async function runTask_Bai18(){ 
    const user = await fetchUser(101); 
    console.log("fectch user: ", user)
 }