/* 
    Introduction: Regular expression are special strings that represent a search pattern. Also known as regex, it helps programmer match, search, or replace text.

    Regular expression can be cryptic because a few characters have special meaning. The goal is to combine the symbols and text into a pattern that matches what you want

*/


// 1) Test Method

let testStr = "freeCodeCamp";
let testRegex = /Code/;

testRegex.test(testStr);
// The above search(or test in the technical term is literal match.). The next challenge will be about checking the variants. For example, in this case, if you put testRegex as code instead of Code, the test method will return false. 


// 2) Matching literal strings with different possibilities.

// You can search for multiple patterns using alternation (OR) operator: |
// Example:

let petString = "James has pet cat";
let petRegex = /dog|cat|bird|fish/;

let result = petRegex.test(petString);
console.log(result);


// 3) Ignore case while matching.

// You can match both cases by using flag(there are many other flags but in this case, we will be using case flag) denoted by i which ignores case. We can do that by appending it to the regex.
// Example: 
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let freeCodeCampRegex = fccRegex.test(myString);
console.log(freeCodeCampRegex);


// 4) Extract Matches
// Till now, we checked if the particular pattern exists or not in a string. You can also extract the actual matches you found using .match() method.

// To use match method, apply the method on the string and pass the regex as an argument.
// If you notice, match is opposite of test method. Here we apply the method on the string rather as opposed to test method which is applied on regex and string is passed as an argument. 

let extractStr = "Extract the word 'coding' from the string";
let codingRegex = /coding/i;

let codingResult = extractStr.match(codingRegex);
console.log("Match dekhte hai!",codingResult) // Returns an array with the value containing the matched string.

//5) Find more than the first match.

// So far, we have only able to extract or search a pattern once.
/* 
    Example: 
    let testStr = "Repeat, Repeat, Repeat";
    let ourRegex = /Repeat/;
    let result = testStr.match(ourRegex); // returns ["Repeat"];

*/
// In order to allow extraction or searching more than once, we will use the (g) flag.

let repeatStr = "Repeat, Repeat, Repeat";
let repeatRegex = /Repeat/g;

let repeatResult = repeatStr.match(repeatRegex);
console.log(repeatResult);
// You can use multiple flag by appending. In above case you can use :
//let repeatRegex = /repeat/gi;

// 6) Match anything with Wildcard Period

// The wildcard character . will match any character

 
    let humStr = "I'll hum a song";
    let hugStr = "Bear Hug";
    let huRegex = /hu./;

    huRegex.test(humStr);
    huRegex.test(hugStr);
// Returns true in both cases.

// 7) Match single character with multiple possibilities.

// We saw /literal/ and . These are two extremes of regular expression. 

// We can search for literal pattern with some flexibility with /character/ classses

// Character classes allow you to define a group of characters you wish to match by placing them inside square [] brackets


/* 
    For example: you want to match "bag", "big", "bug" but not "bog".  We can create a regex /b[aiu]g. [aiu] is the character class that will only match "a" or "i" or "u".
*/

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";

let bgRegex = /b[aiu]g/;

console.log("Checking character class",bigStr.match(bgRegex));
bugStr.match(bgRegex);
bagStr.match(bgRegex);


let quoteSample = "Beware of bugs in the above code; I have only proved it correct, tried it.";
let vowelRegex = /[aeiou]/ig;
let vowelResult = quoteSample.match(vowelRegex);
console.log(vowelResult);


// 8) Match letter of the alphabet

// For a character set, we tried to search for a group of characters but that becomes a lot of typing when you need to match a large number of characters(for example, every letter in the alphabet). We can use a built in feature to define range of characters.

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";

let matchLetterOfTheAlphabet = /[a-e]at/

catStr.match(matchLetterOfTheAlphabet);
batStr.match(matchLetterOfTheAlphabet);
matStr.match(matchLetterOfTheAlphabet);

// 9) Match letters and numbers of the Alphabet. We can combine any combination to match the regex pattern.

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/gi;

console.log(jennyStr.match(myRegex));

// 10) Match Single Characters Not specificed.
// So far we created a set of characters you want to match but you can also create a set that you DO NOT want to match. They are termed as negated characters.

// In order to create a negation set, you denote it using ^ after the opening bracket.

let negationStr = "3 Blind mice.";
let negationRegex = /[^aeiou1-9]/ig;
console.log(negationStr.match(negationRegex));


// 11) Match Characters that Occur more than one or more times.


// Sometimes, you want to find a character that appears more than once in a row. Meaning, it is atleast once in the string and may be repeated. You can use the + character to check if the character is repeating(should be continious).

/* 
    for example, if we use /a+/g would find one match in "abc" and would return ["a"]. In case of "aabc", it would return ["aa"] and in case of "abab", it would return ["a","a"]; 
*/

// 12) Match Operator that Occur Zero or more time.

// Example:

let soccerWord = "goooooal";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;

console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex));

let chewieQuote = "Aaaaaaargh";
let chewieRegex = /Aa*/;
console.log("Chewie result",chewieQuote.match(chewieRegex));


// 13) Find characters with Lazy Matching. 

// In regular expression, a greedy match finds the longest possible match. The alternative is lazy match.

// Example: You can apply /t[a-z]*i to "titanic" and it will return titani because regular expression are by default greedy and returns longest possible match.In order to find the shortest match, use the ? character.


// 14) Match all letters and numbers:

// There is a shortcut \w which is equivalent to [A-Za-z0-9_].


let longHand = /[A-Za-z0-9_]+/;
let shortHand = /w+/;
let numbers = "42";
let varNames = "important_var";

longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);

console.log("Try it out", varNames.match(shortHand));

// 15) 
