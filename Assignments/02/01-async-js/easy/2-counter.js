// Counter without setInterval
// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
// (Hint: setTimeout)


// Sol-1
let a = 0;
function counter1(){
    const ct = setTimeout(() => {
        if(a == 5){
            return
        }
        console.log(a++)
        fun2()
    }, 1000)
}

function fun2(){
    counter1()
}

fun2()



// Sol-2
let b = 0
function counter2(){
    if(b == 5){
        return
    }

    setTimeout(() => {
        console.log(b++)
        counter2()
    }, 1000)
}

counter2()
