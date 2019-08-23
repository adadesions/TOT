// INPUT:
// isPrime = true --> 'Fizz'
// isPrime = false --> 'Buzz'

// dataset = [2, 5, 8, 4, 13, 123, 40]

// OUTPUT:
// 'Fizz-Fizz-Buzz-Buzz-Fizz-Buzz-Buzz'

function isPrime(num) {
    for (let i = 2; i < Math.sqrt(num); i++){
        if (num%i === 0)
            return false
    }
    return true
}

dataset = [2, 5, 8, 4, 13, 123, 40]

function fizzBuzz(dataset) {
    let dict = {
        'true': 'Fizz',
        'false': 'Buzz'
    }

    let result = ''

    for (d of dataset) {
        result += dict[isPrime(d).toString()]+'-'
    }
    result = result.slice(0, result.length - 1)
    console.log(result)
}
fizzBuzz(dataset)
