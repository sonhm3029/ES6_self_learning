
let postAPI = 'https://jsonplaceholder.typicode.com/posts';

fetch(postAPI)
.then(function(response){
    return response.json();
})
.then(function(data) {
    console.log(data);
})