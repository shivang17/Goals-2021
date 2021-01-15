/* 
    We already know about array and it's common methods like push, unshift(both returns the length of the array after the element has been added), pop, and shift(both returns the value of the element removed from the array).

    In case of pop and shift, they remove elements from end and beginning of the array respectively. What if we want to remove an element from somewhere in the middle?
    For this, we use splice. 

    Remove any number of consecutive elements from anywhere in an array.

    It can take upto 3 parameters. Let's focus on first 2 as of now. 

    1st parameter: Index on the array from which to begin removing elements
    2nd parameter: number of elements to delete.
*/

// Example of splice(1st and 2nd parameter example):


let array = ['today','was','not','so','great'];

let newArray = array.splice(2,2);
console.log("Removed the elements",array);
console.log("Created new array",newArray);
// splice() not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements.

// 3rd parameter can be used to add an element to the array after the removal has taken place. 


// Copy array items using Slice

// 1) Rather than modifying, slice() copies or extracts a given number of elements to a new array leaving the original array untouched.

//2) It takes 2 parameters - 1st, index at which to begin and second being the index at which to stop extraction.

let weatherCondition = ['rain','snow','sleet','hail','clear'];

let todaysWeather = weatherCondition.slice(1,3);
console.log("What's the weather today?",todaysWeather);

// Spread operator: Allows to copy all elements of array in order

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
console.log("Copied with spread operator",thatArray);

// Combine array with spread operator:  insert all the elements of one array into another, at any index unlike traditional ways where we can only append it at the end or at the beginning.

let thisSpreadArray = ['sage', 'rosemary','parsley','thyme'];
let thatSpreadArray = ['basil','cilantro',...thisSpreadArray,'coriander'];

console.log(thatSpreadArray);

// Iterate through All on Array's Items using For Loops

// In JavaScript, there are several built in methods that each iterate over arrays in slightly different ways to achieve different results (such as every(), forEach(), map()). Most flexible still remains the for loop.

// Understand a complex array.

let nestedArray = [

    ['deep'],
    [['deeper_1'], ['deeper_2'] ],
    [[['deepest_1'], ['deepest_2'] ]],
    [[['deepest_a']]]
];


// Try accessing deepest_1;
console.log("Let's go deep",nestedArray[0]);



let myNestedArray = [
    // Only change code below this line
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array'],
    ['mutate', 1327.98, 'splice', 'slice', 'push'],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth'],
    [
        ['deep', ['deeper'] ],
        [["",['deepest']]]
    ]
    
    // Only change code above this line
  ];

  console.log(myNestedArray[5][1][0][1][0])


function countOnline(usersObj){

    let online = 0;
    for(let user in usersObj){
        if(usersObj[user].online){
            // The dot property would fail in the above case as user is the name of the variable which works only with bracket notation
            online+=1
        }    
    }

    return online;
}

console.log(countOnline({ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false }}));



