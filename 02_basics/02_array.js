const marve_hre = ["thor","ironman","marvel"]
const dc_heros = ["superman","flash","batman"]

//marve_hre.push(dc_heros)

//console.log(marve_hre)
//console.log(marve_hre[3][2])

const allHeros = marve_hre.concat(dc_heros)
//console.log(allHeros)

//spread operator 

const all_new_heros = [...marve_hre,...dc_heros]
console.log(allHeros)

const another_array = [1,3,4,5,[2,3,4],56,66]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)


console.log(Array.from("Aditya"))

console.log(Array.from({name:"Aditya"})) // interesting case 