// Stack is a Last In First Out type of data structure.

// If you consider a stack of books, you push the book at the top of the stack and the first to get removed would be the top one.

// functions: push, pop, peek(display), length

//All these functions are part of array object. So, we can use array as a stack, but we can use stack class as well.

// let's use array stack to see if there is a palindrome.


/* var stack = [];

var word = "racecar";

var rword = "";

// Push the data to stack from the original string
for(var i = 0; i< word.length; i++){
   stack.push(word[i]); 
}

//Pop the data and add it to the new empty string(This will ensure that the letters added to new string are in reverse order of the original string)


 for(var i = 0; i< word.length; i++){
     rword += stack.pop();
     }

if(word === rword){
    console.log(word + " is a palindrome");
}else{
    console.log("It is not a palindrome");
} */


// Create a stack class


/* var Stack = function(){
    this.count = 0;
    this.storage = {};


this.push = function(value){
    this.storage[this.value] = value;
    this.count++;
}

//removing the last element, that is storage[count];
this.pop = function(){
    if(this.count === 0){
        return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
}

//Size function -> 

this.size = function(){
    return this.count;
}

this.peek = function(){
    return this.storage[this.count - 1];
}

}
let myStack = new Stack();


myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
*/


var Stack = function(){
    this.count = 0;
    this.storage = {};


   this.push = function(value){
       this.storage[this.count] = value;
       this.count ++;
   }

   this.pop = function(){
       if(this.count === 0){
           return undefined;
       }

       this.count --;
       var result = this.storage[this.count];
       delete this.storage[this.count];
       return result;
   }

   this.size = function(){
       return this.count;
   }

   this.peek = function(){
       return this.storage[this.count-1];
   }

}



let myStack = new Stack();


myStack.push(1);
myStack.push(2);

console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());