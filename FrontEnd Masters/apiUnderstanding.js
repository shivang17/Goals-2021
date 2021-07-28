/* const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const promise = fetch(DOG_URL);

promise.then(function(response){
    const processingPromise = response.json();
    return processingPromise;
}).then(function(processedResponse){
    console.log(processedResponse);
})

console.log("This will console first");
 */


// If you want to create an image using the response received, here's how to write using DOM manipulation.


/*     const DOG_URL = "https://dog.ceo/api/breeds/image/random";
    const promise = fetch(DOG_URL);
    const doggos = document.querySelector(".doggos");

    promise.then(function(response){
        const processingPromise = response.json();
        return processingPromise;
    }).then(function(processedResponse){
        const img = document.createElement("img");
        img.src = processedResponse.message;
        img.alt = "cute dog";
        doggos.appendChild(img);
    })

 */

// You can convert the above API fetch and display of the data at the client side using a function so that we can show it multiple times.



    
    const DOG_URL = "https://dog.ceo/api/breeds/image/random";
    const doggo = document.querySelector(".doggos");


    function addNewDoggo(){
        const promise = fetch(DOG_URL);

        promise.then(function(response){
            const processingPromise = response.json();
            return processingPromise;
        }).then(function(processedResponse){
            const img = document.createElement("img");
            img.src = processedResponse.message;
            img.alt = "Cute dog";
            doggo.appendChild(img);
        })
    }

    document.querySelector(".add-doggo").addEventListener('click',function(){
        addNewDoggo();
    })


