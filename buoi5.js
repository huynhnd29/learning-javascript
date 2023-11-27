let arr = [3, 2, 5, 3, 1, 5, 6, 8, 9, 7, 2]
//         2  3  3  1  5  5  6  8  7  2  9
 
for (let i = 0; i < arr.length; i++) {
    for(let j = i+1; j< arr.length ; j++){
        if (arr[i] > arr[j]){
            let temp = arr[i] // temp = 3 

            arr[i] = arr[j] // arr[i] = 2
            
            arr[j] = temp // arr[j] = 3
        }
    }
}

console.log(arr)
