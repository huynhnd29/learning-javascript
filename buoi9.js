let inforCards = [
    {
        id: 1,
        cardName: "Huynh",
        cardNumber: "0386164071",
        accountBalance: 2000000,
        historyTransactions: []
    }, {
        id: 2,
        cardName: "Mạnh",
        cardNumber: "0325798453113",
        accountBalance: 26000000,
        historyTransactions: []
    },
    {
        id: 3,
        cardName: "Dũng",
        cardNumber: "06846214521",
        accountBalance: 300000000,
        historyTransactions: []
    }, {
        id: 4,
        cardName: "Tuấn Anh",
        cardNumber: "09981145562",
        accountBalance: 290000000,
        historyTransactions: []
    }, {
        id: 5,
        cardName: "Hà Anh",
        cardNumber: "2641325516912",
        accountBalance: 310000000,
        historyTransactions: []
    }
]

const withdrawMoney = (id, withdraw) => {
    inforCards = inforCards.map(element => {
        if (element.id === id && element.accountBalance - 50000 > withdraw) {
            element.accountBalance -= withdraw
            element.historyTransactions.push({
                date: new Date(),
                status: "Rút Tiền",
                count: withdraw,
            })
        }
        return element
    })
}

const findMemberById = (id) => {
    const member = inforCards.find(element => element.id === id)
    if (!member) {
        console.log("Không tìm thấy thể")
        return undefined
    }
    return member
}

const TransferMoney = (fromId, toId, money) => {
    const toMember = findMemberById(toId)
    const fromMember = findMemberById(fromId)

    inforCards = inforCards.map(element => {
        if (element.id === fromId && element.accountBalance - 50000 > money) {
            element.accountBalance -= money
            element.historyTransactions.push({
                date: new Date(),
                status: "Chuyển " + money + " tới " + toMember.cardName,
                count: money,
            })
        }
        if (element.id === toId) {
            element.accountBalance += money
            element.historyTransactions.push({
                date: new Date(),
                status: "Nhận tiền từ " + fromMember.cardName + " " + money,
                count: money,
            })
        }
        return element
    })
}

TransferMoney(3, 2, 10000000)
TransferMoney(3, 1, 20000000)


const viewHistory = (id) => {
    if (id !== "all") {
        const card = findMemberById(id)
        console.log(card.historyTransactions)
    } else {
        let allHistory = []
        inforCards.forEach(element => {
            allHistory = allHistory.concat(element.historyTransactions)
        })
        console.log(allHistory.map(element => ({
            ...element,
            count: formatMoney(element.count)
        })))
    }
}
export function formatMoney (money) {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
        money,
      )
}
viewHistory("all")

