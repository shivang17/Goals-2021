// It is a data structure like array except: 1) It cannot have repeating values. 

// 2) No particular order.

//Use is to check the presence of an item.
// ES6 has a built in set object. However, it does not contain all methods. So, let's implement some new


function mySet(){
    var collection = [];

    this.has = function(element){
        return (collection.indexOf(element)!== -1);
    }

    this.values = function(){
        return collection;
    }

    this.add = function(element){
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        
        return false;
    }

    this.remove = function(element){
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    }

    this.size = function(){
        return collection.length;
    }

//All the above method is in the ES6 Set oject, Let's implement some methods/functions of our own.

this.union = function(otherSet){
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();

    firstSet.forEach(function(e){
        unionSet.add(e);
    })

    

}



}
