let film = [{ 
    id: 1,
    name: "Harry poter",
    sell: 1500,
    tieuChiKey: 1,
    daoDienKey: 1,
    linkPilmKey: 1,
    luotXem: 10,
}, {
    id: 2,
    name: "Batanvlogs",
    sell: 3500,
    tieuChiKey: 2,
    daoDienKey: 2,
    linkPilmKey: 2,
    luotXem: 20,
}, {
    id: 3,
    name: "Demen",
    sell: 4500,
    tieuChiKey: 2,
    daoDienKey: 3,
    linkPilmKey: 3,
    luotXem: 30,
}]
let tieuchi = [{
    dohay: 6,
    id: 1,
}, {
    dohay: 7,
    id: 2,
}]
let daodien = [{
    name: "J.K.Rowling",
    id: 1,
}, {
    name: "Bà Tân",
    id: 2,
}, {
    name: "Tố Hữu",
    id: 3,
}]

let linkPilmTable = [
    {
        id: 1,
        price: 300000,
        listPilm: [{
            id: 1,
            tap: 1,
            link: "https//:phim/Harry poter ở thành phố",
            title: "Harry poter ở thành phố",
            description: "lorLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            id: 2,
            tap: 2,
            link: "https//:phimHarry poter HỌc nghề",
            title: "Harry poter HỌc nghề",
            description: "lorLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }, {
            id: 3,
            tap: 3,
            link: "https//:phimHarry poter chến dấu",
            title: "Harry poter chến dấu",
            description: "lorLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }]
    },
    {
        id: 2,
        price: 500000,
        listPilm: [{
            id: 1,
            tap: 1,
            link: "https//:phimBà Tân ở thành phố",
            title: "Bà Tân ở thành phố",
            description: "lorLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            id: 2,
            tap: 2,
            link: "https//:phimBà Tân HỌc nghề",
            title: "Bà Tân HỌc nghề",
            description: "lorLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }, {
            id: 3,
            tap: 3,
            link: "https//:phimBà Tân chến dấu",
            title: "Bà Tân chến dấu",
            description: "lorLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }]
    },
    {
        id: 3,
        price: 800000,
        listPilm: [{
            id: 1,
            tap: 1,
            link: "https//:phimDế Mèn ở thành phố",
            title: "Dế Mèn ở thành phố",
            description: "lorLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            id: 2,
            tap: 2,
            link: "https//:phimDế Mèn HỌc nghề",
            title: "Dế Mèn HỌc nghề",
            description: "lorLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }, {
            id: 3,
            tap: 3,
            link: "https//:phimDế Mèn chến dấu",
            title: "Dế Mèn chến dấu",
            description: "lorLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }]
    },
]

const getFilmById = (id) => {
    let findFilm = film.find(element => element.id === id)
    if (!findFilm) return "Kông tìm thấy Film"
    const tieuChiFind = tieuchi.find(element => element.id === findFilm.tieuChiKey)
    const daodienFind = daodien.find(element => element.id === findFilm.daoDienKey)
    const linkFilmFind = linkPilmTable.find(element => element.id === findFilm.linkPilmKey)

    return {
        name: findFilm.name,
        sell: findFilm.sell,
        dohay: tieuChiFind.dohay,
        daodien: daodienFind.name,
        linkPilm: linkFilmFind.listPilm,
        price: linkFilmFind.price,
        soTap: linkFilmFind.listPilm.length,
        luotXem: findFilm.luotXem,
    }
}

const findFilm = (link) => {
    let id = null
    linkPilmTable.forEach((element) => {
        const find = element.listPilm.find(findElement => findElement.link === link)
        if (find) {
            id = element.id
        }
    })
    return id
}



const viewFilm = (link) => {
    const filmId = findFilm(link) // id= 3
    film = film.map(element => {
        if (element.linkPilmKey === filmId) {
            element.luotXem++
        }
        return element
    })

    const find = film.find(element => element.linkPilmKey === filmId)
    const info = getFilmById(find.id)
    console.log(info)
}
viewFilm("https//:phimDế Mèn chến dấu")

