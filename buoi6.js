// arr.push(10)
// arr.pop()
// arr.unshift(5)
// pop()
// find
// const student = classArr.find(element => element.address === "Thanh xuân")
// filter 
const classArr = [{
    name: "Dũng",
    address: "Mỹ Đình"
},
{
    name: "Tuấn Anh",
    address: "Bắc Từ Liêm"
},
{
    name: "Đạt",
    address: "Cầu giấy"
},
{
    name: "Hà Anh",
    address: "Thanh xuân"
},
{
    name: "Đức Mạnh",
    address: "Thanh xuân"
}
]
const student = classArr.find((element,index) => element.address === "Thanh xuân")

const students = classArr.filter((element,index) => element.address === "Thanh xuân")

classArr.forEach((element, index) => {
    console.log("index",index)
    console.log("element",element)
})

const newStudents = classArr.map((element,index) => {
    if(element.name === "Dũng"){
        element.age = 10
        element.address = "Thanh Xuân"
    }
    return element
})
console.log(newStudents)

sort()


