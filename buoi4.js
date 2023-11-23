// const bienObject = {
//     firstName: "Nguyễn",
//     lastName: "Huynh",
//     age: 24,
//     job: "IT",
//     isTeacher: true,
//     skill: {
//         tenis: false,
//         eSport: true,
//     }
// }

// console.log(Object.keys(bienObject))
// console.log(Object.values(bienObject))

const arr = ["javascript", "PHP", "C++"]
const arrClass = [{
    clasName: "9A1",
    leader: "HUynh",
    students: [{
        name: "Dũng",
        age: 20,
        isTeacher: false,
    },
    {
        name: "Tuấn Anh",
        age: 20,
        isTeacher: false,
    },
    {
        name: "Đạt",
        age: 20,
        isTeacher: false,
    },
    {
        name: "Mạnh",
        age: 20,
        isTeacher: false,
    },
    {
        name: "Phạm Hà ANh",
        age: 24,
        isTeacher: false,
    }]
}, {
    clasName: "9B1",
    leader: "Mạnh",
    students: [
    {
        name: "Đạt 9B",
        age: 20,
        isTeacher: false,
    },
    {
        name: "Mạnh 9B",
        age: 20,
        isTeacher: false,
    },
    {
        name: "Phạm Hà ANh 9B",
        age: 20,
        isTeacher: false,
    }]
}]

for(let i=0;i<arrClass.length;i++){

    for(let j=0 ; j< arrClass[i].students.length; j++){
        if(arrClass[i].students[j].name === "Phạm Hà ANh 9B"){
            console.log("Phạm Hà ANh 9B");
        }
    }
}
