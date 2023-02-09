const token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDUyYzQ0M2ZiYTI5OWYzMWJiMDQ1NSIsImlhdCI6MTY3NTkzNzg3OSwiZXhwIjoxNjc2MTEwNjc5fQ.UNO7uAVAJoN7jsgB_iUQQtTv1lzEFoAeWjeQtAbbObQ;
localStorage.setItem('token', token);
// Creating a post

const submitPosts = document.getElementById("blogSubmitData");
const postMessages = document.getElementById("postMessage");

postMessages.style.display = "none"

submitPosts.addEventListener("click", (event) =>{
    event.preventDefault();
    postMessages.style.display = "block"
    createPost();
});

async function createPost(){
    const blogImage = document.getElementById("blogImage");
    const blogTitle = document.getElementById("blogTitle");
    const blogDescription = document.getElementById("blogDescription");

    if (!blogImage.files[0]) {
        postMessages.style.color = "red"
        postMessages.innerHTML = "Please add a post image!"
        return;
      }
    
    const reader =  new FileReader();
     reader.readAsDataURL(blogImage.files[0])
     reader.addEventListener("load",()=>{
    const finalblogImage = reader.result

    const data = {
        image: finalblogImage,
        title: blogTitle.value, 
        description: blogDescription.value, 
    }
        

    const sendData = {  
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({"auth_token": JSON.parse(localStorage.getItem("token")), 'Content-Type': 'application/json; charset=UTF-8'})
    }

fetch("http://localhost:3000/api/createBlog", sendData)
.then(response => response.json())
.then((fetchedData)=>{
    console.log(fetchedData)

    if (fetchedData.successMessage){
        postMessages.style.color = "green"
        postMessages.innerHTML = fetchedData.successMessage
        setTimeout(()=>{location="create.blog.html"},2000)
    }

    else if (fetchedData.validationError){
        postMessages.style.color = "red"
        postMessages.innerHTML = fetchedData.validationError
    }

    else{
        postMessages.style.color = "red"
        postMessages.innerHTML = "Something went wrong, we were unable to create this post!"
    }
})

    })
}