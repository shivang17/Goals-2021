// const double = require('./exportImport');
// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name,prop){

    for(var i = 0; i< contacts.length; i++){
        if(name === contacts[i]["firstName"]){
            if(contacts[i].hasOwnProperty(prop)){
                return contacts[i][prop];
            }else{
                return "No such property";
            }
        }


    
    }

    return "No such contact";


} 

console.log(lookUpProfile("Sherlock", "likes"));


/*
The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return "No such contact".

If prop does not correspond to any valid properties of a contact found to match name then return "No such property".

*/

const myConcat = arr1 => arr1.concat(1);

console.log(myConcat([1,2,3]));

// Higher order arrow functions (map, reduce, filter);

var arr1 = [-5,6,89,40,0,34];

let squaredArray = arr1.filter(num => Number.isInteger(num) && num > 0).map(x => x*x);

console.log(squaredArray)

// Rest operator with function parameters.


// Allows to create function which takes variable number of data


// Let's consider the example first without spread operator

const sum = (function(){
    return function sum(x,y,z){
        const args = [x,y,z];
        return args.reduce((a,b) => a+b,0);

    };
})();

console.log(sum(1,2,3));


// Let's try to understand rest operator(which will allow variable number of parameters)

const sumRest = (function(){
    return function sumRest(...args){
        return args.reduce((a,b)=> a+b, 0);    
    }
})();

console.log(sumRest(1,2,3,4,5));


// Use spread operator to evaluate arrays in place.

// Spread operator looks exactly same as rest operator
// It expands an already exisiting array. It takes an array and spreads out into its individual parts.

// You can only use spread operator as an argument to a function or in an array literal


// Let us first write a simple code without using spread operator

const arr_1 = ['JAN','FEB','MAR', 'APR', 'MAY'];
let arr2;

(function (){
    arr2 = arr_1;
    arr_1[0] = 'potato'
})();

console.log(arr2); // This will update the arr2[0] as potato because we have assigned the reference of arr1 to arr2.

// Spread operator

const arr_1_spread = ['JAN','FEB','MARCH','APRIL'];
let arr_2_spread;

(function(){
    arr_2_spread = [...arr_1_spread];
    arr_1_spread[0] = 'This will only be reflected in arr1';
})();

console.log("Unchanged", arr_2_spread);
console.log("Changed",arr_1_spread);

 
// Use destructuring assignment to assign variables from objects

var voxel = {

    x: 36,
    y: 7.4,
    z: 6.54

};

var x = voxel.x;
var y = voxel.y;
var z = voxel.z; 

const {x: a, y: b, z: c} = voxel;


const AVG_TEMP = {
    today: 77.5,
    tomorrow: 79
};


const HIGH_TEMPERATURS = {
    yesterday: 45,
    today: 50,
    tomorrow: 55 
};

const{today, tomorrow} = AVG_TEMP;

const{today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURS;

console.log("AVG:",today, tomorrow);
console.log("HIGH", highToday,highTomorrow);


// Create Strings using Template Literals

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    for(var i = 0; i< arr.length; i++){
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);
  console.log(failuresList);


//   Writing concise Object Literal declaration using object property shorthand

const getMousePosition = (x,y) => ({
    x: x,
    y:y
});

// You can use object property shorthand on above code as follows:

const getMousePosition_shortHand = (x,y) => ({
    x,y
});

// Write concise declarative function with ES6.

// Earlier, we needed to use the keyword function when defining inside an object.
// For example,

/* 
    const person = {
        name: "Shivang",
        sayHello: function (){
            return `Hello my name is {this.name}`
        }
    }

*/

// ES6 makes it a  little more concise and it can be used like this:

const person = {

    name : "Shivang",
    sayHello(){
        return `Hello my name is ${this.name}`
    }
}

console.log(person.sayHello());


// Use class syntax to Define Constructor function

/* 
    ES6 provides new way to create objects using **class** keyword
    NOTE: class is just a keyword and do not resemble the concept of class used in object oriented programming. 

    ES5 way of implementing constructor

    var SpaceShuttle = function(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }

    var zeus = new SpaceShuttle('Jupiter');

    The class keyword replaces the constructor function creation.
 */

 class SpaceShuttle{
     constructor(targetPlanet){
         this.targetPlanet = targetPlanet;
     }
 }

 const zeus = new SpaceShuttle('Jupiter');
 console.log(zeus.targetPlanet);
 /* 
 
 1) UpperCamelCase should be used by convention for ES6 class names.
 2) The constructor method is a special method for creating and initializing an object created with a class. You will learn more about it in the Object Oriented Programming section of the JavaScript Algorithms And Data Structures Certification.



 */

 class Vegetable{
     constructor(name){
         this.name = name;
     }
 }

 const carrot = new Vegetable('carrot');
 console.log(carrot.name);



// Use getters and setters to Control Access to Object

/* 
 Getter function are meant to simply return the value of an object's private variable to the user without the user directly accessing private variable.


 Setter functions are meant to modify the value of object's private variable based on the value passed in a setter function.
 This change could involve calculations, or even overwritting the previous value completely.
*/

class Book{
    constructor(author){
        this._author = author;
    }

    //Getter
    get writer(){
        return this._author;
    }

    //setter
    set writer(updateAuthor){
        this._author = updateAuthor;

    }
}

const novel = new Book('anonymous');
console.log("Inaccessible?",novel.author); // This will be undefined because author is a private variable(shown using _)
// NOTE: It is just a practice to use _ to denote private variable but the practice itself do not make the variable private.
console.log(novel.writer);
novel.writer = 'Shivang';
console.log(novel.writer);


class Thermostat{
    constructor(Fahrenheit){
        this._Fahrenheit = Fahrenheit;
    }

    get temperature(){
        return (5/9) * (this._Fahrenheit - 32);
    }

    set temperature(celsius){
        this._Fahrenheit = 32 + (9 * celsius)/5;
    }
}

const thermos = new Thermostat(76);
let temp = thermos.temperature;
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature;
console.log("Again?",temp);


// Importing and exporting files/function across various javascript files in the codebase.

/* 
    In order to use the functionality of import and export, create a script tag in HTML with type module and src as the file in which you want to import the modules.


*/

// Using export to share a code block (Exported in the file called exportImport.js)
// console.log("Double module working",double(3));

// Use * to import everything.

/* 

    import * as myMathFunction from './mathFunction.js'
    This will create myMathFunction as an object. In order to access the function, we need to call the respective key name from the object.


*/

// Export and import default module

/* 
    export default function sum(x,y){
        return x+y;
    }

    In order to import a default module, there will not be any curly brackets around the name of module.

    import sum from './fileName.js'

*/

// Promise section

/* 
    Promise in JavaScript is exactly like a promise to do something usually asynchronously. When the task is complete, you either fulfill your promise or fail to do so. 

    Promise is a constructor function. So, we need new keyword to create. It takes function as its arguments with two parameters:
    resolve and reject. These are methods used to determine outcome of the promise. 

    Syntax is as follows:

*/

const myPromise = new Promise((resolve, reject) =>{

});

/* 
    Complete a Promise with resolve and reject.
    
    1) A promise has three states. Pending, Fulfilled, and rejected.
    2) The promise created above is forever stuck in the pending state. 
    3) The resolve and reject parameters given to the promise argument will be used to complete the promise.
    4) resolve is used when you want your promise to succeed and reject is used when you want it to fail.

*/

const myPromise_1 = new Promise((resolve, reject) =>{
    if(""){
        resolve("Promise fulfilled");
    }else{
        reject("Promise rejected")
    }
});

// Handle a fulfilled promise with then

// The then method is called immediately after the promise is fulfilled.

const makeServerRequest = new Promise((resolve,reject)=>{
    let responseFromServer = true;

    if(responseFromServer){
        resolve("We got the data");
    }else{
        reject("Data not received");
    }
})

makeServerRequest.then(result =>{
    console.log(result);
});




const rejectServerRequest = new Promise((resolve,reject)=>{
    let responseFromServer = false;

    if(responseFromServer){
        resolve("We got the data");
    }else{
        reject("The promise was rejected");
    }
})
rejectServerRequest.catch(error =>{
    console.log(error)
})


