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