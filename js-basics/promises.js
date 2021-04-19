//let's have a simple array consisting of two objects.



let posts = [

    {
        title: 'post one',
        body: 'This is first post'
    },

    {
        title: 'post two',
        body: 'This is second post'
    }
];



function getPosts(){

    setTimeout(()=>{
        let output = '';
        posts.forEach((post)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000)

}
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error: Something went wrong');
            }
        },2000)
    });
    
}

createPost(
    {
        title: 'post three',
        body: 'Third post should be added now'
    }
).then(getPosts).catch(err => console.log(err));


//Instead of .then, we can use promise.all


const promise1 = Promise.resolve('hello world');

const promise2 = 10;

const promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'Goodbye');
});

const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
//for a fetch function, you should do .then in order to get the resolve the json response;

Promise.all([promise1,promise2,promise3,promise4]).then((values) => console.log(values)); // It will take the longest promises' timer to display