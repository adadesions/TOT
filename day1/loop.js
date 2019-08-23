// For-Loop
for(let i = 0; i < 10; i++) {
    console.log(i)
}

// While
a = 5
while(a < 10) {
    console.log(`a = ${a}`)
    a += 1
}

// Do-While
do {
    console.log('Do While do!')
} while (a < 5)

// For-OF
let data = ['X', 'Y', 'Z']
for (i of data) {
    console.log(i)
}

// For - IN
for (i in data) {
    console.log(`${i}: ${data[i]}`)
}

let drinks = {
    'a': 1,
    'b': 2,
    'c': 3
}

for ( d in drinks ) {
    console.log(d)
}