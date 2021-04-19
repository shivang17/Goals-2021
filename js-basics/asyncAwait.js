// Async await is the way to handle responses. It is not the way to write anything


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

async function init(){
    await createPost({
        title: 'post three',
        body: 'This is third post'
    })

    getPosts();
}

init();


//Async await with fetch

async function fetchUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data =  await response.json();

    console.log(data);
}

fetchUsers()