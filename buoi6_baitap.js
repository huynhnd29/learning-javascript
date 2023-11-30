// Câu hỏi 1: Tìm tổng của các số chẵn trong một mảng.
// const arrNumber = [1, 3, 4, 5, 32, 12, 40, 45, 47, 54]

// const reArrNumber = (arr) => {
//     const newArr = arr.filter(element => element % 2 === 0)
//     return newArr
// }


// const sumNumber = (arr) => {
//     let sum = 0
//     reArrNumber(arr).forEach((element) => {
//         sum += element
//     })
//     return sum
// }

// console.log(sumNumber(arrNumber))

// Câu hỏi 3: Tìm phần tử có giá trị lớn thứ hai trong một mảng.
// const arrNumber = [1, 3, 4, 5, 32, 12, 40, 45, 47, 54]

// const findNumber = (arr, index) => {
//     arr.sort((a, b) => b - a);
//     console.log("arr", arr)
//     return arr[index - 1]
// }
// console.log(findNumber(arrNumber, 3))

// Câu hỏi 5: Chuyển đổi các số lẻ thành số chẵn và ngược lại trong một mảng.
// const arrNumber = [1, 3, 4, 5, 32, 12, 40, 45, 47, 54]
// const newArrNumber = arrNumber.map(element => element + 1)
// console.log("newArrNumber", newArrNumber)

// Bài tập 1: Viết hàm để loại bỏ tất cả các phần tử trùng lặp trong một mảng.

// const arrNumber = [1, 3, 4, 5, 32, 12, 4, 40, 40, 40, 40, 5, 5, 6, 45, 1, 32, 47, 54];
// let newArr = [] //1,3,4,5
// arrNumber.forEach(((element) => {
//     if (element === newArr[newArr.length - 1]) {
//     } else {
//         newArr.push(element)
//     }
// }))
// console.log("newArr", newArr)

// Bài tập 3: Sắp xếp một mảng số nguyên sao cho các số lẻ đứng trước các số chẵn và giữ nguyên thứ tự ban đầu.
// const arrNumber = [1, 3, 4, 5, 32, 13, 4, 40, 6, 45, 1, 33, 47, 54];
// let newArr = []
// const arangeArayNumber = () => {
//     const les = arrNumber.filter(element => element % 2 !== 0)
//     const chans = arrNumber.filter(element => element % 2 === 0)
//     newArr = les.concat(chans)
// }
// arangeArayNumber()
// console.log("newArr", newArr)