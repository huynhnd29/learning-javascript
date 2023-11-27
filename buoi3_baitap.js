// 1. Viết một hàm JavaScript để tính tổng của hai số nguyên và in ra kết quả.

// function sum (a,b) {
//     return a + b
// }

// const sum2 = sum(5,6)
// const sum3 = sum(6,6)
// const sum4 = sum(8,6)
// const sum5 = sum(55,6)
// const sum6 = sum(56,36)
// const sum1 = sum(52,62)

// console.log(sum1)
// console.log(sum2)
// console.log(sum3)
// console.log(sum4)
// console.log(sum5)
// console.log(sum6)

//2. Tạo một hàm JavaScript để tính giá trị tuyệt đối |a|  của một số và in ra nó.

// function checkNumber(number) {
//     if (number < 0) {
//         return true
//     }
//     return false
// }

// function handleAbsoluteValue(a) {
//     if (checkNumber(a)) {
//         console.log(a * -1)
//     } else {
//         console.log(a);
//     }
// }

// handleAbsoluteValue(-2)
// handleAbsoluteValue(3)
// handleAbsoluteValue(-4)
// handleAbsoluteValue(-6)

// 5. Viết chương trình JavaScript để chuyển đổi nhiệt độ từ độ Celsius sang độ Fahrenheit bằng cách sử dụng một hàm.
// (°C x 9/5) + 32 =°F
// function changeTemp(celsius) {
//     let fahrenheit = (celsius * 9 / 5) + 32
//     return fahrenheit
// }
// const f = changeTemp(30)
// console.log( changeTemp(30));
// console.log( changeTemp(40));
// console.log( changeTemp(50));
// console.log( changeTemp(60));
// console.log( changeTemp(70));
// console.log( changeTemp(80));

// 7. Viết hàm JavaScript để tìm số nguyên tố trong một mảng và in ra kết quả.
// arr[2]

function checkSoNguyenTo(number) {
    let check = 0
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            check++
        }
    }
    if (check === 0) return true
    return false
}
const arr = [2, 3, 4, 5, 9, 7, 13, 11, 20, 22, 24, 26, 17] // 12 phaanf tu
// index     0, 1, 2, 3, 4, 5, 6,                      12
// arr[4] = 9
for (let i = 0; i < arr.length; i++) {
    if(checkSoNguyenTo(4)){
        console.log(arr[i])
    }
    // checkSoNguyenTo(4) // true , true, false
}






// console.log(checkSoNguyenTo(6))