import logger from "./loggermodule.js"

logger("Debug log here!", "DEBUG")

function sum1(parameter){
    var total = 0
    parameter.forEach(element => {
        total +=element
    });
    return total
}

function sum2(...parameter){
    var total = 0
    parameter.forEach(element => {
        total +=element
    });
    return total
}


console.log(sum1([...Array(6).keys()]))

console.log(sum2(1, 2, 3, 4, 5))

var list_number = [1,2,3,4,5,6]

console.log("Sum is: "+ sum2(...list_number))

//Spread:

var array1 = ['JS', 'PHP', 'Python', "Hế lô", "Hiii"]
var array2 = ['C++', 'C#', 'C']

var array3 = [...array2, ...array1]
console.log(array3)

var object1 = {
    name: "Ptsy",
    phone: '0868'
}

var object2 = {
    dress: "HCM city",
    region: "VietNam"
}

var object3 ={
    ...object1,
    ...object2,
    dress: "Gia Lai"
}

console.log(object3)


