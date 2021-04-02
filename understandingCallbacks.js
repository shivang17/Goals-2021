//We will use setTimeOut in order to understand basic callback logic.

let logCall = function(){
    console.log("logCall was called");
}

setTimeout(logCall,3000);

//Here, logCall passed is a callback and it would run(Called) after a certain condition which is 3000ms or 3 seconds here.


let x = function(){
    console.log("I am called from inside the function");
}

let y = function(callback){
    console.log("Do something");
    callback();
}

y(x);

// Here, we are not passing x as a function call but just as a function body.

/* 

    Output: 
    
    Do something
    I am called from inside the function.
*/

/* 
    Interesting thing to notice here: 

    When I run this file via node, 

    the calling of y(x) doesn't wait for setTimeOut to finish the execution


*/

/* 
    Need of callback:


*/

let calc = function(num1, num2, calcType){
    //Withuot callback

    if(calcType === "add"){
        return num1 + num2;
    }else if(calcType === "multiply"){
        return num1 * num2;
    }
}

//Let's think that the function calc is part of some library and if user has to pass the number and calculation type. For all the possible operation, the library has to implement everything inside the function.

//So, it is better to make the function as abstract as possible. For this, we can bring the calcType definition outside the function block like add, subtract etc.

let add = function (a,b){
    return a+b;
}

let multiply = function(a,b){
    return a*b;
}

let calcWithCallback = function(num1, num2, callback){
    // We need to make sure that the callback passed is a function.So,
    if(typeof callback === "function"){
        return callback(num1, num2);
    
    }
    

}

let doWhatever = function(a,b){
    console.log(`The two numbers are ${b} and ${a}`);

}

console.log(calcWithCallback(2,3,function(a,b){console.log(`Numbers are ${a} & ${b}`)}));



//Practical example of callback function.

//We have an array of objects.

var myArray = [

    {
        num : 5,
        str : 'apple'
    },

    {
        num: 7,
        str: 'cabbage'
    },

    {
        num: 1,
        str: 'ban'
    }
];

// If you wanna sort it by string, i.e apple first,banana second, and cabbage third.

//JS provides a sort method, which uses the concept of callback function. We can determine how we want to sort it. Here, sort is a function called on Array and it expects a function as a parameter which does all the sorting for us.

let sort = function(callback){
    return callback;
}

let callback = function(){
    //sort kar k dega
}


