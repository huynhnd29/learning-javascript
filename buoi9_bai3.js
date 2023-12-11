let dataBaseCustomer = [{
    id:1,
    name: "Huynh",
    email: "huynhphoke@gmail.com",
    address: "Liên Mạc, Từ Liêm, Hà Nội",
    phone: "0268941572",
    description: "Thích mua đồ rẻ",
    tieuchi:"xe, tien, nha, it, Công nghệ thông tin, vợ, anime"
},
{
    id:2,
    name: "Dũng",
    email: "abc@gmail.com",
    address: "Cầu giấy, Hà Nội",
    phone: "0684795124",
    description: "THích mua đồ ăn",
    tieuchi: "anime, Gái, girl, manga"
},
{
    id:3,
    name: "Mạnh",
    email: "manh@gmail.com",
    address: "Đông Anh, Hà Nội",
    phone: "0689417851",
    description: "hay mua mua sách 18+",
    tieuchi: "Gái, girl, đẹp"
},
{
    id:4,
    name: "Tuấn Anh",
    email: "tuaananh20x@gmail.com",
    address: "Nông Cống, Thanh Hóa",
    phone: "0589741681",
    description: "Thích mua, hay đến hỏi xe nhưng chưa thấy mua",
    tieuchi: "buồn, suy, sad, cách dỗ người yêu, người yêu, tình cảm, nam nữ"
},
{
    id:5,
    name: "Hà Anh",
    email: "haanh@gmail.com",
    address: "Quân 1, Hồ Chí Minh",
    phone: "0587651423",
    description: "Hay ăn vặt, thích mua đồ ăn vặt, đặc biêt là đồ ngọt",
    tieuchi: "ca nhạc, ghita, piano, trai đẹp, phim, ngôn tình"
},
{
    id:5,
    name: "Đạt",
    email: "dat2x@gmail.com",
    address: "Mù Căng Chải",
    phone: "0587462587",
    description: "Trông có vẻ lừa đảo, hay đến quán, hỏi chuyện khách nhưng không mua, đa cấp",
    tieuchi: "bán hàng, livestream, kiếm tiền, tiền, money, giàu, du lịch, cảnh đẹp"
}
]

const addCustomer = (customer) => {
    if (!customer.name || !customer.email || !customer.address || !customer.phone) {
        console.log("Chưa đủ thông tin khách hàng")
        return
    }
    dataBaseCustomer.push(customer)
}

const removeCustomer = (id) => {
    const index = dataBaseCustomer.findIndex(element => element.id === id)
    if (index > -1) {
        dataBaseCustomer.splice(index, 1)
    } else {
        console.log("Không tìm thấy Id của khách hàng")
        return 
    }
}

const findByTieucChi =(tieuchi) =>{
    const newArrayByTieuchi = []
    dataBaseCustomer.forEach((element) => {
        if(element.tieuchi.toLocaleLowerCase().includes(tieuchi.toLocaleLowerCase())){
            newArrayByTieuchi.push(element)
        }
    })
    console.log(newArrayByTieuchi)
}

findByTieucChi("xe")
