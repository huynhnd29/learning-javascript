

function formatMoney(money) {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
        money,
    )
}

let gymDatabase = [{
    id: 1,
    name: "Huynh",
    email: "huynhphoke@gmail.com",
    address: "Liên Mạc, Từ Liêm, Hà Nội",
    phone: "0268941572",
    description: "Thích mua đồ rẻ",
    tieuchi: "xe, tien, nha, it, Công nghệ thông tin, vợ, anime",
    goitap: {
        price: 10000000,
        description: "Tập ngực",
        dueDate: 6,
        startDate: "12/11/2022"
    }
},
{
    id: 2,
    name: "Dũng",
    email: "abc@gmail.com",
    address: "Cầu giấy, Hà Nội",
    phone: "0684795124",
    description: "THích mua đồ ăn",
    tieuchi: "anime, Gái, girl, manga",
    goitap: {
        price: 20000000,
        description: "aeropic",
        dueDate: 12,
        startDate: "11/11/2022"
    }
},
{
    id: 3,
    name: "Mạnh",
    email: "manh@gmail.com",
    address: "Đông Anh, Hà Nội",
    phone: "0689417851",
    description: "hay mua mua sách 18+",
    tieuchi: "Gái, girl, đẹp",
    goitap: {
        price: 16000000,
        description: "Tập tay",
        dueDate: 12,
        startDate: "10/11/2022"
    }
},
{
    id: 4,
    name: "Tuấn Anh",
    email: "tuaananh20x@gmail.com",
    address: "Nông Cống, Thanh Hóa",
    phone: "0589741681",
    description: "Thích mua, hay đến hỏi xe nhưng chưa thấy mua",
    tieuchi: "buồn, suy, sad, cách dỗ người yêu, người yêu, tình cảm, nam nữ",
    goitap: {
        price: 30000000,
        description: "Tập đùi",
        dueDate: 12,
        startDate: "11/11/2022"
    }
},
{
    id: 5,
    name: "Hà Anh",
    email: "haanh@gmail.com",
    address: "Quân 1, Hồ Chí Minh",
    phone: "0587651423",
    description: "Hay ăn vặt, thích mua đồ ăn vặt, đặc biêt là đồ ngọt",
    tieuchi: "ca nhạc, ghita, piano, trai đẹp, phim, ngôn tình",
    goitap: {
        price: 20000000,
        description: "Tập tay",
        dueDate: 12,
        startDate: "11/11/2022"
    }
},
{
    id: 5,
    name: "Đạt",
    email: "dat2x@gmail.com",
    address: "Mù Căng Chải",
    phone: "0587462587",
    description: "Trông có vẻ lừa đảo, hay đến quán, hỏi chuyện khách nhưng không mua, đa cấp",
    tieuchi: "bán hàng, livestream, kiếm tiền, tiền, money, giàu, du lịch, cảnh đẹp",
    goitap: {
        price: 20000000,
        description: "Tập ngực",
        dueDate: 12,
        startDate: "11/11/2022"
    }
}]

const findSumRevernuse = (revernuse) => {
    let sum = 0;
    gymDatabase.forEach(element => {
        if (element.goitap.description === revernuse) {
            sum += element.goitap.price
        }
    })
    return formatMoney(sum)
}
console.log(findSumRevernuse("Tập ngực"))

const fixMemberInformation = (member = {
    id: 4,
    address: "Hà Nội",
}) => {
    gymDatabase = gymDatabase.map(element => {
        if(element.id === member.id){
            return {
                ...element,
                ...member,
            }
        }
        return element
    })
}
fixMemberInformation({
    id:4,
    address:"Hồ Chí Minh",
    phone:"10258974521-----"
})
console.log(gymDatabase)

