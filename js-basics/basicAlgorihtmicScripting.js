// 1) Reverse a String:

function reverseString(str){
    let splitStr = str.split("");
    // console.log(splitStr);
    let reversedStr = splitStr.reverse();
    let result = reversedStr.join("");


    return result;
}

console.log(reverseString("hello"));

// 2) Factorialize a number

function factorialize(num){
    if(num == 0){
        return 1;
    }

    return num * Factorialize(n-1)
}

// 3) Find the longest word in a string

function findLongestWordLength(str){
    let defaultLength = 1;
    let splitStr = str.split(" ");
    for(var i = 0; i< splitStr.length; i++){

    var result = Math.max(defaultLength,splitStr[i].length);
    defaultLength = result;
    }

    return result;


}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));


// 4) Return Largest Numbers in Arrays


function largestOfFour(arr){
    let initialMax = 0;
    let finalArr = [];
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length;j++){

            var result = Math.max(initialMax, arr[i][j]);
            initialMax = result;
        }
    finalArr.push(result);   
    initialMax = -Infinity;
    }
return finalArr;

}

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));

//5) Confirm the Ending

/* 
    Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

*/
// Logic 1: Applying slice on the string starting with the difference of lenght of str and length of the target. If that is equal to the target, we confirm it is true.

function confirmEnding(str, target){

    return str.slice(str.length - target.length) === target;

}

/* 
    Logic 2: When a negative number is provided as the first parameter of slice(), the offset is taken backwards from the end of the string.

    function confirmEnding(str, target){
        return str.slice(-target.length) === target;
    }
*/



// 6) Repeat a string: Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.


function repeatStringNum(str){
    let finalStr = "";
    for(let i=0; i< num;i++){
        finalStr += str;
    }

    return finalStr;
}

//7) Truncate a String: Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.


function truncateString(str, num){
    if(num>= str.length){
        return str;
    }else{
        return str.slice(0,num) + "...";
    }
}


//8) Finders Keepers: Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.


function findElement(arr,func){
    let num = 0;
    for(var i = 0; i< arr.length; i++){
        num = arr[i];

        if(func(num)){
            return num;
        }
 
    }
    return undefined;
}


//9) Boo Who: Check if a value is classified as a boolean primitive. Return true or false.

function booWho(bool){
    if(typeof bool == "boolean"){
        return true;
    }else{
        return false;
    }
}


//10) Title Case a Sentence: Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
String.prototype.replaceAt = function(index, character) {
    return (
      this.substr(0, index) + character + this.substr(index + character.length)
    );
  };
  


function titleCase(str){
    let newTitle = str.split(" ");
    let updatedTitle = [];

    for(var st in newTitle){
        updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0,newTitle[st].charAt(0).toUpperCase())
        }

return updatedTitle.join(" ");
}

console.log(titleCase("I'm a little tea pot"));

//11) Slice and Splice: You are given two arrays and an index. Copy each element of the first array into the second array, in order. Begin inserting elements at index n of the second array. Return the resulting array. The input arrays should remain the same after the function runs

function frankenSplice(arr1, arr2, n){
    let localArr = arr2.slice();

    for(var i = 0; i<arr1.length;i++){
        localArr.splice(n,0,arr1[i]);
        n++;
    }

return localArr;
}


// 12) Falsy Bouncer: Remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {

    for(var i = 0 ; i< arr.length;i++){
      if(Boolean(arr[i]) == false){
        arr.splice(i,1);
        console.log(arr);
      }
    }
    return arr;
  }

// 13) Where do I belong: Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.


function getIndexToIns(arr,num){

    arr.sort(function(a,b){
        return a-b;
    })

    for(var i = 0; i< arr.length;i++){
        if(arr[a] >= num) return a;
    }

    return arr.length;
}


//14) Mutations: Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

function mutation(arr){
    let test = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();

    for(var i = 0; i<test.length;i++){
        if(target.indexOf(test[i]) < 0) return false;
    }

return true;
}



//15) Chunky Monkey: Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.


function chunkArrayInGroups(arr,size){
    let arr2 = [];
    for(var i = 0; i< arr.length; i+=size){
        arr2.push(arr.slice(i,i+size));
    }
    return arr2;
}