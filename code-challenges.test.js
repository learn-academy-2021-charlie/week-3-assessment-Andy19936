// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// psuedo 1)

// import my testing framework from previous challenges
// look into what a fibonacci is 
// create my function
// going to involve iteration so use a for loop
// make an answer array variable with an empty array
// figure out my for loop and push outcome into answer array 
// return my answer array

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]



// b) Create the function that makes the test pass.



describe("The fibo function.",()=>{
    test("takes a number and returns an array of that length containing the numbers of fibonacci",() => {
        expect(fibo(6)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibo(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})

const fibo = (num) =>{ 
    let answerArr = [1,1]
    let a, b;
    for(let i=2;i < num; i++) {
        a = answerArr[i-1];
        b = answerArr[i-2];
        answerArr.push(a + b);
    }
    return answerArr
}

console.log(fibo(8))
// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// pseudo 2)
// create a funct onlyOdds
// use the filter method to not only check for odd numbers but also data types
// spend the next hour reviewing how to use the filter method on google *it got pretty ugly..*
// use sort method to sort them from least to greatest
// use console logs throughout the process to make sure things are moving along and in the right direction
// nice we have a working function an hour later....
// run my test they work.. cool...

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.


describe("The onlyOdds function.",()=>{
    test("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
        expect(onlyOdds(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(onlyOdds(fullArr2)).toEqual([-823, 7, 23])
    })
})

const onlyOdds = (array) =>{
    let sortedArr = array.filter(function (item) {
    if (typeof item === `number` && item%2)
    return item
    });
    return sortedArr.sort((a, b) => a-b)
}
console.log(onlyOdds(fullArr1))
// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.


// psuedo 3)
// create my function sumAll
// probably going to use the map method 
// look up syntax to make map log sums of each index?
// found the syntax my prompt needed can you please elaborate a bit on it still not 100% on whats going on map and filter can get pretty complex pretty quickly..

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []



// b) Create the function that makes the test pass.

describe("The sumAll function.",()=>{
    test("takes in an array and returns a new array with the sum of all numbers in old array", () => {
        expect(sumAll(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(sumAll(numbersToAdd2)).toEqual([0, 7, -1, 11]            )
        expect(sumAll(numbersToAdd3)).toEqual([])

    })
})

const sumAll = (arr) =>{
    let sumdArr = arr.map((sum => value => sum += value)(0))
    return sumdArr
}
console.log(sumAll(numbersToAdd1))