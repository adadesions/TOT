console.log( isEven(3) )

// Arrow function, Lambda Calculus
const isOdd = (num) => num%2 != 0
const isOdd2 = (num) => { return num%2 != 0 }

function isEven(num) {
    return num%2 === 0
}

const sum = (a, b) => a+b
const power2 = (a) => a*a

let result = power2(sum(10, power2(2)))
console.log(`Result = ${result}`)

let normalCat = 'Arkane'+power2(4)+' '+'Kaminkure'+sum(1, 2)
let tsCat = `Arkane ${power2(4)} Kaminkure ${sum(1, 2)}`