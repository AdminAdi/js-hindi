const myArr= [2,5,3,7]
const myHeroes = ["ironman","MR.America"]

// one more way 

const myarr2 = new Array(1,4,2,3)
//console.log(myArr[0])


//Array Methods 
//myArr.push(6)

// myArr.unshift(9)
// console.log(myArr.includes(9))

const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)
 // Slice and splice 
console.log("A",myArr)

const myn1 = myArr.slice(1,3)
console.log(myn1)

console.log("B",myArr)

const myn2 = myArr.splice(1,3)

console.log("c",myArr)
console.log(myn2)