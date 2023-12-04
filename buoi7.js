// Bài tập 4: Viết hàm chia một mảng thành các mảng con có kích thước nhất định.
// const arr = [2, 3, 5, 6, 8, 1, 4, 9, 10, 12, 15, 19]

// const separationArray = (n) => {
//     const soMang = arr.length / n
//     for (let i = 1; i <= soMang; i++) {
//         console.log(arr.slice((i - 1) * n, i * n))
//     }
//     // return arr.slice(0, n)
// }

// separationArray(4)




// 5 Viết chương trình nhận một danh sách các số nguyên làm đầu vào và 
// trả về tổng con tăng liên tiếp lớn nhất trong danh sách.
const arr = [2, 4, 8, 4, 5, 9, 10, 13, 6, 7, 6, 8, 10, 12];
let max = -Infinity

let count = 0 //2  + 4 + 8
for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
        count = count + arr[i]
    } else if (arr[i - 1] < arr[i]) {
        count = count + arr[i]
    } else {
        if (count > max) {
            max = count
        }
        count = arr[i]
    }
}
console.log(max)




