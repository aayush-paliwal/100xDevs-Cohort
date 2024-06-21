/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise((resolve, reject) => setTimeout(resolve, milliseconds))
}

async function work(){
    console.log("Started work..")
    console.log(`Further execution in the function will remain at halt for provided time`)
    await sleep(2000).then(() => console.log("Wake up from sleep"))
    console.log("Work finished")
}

work()
console.log("But this will continue executing")

module.exports = sleep;
