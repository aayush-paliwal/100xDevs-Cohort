// // Using `1-counter.md` or `2-counter.md` from the easy section, can you create a clock that shows you the current machine time?

// // Can you make it so that it updates every second, and shows time in the following formats - 
// //  - HH:MM::SS (Eg. 13:45:23)
// //  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


function clock1(){
    const date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    hours = hours<10 ? "0" + hours : hours 
    minutes = minutes<10 ? "0" + minutes : minutes 
    seconds = seconds<10 ? "0" + seconds : seconds 

    return `${hours}:${minutes}:${seconds}`
}


function clock2(){
    const time = clock1()
    const timeArr = time.split(":")
    if(timeArr[0] >= 12){
        timeArr[0] %= 12 
        return timeArr.join(":") + " PM"
    }
    return time + " AM"
}
               // OR

// setInterval(() => {
//     const date = new Date()
//     console.log(date.toLocaleTimeString())
// }, 1000)


setInterval(() => {
    console.log(clock2())
}, 1000)



