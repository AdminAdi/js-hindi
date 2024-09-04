//+++++++++++++++++++++++++++++Memory++++++++++++++++++++++++++++++
let myoutubename = "Adideva"
let anothername = myoutubename

anothername = "letsgo"

console.log(anothername)
console.log(myoutubename)


// this is stack memeory

let userOne = {                       // object creation
    email : "Adi.singh",
    upi : "userby"
}

let usertwo = userOne

usertwo.email="Adventure"

console.log(userOne.email)
console.log(usertwo.email)