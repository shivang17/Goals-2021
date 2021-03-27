const prepareTea = () => 'greenTea';

const getTea = (numberOfCups) =>{
    const teaCups = [];
    for(let cups = 1; cups <= numberOfCups; cups++){
        let teaCup = prepareTea();
        teaCups.push(teaCup);
    }

    return teaCups;
}

const tea4TeamFCC = getTea(40);
// console.log(tea4TeamFCC);



// Understanding Functional Programming terminology

/* 
    In the above example, we only had green tea. Now, let's say if some team members also like black tea. 

    Here, we need to define two functions unlike one prepareTea function. Let's define two function namely prepareGreenTea and prepareBlackTea for green and black tea respectively.

*/

const prepareGreenTea = () => 'greenTea';

const prepareBlackTea = () => 'blackTea';

const getNewTea = (prepareTea,numberOfCups) =>{
    const teaCups = [];
    for(let cups = 1; cups <= numberOfCups; cups++){
        const teaCup = prepareTea();
        teaCups.push(teaCup);
 
   }

   return teaCups;
}

const tea4GreenTeamFCC = getNewTea(prepareGreenTea,27);
const tea4BlackTeamFCC = getNewTea(prepareBlackTea,13);

console.log(tea4GreenTeamFCC,tea4BlackTeamFCC);

let heights = [1,1,4,2,1,3];

let heightsWithoutSlice = heights.sort( (a,b) => a-b);

let heightsWithSlice = heights.slice(0).sort( (a,b) => a-b);

let countWithSlice = 0;

let countWithoutSlice = 0;
for(let i = 0 ; i < heights.length;  i++){
    if(heights[i] !== heightsWithSlice[i]){
        countWithSlice ++;
    }

    console.log("with slice ",countWithSlice);
}

for(let j = 0 ; j < heights.length ; j++){
    if(heights[j] !== heightsWithoutSlice[j]){
        countWithoutSlice ++;
    }

    console.log("without slice", countWithoutSlice);
}


let nums = 8;
let sorted = [];
let bits = nums.toString(2).replace(/[0]/g,'').length;

console.log(sorted[bits]);
sorted[bits] = [nums];
console.log(sorted[bits]);