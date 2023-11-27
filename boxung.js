const xNumber = 5;
const xString = "Learning Javascript"
const xboolean = true // false
const xNull = null;
const xUndefind = undefined
const xObject = {
    firstName: "Nguyễn",
    lastName: "HUynh",
    age: 24,
    job: "IT",
    skill: {
        tenis: true,
        eSport: true,
        programs: ["js", "C++", "Javas"]
    }
}
// Toán tử
// + - * /
// ++, --
// += , -= , *=, / =
// % 
// ===, ==, >=.<=, !==, != // true hoặc false
// length
// if
// else if
// else

// const a = 6
// const b = 6
// if (a > b) {
//     console.log(a, "Lớn hơn", b)
// } else if (a < b) {
//     console.log(a, "Nhỏ hơn", b)
// } else if ( a === 6) {
//     console.log(a, "bằng 6")
// } else {
//     console.log("trường hợp còn lại")
// }

// array:
const arrNumber = [8, 7, 6, 5, 4, 3, 8, 5, 3, 1]
// index           0, 1, 2, 3, 4, 5, 6, 7, 8, 9 

const arrString = ["Javascript", "PHP", "Java", "C++"]
const arrBoolean = [true, false, true, false]
const arrFlex = [123, "Javascript", "PHP", true]

// .length
// console.log(arrString.length)

// 9. Viết chương trình JavaScript để đảo ngược một chuỗi văn bản bằng vòng lặp (ví dụ: "hello" thành "olleh").
// const string = "Javascript"
// let newString = ''
// for (let i = string.length ; i >= 0; i--) {
//     newString = newString + string[i]
// }

// console.log(newString)
// 6. Tạo một biến n và sử dụng vòng lặp while để tính tổng các số từ 1 đến n mà là bội số của 3 hoặc 5.

// const n = 20;
// let number = ""
// let i = 1;
// let sum = 0;

// while(i <= n){
//     if(i%3===0 || i%5===0){
//         sum+=i;
//     }
//     i++; // 2 3 4 ... 20 //21 false end
// }
// console.log(sum);


// Function 
// function squareNomal(number) {
//     const math = number * number
//     return math
// }

// const squareExpression = function (number) {
//     return number * number
// }

// function squareVoid() {
//     const a = 4
//     const b = 5
//     console.log(a * b)
// }

// const createPet = function (name) {
//     let sex
//     let description
//     const pet = {
//         setName(newName) {
//             name = newName
//         },
//         getName() {
//             return name
//         },
//         getSex() {
//             return sex
//         }, 
//         setSex(newSex) {
//             sex = newSex
//         },
//         setDescription(txt){
//             description = txt
//         },
//         getDescription(){
//             return description
//         }
//     }
//     return pet
// }

// const petOfHuynh = createPet("Dofy")
// petOfHuynh.setName("MeoMeo")
// petOfHuynh.setSex("female")
// petOfHuynh.setDescription("Mèo màu trắng")

// console.log(petOfHuynh.getName()) // return name
// console.log(petOfHuynh.getSex()) // return sex
// console.log(petOfHuynh.getDescription()) // return description

// let petOfHuynh = {
//     name: "Dofy",
//     sex: "female",
//     description: "Mèo màu trắng"
// }
// petOfHuynh.name = "Meo Meo"
// console.log(petOfHuynh.name)

// const squareArrowfunction = (number) => number * number
// const squareExten = (number) => {
//     return number * number
// }

// function squareNomal(number) {
//     return number * number
// }