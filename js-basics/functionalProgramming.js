/* 
    Functional programming is an approach to software development based around the evaluation of functions. Like maths, functions in programming map input to output to produce a result. You can combine basic functions in many ways to build more and more complex programs.


    Functional Programming principles: 

    1) Functions are independent from the state of the program or global variables. They only depend on the arguments passed into them to make a calculation. 

    2) Functions try to limit any changes to the state of the program and avoid changes to the global object handling data.

    3) Functions have minimal side effects in the program

    // This chapter covers functional programming aspect of JavaScript.
*/

// INPUT -> PROCESS -> OUTPUT.

// Three types of functions:

/* 

    1) Isolated functions: there is no dependence on the state of the program, which includes global variables that are subject to change

    2) Pure functions: The same input always gives the same output

    3) Functions with limited side effects: Any changes, or mutations, to the state of the program outside the function are carefully controlled.



*/


const prepareGreenTea = () => 'greenTea';

const prepareBlackTea = () => 'blackTea';

const teaCups = [];
const getTea = (prepareTea, numOfCups) =>{
    for(var cups = 1; cups <= numOfCups ; cups++){
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
}





/* 
    Some functional terminology:

    Callbacks: They are functions that are slipped or passed into another function to decide the invocation of that function.

    // For example, in filter the callback is passed to tell JavaScript the criteria for how to filter an array.




// The functions that take a function as an argument, or return a function as a return value are called higher order functions.

// When the functions are passed in to another function or returned from another function, then those functions which gets passed in or returned can be called a lambda.


    

*/

const tea4GreenTeamFCC = getTea(prepareGreenTea,27); // Here, you are passing the function prepareGreenTea as a function. 
const tea4BlackTeamFCC = getTea(prepareBlackTea,13);

// Understand the hazards of using imperative code.

/* 
        JavaScript offers many predefined methods that handle common tasks so you don't need to write out how the computer should perform them. For example, instead of using the for loop mentioned above, you could call the map method which handles the details of iterating over an array. This helps to avoid semantic errors, like the "Off By One Errors" that were covered in the Debugging section.




*/