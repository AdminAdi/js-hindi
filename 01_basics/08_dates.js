//dates

let mydate = new Date()
console.log(mydate)

console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleDateString())
console.log(typeof mydate)

let mydatee = new Date(2030,2,5)
console.log(mydatee.toDateString())

let datee = Date.now()
console.log(datee)

console.log(Math.floor(Date.now()/1000))
