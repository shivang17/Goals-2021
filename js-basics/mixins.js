// This comes from the resembelence of an ice-cream shop called mixins of different flavors. So, JS replicates this concept of borrowing properties from different objects and create a mixin object. Let's understand how to create mixins.

//Let's create two mixins to begin with. We want to create JS engineer. Here, we will need JS skills and Engineering degree.

const jsSkills = {
    knowJs(){
        return true;
    }
}

const engineeringDegree = {
    hasDegree(){
        return true;
    }
}

const backendSkill = {
    knowBackend() {
        return true;
    }
}

const jsEngineer = Object.assign({},jsSkills, engineeringDegree);

console.log(jsEngineer);

// Two ways to create an Object.

// 1) Constructor

let Car = function(color){
    this.color = color;
}

let redCar = new Car('red');
console.log(redCar);

// 2) Without using keyword and do Object.assign inside the function.

let Animal = function(type) {
    return Object.assign({},{type});
}

let dog = Animal('dog');
console.log(dog);

// Factory function.

let Person = function(gender){
    let employed = false;
   return Object.assign({},{gender:gender, 
    isEmployed(){
        employed = true;
    },

    checkEmployed(){
        return employed;
    }

})
}

// Mixin : Creating superman

const humanFactory = function(obj) {
    let isCrying = false;

    return Object.assign({},obj, {
        cry(){
            isCrying = true;
            return this;

        },
        isCrying() {
            return isCrying;
        }
    })
}

const flyFactory = function(obj) {
    let isFlying = false;
    return Object.assign({},obj, {
        fly() {
            isFlying = true;
            return this;
        },
        isFlying() {
            return isFlying;
        }
    })
}

const superMan = humanFactory(flyFactory({}));