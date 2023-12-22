function handlePromise1(t){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Completed in ${t}`)
        }, t)
    })
}

Promise.all([handlePromise1(1000), handlePromise1(2000)])
.then((res) => console.log(res))



// If one of the promises fails, then all rest promises also fail
function handlePromise2(t){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(t === 2000){
                reject(`Rejected in ${t}`)
            }
            else{
                resolve(`Completed in ${t}`)
            }
        }, t)
    })
}

Promise.all([handlePromise2(1000), handlePromise2(2000), handlePromise2(3000)])
.then((res) => console.log(res))
.catch((err) => console.log(err))

