// Object oriented programming is one of the several major approaches to software development process.


/* 
    As it name implies, object oriented programming organizes code into object definitions, These are also referred to as classes. They group together data with the related behavior. The data is an object's attributes and behavior(or functions) are the methods.


    The object structure makes it flexible within a program. 
    Objects can transfer information by calling and passing data to another object's methods. Also, new classes can receive, or inherit, all the features from a base or parent class. This helps to reduce repeated code. 





*/

let dog = {
    name : "Spot",
    numLegs: 4,
    sayLegs: function(){
        return "This dog has " + dog.numLegs + " legs";
    }
};

console.log(dog.sayLegs());

// Usage of this: 

/* 
    In the above scenario, we used dog.numLegs to access in the function but there is a pitfall here. If the reference to the object is changed, it will create an error.

    The solution is to use the keyword "this". It will not affect the change in object name.

*/

let dogWithThis = {
    name: "Spot",
    numLegs: 4,
    sayLegs : function(){
        return "This dog has " + this.numLegs + " legs";
    }
}


// Constructor are functions that create new objects. Think of them as the blueprint for creation of new objects

// Example:

function Bird(name){
    this.name = name;
    this.color = "blue"
    // this.numLegs = 4;
}

/* 
    Constructor follow few conventions:
    1) They begin with a capital letter to distinguish from a normal function
    2) Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
    3) Constructors define properties and behaviors instead of returning a value as other functions might.

*/

// Using a constructor to create an object

let blueBird = new Bird();
blueBird.name; // It will console Albert

// Just like any other object, it's properties can be accessed and modified

blueBird.name = "Elvira";
console.log(blueBird.name);

// Extend constructors to receive arguments

function BirdWithParameters(name, color){
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}

let cardinal = new Bird("Bruce","red");


// Verify an Object's Constructor with instanceof: Anytime constructor creates a new object, it is said to be the instanceof that particular constructor.

// instanceof method would allow to compare an object to a constructor and return true or false.

// Example:

function BirdToCheckInstanceOf(name,color){
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}

let crow = new BirdToCheckInstanceOf ("Alexis", "Black");

console.log(crow instanceof BirdToCheckInstanceOf); // returns true


// Understand Own Properties:

function BirdUnderstandOwnProperties(name){
    this.name = name;
    // this.numLegs = 2;
}

// let duck = new BirdUnderstandOwnProperties("Donald");
let canary = new BirdUnderstandOwnProperties("Tweety");

// name and numLegs are called own properties because they are defined directly on the instance object. Duck and Canary each has its own separate copy of these properties.

// In fact, every instance of the above constructor will have its copy of these properties.


let ownProps = [];

// for(let property in duck){
//     if(duck.hasOwnProperty(property)){
//         ownProps.push(property);
//     }
// }

console.log(ownProps);
// Use prototype properties to reduce duplicate code: In the examples above, we esentially have a duplicated variable numLegs inside each Bird instance. 
// This may not be issue when there are only two instances but imagine there are millions of instances. That would be lot of duplicate variables.

// A BETTER WAY TO AVOID THE ABOVE PROBLEM is: Create a Constructor's Prototype.
// Properties in prototype is shared among ALL instances of the constructor function. 

Bird.prototype.numLegs = 2;
console.log(blueBird.numLegs);

// Since all instances automatically have the properties on prototype, it can be seen as "recipe" for creating new objects

// Nearly every object in JavaScript has a prototype property which is part of the constructor function that created it.

// Iterate over all properties: We saw two kinds of properties: Own properties and Prototype properties.

// Own properties are defined on the object instance itself. Prototype properties are defined on prototype.


function BirdWithPrototype(name){
    this.name = name;
}

BirdWithPrototype.prototype.numLegs = 2;

let prototypeBird = new BirdWithPrototype("Chu@");

let ownPropsBird = [];
let prototypeProps = [];

for(let property in prototypeBird){
    if(prototypeBird.hasOwnProperty(property)){
        ownPropsBird.push(property);
    }else{
        prototypeProps.push(property);
    }
}

console.log(ownPropsBird);
console.log(prototypeProps);

// Understand the constructor property: There is a special constructor property located on the object instances. constructor property is a reference to the constructor function that created the instance. 

let constructorProperty = new Bird();

console.log(constructorProperty.constructor === Bird); // returns true

// Remember to set the constructor property when changing prototype. There is one crucial side effect of manually settinf the prototype to a new object. It erases the constructor property!

// This property can be used to check which constructor function created the instance, but since the property has been overwritten, it now gives false results:

// For example: 
console.log(prototypeBird.constructor === BirdUnderstandOwnProperties);
console.log("Object also returns false",prototypeBird.constructor === Object); // Debug why is it false.

// console.log(duck instanceof BirdUnderstandOwnProperties);


// To fix this, whenever a prototype is manually set to a new object, remember to define the constructor property.

function Dog(name){
    this.name = name;

}

Dog.prototype = {
    constructor : Dog,
    eat: function(){
        console.log("nom nom nom");
    },

    describe: function(){
        console.log("My name is " + this.name);
    }

}


let copper = new Dog("Copper");

// Understand where an Object's Prototype comes from

// Just like children inherit from their parents, object inherit its prototype directly from the constructor function that created it.

// For example: copper inherits it's prototype from the constructor 

console.log(Dog.prototype.isPrototypeOf(copper));

// Understand the Prototype chain

Object.prototype.isPrototypeOf(copper);

//Use inhertiance so you do not repeat yourself. In the examples above, you may see that the describe method is shared by both Bird and Dog.


Bird.prototype = {
    constructor: Bird,
    describe: function(){
        console.log("My name is " + this.name)
    }

}

Dog.property = {
    constructor: Dog,
    describe : function(){
        console.log("My name is " + this.name);
    }
}


// The describe method is repeated in two places here. The code can be modified to follow DRY(Do not repeat yourself principle) by creating a supertype (or parent) called Animal

function Animal(){

};

Animal.prototype = {
    constructor: Animal,
    describe: function(){
        console.log("My name is " + this.name);
    }
}


Animal.prototype.eat = function(){
    console.log("nom nom nom");
}

// Since Animal has describe method, we can remove it from Bird and Dog.

Bird.prototype = {
    constructor: Bird
}

Dog.prototype = {
    constructor : Dog
}

// Inherit Behaviors from a Supertype.

// The first step in inheritance is to make the instance of the supertype. But there is a problem with defining new object as follows:
// let animal = new Animal(); -> The reason of the problem is too complex so let's just assume at the moment that the better is as below:

// let animal = Object.create(Animal.prototype);

/* Object.create(obj) creates a new object, and sets obj as the new object's prototype. Recall that the prototype is like the "recipe" for creating an object. By setting the prototype of animal to be Animal's prototype, you are effectively giving the animal instance the same "recipe" as any other instance of Animal.
 */


// Second steo => Set the prototype of subtype

Bird.prototype = Object.create(Animal.prototype);
console.log("Bird Prototype",Bird.prototype);

let duck  = new Bird("Donald");
duck.eat();

// Reset an inherited constructor property
// NOTE: When an object inherits its prototype from another object, it also inherits supertype's constructor property.

// Here's an example:

/* 
    function Bird(){

    }


    Bird.prototype = Object.create(Animal.prototype);
    let duck = new Bird();
    duck.constructor // It will return function Animal(){...}

    But, duck and all instances of Bird should show that they were constructed by Bird and not Animal. Here, set the constructor property of Bird to Bird Object.

    So, 

    Bird.prototype.constructor = Bird;

    Now, duck.constructor would return // function Bird(){...};
    */


    /* 
        Add methods after Inheritance:
        A constructor function which inherits its prototype object from a supertype constructor function can still have its own methods in addition to inherited methods.

        For example, Bird is a constructor that inherits its prototype from Animal


        function Animal() {...}
        Animal.prototype.eat = function(){
            console.log("nom nom nom");
        }

        function Bird(){...}

        Bird.prototype = Object.create(Animal.prototype);
        Bird.prototype.constructor = Bird;

        Let's say if we want to add the methods unique to the Bird apart from the methods inherited

        Bird.prototype.fly = function(){
            console.log("I am flying");
        }

        Now, instances of Bird will have both eat and fly method. Eat inherited from Animal and fly is the one created using Bird prototype

    
    */

    // So, when you create an instance of a constructor(or class) in Javascript and call a method, it first checks the constructor, if it is not found there, it checks in the prototype and if it is not found there as well, it looks for the super class(if inherited ) and if it doesn't find there as well, it goes to check for the prototype of the super class. This only happens when you use the class keyword.

    // Override Inherited methods: You can redefine the method inhertied from Parentobject

    /* 
        function Animal {...}
        Animal.prototype.eat = function(){
            return "nom nom nom";
        }
    

        function Bird(){...}
        
        Bird.prototype = Object.create(Animal.prototype);

        Bird.prototype.eat = function(){
            return "peck peck peck";
        }
        
        */

// Use a Mixin to Add Common behavior between unrelated objects:

/* 
        As you have seen, behavior is shared through inheritance. However, there are cases when inheritance is not the best solution. Inheritance does not work well for unrelated objects like Bird and Airplane. They can both fly, but a Bird is not a type of Airplane and vice versa.


        For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.



*/

/* let flyMixin = function(obj){
    obj.fly = function(){
        console.log("Flying, woosh!")
    }


}


//The flymixin takes any object and gives it the fly method.

let bird = {
    name: "Donald",
    numLegs : 2
}

let plane = {
    model: "777",
    numPassengers: 524
}
flyMixin(bird);
flyMixin(plane);

bird.fly();
 */
// Use closure to protect properties within an Object from being modified externally.

// bird has a public property name. It is considered public because it can be accessed and changed outside of bird's definition like,
// bird.name = "Changed it to whatever I wanted!"



/* 
    The simplest way to make this public property private is by creating a variable within the constructor function. This changes the scope of that variable to be within the constructor function versus available globally. This way, the variable can only be accessed and changed by methods also within the constructor function.
*/

function PrivateVsPublic(){
    let hatchedEgg = 10; // private variable
    /* Publicly available method that a bird object can use */
    this.getHatchedEgg = function(){
        return hatchedEgg;
    }

}

let ducky = new PrivateVsPublic();
ducky.getHatchedEgg(); // returns 10



/* 
    Here getHatchedEggCount is a privileged method, because it has access to the private variable hatchedEgg. This is possible because hatchedEgg is declared in the same context as getHatchedEggCount. In JavaScript, a function always has access to the context in which it was created. This is called closure.
*/

// Understand the Immediately Invoked Function Expression(IIFE).

// A common pattern in JavaScript is to execute a function as soon as it is declared.


(
    function(){
        console.log("Chirp Chirp");
    }
)();


// Use an IIFE to create a Module:  An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or module. For example, an earlier challenge defined two mixins:

function glideMixin(obj){
    obj.glide = function(){
        console.log("Gliding on the water");
    }
}

function flyMixin(obj){
    obj.fly = function(){
        console.log("Flying, Woosh woosh!")
    }
}


// We can group these mixins into a module as follows:

let motionModule = (function(){
    return {
        glideMixin: function(obj){
            obj.glide = function(){
                console.log("Gliding on the water");
            };
        },

        flyMixin: function(obj){
            obj.fly = function(){
                console.log("Flying, woosh");
            };
        }
    }
})();


/* Note that you have an immediately invoked function expression (IIFE) that returns an object motionModule. This returned object contains all of the mixin behaviors as properties of the object. The advantage of the module pattern is that all of the motion behaviors can be packaged into a single object that can then be used by other parts of your code. Here is an example using it:

 */
motionModule.glideMixin(duck);
motionModule.flyMixin(duck);

duck.glide();
duck.fly();
