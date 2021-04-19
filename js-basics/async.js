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



/* function getPosts(){

    setTimeout(()=>{
        let output = '';
        posts.forEach((post)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000)

}
function createPost(post){
    setTimeout(()=>{
        posts.push(post);
    },2000)
}


//Let's consider another function
getPosts();
createPost(
    {
        title: 'post three',
        body: 'Third post should be added now'
    }
);

 *//*  Here, the getPost() ran in 1 second and createPost took 2 seconds.So, the DOM was already loaded from getPost() call and the body from createPost could not be appended. Here comes the concept of Async and callbacks */

/* 
    We want the function to be executed after the new post is being created and pushed in the array.So, we will pass another parameter to createPost() to act as a callback function and call it inside the createPost(). That parameter would be getPost in this case.
*/



function getPostsWithCallback(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post)=>{
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;
    },1000);
}


function createPostWithCallback(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000);
}


createPostWithCallback({'title': 'post three', body:'Added using callback'}, getPostsWithCallback);