//1. Tạo một mảng chứa danh sách các môn học yêu thích của bạn và in chúng ra, in ra môn yêu thích nhất.
// const favoriteArray = [
//     {
//         name:"Math",
//         favorite: 10,
//     },
//     {
//         name: "music",
//         favorite: 9,
//     },
//     {
//         name:"physical",
//         favorite: 4,
//     },
//     {
//         name:"IT",
//         favorite: 11,
//     }
// ]
// // console.log(favoriteArray[3].favorite)

// let facoriteMax = -Infinity;
// let name = ""

// for(let i =0;i<favoriteArray.length;i++){
//     if(favoriteArray[i].favorite > facoriteMax){
//         facoriteMax = favoriteArray[i].favorite
//         name = favoriteArray[i].name
//     }
// }

// console.log(name)

// 3. Tạo một đối tượng person với các thuộc tính như tên, tuổi và địa chỉ, sau đó in ra chúng.
// const arrPerson = [
//     {
//         lastName: "Mạnh",
//         firstName:"Ngyễn",
//         mideName: "Thế",
//         age: 10,
//         address:"Đông Anh - Hà Nội",
//         girlFriendName: "Phượng",
//     },
//     {
//         lastName: "Dũng",
//         firstName:"Phan",
//         mideName: "Đăng",
//         age: 5,
//         address: "Cầu giấy - Hà Nội",
//         girlFriendName: null,
//     },{
//         lastName: "Đạt",
//         firstName:"NGuyễn",
//         mideName: "Văn",
//         age: 9,
//         address:"Long Biên - Hà Nội",
//         girlFriendName: null,
//     }
// ]

// for (let i=0;i<arrPerson.length;i++){
//     if(arrPerson[i].girlFriendName !== null){
//         console.log(arrPerson[i].firstName, arrPerson[i].mideName , arrPerson[i].lastName)
//     }
// }

// 10. Tạo một mảng chứa danh sách sản phẩm với mỗi sản phẩm có tên, giá và số lượng trong kho, sau đó tính tổng giá trị của các sản phẩm.
// const arrProduct = [{
//     name: "Kem đánh răng",
//     price: 15000,
//     count: 1000,
// }

// , {
//     name: "Thuốc diệt chuột",
//     price: 30000,
//     count: 50,
// }, {
//     name: "Bàn chải",
//     price: 5000,
//     count: 60,
// }, {
//     name: "Nước giặt",
//     price: 100000,
//     count: 200,
// },
// {
//     name: "Nước Xả",
//     price: 60000,
//     count: 100,
// }]

// let USDollar = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
// });

// let sum = 0;
// for(let i=0;i<arrProduct.length;i++){
//     let kdr =  arrProduct[i].price * arrProduct[i].count;
//     sum += kdr
// }
// console.log("Tổng tiền trong kho = ", USDollar.format(sum));

// 12. Tạo một đối tượng student với các thuộc tính như tên, điểm và địa chỉ, sau đó tính điểm trung bình của học sinh đó.

const student = {
    name: "Tuấn Anh",
    scores: [{
        name: "Math",
        score: 9,
    }, {
        name: "Hóa",
        score: 4,
    }, {
        name: "Vật lý",
        score: 3,
    }, {
        name: "Văn",
        score: 2,
    }, {
        name: "Tiếng Anh",
        score: 1,
    }],
    address: "Đông Anh - Hà Nội",
}

let sum = 0;
for (let i = 0; i < student.scores.length; i++) {
    sum += student.scores[i].score
}
let tb = sum / student.scores.length; // 7
const checkScores = [{
    minScoure: 9,
    name: "Suất sắc"
}, {
    minScoure: 8,
    name: "Giỏi"
}, {
    minScoure: 5,
    name: "Trung bình"
}, {
    minScoure: 6.5,
    name: "Khá"
}]

// let facoriteMax = -Infinity;
// let name = ""

// for(let i =0;i<favoriteArray.length;i++){
//     if(favoriteArray[i].favorite > facoriteMax){
//         facoriteMax = favoriteArray[i].favorite
//         name = favoriteArray[i].name
//     }
// }
// let max = -Infinity;
// let hocLuc = "Yếu"
// for (let i = 0; i < checkScores.length; i++) {
//     if (max < checkScores[i].minScoure && checkScores[i].minScoure < tb ){
//         max = checkScores[i].minScoure//10
//         hocLuc = checkScores[i].name
//     }
// }
// console.log(hocLuc);

// 8. Tạo một đối tượng car với các thuộc tính như hãng xe, màu sắc và năm sản xuất, sau đó in ra chúng.
const car = {
    branch: "BMW",
    birthDate: "2023",
    objectCar: [{
        color: "red",
        price: 3000,
        count: 85
    }, {
        color: "Black",
        price: 3100,
        count: 83
    }, {
        color: "gray",
        price: 3200,
        count: 60
    }, {
        color: "yellow",
        price: 3300,
        count: 83
    }, {
        color: "brown",
        price: 2900,
        count: 100
    }],
}
// for => 6100 - 3400 => 
// Dũng có 6100$ giúp dũng mua 2 chiêc xe

let carName1 = ""
let carName2 = ""
let carOver = ""
while (carName2 === "") {
    let carName2InWhite = ""
    let carName1InWhite = ""
    let max = -Infinity
    let max2 = -Infinity
    let maxPriceCar = 0
    for (let i = 0; i < car.objectCar.length; i++) {
        if (max < car.objectCar[i].price && car.objectCar[i].color !== carOver) {
            maxPriceCar = car.objectCar[i].price
            max = car.objectCar[i].price
            carName1 = car.objectCar[i].color
            carName1InWhite = car.objectCar[i].color
        }
    }
    let tienThua = 6100 - maxPriceCar; //2800
    for (let i = 0; i < car.objectCar.length; i++) {
        if (max2 < car.objectCar[i].price && car.objectCar[i].price <= tienThua) {
            max2 = car.objectCar[i].price
            carName2 = car.objectCar[i].color
            carName2InWhite =  car.objectCar[i].color
        }
    }
    if (ca123 === "") {
        carOver = carName1InWhite
    }
}

console.log(carName1);
console.log(carName2);
