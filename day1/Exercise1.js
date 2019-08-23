// INPUT
// 'product_name': 'CoCaCola'
// 'pay': 500

// // OUTPUT
// {
//     'buy': 'CoCaCola',
//     'paid': 500,
//     'price': 50,
//     'change': 450,
// }

let productName = 'CoCaCola'
let pay = 500

let products = {
    'CoCaCola': {
        'price': 50,
        'volume': 1.5
    },
    'Water': {
        'price': 100,
        'volume': 1.0 
    },
    'Tea': {
        'price': 20,
        'volume': 0.5
    }
}

productName = 'Water'
let result = {
    'buy': productName,
    'paid': pay,
    'price': products[productName]['price'],
    'change': pay - products[productName]['price']
}

console.log(result)

console.log(result['buy'])
console.log(result.buy)