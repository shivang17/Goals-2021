const A = "A";
let F;

function doStuff(B){

    console.log(B); // It will console whatever is being passed.
    const C = "C";
    let H  = "H";

    if(1 + 1 === 2){
        const D = "D";
        H = "something else";
    }

    // console.log(D);
    console.log(H); // something else, because it is declared using let and defined inisde of this function.
    F = "F";
}

let E = 0;
while(E < 3){
    E++;
    console.log(A); // A is global, so it will work
    const G = "G"
}

console.log(E); // E is global, should work.
console.log(G); // functional scope, will not work

doStuff("B"); // Will execute the function with B as value
console.log(B); // Will not work, no variable declared named B
console.log(C); // Declared only inside the scope, will not work.
console.log(F); // Global scope, will give final value if it is changed anywhere.