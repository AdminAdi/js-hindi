// Define the jsuser object
const mySym = Symbol("key1");

const jsuser = {
    name: "Aditya",
    age: 18,
    [mySym]: "mykey1",
    location: "Jaipur",
    email: "Ismeadi",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"],
};

// Add the greeting method to the object
jsuser.greeting = function() {
    console.log("hello users");
};

// Add the greetingte method to the object
jsuser.greetingte = function() {
    console.log(`hello users ${this.name}`);
};

// Test the methods
console.log(jsuser.greeting()); // Output: hello users
console.log(jsuser.greetingte()); // Output: hello users Aditya
