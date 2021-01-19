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

function Bird(){
    this.name = "Albert";
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

let duck = new BirdUnderstandOwnProperties("Donald");
let canary = new BirdUnderstandOwnProperties("Tweety");

// name and numLegs are called own properties because they are defined directly on the instance object. Duck and Canary each has its own separate copy of these properties.

// In fact, every instance of the above constructor will have its copy of these properties.


let ownProps = [];

for(let property in duck){
    if(duck.hasOwnProperty(property)){
        ownProps.push(property);
    }
}

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






