let bubbleSort = function(inputArr){
    let len = inputArr.length;
    for(let i = 0; i<inputArr.length; i++){
        if(inputArr[i] > inputArr[i+1]){
            let temp = inputArr[i];
            inputArr[i] = inputArr[i+1];
            inputArr[i+1] = temp;

        }
    }
    return inputArr;

};

console.log(bubbleSort([5,3,1,4,6]));

// In the above case, the inputArr would only give what is bubble sorted in one entire iteration. In order to sort it completely, we would need another nested for loop.


let bubbleSortUnderstanding = function(inputArr){
    let len = inputArr.length;

    for(let i = 0; i< inputArr.length; i++){
        for(let j = 0 ; j < inputArr.length; j++){
            if(inputArr[j] > inputArr[j+1]){
                let temp = inputArr[j];
                inputArr[j] = inputArr[j+1];
                inputArr[j+1] = temp;
            }
        }
    }

    return inputArr;
}

console.log(bubbleSortUnderstanding([5,3,1,4,6]));

