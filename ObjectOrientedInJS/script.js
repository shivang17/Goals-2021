// We will talk about idea of Object-oriented programming in a language which has no built in support of the same.

// The idea of OOP in a traditional setting is to surrond the application around class which is a blueprint to create different instances(copies)(So, we instantiate a class). 


// JS only has two things that could be used to replicate the behavior of OOP.: 1) Functions and 2) Objects

// We will be using functions, objects, and two special keywords "this" and "new".

// When you run a function in JS, there are two special keywords created for that function: arguments and this.

function first() {
    console.log(typeof arguments);
    return arguments;

}

console.log(first(1,2,4));
// returns array like objects : {'0': 1, '1': 2,'2': 4}

// If we try to access arguments outside the function, it will throw reference error: Not defined.

// NOTE: There is a difference between undefined and not defined. undefined is a value in JS.

//For example.
var name;
// the value of name is undefined;
console.log(name);

//If you try to access variable which is NOT defined, it will give you an error.

// Difference between array-like-objects and array is that: array-like objects will not have ability to use of the array methods like map, reduce, filter etc.

//Value of keyword this is determined when the function runs.


//Rules to determine the value of keyword this.

//1) Global Rule: 

// When the keyword this is not inside an object and it is not modified using call, apply, or bind, and the new keyword is not being used, the value of keyword this is Global object.

// Reason why they say everything is an object in JS can be cleared from below example:

function first() {
    this.name = 'Shivang';
}


console.log(global.name);

// function first is not returning anything but upon calling, it puts name key on this object. Here, the value of "this" is determined by the global rule. So, //global.name returns Shivang.

// This way we make a lot of global variables(in case of browser) which is not a good idea as it becomes difficult to debug.

// ES5 version of writing better JS. To help us fail loudly rather than showing silent side effects.

// strict-mode will ensure that we accidently do not override or accidently create global variables. 

"use strict"; // -> Works only in browsers
// It will restrict the value of keyword this to not be the global object like window in case of browsers

// this === undefined when use strict is used.


function second() {
    return this;
}

console.log(second());

// Rule 2: Implicit(It's just the way it is)/Object Binding rule


// If the keyword this is created inside of an object, it will refer to the closest parent object. 

var obj = {
    firstName: "Shivang",
    whoami : function() {
        return this;
    }
}

console.log(obj.whoami());

var obj2 = {
    firstName: "Shivang",
    moreInfo: {
        homeState: "BVN",
        displayInfo : function() {
             return this.firstName + this.homeState;
        }
    } 
}

console.log(obj2.moreInfo.displayInfo());
// undefiendBVN because this refers to the closest parent object

// Rule 3: Explicit rule. You can use call, apply, and bind 

/* var instructor = {
    firstName : "Shivang",
    sayHi: function(){
        return this;
    }
} */
// Method is function attached to an object.

/* var instructor2 = {
    firstName: "Shreyes",
    sayHi : function() {
        return this;
    }
} */

// We are making the function repetitive, we can give control of function to the generic object by using call apply and bind.


function sayHi() {
    return this.firstName;
}

var instructor = {
    firstName: "Shivang"
};

var instructor2 = {
    firstName: "Shreyesh"
};

console.log(sayHi.call(instructor));
console.log(sayHi.call(instructor2));