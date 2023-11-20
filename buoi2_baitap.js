// 1. Viết chương trình JavaScript để in ra tất cả các số từ 1 đến 10 bằng vòng lặp for.
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// 2. Tạo một biến n và sử dụng vòng lặp for để tính tổng các số từ 1 đến n.
// const n = 3000;
// for(let i = 0;i < n;i++){
//     console.log("Yêu êm", i);
// }

// 4. Tạo một biến i và sử dụng vòng lặp for để tính giai thừa của i (i!) cho một giá trị i cụ thể.
// 7! = 7*6*5*4*3*2*1 = 5040
const n = 7;
let giai_thua = 1;
// i = 1 => giai_thua = 1
// i = 2 => giai_thua= 1 * i = 2
// i= 3 => giai_thua = 2 * i = 2 * 3 = 6
// i = 4 => giai_thua = 2 * 3 * i = 24

for (let i = 1; i <= n; i++) {
    giai_thua = giai_thua * i
}

console.log("giai_thua", giai_thua);

// Tạo một biến n và sử dụng vòng lặp while để tính tổng các số từ 1 đến n mà là bội số của 3 hoặc 5.
// const n = 40;
// let sum = 0;
// let i = 1
// while (i <= 40) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         console.log("sum", sum, "  i", i);
//         sum += i;
//     }
//     i++;
// }
// console.log("tổng các số từ 1 đến n mà là bội số của 3 hoặc 5 la: ", sum);

// 7. Viết chương trình JavaScript để tìm tất cả số nguyên tố từ 1 đến 50 bằng vòng lặp.
// const n = 50;
// for (let i = 2; i <= n; i++) {
//     let ok = 1

//     // i = 7
//     for (let j = 2; j < i; j++) {
//         // j = 2,3,4,5,6
//         if (i % j === 0) {
//             ok = 0;
//         }
//     }

//     if (ok === 1) {
//         console.log(i, "Là số Nguyên tố");
//     }
// }

// 9. Viết chương trình JavaScript để đảo ngược một chuỗi văn bản bằng vòng lặp (ví dụ: "hello" thành "olleh").
const text = "JavaScript"
let newText = "" // olleh
for (let i = text.length - 1; i >= 0; i--) {
    newText += text[i] 
}
console.log(newText);


