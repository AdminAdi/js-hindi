const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const nuk = 123.653
console.log(nuk.toPrecision(4))

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN'))

//++++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++

console.log(Math.random())
console.log((Math.random()*10)+1)

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min +1))+min)