//singleton

//const tinderuser = new Object() // singleton object 
const tinderuser ={} //non singleton object

tinderuser.id = "123as"
tinderuser.name = "Aditya"
tinderuser.isloggedIn = false

//console.log(tinderuser);

const regularuser = {
    email:"adi.singh",
    fullname:{
        userfullname:{
            firstname:"Aditya",
            lastname:"singh"

        }
    }

}
//console.log(regularuser.fullname);
const obj1 = {1:"A",2:"B"}
const obj2 = {3:"A",4:"B"}

//merging these two 

//const obj3 = Object.assign({},obj1,obj2)

//mostly used spread operation

const obj3 ={...obj1,...obj2}

//console.log(obj3);

// when we get value from the database 

const user = [
    {
        id:1,
        email:"Advemt"
    },
    {
        id:1,
        email:"Advemt"
    },
    {
        id:1,
        email:"Advemt"
    },
    {
        id:1,
        email:"Advemt"
    },
]
//console.log(user[1].email);

//console.log(tinderuser);
//console.log(Object.keys(tinderuser));

//console.log(Object.entries(tinderuser));

//console.log(tinderuser.hasOwnProperty('isloggedIn'));


const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"


}

const{courseInstructor:instructor}=course
console.log(instructor);
