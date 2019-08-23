let msg = 'I HATE YOU'

let dict = {
    'hate': 'love',
    'i': 'you',
    'you': 'me'
}

let msgLower = msg.toLowerCase()
let words = msgLower.split(' ')

console.log(msgLower)
console.log(words)

let newMsg = ''
for (w of words) {
    newMsg += dict[w]+' '
}

console.log(newMsg.toUpperCase())
