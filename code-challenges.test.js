// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
describe("itIs42", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    expect(itIs42(people)).toEqual(['Ford Prefect is a hitchhiker', 'Zaphod Beeblebrox is president of the galaxy', 'Arthur Dent is a radio employee']);
  });
});

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

// Pseudo
// input: an array of objects
// output: array with a sentence
// - First, lets .map() over the array of objets to interact with the values and their keys. set it in a varible (arr) that we well later use as a return.
// - while inside .map() lets play with this values.
  // - First lets access the values in name key with value.name and then separate each value with .split(" ") **this syntax in .split() will split each value by the group of strings in the array.** Set it in a varible for ease access (nameKey)
  // - then lets capitalize each value in the name key (nameKey), user .map() to iteraterate over these split values and have the first index be uppercase by calling on the first charecters index with .chartAt() and then .toUpperCase(). **charAt() will only return the value given** to make it stick lets bring back the characters we are not upper casing with .substring() we give it the index of the next character as a parameter and with .join(" ") **this syntax in .join() will join each value by group of strings into a single array.** Set in a varible for ease access (cap)
  // - return the string interpolation of your key name values alreay capitalized (cap) the word "is" and the values of your ocupation key (values.occupation).  **use backticks for string interpolations** 
// - Last, lets return back the iterated array of objest (arr)

const itIs42 = (array) =>{
  let arr =  array.map((values) => {
    let nameKey = values.name.split(" ")
    let cap = nameKey.map((vals) => vals.charAt(0).toUpperCase() + vals.substring(1)).join(" ")
    return `${cap} is ${values.occupation}`
 })
 return arr  
 
} 

// console.log(itIs42(people));
// ---> ['Ford Prefect is a hitchhiker', 'Zaphod Beeblebrox is president of the galaxy', 'Arthur Dent is a radio employee']


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("mix2floor3", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    expect(mix2div3(hodgepodge1)).toEqual([ 2, 0, -1, 0 ]);
    expect(mix2div3(hodgepodge2)).toEqual([ 2, 1, -1 ]);

  });
});

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.

// pseudo
// input: mixed data array
// output: remainders of the numbers divided by 3
// - create a functions (mix2floor3) that takes and array of mix data 
// - first .filter() the array to get only the typof 'number' from the array and have it go in to a varible (onlyNums)
// - them map over the filter array of only numbers (onlyNums) to have all number by floor (%) by 3 and have it go into a varible (floor3)
// - lastly have the function return the varible with the numbers being floor by 3 (floor3)



const mix2floor3 = ( array ) =>{
  let onlyNums = array.filter(
    value => typeof value === 'number'
    )
  let floor3 = onlyNums.map(
    val => val % 3
    )
  return floor3
}

  
// console.log(mix2div3(hodgepodge1));
// ---> [ 2, 0, -1, 0 ]
// console.log(mix2div3(hodgepodge2));
// ---> [ 2, 1, -1 ]



// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("cubedThenSum", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    expect(cubedThenSum(cubeAndSum1)).toEqual(99);
    expect(cubedThenSum(cubeAndSum2)).toEqual(1125);

  });
});

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.

// Pseudo
// input: numbers array
// Output: the sum of the numbers in the array after being cubed.
// - First, lets .map() the array of numbers and have each number be cubed, lets store it in a varible (cubed).
// - then, lets sum all the numbers in the array we cubed (cubed) with .reduce() wich would take the paramters of an accumulator(acc) and the curren number(curr) and have those two add with eachother, and lets store it in a varible (sum). **note: what this does is add the first number to the next hold that value as an accumulator and add the next number in the array until there is no more numbers in the array** 
// - last, return the sum of your array (sum)


const cubedThenSum = (array) =>{
  let cubed = array.map(
    value => value ** 3
    )
  let sum = cubed.reduce(
    (acc, curr) => acc + curr
    ) 
  return sum
}

// console.log(cubedThenSum(cubeAndSum1));
// ---> 99
// console.log(cubedThenSum(cubeAndSum1));
// ---> 1125
