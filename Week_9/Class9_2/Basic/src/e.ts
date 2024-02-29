// Arrays in TS
// Q: Find max value in an array

function maxValue(arr: number[]){
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log(maxValue([5,32,61,4,1]));