function squareNomal(number) {
    return number * number
}

const squareExpression = function (number) {
    return number * number
}

function squareVoid() {
    const a = 4
    const b = 5
    console.log(a * b);
}

const square = squareNomal(10) // square = 10*10 = 100

const createPet = function (name) {
    let sex
    let description
    const pet = {
        setName(newName) {
            name = newName
        },
        getName() {
            return name
        },
        getSex() {
            return sex
        },
        setSex(newSex) {
            if (typeof newSex === "string") {
                sex = newSex
            }
        },
        setDescription(txt){
            description = txt
        },
        getDescription(){
            return description
        }
    }
    return pet
}

const petOfHuynh = createPet("Dofy") 
petOfHuynh.setName("MeoMeo")
petOfHuynh.setSex("male")
petOfHuynh.setDescription("Mào màu trắng")

console.log(petOfHuynh.getName());
console.log(petOfHuynh.getSex());
console.log(petOfHuynh.getDescription());

const squareArrowFunction = (number) => number * number

const square2 = (number) => {
    return number * number
}

function square3(number) {
    return number * number
}