//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }]
}

let find_fav_foods = (person) => {
    for (let i = 0; i < Object.keys(person).length; i++) {
        let key = Object.keys(person)[i];
        let val = Object.values(person)[i];
        // checks if value is array and if first value of that value is 
        // an object (assumes other values will be objects)
        if (Array.isArray(val) && typeof val[0] === 'object' && val[0] !== null && !Array.isArray(val[0])) {
            console.log(`This person's favorite ${key} are:`)
            for (let j = 0; j < Object.keys(val[0]).length; j++) {
                console.log(`\t${Object.keys(val[0])[j]}: ${Object.values(val[0])[j]}`)
            }
        } else {
            console.log(`This person's favorite ${key} is ${val}`)
        }
    }
}

find_fav_foods(person3)

//=======Exercise #2=========//
/*
Write an object prototype or class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype/Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printInfo = () => {
        console.log(`${this.name} is ${this.age} years old.`)
    }

    addAge = () => {
        return this.age += 1
    }
}

let jesse = new Person('Jesse', 28)
let nicole = new Person('Nicole', 28)

jesse.printInfo()
nicole.printInfo()

jesse.addAge()
jesse.addAge()
jesse.addAge()

jesse.printInfo()


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"

*/

const isBigOrSmall = (aString) => {
    return new Promise((resolve, reject) => {
        aString.length > 10 ? resolve(true) : reject(false)
    })
}

isBigOrSmall('hello')
    .then((result) => {
        console.log("Big word")
    })
    .catch((error) => {
        console.log("Small word")
    })


// Codewars 1
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/solutions/javascript
function findOutlier(integers) {
    let evens = [];
    let odds = [];
    for (let i = 0; i < integers.length; i++) {
        integers[i] % 2 == 0 ? evens.push(integers[i]) : odds.push(integers[i])
    }
    return evens.length == 1 ? evens[0] : odds[0]
}

// Codewars 2
// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
function positiveSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i]
      }
    }
    return sum
  }