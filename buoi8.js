// uniq ArrayObject: Giống Uniq nhưng mở rộng cho 1 collection
// const arr = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'y': 2, 'x': 1 }]
// let newArray = [ 1  , 2]

// arr.forEach(element => {
//     const find = newArray.find(elementFind => {
//         const keys = Object.keys(element)
//         const check = element[keys[0]] === elementFind[keys[0]] && element[keys[1]] === elementFind[keys[1]]
//         return check
//     })

//     if (find) {
//     } else {
//         newArray.push(element)
//     }

// })
// console.log("newArray", newArray)

//Cho 1 mảng các key, vào 1 mảng các object , Viết một function để trả ra một mảng các object theo thứ tự mảng các key. ( Yêu cầu dùng hàm map )
// const arr = [{ a: 1, b: 1, c: 2, d: 4, e: 5 }, { a: 2, b: 1, c: 5, d: 4, e: 5 }, { d: 4, e: 5, a: 22, b: 11, c: 51, }]

// const keys = ["b", "a", "c"]
// // const newObj = [{ b: 1, a: 1, c: 2 }, { b: 1, a: 2, c: 5 }, {  b: 11, a: 22, c: 51, }]
// const newArrObj = arr.map(element => {
//     const newObj = {}

//     for (let i = 0; i < keys.length; i++) {
//         newObj[keys[i]] = element[keys[i]]
//     }

//     return newObj
// })
// console.log(newArrObj)

// const collect = [{ a: 1, b: 2 }, { a: 1, b: 3 }, { a: 2, b: 2 }, { a: 3, b: 5 }];

// const groupByTxt = (groupTYpe) => {

//     const groups = [] // { a: 1, b: 2 } , { a: 2, b: 2 }, { a: 3, b: 5 }
//     collect.forEach(element => { // element = { a: 3, b: 5 }

//         const find = groups.find(elementFind => elementFind.a === element.a)

//         if (!find) {
//             groups.push(element)
//         }

//     })

//     let newObj = {}
//     // const groups = [] // { a: 1, b: 2 } , { a: 2, b: 2 }, { a: 3, b: 5 }
//     groups.forEach((element, index) => {
//         newObj[index + 1] = collect.filter(elementFilter => elementFilter.a === element.a)
//     });

//     console.log(newObj);
// }
// groupByTxt("a")

let bookStore = [{
    id: 0,
    name: "",
    author: "",
    count: "",
    position: "",
    money: 2000000, -10000
}, {
    id: 0,
    name: "",
    author: "",
    count: "",
    position: "",
    money: 2000000, -10000
}]

const addBook = (10000, id, tomemebt) => {
    bookStore.push(book)
}

const removeBook = (book) => {
    // find
    bookStore
}



get TotalPrice