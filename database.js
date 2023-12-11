let listName = [{
    id: 1,
    name: "Huynh",
    addressKey: 1,
    tieuchiKrey: 1,
}, {
    id: 2,
    name: "Dũng",
    addressKey: 1,
    tieuchiKrey: 5,
}, {
    id: 3,
    name: "Đạt",
    addressKey: 3,
    tieuchiKrey: 3,
}]

let address = [{
    name: "Hà Nội",
    id: 1
}, {
    name: "Hồ Chí Minh",
    id: 2
},
{
    name: "Đà Lạt",
    id: 3
}
]

let tieuchis = [
    {
        name: "Nhà",
        id: 1
    }, {
        name: "Xe",
        id: 2
    },
    {
        name: "Ca nhạc",
        id: 3
    },
    {
        name: "Nhạc cụ",
        id: 4
    },
    {
        name: "Manga",
        id: 5
    }
]

const getInfomationById = (id) => {
    let findMember = listName.find(element => element.id === id)
    if(!findMember) {
        console.log("Không tìm thấy member")
        return
    }
    const addressByFindMember = address.find(element => element.id === findMember.addressKey)
    const tieuChiByFindMember = address.find(element => element.id === findMember.tieuchiKrey)
    return {
        name: findMember.name,
        address: addressByFindMember.name,
        tieuchis: tieuChiByFindMember.name
    }
}



console.log(getInfomationById(1))
