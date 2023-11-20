// 1. Viết một hàm JavaScript để tính tổng của hai số nguyên và in ra kết quả.
// function sumNumber(a, b) {
//     return a + b
// }
// const totalNumber = sumNumber(3, 4)
// console.log(totalNumber);

// 2. Tạo một hàm JavaScript để tính giá trị tuyệt đối |a|  của một số và in ra nó.
// function handleAbsoluteValue(a) {
//     let converstA = a
//     if (converstA < 0) {
//         return converstA *= -1
//     }
//     return converstA
// }
// console.log(handleAbsoluteValue(-2))

// 5. Viết chương trình JavaScript để chuyển đổi nhiệt độ từ độ Celsius (C) sang độ Fahrenheit(F) bằng cách sử dụng một hàm.
// °F = °C * 9/5 + 32
// const celsiusToFahrenheit = (celsius) => {
//     const newTem = celsius * 9 / 5 + 32
//     console.log(celsius, "Celsius change to Fahrenheit is:", newTem);
// }
// celsiusToFahrenheit(10)

// 7. Viết hàm JavaScript để tìm số nguyên tố trong một mảng và in ra kết quả.
// [13, 2, 3, 6, 8, 9, 1, 14, 17]
//  0, 1, 2, 3, 4, 5, 6,  7,  8
// arr[0]
// function isPrime(number) {
//     if (number === 1) {
//         return false
//     }
//     if (number === 2 || number === 5 || number === 3 || number === 7) {
//         return true
//     }
//     if (number % 2 !== 0 && number % 3 !== 0 && number % 5 !== 0 && number % 7 !== 0) {
//         return true
//     }
//     return false
// }

// function findPrime(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (isPrime(arr[i])) { // i=0 => arr[i] = 2
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

console.log(findPrime([2, 3, 6, 8, 9, 13, 1, 14, 17]))

