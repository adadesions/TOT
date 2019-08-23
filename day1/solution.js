let msg = '1-A-A-A'
let arrMsg = msg.split()

let a = arrMsg.filter((ch) => {
	if (ch == '1' || ch == '-')
		return ch
})
console.log(a)
