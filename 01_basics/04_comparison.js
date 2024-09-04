console.log(null>0)
console.log(null==0)
console.log(null>=0)

console.log(undefined>0)
console.log(undefined==0)


// ===  => strict rule 

console.log("2" === 2)

const id = Symbol('123')
const anotherid = Symbol('123')
console.table([id,anotherid])
console.log(id === anotherid)