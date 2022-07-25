function sum1(parameter){
    total = 0
    parameter.forEach(element => {
        total +=element
    });
    return total
}

function sum2(...parameter){
    total = 0
    parameter.forEach(element => {
        total +=element
    });
    return total
}

console.log(sum1([...Array(6).keys()]))

console.log(sum2(1, 2, 3, 4, 5))

//Spread:

array1 = ['JS', 'PHP', 'Python', "Hế lô"]
array2 = ['C++', 'C#', 'C']

array3 = [...array1, ...array2]
console.log(array3)

