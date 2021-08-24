
let postSide = document.querySelector(".post");

function start() {
    getCourse(handleResponse);
    createPost(handleNewPost);
}

start();

/* render course for the first time load page   */
function getCourse(handleResponse) {
    let courseAPI = 'http://localhost:3000/posts';
    fetch(courseAPI)
    .then(function(response){
        return response.json();
    })
    .then(handleResponse);
}

function handleResponse(response) {
    let listPostData =
     response.map(function(post){
        return `<li class = "post-item-${post.id}">
                    <h3>${post.title}</h3>
                    <p>${post.description}</p>
                    <button onclick="deletePost(${post.id})">Xóa</button>
                    <button onclick="displayModifyPost(${post.id})">Sửa</button>
                </li>`
                +
                `
                <div class="form form-modify" id="post-modify-${post.id}" style="display:none;">
                    <div class="form-group">
                        <label for="">Title:</label>
                        <input type="text" name="post_title" placeholder="type in title">
                    </div>
                    <div class="form-group">
                        <label for="">Description:</label>
                        <input type="text" name="post_description" placeholder="type in Description">
                    </div>
                    <button class="update-btn">Update</button>
                </div>
                `
    });

    let htmlPost = listPostData.join('');
    postSide.innerHTML = htmlPost;
}
/*          end rendercourse            */

/*                      post new                    */
function createPost(handleNewPost) {
    let createBtn = document.querySelector(".create-post-btn")

    createBtn.onclick = function() {
        let inputTitle = document.querySelector("input[name='post_title']");
        let inputDescription = document.querySelector("input[name='post_description']");

        if( inputTitle.value != null && inputTitle.value !='' && inputDescription.value != null && inputDescription.value != '') {
            if(confirm("Bạn muốn tạo post?")) {
                handleNewPost({
                    title: inputTitle.value,
                    description: inputDescription.value
                });
                inputTitle.value = null;
                inputDescription.value = null;
            }
        }
        else {
            alert("Vui lòng điền đầy 2 field!");
        }
        
    }
    
}


function handleNewPost(data) {
    let courseAPI = 'http://localhost:3000/posts';
    fetch(courseAPI, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
}

/*          delete               */

function deletePost(id) {
    let delelteCourseAPI  = `http://localhost:3000/posts/${id}`;
    fetch(delelteCourseAPI, {
        method: 'DELETE'
    })
}

/*          modify              */

function displayModifyPost(id) {
    
    let modifyForm = document.querySelector(`#post-modify-${id}`);
    let modifyTitle = modifyForm.querySelector('input[name="post_title"]');
    let modifyDescription = modifyForm.querySelector('input[name="post_description"]');
    let updateBtn = document.querySelector(`#post-modify-${id} .update-btn`);
    modifyForm.classList.toggle("appear");

    modifyTitle.value = document.querySelector(`.post-item-${id} > h3`).textContent;
    modifyDescription.value = document.querySelector(`.post-item-${id} > p`).textContent; 

    updateBtn.onclick = function() {
        var data = {
            title: modifyTitle.value,
            description: modifyDescription.value
        }
        if(confirm("Bạn có muốn sửa ?")) {
            updatePost(id, data);
        }
    }
}

function updatePost(id, data) {
    let updatePostAPI = `http://localhost:3000/posts/${id}`;

    fetch(updatePostAPI, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    })
}


/*           start                    */
