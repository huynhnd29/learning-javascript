// 1. Viết một hàm JavaScript để thực hiện tìm kiếm tuần tự trong một mảng số nguyên và trả về vị trí của phần tử cần tìm.
// const arr = [1, 3, 2, 5, 7, 8, 0, 4, 6, 30, 29, 48, 50, 20, 32, 43, 57, 85]

// const returnNumber = (number) => {
//     console.log("Vị trí của số nguyên cần tìm là : " , number)
// }

// const findNumber = (arrProp, number) => {
//     for(let i=0;i<arrProp.length;i++){
//         if(arrProp[i] === number){
//             return i // = 9
//         }
//     }
// }

// console.log(findNumber(arr, 30)) // = 9

// returnNumber(9)

// 6. Tạo một mảng số nguyên và sử dụng thuật toán tìm kiếm tuần tự để tìm tất cả các vị trí của một số cụ thể trong mảng.
// const arr = [1, 3, 2, 4, 7, 8, 0, 4, 30, 30, 29, 48, 30, 20, 32, 43, 4, 4]


// const searchInArray = (arr, number) => {
//     let string = ""
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === number) {
//             string = string + i+ ", "
//         }
//     }
//     return string
// }

// const findNumber = (string) => {
//     console.log("Các vị trí của số nguyên cần tìm là :", string)
// }

// findNumber(searchInArray(arr, 30))

// 8. Tạo một mảng số nguyên và sử dụng thuật toán tìm kiếm tuần tự để đếm số lần xuất hiện của một số cụ thể trong mảng.
// const arr = [1, 3, 2, 4, 7, 8, 0, 4, 30, 30, 29, 48, 30, 20, 32, 43, 4, 4]

// const equalNumber = (a, b) => {
//     if (a !== b) {
//         return false
//     }
//     return true
// }

// const countNumberofArr = (number) => {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (equalNumber(arr[i], number)) { // arr[i] === number
//             count++;
//         }
//     }
//     return count
// }

// console.log(countNumberofArr(10))


// 12. Tạo một mảng chuỗi và sử dụng thuật toán tìm kiếm tuần tự để kiểm tra xem một chuỗi cụ thể có tồn tại trong mảng chuỗi hay không.

// const arrString = ["PHP", "Javascript", "Java", "Python", "C++"]

// const findLeaguage = (leanguage, arrProp) => {
//     for (let i = 0; i < arrProp.length; i++) {
//         if (arrProp[i] === leanguage) {
//             return true
//         }
//     }
// }

// const s = "huynh"

// if (findLeaguage(s, arrString)) {
//     console.log("Chuỗi", s, "tồn tại trong mảng")
// }else{
//     console.log("Chuỗi", s, "không tồn tại trong mảng")
// }

// 13. Viết chương trình JavaScript để tìm chuỗi dài nhất trong một mảng chuỗi bằng thuật toán tìm kiếm tuần tự.
// const arrString = ["PHP", "Javascript", "Java", "Python", "C++"]
// let max = -Infinity
// let string = ""
// for(let i=0;i<arrString.length;i++){
//     if(arrString[i].length > max){
//         max = arrString[i].length // 3  => 10
//         string = arrString[i] // php   => Javascript
//     }
// }
// console.log(string)

// 14. Tạo một mảng chuỗi và sử dụng thuật toán sắp xếp nổi bọt để sắp xếp mảng theo thứ tự tăng dần dựa trên độ dài của chuỗi.
// const arrString = ["PHP", "Javascript", "Java", "Python", "C++"]
// for (let i = 0; i < arrString.length; i++) {
//     for (let j = 0; j < arrString.length; j++) {
//         if(arrString[i].length < arrString[j].length){
//             let temp = arrString[i]
//             arrString[i] = arrString[j]
//             arrString[j] = temp
//         }
//     }
// }

// console.log(arrString)
